'use client';
import { useEffect, useRef } from 'react';

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform float u_time;
uniform vec2  u_res;
uniform vec2  u_mouse;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p);
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),
             mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y);
}

void main() {
  vec2 uv    = gl_FragCoord.xy / u_res;
  float asp  = u_res.x / u_res.y;
  vec2 p     = vec2(uv.x * asp, uv.y);

  /* orb drifts toward mouse */
  vec2 mouse = vec2(u_mouse.x * asp, u_mouse.y);
  vec2 base  = vec2(asp * 0.68, 0.46);
  vec2 centre= mix(base, mouse, 0.45);

  float t = u_time * 0.28;

  /* layered noise warp */
  float n  = noise(p * 2.2 + vec2( t*0.6,  t*0.4));
  float n2 = noise(p * 4.5 - vec2( t*0.5,  t*0.8));
  float n3 = noise(p * 8.0 + vec2( t*1.0, -t*0.5));
  float plasma = n*0.50 + n2*0.32 + n3*0.18;

  /* warp sample point */
  vec2 warped = p + (plasma - 0.5) * 0.22;
  float dist  = length(warped - centre);

  /* soft orb + outer glow */
  float orb  = smoothstep(0.42, 0.02, dist);
  float glow = smoothstep(0.78, 0.18, dist) * 0.4;
  float mask = clamp(orb + glow, 0.0, 1.0);

  /* colour palette — electric blue / cyan / deep violet */
  vec3 colA = vec3(0.12, 0.38, 0.98);
  vec3 colB = vec3(0.05, 0.72, 0.92);
  vec3 colC = vec3(0.48, 0.18, 0.92);
  vec3 col  = mix(colA, colB, plasma);
  col       = mix(col,  colC, n2 * 0.42);

  gl_FragColor = vec4(col, mask * 0.52);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src); gl.compileShader(s);
  return s;
}

export default function PlasmaOrb({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* size canvas to parent, not itself */
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;

    const setSize = () => {
      const w = parent.offsetWidth;
      const h = parent.offsetHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = w + 'px';
      canvas.style.height = h + 'px';
    };
    setSize();

    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, alpha: true });
    if (!gl) return;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER,   VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime  = gl.getUniformLocation(prog, 'u_time');
    const uRes   = gl.getUniformLocation(prog, 'u_res');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    /* smooth mouse tracking */
    let mx = 0.68, my = 0.46;   // current (lerped)
    let tx = 0.68, ty = 0.46;   // target

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = 1.0 - (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener('mousemove', onMove);

    const ro = new ResizeObserver(() => {
      setSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
    });
    ro.observe(parent);
    gl.viewport(0, 0, canvas.width, canvas.height);

    const start = performance.now();
    let raf = 0;

    const draw = () => {
      /* lerp mouse */
      mx += (tx - mx) * 0.06;
      my += (ty - my) * 0.06;

      gl.clearColor(0,0,0,0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime,  (performance.now() - start) / 1000);
      gl.uniform2f(uRes,   canvas.width, canvas.height);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className ?? ''}`}
    />
  );
}

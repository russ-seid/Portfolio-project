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

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1,0)), u.x),
      mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
      u.y
    );
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    float aspect = u_res.x / u_res.y;
    vec2 p = vec2(uv.x * aspect, uv.y);

    /* orb centre: right side, vertically centred */
    vec2 centre = vec2(aspect * 0.72, 0.50);
    float t = u_time * 0.22;

    /* layered noise for plasma distortion */
    float n  = noise(p * 2.8 + vec2(t * 0.7, t * 0.4));
    float n2 = noise(p * 5.2 - vec2(t * 0.5, t * 0.9));
    float n3 = noise(p * 9.0 + vec2(t * 1.1, -t * 0.6));
    float plasma = n * 0.50 + n2 * 0.30 + n3 * 0.20;

    /* radial distance with plasma warp */
    vec2 warped = p + (plasma - 0.5) * 0.18;
    float dist = length(warped - centre);

    /* soft orb mask */
    float orb  = smoothstep(0.44, 0.08, dist);
    float glow = smoothstep(0.72, 0.20, dist) * 0.35;
    float mask = orb + glow;

    /* colour: warm-cool plasma shift */
    vec3 colA = vec3(0.78, 0.76, 0.98); /* lavender */
    vec3 colB = vec3(0.98, 0.80, 0.72); /* peach    */
    vec3 colC = vec3(0.70, 0.92, 0.88); /* mint     */
    vec3 col  = mix(colA, colB, plasma);
    col       = mix(col,  colC, n2 * 0.4);

    /* keep it subtle so text stays readable */
    float alpha = mask * 0.55;

    gl_FragColor = vec4(col, alpha);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  return sh;
}

export default function PlasmaOrb({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { premultipliedAlpha: false });
    if (!gl) return;

    /* compile program */
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    /* full-screen quad */
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes  = gl.getUniformLocation(prog, 'u_res');

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    /* resize */
    const resize = () => {
      canvas.width  = canvas.offsetWidth  * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    /* render loop */
    let raf = 0;
    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className ?? ''}`}
    />
  );
}

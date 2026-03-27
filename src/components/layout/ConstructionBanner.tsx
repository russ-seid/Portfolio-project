const MESSAGE = 'Portfolio under construction';

export default function ConstructionBanner() {
  const items = Array.from({ length: 8 }, () => MESSAGE);
  const track = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-yellow-400 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-black select-none sm:text-[11px]">
      <div
        className="flex w-max whitespace-nowrap will-change-transform"
        style={{ animation: 'marquee-scroll 40s linear infinite' }}
      >
        {track.map((text, index) => (
          <span
            key={`${text}-${index}`}
            className="inline-flex shrink-0 whitespace-nowrap px-6 uppercase sm:px-8"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`${className ?? ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16 py-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <div>
          <p className="text-[15px] font-semibold text-[#171717]">Russ Seidametov</p>
          <p className="mt-1 text-[13px] text-neutral-400">Product Designer</p>
        </div>
        <div className="flex flex-col sm:items-end gap-2">
          <a
            href="mailto:rustem4994@gmail.com"
            className="text-[14px] text-neutral-500 hover:text-[#171717] transition-colors focus:outline-2 focus:outline-[#171717] focus:outline-offset-2"
          >
            rustem4994@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/russseid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-neutral-500 hover:text-[#171717] transition-colors focus:outline-2 focus:outline-[#171717] focus:outline-offset-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

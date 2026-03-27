interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer
      className={`border-t border-neutral-200${className ? ` ${className}` : ''}`}
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-16 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="text-[16px] text-[#171717]">Get in touch</span>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:rustem4994@gmail.com"
            className="text-[16px] text-neutral-500 hover:text-[#171717] active:text-[#171717] focus:outline-2 focus:outline-[#171717] focus:outline-offset-2"
          >
            rustem4994@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/russseid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] text-neutral-500 hover:text-[#171717] active:text-[#171717] focus:outline-2 focus:outline-[#171717] focus:outline-offset-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

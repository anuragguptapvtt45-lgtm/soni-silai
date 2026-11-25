export function Footer() {
  return (
    <footer className="bg-[#3B2620] text-[#FAF6F1] border-t border-[#593E36]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <a
            href="#home"
            className="font-display font-semibold text-[20px] tracking-[0.16em] uppercase text-[#FAF6F1]"
          >
            SONI SILAI
          </a>
          <p className="mt-1 font-serif italic text-[13.5px] text-[#D6ABA0]">
            Stitched with Love ♡
          </p>
        </div>

        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-[#DFCFC6]"
        >
          <a href="#about" className="hover:text-[#FAF6F1] transition-colors">
            About Us
          </a>
          <a href="#services" className="hover:text-[#FAF6F1] transition-colors">
            Services
          </a>
          <a href="#gallery" className="hover:text-[#FAF6F1] transition-colors">
            Gallery
          </a>
          <a href="#pricing" className="hover:text-[#FAF6F1] transition-colors">
            Pricing
          </a>
          <a
            href="#appointment"
            className="hover:text-[#FAF6F1] transition-colors"
          >
            Book Appointment
          </a>
        </nav>

        <p className="text-[12px] text-[#C5B2A8]">
          © 2026 SONI SILAI · Demo Editorial Showcase
        </p>
      </div>
    </footer>
  );
}

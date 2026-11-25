import {useEffect, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {Menu, MessageCircle, X} from 'lucide-react';
import {CONTACT_INFO} from '../data/boutiqueData';

const NAV_LINKS = [
  {label: 'Home', href: '#home', id: 'home'},
  {label: 'About', href: '#about', id: 'about'},
  {label: 'Services', href: '#services', id: 'services'},
  {label: 'Gallery', href: '#gallery', id: 'gallery'},
  {label: 'Pricing', href: '#pricing', id: 'pricing'},
  {label: 'Contact', href: '#contact', id: 'contact'},
];

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({onBookClick}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setScrolled(scrollY > 18);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      setScrollProgress(ratio);

      // Determine active section based on scroll position
      const marker = scrollY + 130;
      let current = 'home';
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= marker) {
          current = link.id;
        }
      }
      setActiveSection(current);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, {passive: true});
    window.addEventListener('resize', updateScrollState, {passive: true});
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  const handleMobileBook = () => {
    setMobileOpen(false);
    onBookClick();
  };

  const digitsOnly = CONTACT_INFO.phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${digitsOnly}?text=${encodeURIComponent(
    'Hello SONI SILAI, I would like to inquire about custom stitching and appointments.'
  )}`;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? 'bg-[#F5ECE2]/96 backdrop-blur-md shadow-[0_8px_28px_-12px_rgba(59,38,32,0.22)]'
          : 'bg-[#FAF6F1]/96 backdrop-blur-sm'
      }`}
    >
      {/* Top double-basting stitched accent edge */}
      <div className="w-full h-[2px] bg-[#E8DDD2]/70 relative overflow-hidden" aria-hidden="true">
        <div className="w-full stitch-line opacity-85" />
      </div>

      <div
        className={`max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4 lg:gap-8 transition-all duration-300 ${
          scrolled ? 'h-[64px] md:h-[66px]' : 'h-[72px] md:h-[78px]'
        }`}
      >
        {/* Zone 1: Deep-brown SONI SILAI wordmark with animated needle & thread detail */}
        <a
          href="#home"
          className="group inline-flex items-center gap-2.5 font-display font-bold text-[18px] sm:text-[20px] md:text-[22px] tracking-[0.14em] uppercase text-[#3B2620] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] rounded-sm"
        >
          <span className="relative inline-flex items-center justify-center w-8 h-8 border border-[#DFD1C3] bg-[#FAF6F1] group-hover:border-[#9E6E64] transition-colors duration-300 shrink-0">
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="text-[#4A332C] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-12 group-hover:scale-105"
            >
              <path
                d="M19.5 4.5L5.5 18.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse
                cx="17.8"
                cy="6.2"
                rx="1.15"
                ry="2.3"
                transform="rotate(45 17.8 6.2)"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="#FAF6F1"
              />
              <path
                d="M17.2 6.8C13.5 10.5 15.5 15.5 11.5 17.5C8.5 19 6 17.5 4 19.5"
                stroke="#9E6E64"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeDasharray="2.5 2.5"
              />
            </svg>
          </span>
          <span className="transition-colors duration-200 group-hover:text-[#7D473C]">
            SONI SILAI
          </span>
        </a>

        {/* Zone 2: Dynamic navigation links with gliding stitched active indicator */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 text-[13.5px]"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'location' : undefined}
                className={`relative py-2 px-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] rounded-sm ${
                  isActive
                    ? 'font-semibold text-[#3B2620]'
                    : 'nav-stitch-link font-medium text-[#6B564E] hover:text-[#3B2620]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'active-nav-stitch'}
                    transition={{type: 'spring', stiffness: 380, damping: 32}}
                    aria-hidden="true"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px]"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(90deg, #8E574C 0px, #8E574C 5px, transparent 5px, transparent 8px)',
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Deep chocolate-brown WhatsApp CTA + Book Appointment CTA + Mobile Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Inquire on WhatsApp (${CONTACT_INFO.phone})`}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[12.5px] font-medium px-4 py-2.5 border border-[#4A332C] shadow-[0_2px_10px_-4px_rgba(59,38,32,0.45)] transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#E8C5BA]" strokeWidth={1.85} />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onBookClick}
            className="hidden md:inline-flex items-center justify-center border border-[#BFA896] bg-[#FAF6F1] hover:border-[#4A332C] hover:bg-[#EFE4D7] text-[#3B2620] text-[12.5px] font-medium px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
          >
            Book Appointment
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#3B2620] bg-[#FAF6F1] border border-[#D7C6B6] hover:bg-[#EFE4D7] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Dynamic Two-Layer Bottom Tailoring Seam: Ambient flowing basting thread + scroll-progress running stitch */}
      <div
        className="relative w-full h-[6px] bg-[#EFE6DC]/60 border-b border-[#D7C6B6] overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle full-width flowing thread */}
        <svg
          viewBox="0 0 1440 6"
          preserveAspectRatio="none"
          className="w-full h-full block opacity-65"
        >
          <path
            d="M0 3 Q 90 1 180 3 T 360 3 T 540 3 T 720 3 T 900 3 T 1080 3 T 1260 3 T 1440 3"
            fill="none"
            stroke="#C69C91"
            strokeWidth="1.1"
            strokeDasharray="6 6"
            className="animate-thread-flow"
          />
        </svg>

        {/* High-visibility stitched scroll-progress seam */}
        <div
          className="absolute inset-y-0 left-0 origin-left transition-transform duration-150 ease-out"
          style={{
            width: '100%',
            transform: `scaleX(${scrollProgress})`,
            backgroundImage:
              'repeating-linear-gradient(90deg, #8E574C 0px, #8E574C 7px, transparent 7px, transparent 11px)',
            height: '2px',
            top: '2px',
          }}
        />
      </div>

      {/* Smooth Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={shouldReduceMotion ? {opacity: 1} : {opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={shouldReduceMotion ? {opacity: 0} : {opacity: 0, y: -8}}
            transition={{duration: 0.2, ease: [0.16, 1, 0.3, 1]}}
            className="lg:hidden bg-[#FAF6F1] border-b border-[#D7C6B6] px-6 py-5 shadow-lg"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    aria-current={isActive ? 'location' : undefined}
                    className={`py-2.5 px-1 text-[15px] border-b border-dashed border-[#E2D5C8] last:border-b-0 flex items-center justify-between transition-colors ${
                      isActive
                        ? 'font-semibold text-[#8E574C]'
                        : 'text-[#4A332C] hover:text-[#8E574C]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="text-[11px] text-[#9E6E64]" aria-hidden="true">
                        ◇
                      </span>
                    )}
                  </a>
                );
              })}
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="inline-flex items-center justify-center gap-2 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-sm font-medium py-3 px-5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E8C5BA]" />
                  <span>WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleMobileBook}
                  className="w-full border border-[#4A332C] text-[#4A332C] hover:bg-[#F2EAE1] text-sm font-medium py-3 px-5 transition-colors cursor-pointer"
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import {useEffect, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {ChevronLeft, ChevronRight, Scissors} from 'lucide-react';
import {ABOUT_SLIDES} from '../data/boutiqueData';

export function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  const totalSlides = ABOUT_SLIDES.length;
  const currentSlide = ABOUT_SLIDES[activeIndex];

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isPaused, shouldReduceMotion, totalSlides]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section
      id="about"
      className="relative bg-[#F2EAE1] bg-linen-weave border-y border-[#E2D5C8] py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle needle-and-thread line flourish in bottom-right background margin */}
      <svg
        viewBox="0 0 260 140"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute right-8 bottom-8 w-56 h-28 opacity-30"
      >
        <path
          d="M12 118 C 68 124, 92 72, 146 80 C 190 86, 208 48, 240 20"
          stroke="#9E6E64"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <path
          d="M244 16 L 210 50"
          stroke="#4A332C"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Craftsmanship & Sewing Machine Slideshow */}
          <div
            className="lg:col-span-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <div className="bg-[#FAF6F1] p-2.5 sm:p-3 border border-[#E2D5C8]">
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-[#EAE0D5]">
                {failedImages[currentSlide.id] ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#EFE6DC] text-[#7D665C]">
                    <Scissors className="w-7 h-7 text-[#9E6E64] mb-2" strokeWidth={1.3} />
                    <span className="font-serif italic text-base text-[#4A332C]">
                      {currentSlide.label}
                    </span>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.id}
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({...prev, [currentSlide.id]: true}))
                      }
                      initial={shouldReduceMotion ? {opacity: 1} : {opacity: 0, scale: 1.02}}
                      animate={{opacity: 1, scale: 1}}
                      exit={shouldReduceMotion ? {opacity: 1} : {opacity: 0}}
                      transition={{duration: 0.5, ease: [0.16, 1, 0.3, 1]}}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </AnimatePresence>
                )}

                {/* Prev / Next Controls */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous atelier photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FAF6F1]/90 hover:bg-[#4A332C] text-[#4A332C] hover:text-[#FAF6F1] border border-[#E2D5C8] flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next atelier photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#FAF6F1]/90 hover:bg-[#4A332C] text-[#4A332C] hover:text-[#FAF6F1] border border-[#E2D5C8] flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Slide Counter */}
                <div className="absolute top-3 right-3 bg-[#FAF6F1]/90 border border-[#E2D5C8] px-2.5 py-1 text-[11px] tracking-[0.14em] text-[#4A332C] tabular-nums">
                  0{activeIndex + 1} / 0{totalSlides}
                </div>
              </div>

              {/* Slide Metadata & Interactive Selectors */}
              <div className="pt-3 pb-1 px-1 flex flex-col gap-2 border-t border-dashed border-[#DFD1C3] mt-2.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] tracking-[0.16em] uppercase text-[#8A746B]">
                    {currentSlide.label}
                  </span>
                  <div
                    className="flex items-center gap-1.5"
                    role="tablist"
                    aria-label="Atelier craftsmanship slides"
                  >
                    {ABOUT_SLIDES.map((slide, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          role="tab"
                          aria-selected={isCurrent}
                          aria-label={`Show ${slide.label}`}
                          onClick={() => setActiveIndex(idx)}
                          className={`h-1.5 transition-all duration-300 cursor-pointer ${
                            isCurrent
                              ? 'w-7 bg-[#4A332C]'
                              : 'w-2.5 bg-[#D7C6B6] hover:bg-[#9E6E64]'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-[12.5px] italic text-[#614D45]">
              {currentSlide.caption}
            </p>
          </div>

          {/* Right Philosophy Copy */}
          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
              01 / Our Philosophy
            </p>

            <h2 className="font-display font-semibold text-[34px] md:text-[44px] leading-[1.14] text-[#4A332C] [text-wrap:balance]">
              A little{' '}
              <span className="font-serif italic font-semibold text-[#9E6E64]">
                love
              </span>{' '}
              in every stitch.
            </h2>

            <p className="mt-5 text-[15.5px] leading-[1.75] text-[#614D45] max-w-xl">
              At SONI SILAI, we believe every garment deserves a personal touch.
              From everyday breathable kurtis to intricately hand-finished bridal
              blouses, we bring your fashion ideas to life through graceful
              silhouettes, precise measurements, and artisanal detailing.
            </p>

            <div className="mt-7 bg-[#FAF6F1] border border-[#E2D5C8] outline outline-1 outline-dashed outline-[#DFD1C3] -outline-offset-[6px] px-6 py-5 max-w-xl">
              <p className="font-serif italic text-[18px] md:text-[20px] leading-[1.45] text-[#4A332C]">
                “Designed with love. Stitched just for you.”
              </p>
              <p className="mt-2 text-[12px] tracking-[0.08em] uppercase text-[#9E6E64]">
                Bespoke Women’s Tailoring Boutique
              </p>
            </div>

            <div className="mt-7">
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-[#C9B7A7] hover:border-[#4A332C] hover:bg-[#FAF6F1] text-[#4A332C] text-[13px] font-medium px-6 py-3 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

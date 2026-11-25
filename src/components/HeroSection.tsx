import {useEffect, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import {HERO_SLIDES} from '../data/boutiqueData';

interface HeroSectionProps {
  onBookClick: () => void;
}

export function HeroSection({onBookClick}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [headlineLang, setHeadlineLang] = useState<'en' | 'hi'>('en');
  const shouldReduceMotion = useReducedMotion();

  const totalSlides = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;

    const langTimer = window.setInterval(() => {
      setHeadlineLang((prev) => (prev === 'en' ? 'hi' : 'en'));
    }, 3600);

    return () => window.clearInterval(langTimer);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (isPaused) return;
    if (shouldReduceMotion) {
      return;
    }

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

  const stitchLoopTransition = {
    duration: 5.8,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    repeatDelay: 0.9,
  };

  return (
    <section
      id="home"
      className="relative bg-[#FAF6F1] bg-linen-weave pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-24 overflow-hidden"
    >
      {/* Live Tailoring Motion Graphics Layer: Subtle pattern drafts, non-crossing perimeter thread & atelier needle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        {/* Delicate sewing thread routed strictly along quiet margins & center gutter (never crossing buttons or text) */}
        <svg
          viewBox="0 0 1440 760"
          fill="none"
          preserveAspectRatio="none"
          className="hidden lg:block absolute inset-0 w-full h-full opacity-45"
        >
          {/* Lower perimeter & center-gutter thread sweeping up to upper-right studio corner */}
          <path
            d="M-20 718 C 180 732, 420 716, 620 698 C 705 690, 718 540, 735 380 C 750 230, 715 90, 860 44 C 1020 -4, 1240 42, 1460 32"
            stroke="#C49C8F"
            strokeWidth="1.05"
            strokeDasharray="5 5"
            className="animate-thread-flow"
          />
          {/* Secondary whisper-thin basting echo along lower edge */}
          <path
            d="M640 712 C 860 736, 1140 726, 1460 694"
            stroke="#B89286"
            strokeWidth="0.9"
            strokeOpacity="0.45"
            strokeDasharray="3 6"
            className="animate-thread-flow"
          />
        </svg>

        <div className="relative max-w-[1440px] mx-auto h-full">
          {/* 1. Enhanced Tailored Shirt Pattern Draft (upper center gutter, clear of H1 and lookbook) */}
          <svg
            viewBox="0 0 180 190"
            fill="none"
            className="hidden xl:block absolute left-[47.5%] top-6 w-[144px] h-[156px] opacity-[0.33]"
          >
            <defs>
              <mask id="hero-shirt-placket-mask">
                <motion.path
                  d="M45 41 L54 62 M135 41 L126 62 M90 36 L90 160 M52 54 H128"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={stitchLoopTransition}
                />
              </mask>
              <mask id="hero-shirt-detail-mask">
                <motion.path
                  d="M102 72 H118 V90 Q110 94 102 90 Z M26 69 L44 79 M154 69 L136 79 M54 156 H126"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={{...stitchLoopTransition, delay: 0.45}}
                />
              </mask>
            </defs>

            {/* Pattern seam-allowance halo */}
            <path
              d="M65 20 L39 35 L17 73 L43 88 L50 74 L50 166 L130 166 L130 74 L137 88 L163 73 L141 35 L115 20 Q90 30 65 20 Z"
              stroke="#C69C91"
              strokeWidth="0.7"
              strokeDasharray="2 3"
            />
            {/* Shirt pattern fabric silhouette */}
            <path
              d="M66 24 L42 38 L22 72 L42 84 L52 64 L52 162 L128 162 L128 64 L138 84 L158 72 L138 38 L114 24 Q90 34 66 24 Z"
              fill="#F2EAE1"
              fillOpacity="0.6"
              stroke="#7A5B50"
              strokeWidth="1.15"
              strokeLinejoin="round"
            />
            {/* Collar stand & lapels */}
            <path
              d="M66 24 L78 46 L90 36 L102 46 L114 24 M74 28 Q90 36 106 28"
              stroke="#7A5B50"
              strokeWidth="1.05"
              strokeLinejoin="round"
            />
            {/* Tailoring notch ticks */}
            <path d="M90 19 V24 M49 92 H52 M128 92 H131" stroke="#9E6E64" strokeWidth="0.9" />
            {/* Animated Placket, Yoke & Shoulder Seams being stitched */}
            <path
              d="M45 41 L54 62 M135 41 L126 62 M90 36 L90 160 M52 54 H128"
              stroke="#9E6E64"
              strokeWidth="1.2"
              strokeDasharray="3.5 2.5"
              mask="url(#hero-shirt-placket-mask)"
            />
            {/* Animated Pocket, Cuffs & Hem Stitches */}
            <path
              d="M102 72 H118 V90 Q110 94 102 90 Z M26 69 L44 79 M154 69 L136 79 M54 156 H126"
              stroke="#8E574C"
              strokeWidth="1.1"
              strokeDasharray="2.5 2.5"
              mask="url(#hero-shirt-detail-mask)"
            />
            {/* Subtle button & buttonhole marks */}
            <circle cx="90" cy="56" r="1.6" fill="#9E6E64" />
            <circle cx="90" cy="80" r="1.6" fill="#9E6E64" />
            <circle cx="90" cy="104" r="1.6" fill="#9E6E64" />
            <circle cx="90" cy="128" r="1.6" fill="#9E6E64" />

            {/* Live animated sewing needle dipping along the center placket */}
            {!shouldReduceMotion && (
              <motion.g
                initial={{x: 90, y: 38}}
                animate={{
                  x: [90, 90, 90],
                  y: [38, 152, 152],
                }}
                transition={{
                  duration: 5.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.9,
                }}
              >
                <motion.g
                  animate={{
                    x: [0, -3, 2, -3, 2, 0],
                    rotate: [-32, -18, -36, -18, -32],
                  }}
                  transition={{
                    duration: 1.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <path
                    d="M14 -16 C 24 -22, 26 -6, 18 -2"
                    stroke="#9E6E64"
                    strokeWidth="0.95"
                    strokeDasharray="2 2"
                  />
                  <path
                    d="M0 0 L15 -17"
                    stroke="#3B2620"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="13.5"
                    cy="-15.3"
                    rx="0.9"
                    ry="2"
                    transform="rotate(42 13.5 -15.3)"
                    stroke="#3B2620"
                    strokeWidth="0.95"
                    fill="#FAF6F1"
                  />
                </motion.g>
              </motion.g>
            )}
          </svg>

          {/* 2. Enhanced Designer Blouse Pattern (far outer lower-left margin, clear of CTA buttons) */}
          <svg
            viewBox="0 0 176 150"
            fill="none"
            className="hidden 2xl:block absolute left-3 bottom-4 w-[134px] h-[116px] opacity-[0.3]"
          >
            <defs>
              <mask id="hero-blouse-neck-mask">
                <motion.path
                  d="M62 31 Q74 56 88 50 Q102 56 114 31"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={{...stitchLoopTransition, delay: 0.3}}
                />
              </mask>
              <mask id="hero-blouse-dart-mask">
                <motion.path
                  d="M68 48 Q66 80 64 112 M108 48 Q110 80 112 112"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={{...stitchLoopTransition, delay: 0.7}}
                />
              </mask>
              <mask id="hero-blouse-hem-mask">
                <motion.path
                  d="M24 66 L41 73 M152 66 L135 73 M54 107 Q88 115 122 107"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={{...stitchLoopTransition, delay: 1}}
                />
              </mask>
            </defs>

            {/* Pattern seam-allowance outline */}
            <path
              d="M58 24 L31 35 L15 72 L42 82 L49 65 L49 116 Q88 124 127 116 L127 65 L134 82 L161 72 L145 35 L118 24 Q102 47 88 42 Q74 47 58 24 Z"
              stroke="#C69C91"
              strokeWidth="0.7"
              strokeDasharray="2 3"
            />
            {/* Blouse fabric swatch */}
            <path
              d="M60 28 L34 38 L20 70 L40 78 L50 58 L52 112 Q88 120 124 112 L126 58 L136 78 L156 70 L142 38 L116 28 Q102 52 88 46 Q74 52 60 28 Z"
              fill="#F2EAE1"
              fillOpacity="0.6"
              stroke="#7A5B50"
              strokeWidth="1.15"
              strokeLinejoin="round"
            />
            {/* Animated sweetheart neckline embroidery stitch */}
            <path
              d="M62 31 Q74 56 88 50 Q102 56 114 31"
              stroke="#8E574C"
              strokeWidth="1.25"
              strokeDasharray="2.5 2"
              mask="url(#hero-blouse-neck-mask)"
            />
            {/* Animated princess-cut dart seams */}
            <path
              d="M68 48 Q66 80 64 112 M108 48 Q110 80 112 112"
              stroke="#9E6E64"
              strokeWidth="1.1"
              strokeDasharray="3 2.5"
              mask="url(#hero-blouse-dart-mask)"
            />
            {/* Sleeve & bottom hem stitch */}
            <path
              d="M24 66 L41 73 M152 66 L135 73 M54 107 Q88 115 122 107"
              stroke="#9E6E64"
              strokeWidth="1.05"
              strokeDasharray="2.5 2.5"
              mask="url(#hero-blouse-hem-mask)"
            />
            <circle cx="88" cy="68" r="1.5" fill="#9E6E64" />
            <circle cx="88" cy="86" r="1.5" fill="#9E6E64" />
            <circle cx="88" cy="102" r="1.5" fill="#9E6E64" />

            {/* Needle gliding across the blouse neckline */}
            {!shouldReduceMotion && (
              <motion.g
                animate={{
                  x: [62, 76, 88, 102, 114, 114],
                  y: [31, 49, 50, 49, 31, 31],
                }}
                transition={{
                  duration: 5.8,
                  delay: 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.9,
                }}
              >
                <motion.g
                  animate={{y: [0, 2.5, -2.5, 0], rotate: [-12, 8, -12]}}
                  transition={{duration: 0.9, repeat: Infinity, ease: 'easeInOut'}}
                >
                  <path
                    d="M0 0 L12 -15"
                    stroke="#3B2620"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 -15 C 20 -20, 22 -8, 16 -3"
                    stroke="#9E6E64"
                    strokeWidth="0.9"
                    strokeDasharray="2 2"
                  />
                </motion.g>
              </motion.g>
            )}
          </svg>

          {/* 3. Enhanced Tailored Pant / Trouser Pattern (lower center gutter, clear of buttons) */}
          <svg
            viewBox="0 0 160 205"
            fill="none"
            className="hidden xl:block absolute left-[48%] bottom-4 w-[124px] h-[160px] opacity-[0.3]"
          >
            <defs>
              <mask id="hero-pant-waist-mask">
                <motion.path
                  d="M45 30 H115 M57 22 V34 M103 22 V34"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={{...stitchLoopTransition, delay: 0.6}}
                />
              </mask>
              <mask id="hero-pant-leg-mask">
                <motion.path
                  d="M47 44 Q55 56 46 66 M113 44 Q105 56 114 66 M59 46 L53 176 M101 46 L107 176 M38 176 H67 M93 176 H122"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={{...stitchLoopTransition, delay: 0.9}}
                />
              </mask>
            </defs>

            {/* Pattern seam-allowance frame */}
            <path
              d="M42 18 H118 L127 188 H90 L80 86 L70 188 H33 L42 18 Z"
              stroke="#C69C91"
              strokeWidth="0.7"
              strokeDasharray="2 3"
            />
            <path
              d="M45 22 H115 L123 184 H93 L80 78 L67 184 H37 L45 22 Z"
              fill="#F2EAE1"
              fillOpacity="0.6"
              stroke="#7A5B50"
              strokeWidth="1.15"
              strokeLinejoin="round"
            />
            <path
              d="M44 34 H116 M80 34 V70 Q80 76 75 78 M63 34 L62 52 M97 34 L98 52"
              stroke="#7A5B50"
              strokeWidth="1"
            />
            <path
              d="M45 30 H115 M57 22 V34 M103 22 V34"
              stroke="#8E574C"
              strokeWidth="1.05"
              strokeDasharray="2.5 2"
              mask="url(#hero-pant-waist-mask)"
            />
            <path
              d="M47 44 Q55 56 46 66 M113 44 Q105 56 114 66 M59 46 L53 176 M101 46 L107 176 M38 176 H67 M93 176 H122"
              stroke="#9E6E64"
              strokeWidth="1.1"
              strokeDasharray="3 2.5"
              mask="url(#hero-pant-leg-mask)"
            />
            <circle cx="80" cy="28" r="1.6" fill="#9E6E64" />
          </svg>

          {/* 4. Enhanced Atelier Spool, Needle & Folded Silk Swatch in Upper-Right Margin */}
          <svg
            viewBox="0 0 185 104"
            fill="none"
            className="hidden md:block absolute right-5 top-4 w-40 h-24 opacity-[0.42]"
          >
            <defs>
              <mask id="hero-fold-stitch-mask">
                <motion.path
                  d="M22 72 Q 66 62, 112 70"
                  stroke="white"
                  strokeWidth="8"
                  strokeLinecap="round"
                  initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                  animate={
                    shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                  }
                  transition={stitchLoopTransition}
                />
              </mask>
            </defs>

            {/* Wooden thread spool beside the swatch */}
            <g transform="translate(132 34)">
              <rect x="2" y="2" width="24" height="4" rx="1" fill="#E8DDD2" stroke="#7A5B50" strokeWidth="0.9" />
              <rect x="4" y="6" width="20" height="24" fill="#C69C91" fillOpacity="0.6" stroke="#7A5B50" strokeWidth="0.9" />
              <path d="M4 11 H24 M4 16 H24 M4 21 H24 M4 26 H24" stroke="#9E6E64" strokeWidth="0.7" strokeOpacity="0.75" />
              <rect x="2" y="30" width="24" height="4" rx="1" fill="#E8DDD2" stroke="#7A5B50" strokeWidth="0.9" />
            </g>

            {/* Folded ivory fabric edge */}
            <path
              d="M12 68 Q 62 56, 118 66 L132 82 Q 72 72, 22 84 Z"
              fill="#F2EAE1"
              stroke="#C69C91"
              strokeWidth="0.9"
            />
            {/* Animated running stitches along the cloth fold */}
            <path
              d="M22 72 Q 66 62, 112 70"
              stroke="#8E574C"
              strokeWidth="1.2"
              strokeDasharray="4 3"
              mask="url(#hero-fold-stitch-mask)"
            />
            {/* Bobbing sewing needle piercing the fabric */}
            <motion.g
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      x: [0, 82, 82],
                      y: [0, -2, -2],
                    }
              }
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.9,
              }}
            >
              <motion.g
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, 6, -4, 6, -4, 0],
                        rotate: [0, 8, -6, 8, -6, 0],
                      }
                }
                transition={{duration: 1.15, repeat: Infinity, ease: 'easeInOut'}}
              >
                <path
                  d="M28 68 L52 38"
                  stroke="#3B2620"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <ellipse
                  cx="50"
                  cy="40.5"
                  rx="1"
                  ry="2.2"
                  transform="rotate(38 50 40.5)"
                  stroke="#3B2620"
                  strokeWidth="0.95"
                  fill="#FAF6F1"
                />
                <path
                  d="M52 38 C 66 28, 72 48, 56 58"
                  stroke="#9E6E64"
                  strokeWidth="1"
                  strokeDasharray="2.5 2.5"
                />
              </motion.g>
            </motion.g>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Editorial Typographic Column */}
          <motion.div
            initial={{opacity: 0, y: 18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 lg:pr-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64]">
                Atelier Edition · New Delhi
              </span>
              <span className="w-14 stitch-line" aria-hidden="true" />
            </div>

            <h1 className="relative font-display font-bold text-[32px] min-[420px]:text-[38px] sm:text-[50px] lg:text-[54px] xl:text-[62px] leading-[1.2] tracking-[-0.015em] text-[#3B2620] max-w-xl h-[88px] min-[420px]:h-[104px] sm:h-[132px] lg:h-[142px] xl:h-[160px] overflow-visible">
              <AnimatePresence mode="wait">
                {headlineLang === 'en' ? (
                  <motion.span
                    key="headline-en"
                    lang="en"
                    initial={
                      shouldReduceMotion
                        ? {opacity: 1}
                        : {opacity: 0, y: 10}
                    }
                    animate={{opacity: 1, y: 0}}
                    exit={
                      shouldReduceMotion
                        ? {opacity: 1}
                        : {opacity: 0, y: -10}
                    }
                    transition={{duration: 0.36, ease: [0.16, 1, 0.3, 1]}}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <span className="block whitespace-nowrap">
                      Every{' '}
                      <span className="relative inline-block text-[#3B2620] bg-[#EAD8C5]/90 px-2 -mx-0.5 border-b-2 border-[#9E6E64]/65 leading-[1.12]">
                        stitch
                      </span>{' '}
                      tells
                    </span>
                    <span className="block whitespace-nowrap">
                      your{' '}
                      <span className="relative inline-block font-serif italic font-bold text-[#7D473C]">
                        story.
                        <svg
                          viewBox="0 0 180 14"
                          fill="none"
                          aria-hidden="true"
                          className="absolute left-0 -bottom-1.5 w-full h-3 pointer-events-none"
                        >
                          <defs>
                            <mask id="hero-story-underline-mask-en">
                              <motion.path
                                d="M2 8 Q 90 1 178 7"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={
                                  shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}
                                }
                                animate={{pathLength: 1}}
                                transition={{
                                  duration: 0.85,
                                  delay: 0.1,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                              />
                            </mask>
                          </defs>
                          <path
                            d="M2 8 Q 90 1 178 7"
                            stroke="#9E6E64"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="5 4"
                            mask="url(#hero-story-underline-mask-en)"
                          />
                        </svg>
                      </span>
                    </span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="headline-hi"
                    lang="hi"
                    initial={
                      shouldReduceMotion
                        ? {opacity: 1}
                        : {opacity: 0, y: 10}
                    }
                    animate={{opacity: 1, y: 0}}
                    exit={
                      shouldReduceMotion
                        ? {opacity: 1}
                        : {opacity: 0, y: -10}
                    }
                    transition={{duration: 0.36, ease: [0.16, 1, 0.3, 1]}}
                    className="absolute inset-0 flex flex-col justify-center tracking-normal"
                  >
                    <span className="block whitespace-nowrap">
                      हर{' '}
                      <span className="relative inline-block text-[#3B2620] bg-[#EAD8C5]/90 px-2 -mx-0.5 border-b-2 border-[#9E6E64]/65 leading-[1.12]">
                        टाँका
                      </span>{' '}
                      कहता है
                    </span>
                    <span className="block whitespace-nowrap">
                      आपकी{' '}
                      <span className="relative inline-block font-bold text-[#7D473C]">
                        कहानी।
                        <svg
                          viewBox="0 0 180 14"
                          fill="none"
                          aria-hidden="true"
                          className="absolute left-0 -bottom-1.5 w-full h-3 pointer-events-none"
                        >
                          <defs>
                            <mask id="hero-story-underline-mask-hi">
                              <motion.path
                                d="M2 8 Q 90 1 178 7"
                                stroke="white"
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={
                                  shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}
                                }
                                animate={{pathLength: 1}}
                                transition={{
                                  duration: 0.85,
                                  delay: 0.1,
                                  ease: [0.16, 1, 0.3, 1],
                                }}
                              />
                            </mask>
                          </defs>
                          <path
                            d="M2 8 Q 90 1 178 7"
                            stroke="#9E6E64"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeDasharray="5 4"
                            mask="url(#hero-story-underline-mask-hi)"
                          />
                        </svg>
                      </span>
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </h1>

            <p className="mt-7 text-[16px] md:text-[18px] leading-[1.65] text-[#614D45] max-w-md font-normal">
              Where your vision meets the timeless art of bespoke Indian women’s
              tailoring.
            </p>

            {/* Primary Visual Hook: Live Animated Needle & Thread Stitching a Cloth Seam */}
            <div
              className="my-7 flex items-center gap-2.5 text-[#B8988B]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 210 34"
                fill="none"
                className="w-[210px] h-[34px] overflow-visible"
              >
                <defs>
                  <mask id="hero-divider-stitch-mask">
                    <motion.path
                      d="M8 19 H178"
                      stroke="white"
                      strokeWidth="10"
                      strokeLinecap="round"
                      initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                      animate={
                        shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                      }
                      transition={{
                        duration: 5.2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        repeatDelay: 0.8,
                      }}
                    />
                  </mask>
                </defs>

                {/* Soft cloth ribbon band being stitched */}
                <path
                  d="M2 19 H188"
                  stroke="#E5D7C9"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Faint basting guide */}
                <path
                  d="M6 19 H182"
                  stroke="#C9B3A4"
                  strokeWidth="0.9"
                  strokeDasharray="2 4"
                />
                {/* Puncture pinholes along cloth */}
                {[18, 38, 58, 78, 98, 118, 138, 158, 178].map((cx) => (
                  <circle key={cx} cx={cx} cy={19} r={1.1} fill="#B8988B" />
                ))}
                {/* Active running stitch drawn by needle */}
                <path
                  d="M8 19 H178"
                  stroke="#8E574C"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                  mask="url(#hero-divider-stitch-mask)"
                />
                {/* Live sewing needle dipping into the cloth & pulling thread */}
                {!shouldReduceMotion && (
                  <motion.g
                    animate={{
                      x: [8, 178, 178],
                    }}
                    transition={{
                      duration: 5.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 0.8,
                    }}
                  >
                    <motion.g
                      animate={{
                        y: [0, 5.5, -3.5, 5.5, -3.5, 0],
                        rotate: [0, 9, -7, 9, -7, 0],
                      }}
                      transition={{
                        duration: 1.05,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {/* Curved trailing thread from needle eye */}
                      <path
                        d="M17 4 C 29 -2, 33 11, 22 15"
                        stroke="#9E6E64"
                        strokeWidth="1.1"
                        strokeDasharray="2.5 2"
                      />
                      {/* Angled steel/brown sewing needle */}
                      <path
                        d="M0 19 L17 4"
                        stroke="#3B2620"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      {/* Needle eye */}
                      <ellipse
                        cx="15"
                        cy="5.8"
                        rx="1.1"
                        ry="2.3"
                        transform="rotate(48 15 5.8)"
                        stroke="#3B2620"
                        strokeWidth="1"
                        fill="#FAF6F1"
                      />
                    </motion.g>
                  </motion.g>
                )}
              </svg>
              <span className="text-[10px] text-[#9E6E64]">◇</span>
              <span className="w-8 stitch-line" />
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[13.5px] font-medium px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
              >
                Book Appointment
              </button>

              <a
                href="#gallery"
                className="border border-[#C9B7A7] hover:border-[#4A332C] hover:bg-[#F2EAE1] text-[#4A332C] text-[13.5px] font-medium px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
              >
                Explore Collection
              </a>
            </div>
          </motion.div>

          {/* Right Editorial Framed Lookbook Slideshow Column */}
          <motion.div
            initial={{opacity: 0, y: 22}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div
              className="relative w-full max-w-[490px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={() => setIsPaused(false)}
            >
              {/* Offset stitched editorial hairline frame + animated corner stitch trace */}
              <div
                className="hidden sm:block absolute -top-4 -left-4 right-4 bottom-4 border border-dashed border-[#D7C6B6] pointer-events-none"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 120 120"
                  fill="none"
                  className="absolute -top-px -left-px w-24 h-24 overflow-visible"
                >
                  <defs>
                    <mask id="hero-frame-corner-mask">
                      <motion.path
                        d="M1 95 V1 H95"
                        stroke="white"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                        animate={
                          shouldReduceMotion ? {pathLength: 1} : {pathLength: [0, 1, 1]}
                        }
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          repeatDelay: 1.2,
                        }}
                      />
                    </mask>
                  </defs>
                  <path
                    d="M1 95 V1 H95"
                    stroke="#8E574C"
                    strokeWidth="1.4"
                    strokeDasharray="4 4"
                    mask="url(#hero-frame-corner-mask)"
                  />
                </svg>
              </div>

              <div className="relative bg-[#FAF6F1] border border-[#E2D5C8] p-2.5 sm:p-3">
                {/* Interactive Slideshow Viewport */}
                <div className="group relative aspect-[3/4] w-full overflow-hidden bg-[#EAE0D5]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentSlide.id}
                      src={currentSlide.image}
                      alt={currentSlide.alt}
                      referrerPolicy="no-referrer"
                      initial={{opacity: 0, scale: 1.02}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0}}
                      transition={{duration: 0.55, ease: [0.16, 1, 0.3, 1]}}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>

                  {/* Subtle Prev / Next Controls */}
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous look"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#FAF6F1]/85 hover:bg-[#4A332C] text-[#4A332C] hover:text-[#FAF6F1] border border-[#E2D5C8] flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next look"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#FAF6F1]/85 hover:bg-[#4A332C] text-[#4A332C] hover:text-[#FAF6F1] border border-[#E2D5C8] flex items-center justify-center opacity-80 sm:opacity-0 sm:group-hover:opacity-100 focus-visible:opacity-100 transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Slide Counter Indicator */}
                  <div className="absolute top-3 right-3 bg-[#FAF6F1]/90 border border-[#E2D5C8] px-2.5 py-1 text-[11px] tracking-[0.14em] text-[#4A332C] tabular-nums">
                    0{activeIndex + 1} / 0{totalSlides}
                  </div>
                </div>

                {/* Caption & Interactive Slide Selectors */}
                <div className="pt-3 pb-1 px-1 flex flex-col gap-2.5 border-t border-dashed border-[#DFD1C3] mt-2.5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[11px] tracking-[0.16em] uppercase text-[#8A746B]">
                      {currentSlide.lookLabel}
                    </span>
                    <span className="font-serif italic text-[13px] text-[#9E6E64]">
                      {currentSlide.tagline}
                    </span>
                  </div>

                  {/* Subtle Stitched Progress Dots */}
                  <div
                    className="flex items-center gap-1.5"
                    role="tablist"
                    aria-label="Hero lookbook slides"
                  >
                    {HERO_SLIDES.map((slide, idx) => {
                      const isCurrent = idx === activeIndex;
                      return (
                        <button
                          key={slide.id}
                          type="button"
                          role="tab"
                          aria-selected={isCurrent}
                          aria-label={`Show ${slide.lookLabel}`}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

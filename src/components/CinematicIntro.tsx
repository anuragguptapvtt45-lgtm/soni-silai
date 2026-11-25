import {useEffect, useState} from 'react';
import {AnimatePresence, motion, useReducedMotion} from 'motion/react';

type IntroPhase =
  | 'opening'
  | 'scissors-enter'
  | 'cutting'
  | 'revealing'
  | 'done';

interface CinematicIntroProps {
  onComplete?: () => void;
}

export function CinematicIntro({onComplete}: CinematicIntroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<IntroPhase>('opening');
  const [skipped, setSkipped] = useState(false);

  // Lock body scroll while the intro overlay is active
  useEffect(() => {
    if (phase === 'done') {
      document.body.style.overflow = '';
      onComplete?.();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [phase, onComplete]);

  // Sequence the cinematic scenes (stops immediately if user skips)
  useEffect(() => {
    if (skipped) return;

    if (shouldReduceMotion) {
      const quickReveal = window.setTimeout(() => setPhase('revealing'), 1100);
      const quickDone = window.setTimeout(() => setPhase('done'), 1600);
      return () => {
        window.clearTimeout(quickReveal);
        window.clearTimeout(quickDone);
      };
    }

    const t1 = window.setTimeout(() => setPhase('scissors-enter'), 1600);
    const t2 = window.setTimeout(() => setPhase('cutting'), 2500);
    const t3 = window.setTimeout(() => setPhase('revealing'), 4100);
    const t4 = window.setTimeout(() => setPhase('done'), 5200);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
      window.clearTimeout(t4);
    };
  }, [shouldReduceMotion, skipped]);

  const handleSkip = () => {
    if (phase === 'revealing' || phase === 'done') return;
    setSkipped(true);
    setPhase('revealing');
  };

  // Complete reveal after manual skip
  useEffect(() => {
    if (!skipped || phase !== 'revealing') return;
    const finishTimer = window.setTimeout(
      () => setPhase('done'),
      shouldReduceMotion ? 450 : 1050
    );
    return () => window.clearTimeout(finishTimer);
  }, [skipped, phase, shouldReduceMotion]);

  // Allow Escape key to skip cleanly
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && phase !== 'revealing' && phase !== 'done') {
        setSkipped(true);
        setPhase('revealing');
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [phase]);

  if (phase === 'done') {
    return null;
  }

  const isRevealing = phase === 'revealing';
  const isScissorsVisible =
    phase === 'scissors-enter' || phase === 'cutting';
  const isCutting = phase === 'cutting';

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="SONI SILAI Atelier Opening"
        initial={{opacity: 1}}
        animate={
          shouldReduceMotion && isRevealing ? {opacity: 0} : {opacity: 1}
        }
        transition={{duration: 0.45, ease: [0.16, 1, 0.3, 1]}}
        className="fixed inset-0 z-[100] overflow-hidden select-none"
      >
        {/* TOP FABRIC CURTAIN PANEL (0% to 56% height) */}
        <motion.div
          initial={{y: '0%'}}
          animate={
            !shouldReduceMotion && isRevealing ? {y: '-104%'} : {y: '0%'}
          }
          transition={{duration: 1.05, ease: [0.77, 0, 0.175, 1]}}
          className="absolute top-0 left-0 right-0 h-[56%] bg-[#F8F5F0] bg-linen-weave overflow-hidden"
        >
          {/* Soft champagne studio lighting from above */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(229,206,178,0.34)_0%,rgba(248,245,240,0)_68%)]"
          />
          {/* Subtle corner atelier vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,51,44,0.06)_0%,transparent_28%,transparent_92%,rgba(74,51,44,0.08)_100%)]"
          />
          {/* Tailored cut hem edge along bottom of upper curtain */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 right-0 h-[5px] border-t border-dashed border-[#B98D56]/45 bg-gradient-to-b from-[#EDE4D8] to-[#DFD0BF] shadow-[0_8px_24px_rgba(59,38,32,0.18)]"
          />
        </motion.div>

        {/* BOTTOM FABRIC CURTAIN PANEL (56% to 100% height) */}
        <motion.div
          initial={{y: '0%'}}
          animate={
            !shouldReduceMotion && isRevealing ? {y: '104%'} : {y: '0%'}
          }
          transition={{duration: 1.05, ease: [0.77, 0, 0.175, 1]}}
          className="absolute bottom-0 left-0 right-0 h-[44%] bg-[#F8F5F0] bg-linen-weave overflow-hidden"
        >
          {/* Soft champagne reflection below seam */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_10%,rgba(218,189,154,0.28)_0%,rgba(248,245,240,0)_65%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(0deg,rgba(74,51,44,0.07)_0%,transparent_32%,transparent_92%,rgba(74,51,44,0.08)_100%)]"
          />
          {/* Tailored cut hem edge along top of lower curtain */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 right-0 h-[5px] border-b border-dashed border-[#B98D56]/45 bg-gradient-to-t from-[#EDE4D8] to-[#DFD0BF] shadow-[0_-8px_24px_rgba(59,38,32,0.14)]"
          />
        </motion.div>

        {/* SCENE 1 CENTERPIECE: VINTAGE INDIAN SEWING MACHINE + THREAD + BRANDING */}
        <motion.div
          initial={{opacity: 0, y: 14}}
          animate={
            isRevealing
              ? {opacity: 0, y: -22, scale: 0.97}
              : {opacity: 1, y: 0, scale: 1}
          }
          transition={{
            duration: isRevealing ? 0.45 : 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="pointer-events-none absolute top-0 left-0 right-0 h-[56%] z-20 flex flex-col items-center justify-center px-6 pb-3 text-center"
        >
          {/* Small Couture Atelier Overline */}
          <motion.p
            initial={{opacity: 0, letterSpacing: '0.28em'}}
            animate={{opacity: 1, letterSpacing: '0.24em'}}
            transition={{duration: 0.8, delay: 0.15}}
            className="text-[10px] sm:text-[11px] font-medium uppercase text-[#8E574C] mb-2 sm:mb-3"
          >
            Bespoke Indian Tailoring
          </motion.p>

          {/* Realistic Heritage Vintage Sewing Machine Illustration */}
          <div className="relative w-[205px] sm:w-[270px] md:w-[320px]">
            {/* Warm champagne glow halo behind the sewing machine */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(216,181,134,0.32)_0%,transparent_70%)] blur-xl"
            />
            <VintageSewingMachine
              isReducedMotion={Boolean(shouldReduceMotion)}
              isThreadCut={isCutting || isRevealing}
            />
          </div>

          {/* Brand Wordmark */}
          <motion.h1
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1]}}
            className="mt-2 sm:mt-3 font-display font-semibold text-[32px] sm:text-[42px] md:text-[48px] tracking-[0.14em] leading-none text-[#3B2620]"
          >
            SONI SILAI
          </motion.h1>

          {/* Hindi Tagline */}
          <motion.p
            lang="hi"
            initial={{opacity: 0, y: 8}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.75, delay: 0.55, ease: [0.16, 1, 0.3, 1]}}
            className="mt-2.5 sm:mt-3 font-serif text-[16px] sm:text-[19px] md:text-[21px] text-[#7D473C] tracking-[0.02em]"
          >
            “हर सिलाई में एक खूबसूरत एहसास”
          </motion.p>
        </motion.div>

        {/* HORIZONTAL TAILOR'S CHALK LINE & CUTTING SEAM AT 56% */}
        <motion.div
          aria-hidden="true"
          initial={{opacity: 0}}
          animate={
            isRevealing
              ? {opacity: 0}
              : isScissorsVisible
              ? {opacity: 1}
              : {opacity: 0.35}
          }
          transition={{duration: 0.45}}
          className="pointer-events-none absolute left-0 right-0 top-[56%] -translate-y-1/2 z-20"
        >
          {/* Tailor's chalk dashed guide line across full width */}
          <svg
            viewBox="0 0 1440 24"
            preserveAspectRatio="none"
            className="w-full h-6"
          >
            <defs>
              <mask id="intro-chalk-mask">
                <motion.line
                  x1="1440"
                  y1="12"
                  x2="0"
                  y2="12"
                  stroke="white"
                  strokeWidth="8"
                  initial={{pathLength: 0}}
                  animate={{pathLength: 1}}
                  transition={{duration: 1.2, delay: 0.45, ease: 'easeInOut'}}
                />
              </mask>
            </defs>
            <line
              x1="0"
              y1="12"
              x2="1440"
              y2="12"
              stroke="#B88E68"
              strokeWidth="1.25"
              strokeDasharray="8 7"
              strokeOpacity="0.7"
              mask="url(#intro-chalk-mask)"
            />
          </svg>

          {/* Dynamic Cut Seam Glow: slices from right-to-left as the scissors snip */}
          <motion.div
            initial={{scaleX: 0, opacity: 0}}
            animate={
              isCutting
                ? {scaleX: 1, opacity: 1}
                : {scaleX: 0, opacity: 0}
            }
            transition={{duration: 1.35, delay: 0.15, ease: [0.22, 1, 0.36, 1]}}
            style={{transformOrigin: 'right center'}}
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-l from-[#3B2620]/70 via-[#C89F74] to-transparent shadow-[0_0_12px_rgba(200,159,116,0.6)]"
          />
        </motion.div>

        {/* SCENE 2 & 3: REALISTIC METALLIC TAILOR'S SCISSORS */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            initial={{x: '68vw', opacity: 0}}
            animate={
              phase === 'opening'
                ? {x: '68vw', opacity: 0}
                : phase === 'scissors-enter'
                ? {x: '14vw', opacity: 1}
                : phase === 'cutting'
                ? {x: '-18vw', opacity: 1}
                : {x: '-62vw', opacity: 0}
            }
            transition={{
              duration:
                phase === 'scissors-enter'
                  ? 0.9
                  : phase === 'cutting'
                  ? 1.55
                  : 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 z-30 w-[210px] sm:w-[270px] md:w-[320px]"
          >
            <TailorScissors isCutting={isCutting} isPoised={phase === 'scissors-enter'} />
          </motion.div>
        )}

        {/* SUBTLE SKIP / ENTER CONTROL */}
        <motion.div
          initial={{opacity: 0}}
          animate={isRevealing ? {opacity: 0} : {opacity: 1}}
          transition={{duration: 0.4, delay: 0.4}}
          className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-40"
        >
          <button
            type="button"
            onClick={handleSkip}
            className="px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#4A332C] bg-[#FAF6F1]/90 hover:bg-[#4A332C] hover:text-[#FAF6F1] border border-[#D9C7B6] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64]"
          >
            Skip Intro
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface VintageSewingMachineProps {
  isReducedMotion: boolean;
  isThreadCut: boolean;
}

function VintageSewingMachine({
  isReducedMotion,
  isThreadCut,
}: VintageSewingMachineProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 w-full h-auto drop-shadow-[0_18px_26px_rgba(59,38,32,0.16)]"
    >
      <defs>
        {/* Polished Mahogany Base Gradient */}
        <linearGradient id="woodBase" x1="20" y1="162" x2="340" y2="196" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5D3A2E" />
          <stop offset="45%" stopColor="#3E251C" />
          <stop offset="100%" stopColor="#2A1711" />
        </linearGradient>

        {/* Cast-Iron Glossy Black-Espresso Body */}
        <linearGradient id="ironBody" x1="80" y1="26" x2="290" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B2923" />
          <stop offset="32%" stopColor="#211511" />
          <stop offset="68%" stopColor="#2E1F1A" />
          <stop offset="100%" stopColor="#160E0B" />
        </linearGradient>

        {/* Specular Studio Highlight along curved cast-iron arm */}
        <linearGradient id="ironHighlight" x1="90" y1="28" x2="275" y2="95" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#E6C9A8" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Antique Champagne-Brass Metallic Gradient */}
        <linearGradient id="antiqueBrass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D6A8" />
          <stop offset="45%" stopColor="#C99E67" />
          <stop offset="100%" stopColor="#8C6235" />
        </linearGradient>

        {/* Brushed Steel Chrome Parts */}
        <linearGradient id="chromeSteel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5F3F0" />
          <stop offset="48%" stopColor="#BEB7AF" />
          <stop offset="100%" stopColor="#7C746C" />
        </linearGradient>

        {/* Rose-Champagne Silk Spool */}
        <linearGradient id="silkSpool" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8C5347" />
          <stop offset="50%" stopColor="#C69184" />
          <stop offset="100%" stopColor="#754137" />
        </linearGradient>
      </defs>

      {/* Soft Tabletop Studio Shadow */}
      <ellipse cx="180" cy="197" rx="146" ry="8" fill="#3B2620" fillOpacity="0.16" />

      {/* Polished Mahogany Base Plinth */}
      <rect x="34" y="164" width="292" height="22" rx="4" fill="url(#woodBase)" />
      <rect x="38" y="164" width="284" height="3" rx="1.5" fill="#9D7259" fillOpacity="0.45" />
      <rect x="28" y="184" width="304" height="8" rx="3" fill="#23140F" />
      {/* Brass corner rivets on wood base */}
      <circle cx="48" cy="175" r="2.2" fill="url(#antiqueBrass)" />
      <circle cx="312" cy="175" r="2.2" fill="url(#antiqueBrass)" />

      {/* Machine Bedplate (Cast Iron) */}
      <path
        d="M52 152 H302 C308 152 312 156 312 162 V164 H44 V160 C44 155 47 152 52 152 Z"
        fill="url(#ironBody)"
      />
      {/* Brushed Steel Needle Throat Plate */}
      <rect x="64" y="150" width="46" height="4" rx="1" fill="url(#chromeSteel)" />

      {/* Main Cast-Iron Curved Arm & Vertical Pillar */}
      <path
        d="M72 46 C72 34 80 28 94 28 H246 C276 28 292 50 292 84 V152 H244 V92 C244 74 232 66 206 66 H124 C108 66 102 74 102 90 V108 H72 V46 Z"
        fill="url(#ironBody)"
      />

      {/* Studio Rim Light along Top Arm Curve */}
      <path
        d="M84 35 C92 31 102 31 114 31 H242 C264 31 278 44 283 66"
        stroke="url(#ironHighlight)"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Indian Gold Filigree & Paisley Scroll Inlay on Machine Body */}
      <path
        d="M126 48 C142 40 162 40 176 48 C190 56 208 56 222 46"
        stroke="url(#antiqueBrass)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.88"
      />
      <path
        d="M266 96 C258 106 258 122 268 134 C274 140 282 135 280 126 C278 118 268 118 266 125"
        stroke="url(#antiqueBrass)"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      {/* Heritage Brass Oval Medallion on Pillar */}
      <ellipse cx="268" cy="84" rx="10" ry="13" fill="url(#antiqueBrass)" fillOpacity="0.92" />
      <ellipse cx="268" cy="84" rx="6.5" ry="9" stroke="#2D1D17" strokeWidth="1" />

      {/* Top Brass Spool Pin & Wound Rose-Champagne Silk Spool */}
      <rect x="220" y="10" width="3.5" height="20" rx="1.5" fill="url(#antiqueBrass)" />
      <rect x="213" y="14" width="17.5" height="14" rx="2" fill="url(#silkSpool)" />
      <rect x="212" y="13" width="19.5" height="2.5" rx="1" fill="#D5B28E" />
      <rect x="212" y="26.5" width="19.5" height="2.5" rx="1" fill="#D5B28E" />
      {/* Subtle thread texture lines on spool */}
      <line x1="215" y1="18" x2="229" y2="18" stroke="#F0D4C8" strokeWidth="0.6" strokeOpacity="0.55" />
      <line x1="215" y1="21" x2="229" y2="21" stroke="#F0D4C8" strokeWidth="0.6" strokeOpacity="0.45" />
      <line x1="215" y1="24" x2="229" y2="24" stroke="#F0D4C8" strokeWidth="0.6" strokeOpacity="0.55" />

      {/* Chrome Tension Disc Assembly on Head */}
      <circle cx="95" cy="78" r="8" fill="url(#chromeSteel)" />
      <circle cx="95" cy="78" r="3.5" fill="url(#antiqueBrass)" />

      {/* Oscillating Thread Take-Up Lever */}
      <motion.path
        d="M78 44 L64 34"
        stroke="url(#chromeSteel)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={
          isReducedMotion
            ? undefined
            : {
                d: ['M78 44 L64 34', 'M78 44 L63 40', 'M78 44 L64 34'],
              }
        }
        transition={{duration: 0.75, repeat: Infinity, ease: 'easeInOut'}}
      />

      {/* Head Faceplate Chrome Shield */}
      <rect x="70" y="42" width="10" height="58" rx="3" fill="url(#chromeSteel)" fillOpacity="0.92" />

      {/* Presser Foot Bar & Foot */}
      <rect x="86" y="106" width="3" height="36" fill="url(#chromeSteel)" />
      <path d="M80 144 H95 L98 140" stroke="url(#chromeSteel)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Animated Chrome Needle Bar & Steel Needle */}
      <motion.g
        animate={
          isReducedMotion
            ? undefined
            : {
                y: [0, 7, 0],
              }
        }
        transition={{duration: 0.75, repeat: Infinity, ease: 'easeInOut'}}
      >
        <rect x="77" y="106" width="3.5" height="20" rx="1" fill="url(#chromeSteel)" />
        <rect x="76" y="123" width="5.5" height="4" rx="1" fill="url(#antiqueBrass)" />
        <line x1="78.8" y1="127" x2="78.8" y2="147" stroke="#EAE6E1" strokeWidth="1.4" strokeLinecap="round" />
      </motion.g>

      {/* Right Chrome Spoked Handwheel (Gently Spinning) */}
      <motion.g
        style={{transformOrigin: '296px 76px'}}
        animate={isReducedMotion ? undefined : {rotate: 360}}
        transition={{duration: 4.5, repeat: Infinity, ease: 'linear'}}
      >
        <circle cx="296" cy="76" r="24" stroke="url(#chromeSteel)" strokeWidth="5.5" />
        <circle cx="296" cy="76" r="20" stroke="#7A7067" strokeWidth="1" />
        <line x1="296" y1="54" x2="296" y2="98" stroke="url(#chromeSteel)" strokeWidth="3" />
        <line x1="274" y1="76" x2="318" y2="76" stroke="url(#chromeSteel)" strokeWidth="3" />
        <line x1="280.5" y1="60.5" x2="311.5" y2="91.5" stroke="url(#chromeSteel)" strokeWidth="2.5" />
        <line x1="311.5" y1="60.5" x2="280.5" y2="91.5" stroke="url(#chromeSteel)" strokeWidth="2.5" />
        <circle cx="296" cy="76" r="6.5" fill="url(#antiqueBrass)" />
      </motion.g>
      {/* Crank Handle Knob on Handwheel */}
      <circle cx="315" cy="76" r="4" fill="#3E251C" stroke="url(#antiqueBrass)" strokeWidth="1.2" />

      {/* Delicate Rose-Champagne Thread Path: Spool -> Take-up Lever -> Tension -> Needle Eye */}
      <path
        d="M214 18 C178 14, 128 24, 65 36 C72 52, 86 64, 95 78 C86 92, 79 112, 78.8 142"
        stroke="#B57566"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />

      {/* Delicate Animated Thread Emerging from Needle & Draping Down Toward the Seam */}
      <motion.path
        d="M78.8 146 C 78 168, 96 186, 134 194 C 165 201, 178 206, 180 218"
        stroke="#9E6E64"
        strokeWidth="1.35"
        strokeLinecap="round"
        initial={isReducedMotion ? {pathLength: 1} : {pathLength: 0}}
        animate={
          isThreadCut
            ? {pathLength: 0.72, opacity: 0.4}
            : {pathLength: 1, opacity: 0.95}
        }
        transition={{duration: 1.25, delay: 0.4, ease: [0.16, 1, 0.3, 1]}}
      />
    </svg>
  );
}

interface TailorScissorsProps {
  isCutting: boolean;
  isPoised: boolean;
}

function TailorScissors({isCutting, isPoised}: TailorScissorsProps) {
  const topBladeAngles = isCutting
    ? [12, 1.5, 13, 1.5, 12, 1]
    : isPoised
    ? 11
    : 4;

  const bottomBladeAngles = isCutting
    ? [-12, -1.5, -13, -1.5, -12, -1]
    : isPoised
    ? -11
    : -4;

  const snipTransition = isCutting
    ? {
        duration: 1.45,
        times: [0, 0.2, 0.4, 0.62, 0.82, 1],
        ease: 'easeInOut' as const,
      }
    : {duration: 0.5, ease: [0.16, 1, 0.3, 1] as const};

  return (
    <svg
      viewBox="0 0 340 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto drop-shadow-[0_14px_18px_rgba(59,38,32,0.28)]"
    >
      <defs>
        {/* Brushed High-Carbon Steel Blade Gradient */}
        <linearGradient id="steelBladeUpper" x1="20" y1="60" x2="210" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="28%" stopColor="#E6E0D8" />
          <stop offset="68%" stopColor="#B8AFA5" />
          <stop offset="100%" stopColor="#7C736B" />
        </linearGradient>

        <linearGradient id="steelBladeLower" x1="20" y1="90" x2="210" y2="68" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ECE6DF" />
          <stop offset="40%" stopColor="#C4BBB1" />
          <stop offset="100%" stopColor="#6D645D" />
        </linearGradient>

        {/* Deep Chocolate-Bronze Forged Handle Finish */}
        <linearGradient id="bronzeHandle" x1="190" y1="20" x2="330" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#63453B" />
          <stop offset="45%" stopColor="#3E2821" />
          <stop offset="100%" stopColor="#261712" />
        </linearGradient>

        {/* Champagne Brass Screw & Highlight */}
        <linearGradient id="brassScrew" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4DCAC" />
          <stop offset="50%" stopColor="#C79A63" />
          <stop offset="100%" stopColor="#855C32" />
        </linearGradient>
      </defs>

      {/* LOWER BLADE + ERGONOMIC LARGE FINGER LOOP (Pivoted at 176, 75) */}
      <motion.g
        style={{transformOrigin: '176px 75px'}}
        animate={{rotate: bottomBladeAngles}}
        transition={snipTransition}
      >
        {/* Lower Steel Blade pointing LEFT */}
        <path
          d="M176 75 L22 76 C34 86, 86 90, 178 86 L208 82 Z"
          fill="url(#steelBladeLower)"
          stroke="#6A615A"
          strokeWidth="0.6"
        />
        {/* Honed Cutting Edge Highlight */}
        <line x1="25" y1="76.5" x2="176" y2="75.5" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.85" />

        {/* Lower Forged Handle & Large Finger Loop with true evenodd cutout */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M186 76 L238 83 C248 84, 256 76, 286 75 C318 74, 334 91, 326 110 C318 128, 284 132, 264 118 C252 109, 246 97, 232 94 L182 84 Z M269 96 C267 107, 280 116, 296 114 C312 112, 319 101, 313 91 C307 83, 291 81, 279 86 C272 89, 270 92, 269 96 Z"
          fill="url(#bronzeHandle)"
          stroke="#8E634B"
          strokeWidth="0.8"
        />
      </motion.g>

      {/* UPPER BLADE + THUMB LOOP (Pivoted at 176, 75) */}
      <motion.g
        style={{transformOrigin: '176px 75px'}}
        animate={{rotate: topBladeAngles}}
        transition={snipTransition}
      >
        {/* Upper Steel Blade pointing LEFT */}
        <path
          d="M176 75 L18 74 C30 62, 82 57, 178 62 L208 67 Z"
          fill="url(#steelBladeUpper)"
          stroke="#7E756E"
          strokeWidth="0.6"
        />
        {/* Specular Bevel Reflection along Upper Blade */}
        <path
          d="M32 71 C68 64, 122 62, 174 65"
          stroke="#FFFFFF"
          strokeWidth="1.4"
          strokeOpacity="0.85"
          strokeLinecap="round"
        />
        {/* Honed Cutting Edge */}
        <line x1="20" y1="73.6" x2="176" y2="74.6" stroke="#FFFFFF" strokeWidth="1" strokeOpacity="0.9" />

        {/* Upper Handle & Thumb Loop with true evenodd cutout */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M184 72 L228 64 C242 61, 246 44, 262 34 C282 22, 310 30, 314 50 C318 68, 296 80, 272 76 C256 73, 246 72, 234 73 L186 78 Z M260 52 C260 61, 272 67, 286 66 C298 65, 303 56, 300 47 C296 39, 282 36, 271 40 C263 43, 260 48, 260 52 Z"
          fill="url(#bronzeHandle)"
          stroke="#D7B28B"
          strokeWidth="0.8"
          strokeOpacity="0.7"
        />
      </motion.g>

      {/* CENTRAL ANTIQUE BRASS PIVOT SCREW */}
      <circle cx="176" cy="75" r="5.5" fill="url(#brassScrew)" stroke="#4A332C" strokeWidth="0.9" />
      <line x1="172.5" y1="72.5" x2="179.5" y2="77.5" stroke="#4A332C" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

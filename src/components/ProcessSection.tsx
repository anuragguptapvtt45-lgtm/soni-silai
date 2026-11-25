import {Ruler, Scissors, Shirt, Sparkles} from 'lucide-react';
import {PROCESS_STEPS, type ProcessStep} from '../data/boutiqueData';

function StepIcon({iconKey}: {iconKey: ProcessStep['iconKey']}) {
  const iconClass = 'w-4 h-4 text-[#C69C91]';
  switch (iconKey) {
    case 'style':
      return <Shirt className={iconClass} strokeWidth={1.35} />;
    case 'measure':
      return <Ruler className={iconClass} strokeWidth={1.35} />;
    case 'stitch':
      return <Scissors className={iconClass} strokeWidth={1.35} />;
    case 'ready':
      return <Sparkles className={iconClass} strokeWidth={1.35} />;
  }
}

export function ProcessSection() {
  return (
    <section
      id="how-it-works"
      className="bg-[#4A332C] text-[#FAF6F1] py-20 md:py-28"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#C69C91] mb-3">
            05 / Our Tailoring Process
          </p>
          <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.14] text-[#FAF6F1] [text-wrap:balance]">
            From your idea to your{' '}
            <span className="font-serif italic font-semibold text-[#D9B1A6]">
              wardrobe.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col border-t border-[#FAF6F1]/18 pt-6"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-serif italic text-[38px] leading-none text-[#FAF6F1]/90 tabular-nums">
                  {step.number}
                </span>
                <StepIcon iconKey={step.iconKey} />
              </div>

              <h3 className="font-display font-semibold text-[19px] text-[#FAF6F1] tracking-[0.01em]">
                {step.title}
              </h3>

              <p className="mt-2.5 text-[14px] leading-[1.65] text-[#DFCFC6]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {SERVICES} from '../data/boutiqueData';
import {EditorialImage} from './EditorialImage';

interface PricingSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function PricingSection({onSelectService}: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className="relative bg-[#FAF6F1] bg-linen-weave py-20 md:py-28 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Clean, Simple Header */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
            04 / Price List
          </p>
          <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.14] text-[#4A332C] [text-wrap:balance]">
            Simple &amp; clear{' '}
            <span className="font-serif italic font-semibold text-[#9E6E64]">
              prices.
            </span>
          </h2>
        </div>

        {/* 3x2 Visual Price Grid: Image + Name + Price only for instant recognition */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectService(item.name)}
              className="group bg-white border border-[#E2D5C8] hover:border-[#8E574C] p-3 text-left flex flex-col transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 shadow-[0_10px_28px_-18px_rgba(74,51,44,0.22)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
            >
              {/* Large Garment Photograph */}
              <div className="w-full overflow-hidden bg-[#F2EAE1]">
                <EditorialImage
                  src={item.image}
                  alt={item.alt}
                  title={item.name}
                  className="aspect-[4/3] w-full"
                  imgClassName="object-top group-hover:scale-[1.04]"
                />
              </div>

              {/* Clean Name + Bold High-Contrast Price Bar */}
              <div className="mt-3 pt-3 pb-1 px-1 border-t border-dashed border-[#DFD1C3] flex items-center justify-between gap-3">
                <h3 className="font-display font-semibold text-[19px] sm:text-[21px] leading-[1.2] text-[#3B2620] group-hover:text-[#7D473C] transition-colors">
                  {item.name}
                </h3>

                <span className="bg-[#4A332C] group-hover:bg-[#3B2620] text-[#FAF6F1] font-display font-bold text-[20px] sm:text-[22px] leading-none px-4 py-2.5 tabular-nums whitespace-nowrap shrink-0 transition-colors">
                  {item.price}
                </span>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center font-serif italic text-[13px] text-[#7B675E]">
          Tap any design to book · Sample starting rates.
        </p>
      </div>
    </section>
  );
}

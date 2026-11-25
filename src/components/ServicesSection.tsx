import {ArrowUpRight} from 'lucide-react';
import {SERVICES, type TailoringService} from '../data/boutiqueData';
import {EditorialImage} from './EditorialImage';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export function ServicesSection({onSelectService}: ServicesSectionProps) {
  const handleInquire = (service: TailoringService) => {
    onSelectService(service.name);
  };

  return (
    <section id="services" className="bg-[#FAF6F1] py-20 md:py-28">
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E2D5C8] relative">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
              02 / Bespoke Collection · Demo
            </p>
            <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.12] text-[#4A332C] [text-wrap:balance]">
              Tailored for the{' '}
              <span className="font-serif italic font-semibold text-[#9E6E64]">
                perfect
              </span>{' '}
              fit.
            </h2>
          </div>

          <p className="font-serif italic text-[15px] text-[#756159] md:max-w-xs md:text-right">
            Custom tailoring and sample starting prices crafted to your style.
          </p>
          <div className="absolute inset-x-0 -bottom-[3px] stitch-line opacity-60 pointer-events-none" aria-hidden="true" />
        </div>

        {/* 3x2 Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between"
            >
              <div>
                <div className="border border-[#E2D5C8] group-hover:border-[#C69C91] bg-[#F2EAE1] p-2 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5">
                  <EditorialImage
                    src={service.image}
                    alt={service.alt}
                    title={service.name}
                    className="aspect-[3/4] w-full"
                    imgClassName="group-hover:scale-[1.035]"
                  />
                </div>

                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="font-display font-semibold text-[21px] text-[#4A332C]">
                    {service.name}
                  </h3>
                  <span className="font-serif font-semibold text-[19px] text-[#9E6E64] tabular-nums whitespace-nowrap shrink-0">
                    {service.price}
                  </span>
                </div>

                <p className="mt-2 text-[14px] leading-[1.6] text-[#6E5A52]">
                  {service.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-dashed border-[#DFD1C3] flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleInquire(service)}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-[#4A332C] hover:text-[#9E6E64] border-b border-[#4A332C]/40 hover:border-[#9E6E64] pb-0.5 transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[12px] text-[#8A746B] tabular-nums">
                  {service.turnaround}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

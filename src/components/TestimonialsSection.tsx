import {Star} from 'lucide-react';
import {TESTIMONIALS} from '../data/boutiqueData';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-[#F2EAE1] bg-linen-weave border-y border-[#E2D5C8] py-20 md:py-28"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
            06 / Client Reviews
          </p>
          <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.14] text-[#4A332C] [text-wrap:balance]">
            Words that make us{' '}
            <span className="font-serif italic font-semibold text-[#9E6E64]">
              smile.
            </span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-[#FAF6F1] border border-[#E2D5C8] p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#C69C91]"
            >
              <div>
                <div
                  className="flex items-center gap-1 text-[#9E6E64]"
                  aria-label={`${item.rating} out of 5 stars`}
                >
                  {Array.from({length: item.rating}).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-3.5 h-3.5 fill-[#9E6E64] text-[#9E6E64]"
                    />
                  ))}
                </div>

                <blockquote className="mt-5 font-serif italic text-[17px] leading-[1.65] text-[#4A332C]">
                  {item.quote}
                </blockquote>
              </div>

              <div className="mt-7 pt-5 border-t border-dashed border-[#DFD1C3] flex items-center gap-3.5">
                <div
                  className="w-10 h-10 rounded-full border border-[#D9C9BA] bg-[#F2EAE1] flex items-center justify-center font-serif text-[13px] text-[#4A332C] shrink-0"
                  aria-hidden="true"
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#4A332C]">
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#8A746B]">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

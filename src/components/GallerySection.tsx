import {useEffect, useState} from 'react';
import {ChevronLeft, ChevronRight, Eye, X} from 'lucide-react';
import {
  GALLERY_ITEMS,
  type GalleryCategory,
  type GalleryItem,
} from '../data/boutiqueData';
import {EditorialImage} from './EditorialImage';

const FILTER_OPTIONS: GalleryCategory[] = [
  'All',
  'Blouses',
  'Suits & Kurtis',
  'Dresses & Craft',
];

interface GallerySectionProps {
  onSelectService: (serviceName: string) => void;
}

export function GallerySection({onSelectService}: GallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!lightboxItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
        const next = filteredItems[(idx + 1) % filteredItems.length];
        if (next) setLightboxItem(next);
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
        const prev =
          filteredItems[(idx - 1 + filteredItems.length) % filteredItems.length];
        if (prev) setLightboxItem(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxItem, filteredItems]);

  const handleBookLook = (item: GalleryItem) => {
    setLightboxItem(null);
    onSelectService(item.serviceRef);
  };

  const handleStepLightbox = (direction: 1 | -1) => {
    if (!lightboxItem || filteredItems.length === 0) return;
    const idx = filteredItems.findIndex((i) => i.id === lightboxItem.id);
    const nextIdx =
      (idx + direction + filteredItems.length) % filteredItems.length;
    setLightboxItem(filteredItems[nextIdx]);
  };

  return (
    <section
      id="gallery"
      className="relative bg-[#F2EAE1] bg-linen-weave border-y border-[#E2D5C8] py-20 md:py-28 overflow-hidden"
    >
      {/* Delicate champagne thread curve in top margin */}
      <svg
        viewBox="0 0 420 120"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none hidden lg:block absolute right-0 top-6 w-96 h-24 opacity-35"
      >
        <path
          d="M10 92 C 110 24, 240 110, 415 32"
          stroke="#9E6E64"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
              03 / Curated Gallery · Demo
            </p>
            <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.12] text-[#4A332C] [text-wrap:balance]">
              Small details.{' '}
              <span className="font-serif italic font-semibold text-[#9E6E64]">
                Timeless
              </span>{' '}
              creations.
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Interactive Filter Tabs */}
            <div
              role="tablist"
              aria-label="Gallery category filter"
              className="inline-flex flex-wrap items-center gap-1 bg-[#FAF6F1] border border-[#E2D5C8] p-1"
            >
              {FILTER_OPTIONS.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-1.5 text-[12.5px] transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#4A332C] text-[#FAF6F1] font-medium'
                        : 'text-[#6E5A52] hover:text-[#4A332C]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                if (filteredItems[0]) setLightboxItem(filteredItems[0]);
              }}
              className="border border-[#C9B7A7] bg-[#FAF6F1] hover:border-[#4A332C] text-[#4A332C] text-[12.5px] font-medium px-4 py-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              View Lookbook
            </button>
          </div>
        </div>

        {/* Asymmetrical Editorial Grid matching reference design */}
        {activeCategory === 'All' ? (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                className={`group text-left flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] cursor-pointer ${item.gridClass}`}
              >
                <div className="relative w-full flex-1 border border-[#E2D5C8] bg-[#FAF6F1] p-2 overflow-hidden">
                  <EditorialImage
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    className={`w-full ${item.aspectClass}`}
                    imgClassName="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-[#3B2620]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-[12px] tracking-[0.12em] uppercase text-[#FAF6F1]">
                      Inspect Look
                    </span>
                    <Eye className="w-4 h-4 text-[#FAF6F1]" />
                  </div>
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-3">
                  <span className="font-serif italic text-[15px] text-[#4A332C] group-hover:text-[#9E6E64] transition-colors">
                    {item.romanNumeral}. {item.title}
                  </span>
                  <span className="text-[12px] text-[#8A746B] hidden sm:inline">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLightboxItem(item)}
                className="group text-left flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] cursor-pointer"
              >
                <div className="relative w-full border border-[#E2D5C8] bg-[#FAF6F1] p-2 overflow-hidden">
                  <EditorialImage
                    src={item.image}
                    alt={item.alt}
                    title={item.title}
                    className="w-full aspect-[3/4]"
                    imgClassName="group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-2 bg-gradient-to-t from-[#3B2620]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-[12px] tracking-[0.12em] uppercase text-[#FAF6F1]">
                      Inspect Look
                    </span>
                    <Eye className="w-4 h-4 text-[#FAF6F1]" />
                  </div>
                </div>
                <div className="mt-2.5 flex items-baseline justify-between gap-3">
                  <span className="font-serif italic text-[15px] text-[#4A332C] group-hover:text-[#9E6E64] transition-colors">
                    {item.romanNumeral}. {item.title}
                  </span>
                  <span className="text-[12px] text-[#8A746B]">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Editorial Lookbook Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxItem.title} lookbook preview`}
          className="fixed inset-0 z-50 bg-[#2C1D18]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#FAF6F1] border border-[#E2D5C8] grid grid-cols-1 md:grid-cols-12 overflow-hidden max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxItem(null)}
              aria-label="Close lookbook preview"
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-[#FAF6F1]/90 border border-[#E2D5C8] text-[#4A332C] hover:bg-[#4A332C] hover:text-[#FAF6F1] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="md:col-span-7 bg-[#EFE6DC] relative max-h-[55vh] md:max-h-[82vh]">
              <EditorialImage
                src={lightboxItem.image}
                alt={lightboxItem.alt}
                title={lightboxItem.title}
                className="w-full h-full aspect-[3/4] md:aspect-auto"
              />
            </div>

            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF6F1]">
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#9E6E64]">
                  Look {lightboxItem.romanNumeral} · {lightboxItem.category}
                </p>
                <h3 className="mt-2 font-display font-semibold text-[28px] text-[#4A332C]">
                  {lightboxItem.title}
                </h3>
                <p className="mt-1 font-serif italic text-[16px] text-[#9E6E64]">
                  {lightboxItem.subtitle}
                </p>

                <div className="my-5 h-[1px] bg-[#E2D5C8]" />

                <p className="text-[14px] leading-[1.7] text-[#614D45]">
                  {lightboxItem.fabricNote}
                </p>
                <p className="mt-4 text-[12.5px] text-[#8A746B]">
                  Recommended Service: <strong className="text-[#4A332C] font-medium">{lightboxItem.serviceRef}</strong>
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <button
                  type="button"
                  onClick={() => handleBookLook(lightboxItem)}
                  className="w-full bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[13.5px] font-medium py-3 px-5 transition-colors cursor-pointer"
                >
                  Book Similar Look
                </button>

                <div className="flex items-center justify-between pt-2 border-t border-[#EAE0D5]">
                  <button
                    type="button"
                    onClick={() => handleStepLightbox(-1)}
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-[#6E5A52] hover:text-[#4A332C] py-1.5 px-2 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepLightbox(1)}
                    className="inline-flex items-center gap-1.5 text-[12.5px] text-[#6E5A52] hover:text-[#4A332C] py-1.5 px-2 cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

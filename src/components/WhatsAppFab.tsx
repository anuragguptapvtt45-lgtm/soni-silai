import {MessageCircle} from 'lucide-react';
import {CONTACT_INFO} from '../data/boutiqueData';

export function WhatsAppFab() {
  const digitsOnly = CONTACT_INFO.phone.replace(/\D/g, '');
  const prefilledText = encodeURIComponent(
    'Hello SONI SILAI, I would like to inquire about custom stitching and appointments.'
  );
  const whatsappUrl = `https://wa.me/${digitsOnly}?text=${prefilledText}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp (${CONTACT_INFO.phone})`}
      title={`WhatsApp ${CONTACT_INFO.phone}`}
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center gap-2.5 h-12 px-3.5 sm:px-5 rounded-full bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] border border-[#9E6E64]/60 shadow-lg transition-transform duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6F1]"
    >
      <MessageCircle className="w-5 h-5 text-[#D9B1A6] shrink-0" strokeWidth={1.75} />
      <span className="hidden sm:inline text-[13px] font-medium tracking-wide whitespace-nowrap shrink-0">
        WhatsApp
      </span>
    </a>
  );
}

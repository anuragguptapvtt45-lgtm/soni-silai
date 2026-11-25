import {useState} from 'react';
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  X,
} from 'lucide-react';
import {CONTACT_INFO} from '../data/boutiqueData';

import {StudioMap} from './StudioMap';

export function ContactSection() {
  const [whatsAppOpen, setWhatsAppOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState(
    'Hello SONI SILAI, I would like to inquire about custom stitching & measurements.'
  );
  const [quickSent, setQuickSent] = useState(false);

  const handleSendDemoMessage = () => {
    setQuickSent(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#F2EAE1] border-t border-[#E2D5C8] py-20 md:py-28"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
                08 / Demo Contact Details
              </p>
              <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.14] text-[#4A332C]">
                Get in{' '}
                <span className="font-serif italic font-semibold text-[#9E6E64]">
                  touch.
                </span>
              </h2>
              <p className="mt-2 font-serif italic text-[16px] text-[#756159]">
                {CONTACT_INFO.brand} — {CONTACT_INFO.tagline}
              </p>

              <ul className="mt-8 space-y-4 text-[14.5px] text-[#4A332C]">
                <li className="flex items-start gap-3.5">
                  <Phone
                    className="w-4 h-4 text-[#9E6E64] mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="tabular-nums">{CONTACT_INFO.phone}</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Mail
                    className="w-4 h-4 text-[#9E6E64] mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <MapPin
                    className="w-4 h-4 text-[#9E6E64] mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <Clock
                    className="w-4 h-4 text-[#9E6E64] mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span>{CONTACT_INFO.hours}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => {
                  setQuickSent(false);
                  setWhatsAppOpen(true);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[13.5px] font-medium px-7 py-3.5 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire via WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Live Google Maps Studio Location Card */}
          <div className="lg:col-span-7 flex">
            <div className="w-full bg-[#FAF6F1] border border-[#E2D5C8] p-2.5 flex flex-col min-h-[420px]">
              <StudioMap
                address={CONTACT_INFO.address}
                mapLocation={CONTACT_INFO.mapLocation}
                coordinates={CONTACT_INFO.coordinates}
                brand={CONTACT_INFO.brand}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Interactive WhatsApp Demo Inquiry Modal */}
      {whatsAppOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="WhatsApp Inquiry Preview"
          className="fixed inset-0 z-50 bg-[#2C1D18]/75 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setWhatsAppOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#FAF6F1] border border-[#E2D5C8] p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setWhatsAppOpen(false)}
              aria-label="Close WhatsApp inquiry modal"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#6E5A52] hover:text-[#4A332C] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#9E6E64]">
              Boutique Concierge · Demo
            </p>
            <h3 className="mt-2 font-display font-semibold text-[24px] text-[#4A332C]">
              WhatsApp Quick Inquiry
            </h3>
            <p className="mt-1 text-[13px] text-[#756159]">
              Send a sample styling inquiry to {CONTACT_INFO.phone}.
            </p>

            {quickSent ? (
              <div className="mt-6 bg-[#F2EAE1] border border-[#E2D5C8] p-5 text-center">
                <p className="font-serif italic text-[17px] text-[#4A332C]">
                  Message queued for SONI SILAI!
                </p>
                <p className="mt-2 text-[13px] text-[#614D45]">
                  This is a demo preview. In production, your message opens
                  directly in WhatsApp with our atelier team.
                </p>
                <button
                  type="button"
                  onClick={() => setWhatsAppOpen(false)}
                  className="mt-4 bg-[#4A332C] text-[#FAF6F1] text-[13px] font-medium px-5 py-2.5 cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="mt-5 space-y-4">
                <textarea
                  rows={4}
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  className="w-full bg-[#F2EAE1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none p-3 text-[13.5px] text-[#4A332C]"
                />
                <button
                  type="button"
                  onClick={handleSendDemoMessage}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[13.5px] font-medium py-3 px-5 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Demo Inquiry</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

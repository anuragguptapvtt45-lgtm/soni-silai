import {useEffect, useState, type FormEvent} from 'react';
import {CheckCircle2} from 'lucide-react';
import {SERVICES} from '../data/boutiqueData';

interface AppointmentSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

interface BookingFormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  outfitDescription: string;
  notes: string;
}

const TIME_SLOTS = [
  '11:00 AM',
  '12:30 PM',
  '02:30 PM',
  '04:30 PM',
  '06:00 PM',
];

export function AppointmentSection({
  selectedService,
  onServiceChange,
}: AppointmentSectionProps) {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || SERVICES[0].name,
    preferredDate: '',
    preferredTime: '11:00 AM',
    outfitDescription: '',
    notes: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [confirmedRef, setConfirmedRef] = useState<string | null>(null);

  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({...prev, service: selectedService}));
    }
  }, [selectedService]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim()) {
      setError('Please enter your full name and phone number to request a slot.');
      return;
    }
    setError(null);
    const refId = `SS-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedRef(refId);
  };

  const handleReset = () => {
    setConfirmedRef(null);
    setForm((prev) => ({
      ...prev,
      fullName: '',
      phone: '',
      email: '',
      preferredDate: '',
      outfitDescription: '',
      notes: '',
    }));
  };

  return (
    <section id="appointment" className="bg-[#FAF6F1] bg-linen-weave py-20 md:py-28">
      <div className="relative z-10 max-w-[920px] mx-auto px-6 md:px-10">
        <div className="text-center">
          <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#9E6E64] mb-3">
            07 / Demo Appointment Request
          </p>
          <h2 className="font-display font-semibold text-[34px] md:text-[46px] leading-[1.14] text-[#4A332C] [text-wrap:balance]">
            Let’s create something{' '}
            <span className="font-serif italic font-semibold text-[#9E6E64]">
              beautiful.
            </span>
          </h2>
          <div className="w-24 stitch-line mx-auto mt-5 opacity-70" aria-hidden="true" />
        </div>

        <div className="mt-10 bg-[#F4ECE3] border border-[#E2D5C8] outline outline-1 outline-dashed outline-[#DFD1C3] -outline-offset-[10px] p-6 sm:p-10 md:p-12">
          {confirmedRef ? (
            <div className="py-6 text-center max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#4A332C] text-[#FAF6F1] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#9E6E64]">
                Demo Appointment Received · {confirmedRef}
              </p>
              <h3 className="mt-2 font-display font-semibold text-[28px] text-[#4A332C]">
                Thank you, {form.fullName}
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.65] text-[#614D45]">
                Your demo tailoring request for{' '}
                <strong className="font-medium text-[#4A332C]">
                  {form.service}
                </strong>{' '}
                {form.preferredDate ? `on ${form.preferredDate} ` : ''}at{' '}
                {form.preferredTime} has been logged. Our boutique stylist would
                confirm measurements on {form.phone}.
              </p>

              <div className="mt-6 bg-[#FAF6F1] border border-[#E2D5C8] p-5 text-left text-[13.5px] space-y-2 text-[#614D45]">
                <div className="flex justify-between gap-4">
                  <span className="text-[#8A746B]">Service Selected</span>
                  <span className="font-medium text-[#4A332C]">{form.service}</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-[#8A746B]">Time Slot</span>
                  <span className="font-medium text-[#4A332C] tabular-nums">
                    {form.preferredDate || 'Flexible Date'} · {form.preferredTime}
                  </span>
                </div>
                {form.outfitDescription && (
                  <div className="flex justify-between gap-4">
                    <span className="text-[#8A746B]">Outfit Note</span>
                    <span className="font-medium text-[#4A332C] text-right">
                      {form.outfitDescription}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="mt-7 border border-[#4A332C] text-[#4A332C] hover:bg-[#4A332C] hover:text-[#FAF6F1] text-[13px] font-medium px-6 py-3 transition-colors cursor-pointer"
              >
                Book Another Appointment
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {error && (
                <div
                  role="alert"
                  className="bg-[#FAF6F1] border border-[#9E6E64] px-4 py-3 text-[13.5px] text-[#4A332C]"
                >
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="booking-name"
                    className="block text-[12px] font-medium text-[#4A332C] mb-2"
                  >
                    Full Name <span className="text-[#9E6E64]">*</span>
                  </label>
                  <input
                    id="booking-name"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((prev) => ({...prev, fullName: e.target.value}))
                    }
                    placeholder="e.g., Priya Sharma"
                    className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] placeholder:text-[#A39289]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="block text-[12px] font-medium text-[#4A332C] mb-2"
                  >
                    Phone Number <span className="text-[#9E6E64]">*</span>
                  </label>
                  <input
                    id="booking-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm((prev) => ({...prev, phone: e.target.value}))
                    }
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] placeholder:text-[#A39289] tabular-nums"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-[12px] font-medium text-[#4A332C] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({...prev, email: e.target.value}))
                    }
                    placeholder="you@example.com"
                    className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] placeholder:text-[#A39289]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-[12px] font-medium text-[#4A332C] mb-2"
                  >
                    Select Service
                  </label>
                  <select
                    id="booking-service"
                    value={form.service}
                    onChange={(e) => {
                      setForm((prev) => ({...prev, service: e.target.value}));
                      onServiceChange(e.target.value);
                    }}
                    className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C]"
                  >
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name} ({service.price})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-[12px] font-medium text-[#4A332C] mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        preferredDate: e.target.value,
                      }))
                    }
                    className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] tabular-nums"
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-[12px] font-medium text-[#4A332C] mb-2"
                  >
                    Preferred Time
                  </label>
                  <select
                    id="booking-time"
                    value={form.preferredTime}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        preferredTime: e.target.value,
                      }))
                    }
                    className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] tabular-nums"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="booking-outfit"
                  className="block text-[12px] font-medium text-[#4A332C] mb-2"
                >
                  Outfit Description
                </label>
                <input
                  id="booking-outfit"
                  type="text"
                  value={form.outfitDescription}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      outfitDescription: e.target.value,
                    }))
                  }
                  placeholder="e.g., Sweetheart neckline pastel silk blouse with back tassels"
                  className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] placeholder:text-[#A39289]"
                />
              </div>

              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-[12px] font-medium text-[#4A332C] mb-2"
                >
                  Additional Notes
                </label>
                <textarea
                  id="booking-notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) =>
                    setForm((prev) => ({...prev, notes: e.target.value}))
                  }
                  placeholder="Share fabric details, sleeve preferences, or upcoming occasion dates..."
                  className="w-full bg-[#FAF6F1] border border-[#DDD0C3] focus:border-[#4A332C] focus:outline-none px-3.5 py-2.5 text-[14px] text-[#4A332C] placeholder:text-[#A39289] resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[14px] font-medium py-3.5 px-6 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4ECE3]"
              >
                Book My Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

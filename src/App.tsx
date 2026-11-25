/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {useEffect, useState} from 'react';
import {AboutSection} from './components/AboutSection';
import {AppointmentSection} from './components/AppointmentSection';
import {CinematicIntro} from './components/CinematicIntro';
import {ContactSection} from './components/ContactSection';
import {Footer} from './components/Footer';
import {GallerySection} from './components/GallerySection';
import {HeroSection} from './components/HeroSection';
import {JoinAtelierSection} from './components/JoinAtelierSection';
import {Navbar} from './components/Navbar';
import {PricingSection} from './components/PricingSection';
import {ProcessSection} from './components/ProcessSection';
import {ServicesSection} from './components/ServicesSection';
import {TestimonialsSection} from './components/TestimonialsSection';
import {WhatsAppFab} from './components/WhatsAppFab';
import {SERVICES} from './data/boutiqueData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICES[0].name
  );
  const [mapsQuotaExceeded, setMapsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setMapsQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  };

  const handleSelectServiceAndBook = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F1] text-[#3E2A24] selection:bg-[#9E6E64] selection:text-[#FAF6F1]">
      <CinematicIntro />
      {mapsQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}
      <Navbar onBookClick={scrollToAppointment} />

      <main className="flex-1 relative">
        <HeroSection onBookClick={scrollToAppointment} />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectServiceAndBook} />
        <GallerySection onSelectService={handleSelectServiceAndBook} />
        <PricingSection onSelectService={handleSelectServiceAndBook} />
        <ProcessSection />
        <TestimonialsSection />
        <AppointmentSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
        <ContactSection />
        <JoinAtelierSection />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}

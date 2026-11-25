import {motion, useReducedMotion} from 'motion/react';
import {MessageCircle, Phone} from 'lucide-react';
import {EditorialImage} from './EditorialImage';

const HIGHLIGHTS = [
  {
    number: '01',
    text: 'सिलाई सीखने का अवसर',
  },
  {
    number: '02',
    text: 'अपने हुनर को निखारने का मौका',
  },
  {
    number: '03',
    text: 'काम और कमाई के अवसरों से जुड़ने की संभावना',
  },
];

export function JoinAtelierSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="join-us"
      lang="hi"
      className="relative bg-[#FAF6F1] bg-linen-weave border-t border-[#E2D5C8] py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle decorative sewing-thread curve along the upper-right and lower-left margins */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      >
        <svg
          viewBox="0 0 1440 680"
          fill="none"
          preserveAspectRatio="none"
          className="hidden lg:block absolute inset-0 w-full h-full opacity-40"
        >
          <path
            d="M-30 70 C 210 24, 410 86, 610 40"
            stroke="#C69C91"
            strokeWidth="1.05"
            strokeDasharray="5 5"
            className="animate-thread-flow"
          />
          <path
            d="M920 640 C 1100 660, 1270 595, 1465 628"
            stroke="#B89286"
            strokeWidth="1"
            strokeDasharray="4 5"
            className="animate-thread-flow"
          />
        </svg>

        {/* Delicate needle & thread illustration in upper-right margin */}
        <svg
          viewBox="0 0 140 84"
          fill="none"
          className="hidden md:block absolute right-8 top-8 w-32 h-20 opacity-45"
        >
          <path
            d="M12 64 C 46 72, 68 38, 108 26"
            stroke="#9E6E64"
            strokeWidth="1.05"
            strokeDasharray="3.5 3.5"
            className="animate-thread-flow"
          />
          <path
            d="M124 14 L90 48"
            stroke="#4A332C"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <ellipse
            cx="121"
            cy="17"
            rx="1"
            ry="2.2"
            transform="rotate(45 121 17)"
            stroke="#4A332C"
            strokeWidth="0.95"
            fill="#FAF6F1"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Framed Craftsmanship Photograph */}
          <motion.div
            initial={shouldReduceMotion ? {opacity: 1} : {opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-5"
          >
            <div className="relative max-w-[460px] mx-auto lg:mx-0">
              {/* Offset stitched hairline frame */}
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -top-4 -left-4 right-4 bottom-4 border border-dashed border-[#D7C6B6] pointer-events-none"
              >
                <svg
                  viewBox="0 0 110 110"
                  fill="none"
                  className="absolute -top-px -left-px w-24 h-24 overflow-visible"
                >
                  <defs>
                    <mask id="join-frame-corner-mask">
                      <motion.path
                        d="M1 86 V1 H86"
                        stroke="white"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={shouldReduceMotion ? {pathLength: 1} : {pathLength: 0}}
                        whileInView={{pathLength: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1.4, ease: [0.16, 1, 0.3, 1]}}
                      />
                    </mask>
                  </defs>
                  <path
                    d="M1 86 V1 H86"
                    stroke="#8E574C"
                    strokeWidth="1.4"
                    strokeDasharray="4 4"
                    mask="url(#join-frame-corner-mask)"
                  />
                </svg>
              </div>

              <div className="relative bg-white p-3 border border-[#E2D5C8]">
                <EditorialImage
                  src="/src/assets/images/join_learning_craft_1795604901391.jpg"
                  alt="SONI SILAI स्टूडियो में सिलाई मशीन और रेशमी कपड़े पर कारीगरी करती हुई महिला शिल्पकार"
                  title="सिलाई कला एवं प्रशिक्षण"
                  className="aspect-[3/4] w-full"
                  imgClassName="object-top hover:scale-[1.03]"
                />
              </div>

              <div className="mt-3.5 flex items-center justify-between gap-4 text-[12px] text-[#756159]">
                <span>सिलाई कला · सीख और आत्मनिर्भरता</span>
                <span className="font-serif italic text-[#9E6E64]">
                  SONI SILAI Studio
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Hindi Copy, Skill Points & Direct Contact CTAs */}
          <motion.div
            initial={shouldReduceMotion ? {opacity: 1} : {opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-80px'}}
            transition={{duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1]}}
            className="lg:col-span-7 lg:pl-4"
          >
            {/* Small label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[12px] font-medium tracking-[0.06em] text-[#9E6E64]">
                एक नई शुरुआत
              </span>
              <span className="w-16 stitch-line" aria-hidden="true" />
            </div>

            {/* Main heading */}
            <h2 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.24] text-[#3B2620] [text-wrap:balance]">
              सीखिए सिलाई का हुनर,{' '}
              <span className="text-[#8E574C]">बनाइए अपनी पहचान</span>
            </h2>

            {/* Supporting description */}
            <p className="mt-5 text-[16px] md:text-[17px] leading-[1.85] text-[#614D45] max-w-2xl">
              अगर आप सिलाई सीखना चाहते हैं, अपने हुनर को निखारना चाहते हैं या
              काम के अवसरों के ज़रिए आत्मनिर्भर बनना चाहते हैं, तो SONI SILAI से
              जुड़िए। आइए, हमारे साथ सीखें, आगे बढ़ें और कुछ नया करें।
            </p>

            {/* Three Highlight Points */}
            <ul className="mt-8 border-t border-dashed border-[#DFD1C3] divide-y divide-dashed divide-[#DFD1C3] max-w-xl">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item.number}
                  className="py-3.5 flex items-center gap-4 text-[15.5px] md:text-[16px] font-medium text-[#4A332C]"
                >
                  <span className="font-mono text-[12px] tracking-[0.14em] text-[#9E6E64] tabular-nums shrink-0">
                    {item.number}
                  </span>
                  <span
                    className="w-4 h-px bg-[#C69C91] shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Editorial CTA Block */}
            <div className="mt-9 bg-[#F2EAE1] border border-[#E2D5C8] outline outline-1 outline-dashed outline-[#DFD1C3] -outline-offset-[6px] p-6 sm:p-8 max-w-2xl">
              <div className="flex items-center gap-2 mb-3" aria-hidden="true">
                <span className="w-12 stitch-line" />
                <span className="text-[10px] text-[#9E6E64]">◇</span>
                <span className="w-24 stitch-line" />
              </div>

              <h3 className="font-display font-bold text-[22px] sm:text-[26px] leading-[1.32] text-[#3B2620]">
                क्या आप SONI SILAI का हिस्सा बनना चाहते हैं?
              </h3>

              <p className="mt-2 text-[15px] leading-[1.75] text-[#614D45]">
                आज ही हमसे संपर्क करें और जुड़ने के बारे में अधिक जानकारी प्राप्त
                करें।
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+918607982706"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#4A332C] hover:bg-[#3B2620] text-[#FAF6F1] text-[14px] font-medium px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EAE1]"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.7} />
                  <span>कॉल करें</span>
                </a>

                <a
                  href="https://wa.me/918607982706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 border border-[#4A332C] bg-[#FAF6F1] hover:bg-[#4A332C] text-[#4A332C] hover:text-[#FAF6F1] text-[14px] font-medium px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9E6E64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2EAE1]"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.7} />
                  <span>WhatsApp पर जुड़ें</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

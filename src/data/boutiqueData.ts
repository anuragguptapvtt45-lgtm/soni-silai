export interface TailoringService {
  id: string;
  name: string;
  price: string;
  priceValue: number;
  description: string;
  image: string;
  alt: string;
  turnaround: string;
}

export type GalleryCategory = 'All' | 'Blouses' | 'Suits & Kurtis' | 'Dresses & Craft';

export interface GalleryItem {
  id: string;
  romanNumeral: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  subtitle: string;
  fabricNote: string;
  image: string;
  alt: string;
  gridClass: string;
  aspectClass: string;
  serviceRef: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconKey: 'style' | 'measure' | 'stitch' | 'ready';
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  initials: string;
  role: string;
  rating: number;
}

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_festive_couture_1795590000516.jpg',
  alt: 'Indian woman wearing a dusty-rose silk embroidered anarkali suit tailored by SONI SILAI',
  lookLabel: 'LOOK 01 — FESTIVE COUTURE',
  tagline: 'Stitched with Love ♡',
};

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  lookLabel: string;
  tagline: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'look-01',
    image: '/src/assets/images/hero_festive_couture_1795590000516.jpg',
    alt: 'Indian woman wearing a dusty-rose silk embroidered anarkali suit tailored by SONI SILAI',
    lookLabel: 'LOOK 01 — FESTIVE COUTURE',
    tagline: 'Stitched with Love ♡',
  },
  {
    id: 'look-02',
    image: '/src/assets/images/service_designer_blouse_1795590004702.jpg',
    alt: 'Bridal dusty-rose velvet designer blouse with zardozi embroidery and handmade dori tassels',
    lookLabel: 'LOOK 02 — BRIDAL BLOUSE',
    tagline: 'Handcrafted Finish ♡',
  },
  {
    id: 'look-03',
    image: '/src/assets/images/service_suit_stitching_1795590002102.jpg',
    alt: 'Bespoke champagne-beige Chanderi silk salwar suit with delicate floral border',
    lookLabel: 'LOOK 03 — CHANDERI SUIT',
    tagline: 'Tailored Elegance ♡',
  },
  {
    id: 'look-04',
    image: '/src/assets/images/service_custom_dress_1795590003370.jpg',
    alt: 'Custom tailored dusty-mauve pleated silk Indo-western evening dress with zari waist belt',
    lookLabel: 'LOOK 04 — CUSTOM GOWN',
    tagline: 'Bespoke Silhouette ♡',
  },
  {
    id: 'look-05',
    image: '/src/assets/images/service_blouse_stitching_1795590001584.jpg',
    alt: 'Tailored deep chocolate-brown raw silk saree blouse with gold piping and ivory drape',
    lookLabel: 'LOOK 05 — HERITAGE BLOUSE',
    tagline: 'Precision Fit ♡',
  },
];

export interface AboutSlide {
  id: string;
  image: string;
  alt: string;
  label: string;
  caption: string;
}

export const ABOUT_SLIDES: AboutSlide[] = [
  {
    id: 'sewing-machine',
    image: '/src/assets/images/about_sewing_machine_1795602457785.jpg',
    alt: 'Master tailor guiding dusty-rose Chanderi silk fabric under a classic sewing machine in the SONI SILAI studio',
    label: '01 — PRECISION SEWING MACHINE',
    caption: 'Master-guided machine stitching on fine Chanderi silk for crisp, lasting seams.',
  },
  {
    id: 'sewing-needle-detail',
    image: '/src/assets/images/about_sewing_detail_1795602458168.jpg',
    alt: 'Close-up of a sewing machine needle and presser foot stitching champagne-gold thread onto a dusty-rose silk blouse seam',
    label: '02 — FINE SEAM FINISHING',
    caption: 'Balanced stitch tension with silk-matched threads for delicate blouses and kurtis.',
  },
  {
    id: 'pattern-cutting',
    image: '/src/assets/images/about_pattern_cutting_1795602458622.jpg',
    alt: 'Tailoring studio worktable with chalk-marked dusty-rose silk, brass shears, measuring tape, and sewing machine',
    label: '03 — BESPOKE PATTERN DRAFTING',
    caption: 'Individual measurement drafting and hand-chalked cutting tailored to your posture.',
  },
  {
    id: 'hand-embroidery',
    image: '/src/assets/images/about_tailoring_craft_1795590000779.jpg',
    alt: 'Hand embroidery on dusty-rose silk fabric with brass tailoring shears and measuring tape',
    label: '04 — ARTISANAL HANDWORK',
    caption: 'Hand-tacked inner hems, dori loops, and delicate zardozi finishing touches.',
  },
];

export const ABOUT_MEDIA = {
  image: ABOUT_SLIDES[0].image,
  alt: ABOUT_SLIDES[0].alt,
  caption: ABOUT_SLIDES[0].caption,
};

export const SERVICES: TailoringService[] = [
  {
    id: 'suit-stitching',
    name: 'Suit Stitching',
    price: '₹799',
    priceValue: 799,
    description:
      'Crisp finishing and tailored comfort for salwar suits, palazzo sets, anarkalis, and churidar silhouettes.',
    image: '/src/assets/images/service_suit_stitching_1795590002102.jpg',
    alt: 'Bespoke champagne-beige Chanderi silk salwar suit with delicate floral border',
    turnaround: '5–7 Days',
  },
  {
    id: 'blouse-stitching',
    name: 'Blouse Stitching',
    price: '₹499',
    priceValue: 499,
    description:
      'Classic everyday and festive saree blouses with soft cotton lining, neat piping, and sculpted princess seams.',
    image: '/src/assets/images/service_blouse_stitching_1795590001584.jpg',
    alt: 'Tailored deep chocolate-brown raw silk saree blouse with gold piping paired with ivory saree',
    turnaround: '3–5 Days',
  },
  {
    id: 'kurti-stitching',
    name: 'Kurti Stitching',
    price: '₹599',
    priceValue: 599,
    description:
      'A-line, straight-cut, and flared kurtis crafted with refined necklines, clean side slits, and neat hems.',
    image: '/src/assets/images/service_kurti_stitching_1795590002910.jpg',
    alt: 'Tailored cream cotton-silk A-line kurti with tone-on-tone neckline embroidery',
    turnaround: '4–5 Days',
  },
  {
    id: 'custom-dress',
    name: 'Custom Dress',
    price: '₹999',
    priceValue: 999,
    description:
      'Indo-western gowns, ethnic maxis, and contemporary occasion dresses tailored to your exact posture and flow.',
    image: '/src/assets/images/service_custom_dress_1795590003370.jpg',
    alt: 'Custom tailored dusty-mauve pleated silk Indo-western evening dress with zari waist belt',
    turnaround: '7–10 Days',
  },
  {
    id: 'designer-blouse',
    name: 'Designer Blouse',
    price: '₹1,299',
    priceValue: 1299,
    description:
      'Statement back necklines, padded structure, handcrafted dori tassels, and intricate bridal finishing.',
    image: '/src/assets/images/service_designer_blouse_1795590004702.jpg',
    alt: 'Back-detail dusty-rose velvet designer blouse with zardozi embroidery and handmade dori tassels',
    turnaround: '7–9 Days',
  },
  {
    id: 'alterations',
    name: 'Alterations',
    price: '₹199',
    priceValue: 199,
    description:
      'Precision resizing, blouse refitting, sleeve adjustments, and clean hemming for your cherished garments.',
    image: '/src/assets/images/service_alterations_fit_1795590003401.jpg',
    alt: 'Tailoring dress form with dusty-rose silk garment pinned for bespoke fitting and alteration',
    turnaround: '24–48 Hours',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'designer-blouses',
    romanNumeral: 'I',
    title: 'Designer Blouses',
    category: 'Blouses',
    subtitle: 'Hand-piped velvet & silk bridal backs',
    fabricNote: 'Dusty-rose silk velvet with antique zardozi border and custom latkans.',
    image: '/src/assets/images/service_designer_blouse_1795590004702.jpg',
    alt: 'Designer dusty-rose velvet saree blouse with deep sculpted back and dori tassels',
    gridClass: 'md:col-span-5 md:row-span-2',
    aspectClass: 'aspect-[3/4] md:aspect-auto md:h-full md:min-h-[540px]',
    serviceRef: 'Designer Blouse',
  },
  {
    id: 'ethnic-suits',
    romanNumeral: 'II',
    title: 'Ethnic Suits',
    category: 'Suits & Kurtis',
    subtitle: 'Chanderi & organza festive ensembles',
    fabricNote: 'Handloom champagne Chanderi tailored with pure mulmul lining and tissue edging.',
    image: '/src/assets/images/service_suit_stitching_1795590002102.jpg',
    alt: 'Tailored champagne-beige Chanderi silk salwar suit with embroidered neckline',
    gridClass: 'md:col-span-7',
    aspectClass: 'aspect-[4/3] md:aspect-[16/9]',
    serviceRef: 'Suit Stitching',
  },
  {
    id: 'custom-kurtis',
    romanNumeral: 'III',
    title: 'Custom Kurtis',
    category: 'Suits & Kurtis',
    subtitle: 'Effortless everyday silhouettes',
    fabricNote: 'Ivory cotton-silk A-line cut featuring delicate notch collar and resham detailing.',
    image: '/src/assets/images/service_kurti_stitching_1795590002910.jpg',
    alt: 'Cream cotton-silk A-line kurti tailored with delicate neckline threadwork',
    gridClass: 'md:col-span-3',
    aspectClass: 'aspect-[3/4]',
    serviceRef: 'Kurti Stitching',
  },
  {
    id: 'festive-outfits',
    romanNumeral: 'IV',
    title: 'Festive Outfits',
    category: 'Suits & Kurtis',
    subtitle: 'Graceful kalidar & anarkali drapes',
    fabricNote: 'Sixteen-kali dusty-rose silk anarkali paired with scalloped organza dupatta.',
    image: '/src/assets/images/hero_festive_couture_1795590000516.jpg',
    alt: 'Dusty-rose silk embroidered anarkali festive outfit with organza dupatta',
    gridClass: 'md:col-span-4',
    aspectClass: 'aspect-[3/4]',
    serviceRef: 'Suit Stitching',
  },
  {
    id: 'embroidery-details',
    romanNumeral: 'V',
    title: 'Embroidery Details',
    category: 'Dresses & Craft',
    subtitle: 'Fine resham, pearl & zari finishing',
    fabricNote: 'Hand-tacked pearl motifs and shaded silk threadwork along sheer organza sleeves.',
    image: '/src/assets/images/gallery_embroidery_closeup_1795590005561.jpg',
    alt: 'Close-up of Indian hand embroidery with resham threads, pearls, and gold zari on dusty-rose silk',
    gridClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3]',
    serviceRef: 'Designer Blouse',
  },
  {
    id: 'custom-dresses',
    romanNumeral: 'VI',
    title: 'Custom Dresses',
    category: 'Dresses & Craft',
    subtitle: 'Fluid Indo-western couture gowns',
    fabricNote: 'Micro-pleated dusty-mauve crepe silk bodice with structured antique waist belt.',
    image: '/src/assets/images/service_custom_dress_1795590003370.jpg',
    alt: 'Custom dusty-mauve pleated silk Indo-western gown with zari waist detailing',
    gridClass: 'md:col-span-6',
    aspectClass: 'aspect-[4/3]',
    serviceRef: 'Custom Dress',
  },
];

export interface PricingGuideItem {
  service: string;
  category: string;
  note: string;
  price: string;
  turnaround: string;
  idealFor: string;
  includes: string[];
  featured?: boolean;
}

export const PRICING_GUIDE: PricingGuideItem[] = [
  {
    service: 'Blouse Stitching',
    category: 'Classic Saree Wear',
    note: 'Lined & Classic Saree Fit',
    price: '₹499',
    turnaround: '3–5 Days',
    idealFor: 'Everyday cotton, silk, and festive saree draping with clean comfort.',
    includes: ['Pure cotton inner lining', 'Sculpted princess seams & piping'],
  },
  {
    service: 'Kurti Stitching',
    category: 'Daily & Office Ethnic',
    note: 'Straight, A-Line & Flared',
    price: '₹599',
    turnaround: '4–5 Days',
    idealFor: 'Breathable everyday, office, and casual ethnic silhouettes cut to size.',
    includes: ['Custom neckline & sleeve styling', 'Reinforced side slits & neat hems'],
  },
  {
    service: 'Designer Blouse',
    category: 'Signature Bridal Atelier',
    note: 'Padded, Piping & Tassels',
    price: '₹1,299',
    turnaround: '7–9 Days',
    idealFor: 'Bridal lehengas, heirloom Banarasi sarees, and statement festive backs.',
    includes: [
      'Structured padding & sculpted deep back',
      'Handcrafted dori tassels & trial fitting',
    ],
    featured: true,
  },
  {
    service: 'Suit Stitching',
    category: 'Bespoke Suit Sets',
    note: 'Salwar, Palazzo & Anarkali',
    price: '₹799',
    turnaround: '5–7 Days',
    idealFor: 'Complete 2-piece or 3-piece salwar, palazzo, churidar, and anarkali suits.',
    includes: ['Kurta + custom bottom tailoring', 'Clean inner seams & finishing press'],
  },
  {
    service: 'Custom Dress',
    category: 'Occasion & Indo-Western',
    note: 'Indo-Western & Ethnic Gowns',
    price: '₹999',
    turnaround: '7–10 Days',
    idealFor: 'Flowing ethnic maxis, pleated occasion gowns, and fusion evening wear.',
    includes: ['Posture-balanced bodice draping', 'Concealed zip & full flare finishing'],
  },
  {
    service: 'Alterations',
    category: 'Express Refitting',
    note: 'Resizing, Hemming & Refitting',
    price: '₹199',
    turnaround: '24–48 Hours',
    idealFor: 'Resizing cherished blouses, suits, sleeves, and ready-made garments.',
    includes: ['Exact measurement adjustment', 'Invisible hemming & hook reinforcement'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Choose Your Style',
    description:
      'Browse our curated studio inspirations or bring your own fabric and neckline reference.',
    iconKey: 'style',
  },
  {
    number: '02',
    title: 'Share Measurements',
    description:
      'Visit our boutique for precision measuring or share your preferred sizing notes with us.',
    iconKey: 'measure',
  },
  {
    number: '03',
    title: 'Tailoring & Fitting',
    description:
      'Master tailors cut, stitch, and hand-finish every seam with a dedicated trial check.',
    iconKey: 'stitch',
  },
  {
    number: '04',
    title: 'Ready to Wear',
    description:
      'Collect your lovingly finished outfit steamed, packed, and ready for the occasion.',
    iconKey: 'ready',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'priya',
    quote:
      '“Loved the fitting and finishing! My bridal lehenga blouse and festive suit came out exactly as I imagined—comfortable all evening.”',
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'Demo Review · Bridal & Festive',
    rating: 5,
  },
  {
    id: 'neha',
    quote:
      '“Beautiful stitching and thoughtful attention to every tiny detail—from neat inner seams to matching dori tassels. Truly a lovely experience.”',
    name: 'Neha Verma',
    initials: 'NV',
    role: 'Demo Review · Custom Suits',
    rating: 5,
  },
  {
    id: 'diya',
    quote:
      '“Both the design guidance and final fit were wonderful. They altered my heirloom saree blouse and stitched two kurtis—cannot wait to come back.”',
    name: 'Diya Kapoor',
    initials: 'DK',
    role: 'Demo Review · Designer Blouses',
    rating: 5,
  },
];

export const CONTACT_INFO = {
  brand: 'SONI SILAI',
  tagline: 'Stitched with Love ♡',
  phone: '+91 8607381351',
  email: 'anuragguptapvtt45@gmail.com',
  address: 'Shiv Nagar Part-2, Gali no 5, Bass Road, Dharuhera, Rewari, Haryana 123106',
  mapLocation: 'Dharuhera St, Haryana 123106',
  coordinates: {lat: 28.192575, lng: 76.797189},
  hours: 'Mon – Sat, 10:30 AM – 7:30 PM · Sunday Closed',
  landmark: 'Near Central Heritage Arcade, Ground Floor Courtyard',
};

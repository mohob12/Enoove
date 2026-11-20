import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeftIcon, ArrowRightIcon, ExpandIcon, HeartIcon } from './Icons';

interface ShowcaseProject {
  id: string;
  image: string;
  url: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  tags: string[];
  metricsAr: string;
  metricsEn: string;
  accent: string;
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'maison-savour',
    image: '/showcase/maison-savour.jpg',
    url: 'maisonsavour.gourmet',
    titleAr: 'Maison Savour — مطعم فاخر وتجربة ضيافة ملكية',
    titleEn: 'Maison Savour — Fine Dining & Gastronomy Experience',
    categoryAr: 'المطاعم والكافيهات الفاخرة',
    categoryEn: 'Luxury Dining & Gastronomy',
    descAr: 'تصميم داكن أنيق يبرز الأطباق بجودة سينمائية مع نظام حجز طاولات تفاعلي.',
    descEn: 'Cinematic dark UI showcasing Michelin-standard dishes with an intelligent table reservation engine.',
    tags: ['Next.js 15', 'Interactive Menu', 'Table Booking API', 'Apple Pay'],
    metricsAr: '+210% زيادة الحجوزات المباشرة',
    metricsEn: '+210% Direct Bookings Growth',
    accent: '#F97316'
  },
  {
    id: 'astra-dent',
    image: '/showcase/astra-dent.jpg',
    url: 'astradent.clinic',
    titleAr: 'Astra Dent — مركز طب وتجميل الأسنان المتقدم',
    titleEn: 'Astra Dent — High-Tech Dental & Medical Clinic',
    categoryAr: 'العيادات والمراكز الطبية',
    categoryEn: 'Medical & Dental Healthcare',
    descAr: 'واجهة طبية ناصعة وموثوقة مع ملفات الأطباء، وحجز مواعيد فوري في 30 ثانية.',
    descEn: 'Pristine healthcare interface featuring doctor profiles and instant 30s appointment scheduling.',
    tags: ['HIPAA Certified', 'Instant Booking', 'WhatsApp Sync', 'Patient Portal'],
    metricsAr: '99.8% التزام بالمواعيد',
    metricsEn: '99.8% Attendance Rate',
    accent: '#38BDF8'
  },
  {
    id: 'ahead-travel',
    image: '/showcase/ahead-travel.jpg',
    url: 'aheadjourneys.world',
    titleAr: 'AHEAD — وكالة رحلات واستكشافات فاخرة',
    titleEn: 'AHEAD — Curated Luxury Travel & Expeditions',
    categoryAr: 'السياحة والسفر الدولي',
    categoryEn: 'Luxury Travel & Expeditions',
    descAr: 'تصميم تفاعلي غامر مستوحى من نافذة الطائرة، يستعرض الوجهات العالمية.',
    descEn: 'Immersive airplane-window inspired UI curating unforgettable global destinations.',
    tags: ['Interactive 3D Maps', 'Custom Itineraries', 'Multi-Currency', 'Live Weather'],
    metricsAr: '+320% نمو مبيعات الباقات',
    metricsEn: '+320% Package Sales Growth',
    accent: '#FB923C'
  },
  {
    id: 'livora-interiors',
    image: '/showcase/livora-interiors.jpg',
    url: 'livorainteriors.design',
    titleAr: 'Livora Interiors — أثاث راقي وتصميم داخلي معماري',
    titleEn: 'Livora Interiors — Haute Architecture & Furniture',
    categoryAr: 'العقارات والتصميم الداخلي',
    categoryEn: 'Real Estate & Interior Architecture',
    descAr: 'استعراض معماري أنيق للأثاث الفاخر والغرف وتنسيقات المنازل مع كتالوج تفاعلي.',
    descEn: 'Architectural aesthetic showcasing curated designer furniture and luxury living spaces.',
    tags: ['3D Room Configurator', 'E-commerce Engine', 'Bespoke Inquiries'],
    metricsAr: 'مبيعات +1.8M$ في أول 3 أشهر',
    metricsEn: '$1.8M+ Sales in First Quarter',
    accent: '#A3E635'
  },
  {
    id: 'royal-crest',
    image: '/showcase/royal-crest.jpg',
    url: 'royalcrest.resort',
    titleAr: 'Royal Crest — فندق ومنتجع 5 نجوم ملكي',
    titleEn: 'Royal Crest — 5-Star Hotel & Presidential Suites',
    categoryAr: 'الفنادق والمنتجعات',
    categoryEn: 'Hotels & Luxury Resorts',
    descAr: 'أجواء ذهبية ملكية وفخامة داكنة لاستعراض الأجنحة، المرافق والسبا.',
    descEn: 'Regal obsidian and gold aesthetic showcasing presidential suites, spa, and booking.',
    tags: ['Real-time PMS Sync', 'Virtual Room Tour', 'VIP Concierge'],
    metricsAr: '98% نسبة إشغال الغرف',
    metricsEn: '98% Average Occupancy Rate',
    accent: '#EAB308'
  },
  {
    id: 'cake-bakery',
    image: '/showcase/cake-bakery.jpg',
    url: 'cake.atelier',
    titleAr: 'CAKÉ — متجر حلويات وكيك فاخر حسب الطلب',
    titleEn: 'CAKÉ — Haute Confectionery & Gourmet E-Commerce',
    categoryAr: 'التجارة الإلكترونية الفاخرة',
    categoryEn: 'Luxury Gourmet E-Commerce',
    descAr: 'كتالوج تفاعلي 360° لاختيار كيك المناسبات حسب المزاج والمكونات.',
    descEn: '360° interactive product catalog allowing mood-based customization with frictionless checkout.',
    tags: ['Headless Shopify', 'Custom Cake Builder', 'Same-Day Dispatch'],
    metricsAr: '+180% معدل تحويل السلة',
    metricsEn: '+180% Cart Conversion Rate',
    accent: '#EC4899'
  },
  {
    id: 'travel-world',
    image: '/showcase/travel-world.jpg',
    url: 'travelworld.voyage',
    titleAr: 'Travel Around The World — بوابة حجز طيران وفنادق',
    titleEn: 'Travel Around The World — Global Booking Portal',
    categoryAr: 'بوابات الحجز الإلكتروني',
    categoryEn: 'Online Travel Agency (OTA)',
    descAr: 'محرك بحث متطور للطيران والفنادق، باقات سفر شائعة، وعروض حصرية.',
    descEn: 'Comprehensive flight & hotel search engine with clean UI and curated worldwide deals.',
    tags: ['GDS Flight API', 'Dynamic Packaging', 'Instant Confirmation'],
    metricsAr: '45,000+ تذكرة شهرياً',
    metricsEn: '45,000+ Monthly Bookings',
    accent: '#3B82F6'
  },
  {
    id: 'ticket-plan',
    image: '/showcase/ticket-plan.jpg',
    url: 'ticketplan.tours',
    titleAr: 'Ticket Plan — منصة الوجهات السياحية والرحلات',
    titleEn: 'Ticket Plan — Curated Tours & Global Destinations',
    categoryAr: 'تنظيم الرحلات الدولية',
    categoryEn: 'Global Tours & Itineraries',
    descAr: 'استعراض أجمل الوجهات السياحية العالمية مع عروض سياحية مخصصة.',
    descEn: 'Dynamic destination guide highlighting global landmarks with tailor-made tour itineraries.',
    tags: ['Destination Guides', 'Group Tours', 'Mobile App Sync'],
    metricsAr: 'تقييم 4.9/5 من 12,000 مسافر',
    metricsEn: '4.9/5 Rating from 12k Travelers',
    accent: '#A855F7'
  }
];

export const WebShowcaseSlider: React.FC = () => {
  const { lang, isRtl } = useLanguage();
  const { isDark } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseProjects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseProjects.length) % showcaseProjects.length);
  };

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (isPaused || modalImage) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, modalImage]);

  const activeProject = showcaseProjects[activeIndex];

  return (
    <section 
      id="services-web" 
      className="py-24 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[180px] opacity-25 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeProject.accent }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-tag justify-center">
            <span className="w-2 h-2 rounded-full bg-[#40D9E8] animate-ping"></span>
            <span>الخدمة 01 — تصميم وتطوير المواقع الفاخرة</span>
          </div>
          <h2 className="section-title text-gradient">
            {lang === 'ar' ? 'واجهات حصرية وتجارب رقمية استثنائية' : 'Bespoke Interfaces & Award-Caliber Websites'}
          </h2>
          <p className="section-desc">
            {lang === 'ar'
              ? 'نحول موقعك إلى واجهة فخمة تعكس هوية علامتك التجارية، تمنح عملاءك تجربة استخدام ممتعة، وتضاعف المبيعات والحجوزات بأحدث التقنيات.'
              : 'We architect elite digital storefronts that manifest brand prestige, deliver fluid user journeys, and scale direct customer conversions.'}
          </p>
        </div>

        {/* Minimalist Top Indicator Pill */}
        <div className={`max-w-xl mx-auto mb-10 px-5 py-2 rounded-full backdrop-blur-2xl border shadow-lg flex items-center justify-between text-xs transition-colors duration-300 ${
          isDark 
            ? 'bg-[#101827]/85 border-white/15 text-[#A5B0C2]' 
            : 'bg-white/85 border-slate-200 text-slate-700 shadow-slate-200/50'
        }`}>
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#0284C7] dark:bg-[#40D9E8] animate-pulse"></span>
            <span className="font-mono text-[11px] font-semibold text-slate-900 dark:text-white">
              {activeProject.url}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold text-[#0284C7] dark:text-[#40D9E8]">
              {activeIndex + 1} / {showcaseProjects.length}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium ${
              isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800 border border-slate-200'
            }`}>
              {lang === 'ar' ? activeProject.categoryAr : activeProject.categoryEn}
            </span>
          </div>
        </div>

        {/* 3D Spatial Carousel Stage: TALL PORTRAIT ASPECT RATIO (No top/left/right borders) */}
        <div className="relative w-full h-[620px] sm:h-[720px] flex items-center justify-center perspective-[1400px] overflow-hidden">
          {showcaseProjects.map((item, index) => {
            const count = showcaseProjects.length;
            let offset = (index - activeIndex) % count;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isCenter = offset === 0;
            const isLeft = offset < 0;
            const absOffset = Math.abs(offset);

            const translateX = offset * 340;
            const translateZ = -absOffset * 190;
            const rotateY = isCenter ? 0 : isLeft ? 26 : -26;
            const scale = isCenter ? 1 : 0.84;
            const opacity = isCenter ? 1 : absOffset === 1 ? 0.6 : 0;
            const zIndex = 30 - absOffset;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[86%] sm:w-[400px] md:w-[440px] h-[580px] sm:h-[680px] rounded-3xl overflow-hidden flex flex-col justify-end cursor-pointer transition-all duration-700 ease-out select-none shadow-[0_30px_90px_rgba(0,0,0,0.85)] ${
                  isCenter 
                    ? 'ring-2 ring-[#40D9E8]/70 shadow-[0_25px_70px_rgba(64,217,232,0.3)]' 
                    : 'hidden sm:flex'
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: typeof window !== 'undefined' && window.innerWidth < 640 ? (isCenter ? 1 : 0) : opacity,
                  zIndex,
                }}
              >
                {/* 1. Full-Bleed Image: No borders on top, left, or right */}
                <img
                  src={item.image}
                  alt={item.titleAr}
                  className="absolute inset-0 w-full h-full object-cover object-top showcase-img"
                  loading="eager"
                />

                {/* Subtle top shade for top buttons */}
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/75 via-black/30 to-transparent pointer-events-none z-10"></div>

                {/* Top Action Badges */}
                <div className="absolute top-4 right-4 left-4 flex items-center justify-between z-20">
                  <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                    {item.url}
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                        liked[item.id]
                          ? 'bg-red-500/40 border-red-500/70 text-red-300'
                          : 'bg-black/50 border-white/25 text-white hover:text-red-400'
                      }`}
                      title="حفظ في المفضلة"
                    >
                      <HeartIcon size={14} className={liked[item.id] ? 'fill-current' : ''} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImage(item.image);
                      }}
                      className="p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/25 text-white transition-colors cursor-pointer"
                      title="معاينة الواجهة كاملة بدقة عالية"
                    >
                      <ExpandIcon size={14} />
                    </button>
                  </div>
                </div>

                {/* 2. Compact Cinematic Dark Vignette Overlay with Pure White Text */}
                <div 
                  className="relative z-20 px-4 sm:px-5 pt-8 pb-4 bg-gradient-to-t from-black/98 via-black/85 to-transparent flex flex-col justify-end text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
                >
                  {/* Category Pill & Live Metric in one compact line */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-[#40D9E8] bg-black/70 border border-[#40D9E8]/30 backdrop-blur-md shadow-sm">
                      {lang === 'ar' ? item.categoryAr : item.categoryEn}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-black/70 px-2 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-md">
                      ⚡ {lang === 'ar' ? item.metricsAr : item.metricsEn}
                    </span>
                  </div>

                  {/* Project Title: Pure Bright White, High-Contrast */}
                  <h3 className="text-sm sm:text-base font-extrabold leading-snug mb-1 text-white line-clamp-1 drop-shadow-md">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>

                  {/* Compact Description: Pure White for maximum legibility */}
                  {isCenter && (
                    <p className="text-[11px] sm:text-xs line-clamp-1 mb-2.5 text-white/95 font-medium leading-relaxed drop-shadow">
                      {lang === 'ar' ? item.descAr : item.descEn}
                    </p>
                  )}

                  {/* Slim Footer: Tech Tags & Quick Expand Link */}
                  <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/15 text-[10px]">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tg) => (
                        <span key={tg} className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium">
                          {tg}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalImage(item.image);
                      }}
                      className="text-white hover:text-[#40D9E8] font-bold flex items-center gap-1 cursor-pointer transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full border border-white/20 shrink-0"
                    >
                      <span>عرض كامل</span>
                      <span>🔍</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Floating Controller Pill (Reference Image 02) */}
        <div className="max-w-md mx-auto mt-6 flex flex-col items-center gap-4">
          <div className={`px-5 py-3 rounded-full backdrop-blur-2xl border shadow-xl flex items-center justify-between w-full gap-4 transition-colors ${
            isDark 
              ? 'bg-[#101827]/95 border-white/20' 
              : 'bg-white/95 border-slate-200 shadow-slate-200/80'
          }`}>
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/15 border-white/10 text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
              }`}
              aria-label="Previous Slide"
            >
              {isRtl ? <ArrowRightIcon size={18} /> : <ArrowLeftIcon size={18} />}
            </button>

            {/* Active Project Meta Pill */}
            <div className="flex items-center gap-3 text-center truncate">
              <div 
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-inner shrink-0"
                style={{ backgroundColor: activeProject.accent }}
              >
                {activeIndex + 1}
              </div>
              <div className="text-right rtl:text-right ltr:text-left truncate">
                <h4 className="text-xs sm:text-sm font-bold truncate text-slate-900 dark:text-white">
                  {(lang === 'ar' ? activeProject.titleAr : activeProject.titleEn).split('—')[0]}
                </h4>
                <p className="text-[11px] truncate text-slate-500 dark:text-[#A5B0C2]">
                  {lang === 'ar' ? activeProject.categoryAr : activeProject.categoryEn}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/15 border-white/10 text-white' 
                  : 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
              }`}
              aria-label="Next Slide"
            >
              {isRtl ? <ArrowLeftIcon size={18} /> : <ArrowRightIcon size={18} />}
            </button>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center gap-2">
            {showcaseProjects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dotIdx === activeIndex
                    ? 'w-7 h-2 bg-[#0284C7] dark:bg-[#40D9E8]'
                    : isDark
                      ? 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Full-Page Image Lightbox Modal with Crisp High Resolution */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[92vh] bg-[#101827] rounded-3xl border border-white/20 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/50">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-[#40D9E8]">معاينة الواجهة كاملة بأعلى دقة ووضوح</span>
              </span>
              <button
                onClick={() => setModalImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Full Landing Page Preview */}
            <div className="overflow-y-auto max-h-[calc(92vh-70px)] p-4 bg-[#080B14] flex justify-center">
              <img
                src={modalImage}
                alt="Full Landing Page Preview"
                className="w-full max-w-3xl h-auto rounded-xl shadow-2xl showcase-img"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

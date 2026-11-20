import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
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
    titleAr: 'Maison Savour — مطعم فاخر وتجربة ضيافة استثنائية',
    titleEn: 'Maison Savour — Fine Dining & Gastronomy Experience',
    categoryAr: 'المطاعم والكافيهات الفاخرة',
    categoryEn: 'Luxury Dining & Gastronomy',
    descAr: 'تصميم داكن أنيق يبرز الأطباق بجودة سينمائية مع نظام حجز طاولات تفاعلي وقائمة طعام رقمية 4K.',
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
    descAr: 'واجهة طبية ناصعة وموثوقة مع ملفات الأطباء، وحجز مواعيد فوري في 30 ثانية مع تأكيد آلي عبر واتساب.',
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
    descAr: 'تصميم تفاعلي غامر مستوحى من نافذة الطائرة، يستعرض الوجهات العالمية وباقات السفر مع حجز فوري.',
    descEn: 'Immersive airplane-window inspired UI curating unforgettable global destinations and custom packages.',
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
    titleEn: 'Livora Interiors — Haute Furniture & Architecture',
    categoryAr: 'العقارات والتصميم الداخلي',
    categoryEn: 'Real Estate & Interior Architecture',
    descAr: 'استعراض معماري أنيق للأثاث الفاخر والغرف وتنسيقات المنازل مع كتالوج تفاعلي للشراء والتخصيص.',
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
    descAr: 'أجواء ذهبية ملكية وفخامة داكنة لاستعراض الأجنحة، المرافق والسبا، مع محرك حجز غرف فوري.',
    descEn: 'Regal obsidian and gold aesthetic showcasing presidential suites, spa, and instant availability engine.',
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
    descAr: 'كتالوج تفاعلي 360° لاختيار كيك المناسبات حسب المزاج والمكونات مع تجربة شراء ودفع فائقة السلاسة.',
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
    descAr: 'محرك بحث متطور للطيران والفنادق، باقات سفر شائعة، وعروض حصرية بتجربة استخدام نظيفة وعصرية.',
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
    descAr: 'استعراض أجمل الوجهات السياحية العالمية (إيطاليا، فرنسا، تركيا، كندا) مع عروض سياحية مخصصة.',
    descEn: 'Dynamic destination guide highlighting global landmarks with tailor-made tour itineraries.',
    tags: ['Destination Guides', 'Group Tours', 'Mobile App Sync'],
    metricsAr: 'تقييم 4.9/5 من 12,000 مسافر',
    metricsEn: '4.9/5 Rating from 12k Travelers',
    accent: '#A855F7'
  }
];

export const WebShowcaseSlider: React.FC = () => {
  const { lang, isRtl } = useLanguage();
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

  // Auto-play
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
      className="py-24 relative overflow-hidden bg-[#080B14]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none transition-colors duration-1000"
        style={{ backgroundColor: activeProject.accent }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Top Browser Simulation Bar (Inspired by Reference Image 02) */}
        <div className="max-w-2xl mx-auto mb-8 px-5 py-3 rounded-full bg-[#101827]/90 backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-between text-xs text-[#A5B0C2]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90"></span>
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90"></span>
              <span className="w-3 h-3 rounded-full bg-[#27C93F]/90"></span>
            </div>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="px-3 py-1 rounded-full bg-black/40 border border-white/5 font-mono text-white text-[11px] flex items-center gap-1.5">
              <span className="text-[#40D9E8]">🔒 https://</span>
              <span className="text-[#F8FAFC] font-semibold">{activeProject.url}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-[#40D9E8] font-bold">
              {activeIndex + 1} / {showcaseProjects.length}
            </span>
            <span className="px-3 py-0.5 rounded-full bg-white/10 text-[10px] text-white font-medium">
              {lang === 'ar' ? activeProject.categoryAr : activeProject.categoryEn}
            </span>
          </div>
        </div>

        {/* 3D Spatial Carousel Stage */}
        <div className="relative w-full h-[520px] sm:h-[620px] flex items-center justify-center perspective-[1400px] overflow-hidden">
          {showcaseProjects.map((item, index) => {
            const count = showcaseProjects.length;
            let offset = (index - activeIndex) % count;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isCenter = offset === 0;
            const isLeft = offset < 0;
            const absOffset = Math.abs(offset);

            // True 3D spatial values matching Reference Image 02
            const translateX = offset * 320;
            const translateZ = -absOffset * 180;
            const rotateY = isCenter ? 0 : isLeft ? 28 : -28;
            const scale = isCenter ? 1 : 0.82;
            const opacity = isCenter ? 1 : absOffset === 1 ? 0.6 : 0;
            const zIndex = 30 - absOffset;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[94%] sm:w-[540px] md:w-[620px] h-[480px] sm:h-[570px] rounded-3xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out select-none border border-white/20 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.9)] bg-[#0d1424] ${
                  isCenter ? 'ring-2 ring-[#40D9E8]/60 shadow-[0_0_50px_rgba(64,217,232,0.25)]' : 'hidden sm:flex'
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: typeof window !== 'undefined' && window.innerWidth < 640 ? (isCenter ? 1 : 0) : opacity,
                  zIndex,
                }}
              >
                {/* Browser Frame Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white tracking-wide uppercase font-mono">
                      {item.url}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(item.id);
                      }}
                      className={`p-1.5 rounded-full border transition-all ${
                        liked[item.id]
                          ? 'bg-red-500/20 border-red-500/40 text-red-400'
                          : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
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
                      className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-colors"
                      title="تكبير ومعاينة الواجهة كاملة"
                    >
                      <ExpandIcon size={14} />
                    </button>
                  </div>
                </div>

                {/* Actual Real Website Interface Image Viewport */}
                <div 
                  className="my-3 rounded-2xl border border-white/10 bg-[#06080F] flex-1 overflow-hidden relative group/img shadow-inner"
                  onClick={(e) => {
                    if (isCenter) {
                      e.stopPropagation();
                      setModalImage(item.image);
                    }
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.titleAr}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay for elegance and legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  {/* Overlay badge with KPI metric */}
                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-black/75 border border-white/20 backdrop-blur-md">
                      ⚡ {lang === 'ar' ? item.metricsAr : item.metricsEn}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium text-[#40D9E8] bg-[#40D9E8]/10 border border-[#40D9E8]/30 backdrop-blur-md">
                      اضغط للتكبير 🔍
                    </span>
                  </div>
                </div>

                {/* Project Details Footer */}
                <div className="pt-2 shrink-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#40D9E8] uppercase tracking-wider">
                      {lang === 'ar' ? item.categoryAr : item.categoryEn}
                    </span>
                    <span className="text-[10px] text-[#A5B0C2]">Enoove Certified Design</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight mb-1 truncate">
                    {lang === 'ar' ? item.titleAr : item.titleEn}
                  </h3>
                  
                  {isCenter && (
                    <p className="text-xs text-[#A5B0C2] line-clamp-1 mb-2">
                      {lang === 'ar' ? item.descAr : item.descEn}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tg) => (
                      <span key={tg} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/80">
                        {tg}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Floating Controller Pill (Reference Image 02) */}
        <div className="max-w-md mx-auto mt-8 flex flex-col items-center gap-4">
          <div className="px-5 py-3 rounded-full bg-[#101827]/95 backdrop-blur-2xl border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.7)] flex items-center justify-between w-full gap-4">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
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
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {(lang === 'ar' ? activeProject.titleAr : activeProject.titleEn).split('—')[0]}
                </h4>
                <p className="text-[11px] text-[#A5B0C2] truncate">
                  {lang === 'ar' ? activeProject.categoryAr : activeProject.categoryEn}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
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
                    ? 'w-7 h-2 bg-[#40D9E8]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Full-Page Image Lightbox Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#101827] rounded-3xl border border-white/20 overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <span className="text-[#40D9E8]">معاينة الواجهة الكاملة بدقة عالية</span>
              </span>
              <button
                onClick={() => setModalImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-sm"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Full Landing Page Preview */}
            <div className="overflow-y-auto max-h-[calc(90vh-70px)] p-2 bg-black/60">
              <img
                src={modalImage}
                alt="Full Landing Page Preview"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

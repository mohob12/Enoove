import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeftIcon, ArrowRightIcon, ExpandIcon, HeartIcon } from './Icons';

interface ShowcaseProject {
  id: string;
  titleKey: string;
  categoryKey: string;
  descKey: string;
  tags: string[];
  metrics: string;
  imageTheme: {
    gradient: string;
    accent: string;
    icon: string;
    features: string[];
    mockupTitle: string;
    mockupSubtitle: string;
  };
}

const projects: ShowcaseProject[] = [
  {
    id: 'restaurant',
    titleKey: 'project.restaurant.title',
    categoryKey: 'project.restaurant.category',
    descKey: 'project.restaurant.desc',
    tags: ['Next.js 15', '3D Food Visuals', 'Table Booking Engine', 'Apple Pay'],
    metrics: '+185% زيادة الحجوزات المباشرة',
    imageTheme: {
      gradient: 'from-[#1c120c] via-[#2d1b10] to-[#451e0e]',
      accent: '#FF8A00',
      icon: '🍷',
      features: ['قائمة طعام رقمية 4K', 'حجز طاولة بالذكاء الاصطناعي', 'تقييم 4.9/5 نجوم'],
      mockupTitle: 'BELLA VISTA GOURMET',
      mockupSubtitle: 'Fine Dining & Culinary Excellence'
    }
  },
  {
    id: 'clinic',
    titleKey: 'project.clinic.title',
    categoryKey: 'project.clinic.category',
    descKey: 'project.clinic.desc',
    tags: ['HIPAA Compliant', 'Doctor Profiles', 'Instant Scheduling', 'SMS Sync'],
    metrics: '99.8% دقة المواعيد وتقليل الغياب',
    imageTheme: {
      gradient: 'from-[#0a1828] via-[#0d233a] to-[#0f3456]',
      accent: '#40D9E8',
      icon: '🩺',
      features: ['حجز فوري في 30 ثانية', 'تذكير آلي عبر واتساب', 'بوابة ملف المريض الرقمية'],
      mockupTitle: 'APEX HEALTH CLINIC',
      mockupSubtitle: 'Advanced Medical & Dental Care'
    }
  },
  {
    id: 'travel',
    titleKey: 'project.travel.title',
    categoryKey: 'project.travel.category',
    descKey: 'project.travel.desc',
    tags: ['Interactive Maps', 'Custom Packages', 'Multi-currency', 'Live Weather'],
    metrics: '+310% زيادة المبيعات للرحلات السياحية',
    imageTheme: {
      gradient: 'from-[#0b1f24] via-[#0e3038] to-[#124955]',
      accent: '#2DD4BF',
      icon: '✈️',
      features: ['استعراض وجهات 360°', 'تخصيص مسار الرحلة', 'دفع آمن متعدد العملات'],
      mockupTitle: 'WANDERLUST VOYAGES',
      mockupSubtitle: 'Curated Global Expeditions'
    }
  },
  {
    id: 'realestate',
    titleKey: 'project.realestate.title',
    categoryKey: 'project.realestate.category',
    descKey: 'project.realestate.desc',
    tags: ['Virtual Tours 3D', 'Smart Filters', 'Mortgage Calculator', 'WhatsApp Direct'],
    metrics: 'بيع فلل بقيمة 45M$ عبر المنصة',
    imageTheme: {
      gradient: 'from-[#181324] via-[#241a38] to-[#362254]',
      accent: '#A855F7',
      icon: '🏛️',
      features: ['جولات افتراضية ثلاثية الأبعاد', 'فلتر عقارات ذكي وخريطة', 'طلب زيارة ومعاينة فورية'],
      mockupTitle: 'ELYSIAN PRIME ESTATES',
      mockupSubtitle: 'Ultra Luxury Architecture & Villas'
    }
  },
  {
    id: 'ecommerce',
    titleKey: 'project.ecommerce.title',
    categoryKey: 'project.ecommerce.category',
    descKey: 'project.ecommerce.desc',
    tags: ['Headless Shopify', 'Fast Checkout', 'AI Recommendations', 'Global Shipping'],
    metrics: 'سرعة تحميل 0.8s ورفع التحويل +140%',
    imageTheme: {
      gradient: 'from-[#09152b] via-[#102347] to-[#17356c]',
      accent: '#647BFF',
      icon: '💎',
      features: ['تجربة تسوق فائقة السلاسة', 'توصيات منتجات بالذكاء الاصطناعي', 'بوابات دفع فورية ومحمية'],
      mockupTitle: 'LUMINA LUXE ATELIER',
      mockupSubtitle: 'Haute Fashion & Crafted Goods'
    }
  }
];

export const WebShowcaseSlider: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const activeProject = projects[activeIndex];

  return (
    <section 
      id="services-web" 
      className="py-24 relative overflow-hidden bg-[#080B14]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-tag justify-center">
            <span className="w-2 h-2 rounded-full bg-[#40D9E8] animate-ping"></span>
            {t('services.web.tag')}
          </div>
          <h2 className="section-title text-gradient">
            {t('services.web.title')}
          </h2>
          <p className="section-desc">
            {t('services.web.desc')}
          </p>
        </div>

        {/* Top Browser Pill (Inspired by Reference Image 02) */}
        <div className="max-w-xl mx-auto mb-10 px-5 py-2.5 rounded-full bg-[#101827]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center justify-between text-xs text-[#A5B0C2]">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/30"></span>
            </div>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="font-mono text-[#40D9E8] hidden sm:inline">enoove://spatial-web-engine</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-white/90">
              {activeIndex + 1} / {projects.length}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] text-white font-medium">
              {t(activeProject.categoryKey)}
            </span>
          </div>
        </div>

        {/* 3D Spatial Carousel Stage */}
        <div className="relative w-full h-[460px] sm:h-[540px] flex items-center justify-center perspective-[1400px] overflow-hidden">
          {projects.map((item, index) => {
            const count = projects.length;
            let offset = (index - activeIndex) % count;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isCenter = offset === 0;
            const isLeft = offset < 0;
            const absOffset = Math.abs(offset);

            // True 3D spatial values matching Reference Image 02
            // Desktop horizontal displacement: 300px per card
            const translateX = offset * 290;
            const translateZ = -absOffset * 160;
            const rotateY = isCenter ? 0 : isLeft ? 26 : -26;
            const scale = isCenter ? 1 : 0.82;
            const opacity = isCenter ? 1 : absOffset === 1 ? 0.65 : 0; // Only adjacent cards visible on desktop, hide others to avoid clutter
            const zIndex = 20 - absOffset;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[92%] sm:w-[480px] md:w-[540px] h-[390px] sm:h-[460px] rounded-3xl p-5 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out select-none border border-white/20 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.85)] bg-[#101827] ${
                  isCenter ? 'ring-2 ring-[#40D9E8]/50' : 'pointer-events-auto sm:pointer-events-auto hidden sm:flex'
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity: typeof window !== 'undefined' && window.innerWidth < 640 ? (isCenter ? 1 : 0) : opacity,
                  zIndex,
                }}
              >
                {/* Simulated Glass Browser Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{item.imageTheme.icon}</span>
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      {item.imageTheme.mockupTitle}
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
                    <div className="p-1.5 rounded-full bg-white/5 border border-white/10 text-white/60">
                      <ExpandIcon size={14} />
                    </div>
                  </div>
                </div>

                {/* Project Visual Area */}
                <div className={`my-auto rounded-2xl p-5 sm:p-6 bg-gradient-to-tr ${item.imageTheme.gradient} border border-white/10 flex flex-col justify-between h-[210px] sm:h-[250px] relative overflow-hidden`}>
                  {/* Glowing background aura */}
                  <div 
                    className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl opacity-35 pointer-events-none"
                    style={{ backgroundColor: item.imageTheme.accent }}
                  ></div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-black/50 border border-white/10 mb-2">
                      {t(item.categoryKey)}
                    </span>
                    <h3 className="text-base sm:text-xl font-extrabold text-white leading-snug">
                      {t(item.titleKey)}
                    </h3>
                    
                    {/* Only show description on center card to prevent cluttered text on side cards! */}
                    {isCenter && (
                      <p className="text-xs sm:text-sm text-white/90 line-clamp-2 mt-2 leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    )}
                  </div>

                  {/* Feature Bullets & KPI Metric (Clean display) */}
                  <div className="mt-2 space-y-2">
                    {isCenter && (
                      <div className="grid grid-cols-2 gap-2">
                        {item.imageTheme.features.slice(0, 2).map((feat, fi) => (
                          <div key={fi} className="text-[11px] text-white/90 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg border border-white/10 truncate">
                            <span className="text-[#40D9E8] font-bold">✓</span>
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="py-1.5 px-3 rounded-lg bg-black/50 backdrop-blur-sm border border-white/15 text-xs font-semibold text-[#40D9E8] text-center">
                      ⚡ {item.metrics}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech tags */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#A5B0C2]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tg) => (
                      <span key={tg} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/80">
                        {tg}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#40D9E8] font-bold text-[11px]">
                    Enoove Digital Case
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Controller Pill (Exact match to Reference Image 02) */}
        <div className="max-w-md mx-auto mt-6 flex flex-col items-center gap-4">
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
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#647BFF] to-[#40D9E8] flex items-center justify-center text-lg shadow-inner shrink-0">
                {activeProject.imageTheme.icon}
              </div>
              <div className="text-right rtl:text-right ltr:text-left truncate">
                <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                  {t(activeProject.titleKey).split('—')[0]}
                </h4>
                <p className="text-[11px] text-[#A5B0C2] truncate">
                  {t(activeProject.categoryKey)}
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
            {projects.map((_, dotIdx) => (
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
    </section>
  );
};

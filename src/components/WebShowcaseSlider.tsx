import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeftIcon, ArrowRightIcon, ExpandIcon, HeartIcon, SparklesIcon } from './Icons';

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

  // Auto-play interval
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const activeProject = projects[activeIndex];

  return (
    <section 
      id="services-web" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#0d1424] to-[#080B14]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
        <div className="max-w-xl mx-auto mb-10 px-4 py-2.5 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-between text-xs text-[#A5B0C2]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
            </div>
            <span className="text-white/40 hidden sm:inline">|</span>
            <span className="font-mono text-[#40D9E8] hidden sm:inline">enoove://spatial-browser</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-white/80">
              {activeIndex + 1} / {projects.length}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] text-white">
              {t(activeProject.categoryKey)}
            </span>
          </div>
        </div>

        {/* 3D Spatial Carousel Stage */}
        <div className="relative w-full h-[480px] sm:h-[560px] flex items-center justify-center perspective-[1400px]">
          {projects.map((item, index) => {
            // Calculate spatial distance relative to active item
            const count = projects.length;
            let offset = (index - activeIndex) % count;
            if (offset > count / 2) offset -= count;
            if (offset < -count / 2) offset += count;

            const isCenter = offset === 0;
            const isLeft = offset < 0;
            const isRight = offset > 0;
            const absOffset = Math.abs(offset);

            // 3D Matrix calculations matching Reference Image 02
            // Center is full scale, left is rotated towards center, right is rotated towards center
            const translateX = offset * 220; // horizontal separation
            const translateZ = -absOffset * 150; // push back in depth
            const rotateY = isCenter ? 0 : isLeft ? 24 : -24; // spatial tilt
            const scale = isCenter ? 1 : Math.max(0.75, 1 - absOffset * 0.15);
            const opacity = isCenter ? 1 : Math.max(0.4, 0.85 - absOffset * 0.25);
            const zIndex = 20 - absOffset;

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`absolute w-[90%] max-w-[340px] sm:max-w-[440px] md:max-w-[520px] h-[400px] sm:h-[480px] rounded-3xl p-5 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-out select-none border border-white/15 backdrop-blur-2xl shadow-[0_30px_70px_rgba(0,0,0,0.7)] ${
                  isCenter ? 'ring-1 ring-[#40D9E8]/40' : 'hover:border-white/30'
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  background: `linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(16,24,39,0.95) 100%)`
                }}
              >
                {/* Simulated Glass Browser Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
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

                {/* Project Visual Body inside glass frame */}
                <div className={`my-auto rounded-2xl p-5 bg-gradient-to-tr ${item.imageTheme.gradient} border border-white/10 flex flex-col justify-between h-[220px] sm:h-[260px] relative overflow-hidden group`}>
                  {/* Glowing background aura */}
                  <div 
                    className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full blur-3xl opacity-30 pointer-events-none"
                    style={{ backgroundColor: item.imageTheme.accent }}
                  ></div>

                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white bg-black/40 border border-white/10 mb-2">
                      {t(item.categoryKey)}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2 mt-1.5">
                      {t(item.descKey)}
                    </p>
                  </div>

                  {/* Feature Bullets & KPI Metric */}
                  <div className="mt-2 space-y-1.5">
                    <div className="grid grid-cols-2 gap-1.5">
                      {item.imageTheme.features.slice(0, 2).map((feat, fi) => (
                        <div key={fi} className="text-[10px] text-white/80 flex items-center gap-1 bg-black/30 px-2 py-1 rounded border border-white/5 truncate">
                          <span className="text-[#40D9E8]">✓</span>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-2 py-1 px-2.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] font-semibold text-[#40D9E8] text-center">
                      ⚡ {item.metrics}
                    </div>
                  </div>
                </div>

                {/* Card Footer: Tech tags */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-1 text-[11px] text-[#A5B0C2]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.slice(0, 2).map((tg) => (
                      <span key={tg} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-white/70">
                        {tg}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#40D9E8] font-bold text-[10px]">
                    Enoove Certified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Controller Pill (Exact match to Reference Image 02) */}
        <div className="max-w-md mx-auto mt-6 flex flex-col items-center gap-4">
          <div className="px-5 py-3 rounded-full bg-[#101827]/90 backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center justify-between w-full gap-4">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95"
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
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95"
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
                className={`transition-all duration-300 rounded-full ${
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

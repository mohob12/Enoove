import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRightIcon, SparklesIcon } from './Icons';

interface PortfolioItem {
  id: string;
  category: 'web' | 'ai' | 'systems' | 'branding';
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  tag: string;
  metrics: string;
  image: string;
  accent: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'web',
    titleAr: 'Maison Savour — مطعم فاخر وتجربة ضيافة ملكية',
    titleEn: 'Maison Savour — Luxury Gastronomy & Dining',
    descAr: 'تصميم داكن أنيق يبرز الأطباق بجودة سينمائية مع نظام حجز طاولات تفاعلي.',
    descEn: 'Cinematic dark UI showcasing culinary art with interactive table bookings.',
    tag: 'Hospitality & Web',
    metrics: '+210% نمو الحجوزات',
    image: '/showcase_web/02_maison_savour.jpg',
    accent: '#F97316'
  },
  {
    id: 'p2',
    category: 'web',
    titleAr: 'Lumière — مركز الجلدية والتجميل الطبي المتقدم',
    titleEn: 'Lumière — Aesthetic Dermatology & Laser Clinic',
    descAr: 'واجهة صحية ناصعة مع حجز مواعيد فوري في 30 ثانية وتأكيد واتساب آلي.',
    descEn: 'Pristine medical clinic interface with 30s appointment scheduling.',
    tag: 'Healthcare Web',
    metrics: '99.8% التزام بالمواعيد',
    image: '/showcase_web/08_lumiere_dermatology_clinic.jpg',
    accent: '#38BDF8'
  },
  {
    id: 'p3',
    category: 'web',
    titleAr: 'AHEAD — وكالة رحلات واستكشافات سياحية فاخرة',
    titleEn: 'AHEAD — Curated Luxury Travel & Expeditions',
    descAr: 'تصميم غامر مستوحى من نافذة الطائرة لاستعراض الوجهات العالمية والباقات.',
    descEn: 'Immersive travel interface presenting global destinations and custom tours.',
    tag: 'Travel & Tourism',
    metrics: '+320% نمو المبيعات',
    image: '/showcase_web/14_ahead_travel_experiences.jpg',
    accent: '#FB923C'
  },
  {
    id: 'p4',
    category: 'web',
    titleAr: 'Livora Interiors — أثاث راقي وتصميم داخلي معماري',
    titleEn: 'Livora Interiors — Haute Architecture & Furniture',
    descAr: 'استعراض معماري أنيق للأثاث الفاخر والغرف وتنسيقات المنازل مع متجر متكامل.',
    descEn: 'Architectural furniture catalog with customized purchasing workflow.',
    tag: 'Architecture & E-Com',
    metrics: 'مبيعات +1.8M$ في أول ربع',
    image: '/showcase_web/04_livora_interiors.jpg',
    accent: '#A3E635'
  },
  {
    id: 'p5',
    category: 'web',
    titleAr: 'Royal Crest — فندق ومنتجع 5 نجوم ملكي',
    titleEn: 'Royal Crest — 5-Star Hotel & Presidential Suites',
    descAr: 'أجواء ذهبية وفخامة داكنة لاستعراض الأجنحة، المرافق والسبا، مع محرك حجز فوري.',
    descEn: 'Regal obsidian and gold aesthetic showcasing presidential suites and direct booking.',
    tag: 'Resort & Booking',
    metrics: '98% نسبة إشغال الغرف',
    image: '/showcase_web/06_royal_crest_luxury_hotel.jpg',
    accent: '#EAB308'
  },
  {
    id: 'p6',
    category: 'web',
    titleAr: 'CAKÉ — متجر حلويات وكيك فاخر حسب الطلب',
    titleEn: 'CAKÉ — Haute Confectionery & Gourmet E-Commerce',
    descAr: 'كتالوج تفاعلي 360° لاختيار كيك المناسبات حسب المزاج وتجربة دفع سلسة.',
    descEn: '360° custom cake builder with effortless instant mobile checkout.',
    tag: 'Luxury E-Commerce',
    metrics: '+180% تحويل السلة',
    image: '/showcase_web/03_cake_experience.jpg',
    accent: '#EC4899'
  }
];

export const PortfolioSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const filteredItems = portfolioData;

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#0b1220] to-[#080B14]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="section-tag justify-center">
            <SparklesIcon size={16} />
            <span>{t('portfolio.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('portfolio.title')}
          </h2>
          <p className="section-desc">
            نماذج ومشاريع حقيقية تبرز قدرتنا على دمج الإبداع الفني مع القوة البرمجية لتحقيق أعلى عائد استثماري.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-5 bg-[#101827]/90 backdrop-blur-xl border border-white/10 hover:border-[#40D9E8]/40 transition-all duration-500 group shadow-[0_20px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div>
                {/* Visual Card Image Preview */}
                <div className="h-56 rounded-2xl border border-white/10 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 shadow-md">
                  <img
                    src={item.image}
                    alt={item.titleAr}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-black/60 border border-white/10 backdrop-blur-md">
                      {item.tag}
                    </span>
                    <span className="py-0.5 px-2.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-[#40D9E8] backdrop-blur-md">
                      ⚡ {item.metrics}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-base sm:text-lg font-bold text-white mt-4 mb-1.5 group-hover:text-[#40D9E8] transition-colors truncate">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B0C2] leading-relaxed line-clamp-2">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#A5B0C2]">Enoove Signature Case</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#40D9E8] hover:underline"
                >
                  <span>اطلب مشروع مماثل</span>
                  <ArrowUpRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

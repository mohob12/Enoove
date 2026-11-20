import React, { useState } from 'react';
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
  gradient: string;
  icon: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 'p1',
    category: 'web',
    titleAr: 'منصة بيع وتأجير العقارات الفاخرة',
    titleEn: 'Luxury Real Estate Architectural Portal',
    descAr: 'تطبيق ويب تفاعلي مع جولات 3D وفلاتر موقع ذكية.',
    descEn: 'Interactive web platform with 3D tours & smart location filters.',
    tag: 'Web & Mobile',
    metrics: '+2.4M زائر سنوياً',
    gradient: 'from-[#121a2c] via-[#1a2948] to-[#213a69]',
    icon: '🏰'
  },
  {
    id: 'p2',
    category: 'ai',
    titleAr: 'روبوت محادثة وحجز ذكي للمطاعم',
    titleEn: 'Autonomous WhatsApp Dining Concierge',
    descAr: 'رد آلي على 100% من الاستفسارات مع حجز طاولات فوري.',
    descEn: 'Instant automated replies and table reservations.',
    tag: 'AI Automation',
    metrics: '99.4% دقة الردود',
    gradient: 'from-[#0b2126] via-[#103741] to-[#144f5e]',
    icon: '🤖'
  },
  {
    id: 'p3',
    category: 'systems',
    titleAr: 'نظام إدارة سلاسل الإمداد والمخازن',
    titleEn: 'Cloud Supply Chain & Warehouse ERP',
    descAr: 'لوحة تحكم فورية لمتابعة 50,000 منتج بدقة متناهية.',
    descEn: 'Real-time telemetry tracking 50,000 inventory items.',
    tag: 'Enterprise SaaS',
    metrics: 'توفير 40 ساعة أسبوعياً',
    gradient: 'from-[#1a1226] via-[#291b40] to-[#3e2563]',
    icon: '📊'
  },
  {
    id: 'p4',
    category: 'branding',
    titleAr: 'هوية بصرية كاملة لشركة عطور عالمية',
    titleEn: 'Global Fragrance Haute Identity',
    descAr: 'شعار أيقوني، عبوات ذهبية، وتصوير إعلاني ثلاثي الأبعاد.',
    descEn: 'Iconic logo, gold-foiled packaging and 3D renders.',
    tag: 'Visual Identity',
    metrics: 'جائزة أفضل تصميم 2026',
    gradient: 'from-[#22170d] via-[#382413] to-[#543417]',
    icon: '👑'
  },
  {
    id: 'p5',
    category: 'web',
    titleAr: 'بوابة الرعاية الطبية وحجز العيادات',
    titleEn: 'Apex Healthcare Telemedicine Portal',
    descAr: 'حجز مواعيد متزامن مع ملف صحي سحابي متوافق مع HIPAA.',
    descEn: 'Frictionless medical booking with patient dashboard.',
    tag: 'Healthcare Web',
    metrics: '+350% نمو الحجوزات',
    gradient: 'from-[#0a1e2f] via-[#0d2f4d] to-[#0f446f]',
    icon: '🩺'
  },
  {
    id: 'p6',
    category: 'ai',
    titleAr: 'محرك توليد وتأهيل عملاء العقارات',
    titleEn: 'Real Estate Smart Lead Engine',
    descAr: 'فلترة المشتري الجاد وربطه مباشرة مع المستشار العقاري.',
    descEn: 'Instant lead qualification with CRM sync.',
    tag: 'AI Workflows',
    metrics: 'رفع المبيعات +180%',
    gradient: 'from-[#081e1a] via-[#0e332c] to-[#124d43]',
    icon: '⚡'
  }
];

export const PortfolioSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai' | 'systems' | 'branding'>('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeFilter);

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

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: t('portfolio.filter.all') },
            { id: 'web', label: t('portfolio.filter.web') },
            { id: 'ai', label: t('portfolio.filter.ai') },
            { id: 'systems', label: t('portfolio.filter.systems') },
            { id: 'branding', label: t('portfolio.filter.branding') },
          ].map((flt) => (
            <button
              key={flt.id}
              onClick={() => setActiveFilter(flt.id as any)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === flt.id
                  ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-[0_0_20px_rgba(100,123,255,0.4)]'
                  : 'bg-white/[0.04] text-[#A5B0C2] hover:bg-white/[0.08] hover:text-white border border-white/5'
              }`}
            >
              {flt.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl p-6 bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-[#40D9E8]/40 transition-all duration-500 group shadow-[0_20px_45px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* Visual Card Header */}
                <div className={`h-48 rounded-2xl p-5 bg-gradient-to-tr ${item.gradient} border border-white/10 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-xl shadow-inner">
                      {item.icon}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white bg-black/40 border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  <div className="py-1 px-2.5 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-[#40D9E8] self-start">
                    ⚡ {item.metrics}
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-base sm:text-lg font-bold text-white mt-5 mb-2 group-hover:text-[#40D9E8] transition-colors">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B0C2] leading-relaxed line-clamp-2">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>

              {/* Action Link */}
              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-[#A5B0C2]">Enoove Signature Case</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#40D9E8] hover:underline"
                >
                  <span>استكشف المشروع</span>
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

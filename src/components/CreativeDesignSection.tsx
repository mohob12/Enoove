import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PaletteIcon, ArrowUpRightIcon, SparklesIcon } from './Icons';

interface CreativeWork {
  id: string;
  title: string;
  titleEn: string;
  category: string;
  categoryEn: string;
  span: 'col-span-1' | 'col-span-2' | 'col-span-1 md:col-span-2' | 'col-span-1 md:col-span-1';
  gradient: string;
  accent: string;
  icon: string;
  badge: string;
  deliverables: string[];
}

const creativeWorks: CreativeWork[] = [
  {
    id: 'c1',
    title: 'هوية بصرية كاملة لعلامة أزياء فاخرة',
    titleEn: 'Haute Couture Brand Identity & Monogram',
    category: 'الهوية البصرية والشعارات',
    categoryEn: 'Brand Identity',
    span: 'col-span-1 md:col-span-2',
    gradient: 'from-[#191024] via-[#2d1b3f] to-[#431d61]',
    accent: '#C084FC',
    icon: '✨',
    badge: 'Award Winner 2026',
    deliverables: ['دليل الهوية الكامل', 'شعار مونوغرام أيقوني', 'خطوط وطباعة مخصصة']
  },
  {
    id: 'c2',
    title: 'تصميم علب وتغليف منتجات العطور',
    titleEn: 'Luxury Perfume Packaging & Unboxing',
    category: 'تغليف المنتجات الفاخرة',
    categoryEn: 'Packaging Design',
    span: 'col-span-1 md:col-span-1',
    gradient: 'from-[#1f1911] via-[#332616] to-[#4d3417]',
    accent: '#F59E0B',
    icon: '🏺',
    badge: 'Packaging Gold',
    deliverables: ['تجسيد ثلاثي الأبعاد 4K', 'قوالب طباعة حرارية']
  },
  {
    id: 'c3',
    title: 'واجهات معمارية ولوحات محلات مضيئة',
    titleEn: 'Architectural Facade & Storefront Signage',
    category: 'التصميم المعماري والواجهات',
    categoryEn: 'Spatial & Signage',
    span: 'col-span-1 md:col-span-1',
    gradient: 'from-[#0b1c2b] via-[#10293d] to-[#123e60]',
    accent: '#38BDF8',
    icon: '🏛️',
    badge: 'Spatial Design',
    deliverables: ['لوحات نيون ومعدن مقصوص', 'إضاءة سينمائية ليلية']
  },
  {
    id: 'c4',
    title: 'حملات إعلانية وسوشيال ميديا 3D',
    titleEn: 'Omnichannel 3D Social Media Campaigns',
    category: 'الإعلانات الرقمية والموشن',
    categoryEn: 'Digital Campaigns',
    span: 'col-span-1 md:col-span-2',
    gradient: 'from-[#0a1f1d] via-[#11332e] to-[#164e45]',
    accent: '#34D399',
    icon: '🚀',
    badge: 'Viral Campaign +5M Views',
    deliverables: ['بوسترات إعلانية سينمائية', 'موشن غرافيكس عالي الجودة', 'بانرات تفاعلية']
  }
];

export const CreativeDesignSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services-creative" className="py-24 relative overflow-hidden bg-[#080B14]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <PaletteIcon size={16} />
            <span>{t('services.creative.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('services.creative.title')}
          </h2>
          <p className="section-desc">
            {t('services.creative.desc')}
          </p>
        </div>

        {/* Dynamic Studio Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {creativeWorks.map((work) => {
            const isHovered = hoveredId === work.id;
            return (
              <div
                key={work.id}
                onMouseEnter={() => setHoveredId(work.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`${work.span} rounded-3xl p-6 sm:p-8 bg-gradient-to-tr ${work.gradient} border border-white/15 backdrop-blur-xl relative overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-1.5`}
              >
                {/* Glowing light highlight */}
                <div 
                  className="absolute -top-20 -left-20 w-52 h-52 rounded-full blur-3xl opacity-25 group-hover:opacity-40 transition-opacity pointer-events-none"
                  style={{ backgroundColor: work.accent }}
                ></div>

                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {work.icon}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white/90 bg-white/10 border border-white/15 backdrop-blur-md">
                    {work.badge}
                  </span>
                </div>

                {/* Card Center: Titles & Category */}
                <div className="relative z-10 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#40D9E8] block mb-2">
                    {lang === 'ar' ? work.category : work.categoryEn}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white leading-snug">
                    {lang === 'ar' ? work.title : work.titleEn}
                  </h3>
                </div>

                {/* Deliverables tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 relative z-10">
                  {work.deliverables.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-xs text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Interactive View Details button */}
                <div className="mt-6 flex justify-end relative z-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-[#40D9E8] transition-colors"
                  >
                    <span>طلب تصميم مماثل</span>
                    <ArrowUpRightIcon size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SparklesIcon, ArrowUpRightIcon, ExpandIcon } from './Icons';

interface ShowcaseItem {
  id: string;
  image: string;
  titleAr: string;
  titleEn: string;
  serviceAr: string;
  serviceEn: string;
  badge: string;
  accent: string;
  rotation: string;
  zIndex: number;
  translateY: string;
}

const showcaseImages: ShowcaseItem[] = [
  {
    id: 'sb-1',
    image: '/showcase_4k/02_maison_savour_4k.jpg',
    titleAr: 'Maison Savour — واجهة مطعم فاخر 4K',
    titleEn: 'Maison Savour — 4K Gastronomy Web',
    serviceAr: 'تطوير المواقع',
    serviceEn: 'Web Architecture',
    badge: '4K Ultra Web',
    accent: '#F97316',
    rotation: '-rotate-6',
    zIndex: 10,
    translateY: 'hover:-translate-y-4'
  },
  {
    id: 'sb-2',
    image: '/identity/10.jpg',
    titleAr: 'فيريديان — الهوية المعمارية والعقارية',
    titleEn: 'Veridian Realty — Corporate Facade',
    serviceAr: 'الهوية المؤسسية',
    serviceEn: 'Brand Identity',
    badge: 'Spatial Identity',
    accent: '#10B981',
    rotation: '-rotate-2',
    zIndex: 20,
    translateY: 'hover:-translate-y-4'
  },
  {
    id: 'sb-3',
    image: '/identity/7.1.jpg',
    titleAr: 'فيلورا سكين — التغليف الملكي للمنتجات',
    titleEn: 'Velora Skin — Haute Packaging',
    serviceAr: 'التغليف الفاخر',
    serviceEn: 'Luxury Packaging',
    badge: 'Haute Packaging',
    accent: '#A855F7',
    rotation: 'rotate-0',
    zIndex: 30,
    translateY: 'hover:-translate-y-5'
  },
  {
    id: 'sb-4',
    image: '/showcase_4k/06_royal_crest_luxury_hotel_4k.jpg',
    titleAr: 'Royal Crest — منتجع 5 نجوم ملكي',
    titleEn: 'Royal Crest — 5-Star Hotel 4K',
    serviceAr: 'منظومة الحجوزات',
    serviceEn: 'Resort Experience',
    badge: 'Hospitality 4K',
    accent: '#EAB308',
    rotation: 'rotate-3',
    zIndex: 20,
    translateY: 'hover:-translate-y-4'
  },
  {
    id: 'sb-5',
    image: '/identity/2.1.jpg',
    titleAr: 'البنّا للاستثمار — مونوغرام عربي فاخر',
    titleEn: 'Albina — Arabic Monogram & Villas',
    serviceAr: 'الهوية والابتكار',
    serviceEn: 'Monogram & Spatial',
    badge: 'Arabic Monogram',
    accent: '#D97706',
    rotation: 'rotate-6',
    zIndex: 10,
    translateY: 'hover:-translate-y-4'
  }
];

export const MasterpieceBanner: React.FC = () => {
  const { lang } = useLanguage();
  const [selectedPreview, setSelectedPreview] = useState<ShowcaseItem | null>(null);

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* 
          Masterpiece Panoramic Glass Banner
          Aspect Ratio: 3:1 (Width 3x Height)
          Features: Glass borders (حواف زجاجية), floating 3D perspective gallery, radiant glows.
        */}
        <div className="relative w-full rounded-[2.5rem] overflow-hidden border-2 border-white/25 sm:border-white/35 bg-gradient-to-br from-[#0c1322]/90 via-[#0e1628]/85 to-[#080d18]/95 backdrop-blur-2xl shadow-[0_30px_90px_rgba(0,0,0,0.75),inset_0_1px_3px_rgba(255,255,255,0.4)] transition-all duration-700 min-h-[460px] md:min-h-0 md:aspect-[3/1] flex items-center">
          
          {/* Radiant Ambient Glass Orbs */}
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#40D9E8]/20 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#647BFF]/25 blur-[100px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

          {/* Frosted Glass Outer Bevel Highlight */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/20 pointer-events-none" />

          {/* Inner Grid Content (Split into 2 Panoramic Zones) */}
          <div className="relative z-10 w-full h-full p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Zone 1: Text & Core Value Proposition */}
            <div className="w-full md:w-[45%] lg:w-[42%] flex flex-col justify-center text-right md:rtl:text-right md:ltr:text-left z-20">
              
              {/* Top Glass Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-inner w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#40D9E8] animate-ping" />
                <span className="text-xs font-mono font-bold text-white tracking-wider">
                  {lang === 'ar' ? '✦ تكامل لا يُضاهى | Masterpiece Banner' : '✦ Unrivaled Synergy | Masterpiece'}
                </span>
              </div>

              {/* Banner Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3">
                {lang === 'ar' ? (
                  <>
                    منظومة رقمية تصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40D9E8] via-[#647BFF] to-[#C084FC]">الفارق لعلامتك</span>
                  </>
                ) : (
                  <>
                    An Integrated Ecosystem <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40D9E8] via-[#647BFF] to-[#C084FC]">Built to Dominate</span>
                  </>
                )}
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6 max-w-lg">
                {lang === 'ar'
                  ? 'ندمج تصميم المواقع السينمائية بدقة 4K مع الهويات الملكية والأتمتة الذكية والأنظمة السحابية لنمنحك حضوراً استثنائياً يتفوق على المنافسين.'
                  : 'Fusing cinematic 4K web engineering with haute brand identities, autonomous AI agents, and enterprise cloud architectures.'}
              </p>

              {/* Mini Service Pills with Glass Borders */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { icon: '🌐', ar: 'مواقع 4K', en: '4K Web' },
                  { icon: '🤖', ar: 'أتمتة ذكية', en: 'AI Agents' },
                  { icon: '🏛️', ar: 'هويات ملكية', en: 'Luxury Identity' },
                  { icon: '☁️', ar: 'أنظمة ERP', en: 'Cloud SaaS' },
                ].map((s, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-[11px] font-bold text-white/85 bg-black/40 backdrop-blur-md border border-white/20 shadow-sm flex items-center gap-1.5"
                  >
                    <span>{s.icon}</span>
                    <span>{lang === 'ar' ? s.ar : s.en}</span>
                  </span>
                ))}
              </div>

              {/* CTA Action */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#647BFF] to-[#40D9E8] hover:shadow-[0_10px_30px_rgba(64,217,232,0.4)] transition-all transform hover:scale-105 active:scale-95"
                >
                  <span>{lang === 'ar' ? 'ابدأ مشروعك الفاخر معنا' : 'Launch Your Masterpiece'}</span>
                  <ArrowUpRightIcon size={14} />
                </a>

                <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/30">
                  ⚡ 100% High Precision
                </span>
              </div>
            </div>

            {/* Zone 2: Composite 3D Floating Showcase (Collection of Best Service Images) */}
            <div className="w-full md:w-[55%] lg:w-[58%] h-full flex items-center justify-center relative py-6 md:py-0 overflow-visible">
              
              {/* Perspective Card Deck */}
              <div className="relative w-full max-w-[560px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[300px] flex items-center justify-center">
                
                {showcaseImages.map((item, index) => {
                  // Calculate horizontal offset
                  const offsetMap = [-160, -80, 0, 80, 160];
                  const offsetSmMap = [-110, -55, 0, 55, 110];
                  
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedPreview(item)}
                      className={`absolute w-[125px] sm:w-[155px] md:w-[170px] lg:w-[185px] aspect-[9/14] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out transform ${item.rotation} ${item.translateY} select-none group shadow-[0_20px_45px_rgba(0,0,0,0.7)]`}
                      style={{
                        zIndex: item.zIndex,
                        transform: `translateX(${typeof window !== 'undefined' && window.innerWidth < 640 ? offsetSmMap[index] : offsetMap[index]}px) rotate(${index === 2 ? 0 : (index - 2) * 5}deg)`,
                      }}
                    >
                      {/* Glass Border Frame for each card (حواف زجاجية فخمة) */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-white/35 backdrop-blur-sm pointer-events-none z-20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] group-hover:border-[#40D9E8]/80 transition-colors" />

                      {/* Real Image */}
                      <img
                        src={item.image}
                        alt={lang === 'ar' ? item.titleAr : item.titleEn}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Top floating glass badge */}
                      <div className="absolute top-2.5 right-2.5 left-2.5 flex items-center justify-between z-30 opacity-90 group-hover:opacity-100 transition-opacity">
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold text-white bg-black/70 backdrop-blur-md border border-white/20 shadow">
                          {item.badge}
                        </span>
                        <span className="p-1 rounded-full bg-black/60 text-white hover:text-[#40D9E8] backdrop-blur-md">
                          <ExpandIcon size={10} />
                        </span>
                      </div>

                      {/* Bottom dark gradient overlay with title */}
                      <div className="absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black via-black/80 to-transparent z-20 flex flex-col justify-end">
                        <span 
                          className="text-[9px] font-extrabold uppercase tracking-wider block"
                          style={{ color: item.accent }}
                        >
                          {lang === 'ar' ? item.serviceAr : item.serviceEn}
                        </span>
                        <h4 className="text-[10px] sm:text-[11px] font-bold text-white line-clamp-1">
                          {lang === 'ar' ? item.titleAr : item.titleEn}
                        </h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Lightbox Preview Modal */}
      {selectedPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn"
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#0b101b] rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/50">
              <span 
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: `${selectedPreview.accent}25`, color: selectedPreview.accent }}
              >
                {lang === 'ar' ? selectedPreview.serviceAr : selectedPreview.serviceEn}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                {lang === 'ar' ? selectedPreview.titleAr : selectedPreview.titleEn}
              </h3>
              <button
                onClick={() => setSelectedPreview(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-black/60">
              <img
                src={selectedPreview.image}
                alt={selectedPreview.titleAr}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

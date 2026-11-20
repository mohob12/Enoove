import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SparklesIcon, ArrowRightIcon, ArrowLeftIcon, LayersIcon, ShieldCheckIcon, ZapIcon, BotIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="ambient-orb ambient-orb-1"></div>
      <div className="ambient-orb ambient-orb-2"></div>
      <div className="ambient-orb ambient-orb-3"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Top Floating Badge */}
        <div className="badge-glow mb-6 animate-pulse">
          <SparklesIcon size={16} className="text-[#40D9E8]" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] max-w-5xl mb-6">
          <span className="text-gradient block">{t('hero.headline')}</span>
          <span className="text-xl sm:text-2xl lg:text-3xl font-light text-[#A5B0C2]/80 mt-3 block font-['Plus_Jakarta_Sans'] tracking-normal">
            {t('hero.subheadline')}
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="text-base sm:text-lg lg:text-xl text-[#A5B0C2] max-w-3xl leading-relaxed mb-10 font-normal">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <a href="#services-web" className="btn-primary group">
            <span>{t('hero.cta.primary')}</span>
            {isRtl ? (
              <ArrowLeftIcon size={18} className="transition-transform group-hover:-translate-x-1" />
            ) : (
              <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
            )}
          </a>
          <a href="#contact" className="btn-secondary group">
            <span>{t('hero.cta.secondary')}</span>
            <div className="w-2 h-2 rounded-full bg-[#40D9E8] animate-ping"></div>
          </a>
        </div>

        {/* Trust Metric Badges (Inspired by Image 1) */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3 px-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 mb-16 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/90">
            <ShieldCheckIcon size={18} className="text-[#40D9E8]" />
            <span>{t('hero.stat.projects')}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></span>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/90">
            <ZapIcon size={18} className="text-[#647BFF]" />
            <span>{t('hero.stat.growth')}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block"></span>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white/90">
            <BotIcon size={18} className="text-[#40D9E8]" />
            <span>{t('hero.stat.satisfaction')}</span>
          </div>
        </div>

        {/* 3D Floating Overlapping Composition (Hero Visual Showcase) */}
        <div className="relative w-full max-w-5xl h-[380px] sm:h-[480px] mt-2 flex items-center justify-center perspective-[1200px]">
          
          {/* Central Main Glass Card: Luxury Restaurant / Digital Showcase */}
          <div 
            className="absolute z-20 w-[90%] sm:w-[680px] h-[260px] sm:h-[340px] rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-white/[0.09] to-white/[0.03] backdrop-blur-2xl border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.7)] transition-all duration-700 hover:scale-[1.02] flex flex-col justify-between overflow-hidden"
            style={{ transform: 'translateY(-10px)' }}
          >
            {/* Top Mockup Browser Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/80"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/80"></span>
              </div>
              <div className="px-4 py-1 rounded-full bg-black/40 border border-white/10 text-[11px] text-[#A5B0C2] font-mono flex items-center gap-2">
                <span className="text-[#40D9E8]">https://</span>enoove.agency/showcase
              </div>
              <div className="text-[11px] text-[#40D9E8] font-bold px-2 py-0.5 rounded bg-[#40D9E8]/10 border border-[#40D9E8]/20">
                LIVE DEMO
              </div>
            </div>

            {/* Content Preview inside central card */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto items-center">
              <div className="md:col-span-7 text-right rtl:text-right ltr:text-left">
                <span className="text-xs font-bold text-[#40D9E8] uppercase tracking-wider block mb-1">
                  Gastronomy & High-End Tech
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Bella Vista — مطعم راقي وتجربة ضيافة ملكية
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B0C2] line-clamp-2 mb-3">
                  تصميم متكامل مع حجز طاولات ذكي بالذكاء الاصطناعي، وقائمة طعام تفاعلية ثلاثية الأبعاد.
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/80">
                    Next.js + 3D
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#647BFF]/10 border border-[#647BFF]/30 text-[11px] text-[#647BFF]">
                    معدل حجز +180%
                  </span>
                </div>
              </div>
              <div className="hidden md:flex md:col-span-5 h-[160px] rounded-xl bg-gradient-to-tr from-[#101827] via-[#1a243b] to-[#253556] p-3 border border-white/10 flex-col justify-between">
                <div className="flex items-center justify-between text-[11px] text-white/70">
                  <span>إحصائيات الحجز المباشر</span>
                  <span className="text-[#40D9E8] font-bold">نشط 🟢</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#647BFF] to-[#40D9E8] w-[85%]"></div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#40D9E8] to-[#8B5CF6] w-[65%]"></div>
                  </div>
                </div>
                <div className="text-[12px] font-mono text-right text-[#40D9E8]">
                  +42 حجز اليوم
                </div>
              </div>
            </div>

            {/* Bottom mini bar */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A5B0C2]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#40D9E8]"></span>
                تجربة تفاعلية مخصصة
              </span>
              <span>Enoove Creative Framework</span>
            </div>
          </div>

          {/* Left Layered Card: Medical Clinic Preview (Pushed back with 3D rotation) */}
          <div 
            className="hidden sm:block absolute z-10 left-[-30px] lg:left-0 w-[300px] h-[220px] rounded-2xl p-4 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-6 translate-y-8 hover:rotate-0 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#40D9E8]/20 flex items-center justify-center text-[#40D9E8]">
                🏥
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Apex Clinic — المركز الطبي</h4>
                <p className="text-[10px] text-[#A5B0C2]">حجز فوري وإشعارات للمرضى</p>
              </div>
            </div>
            <div className="space-y-2 text-[11px] text-white/80 mt-4 bg-black/30 p-2.5 rounded-lg border border-white/5">
              <div className="flex justify-between">
                <span>المواعيد اليوم:</span>
                <span className="text-[#40D9E8] font-bold">28 موعد</span>
              </div>
              <div className="flex justify-between">
                <span>الرضا الطبي:</span>
                <span className="text-[#647BFF] font-bold">99.8%</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-[#A5B0C2]">
              <span>نظام عيادات ذكي</span>
              <span className="text-white bg-white/10 px-2 py-0.5 rounded">مكتمل</span>
            </div>
          </div>

          {/* Right Layered Card: AI Automation Workflow (Pushed back with 3D rotation) */}
          <div 
            className="hidden sm:block absolute z-10 right-[-30px] lg:right-0 w-[300px] h-[220px] rounded-2xl p-4 bg-gradient-to-bl from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform rotate-6 translate-y-8 hover:rotate-0 hover:scale-105 transition-all duration-500"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#647BFF]/20 flex items-center justify-center text-[#647BFF]">
                ⚡
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Smart AI Ecosystem</h4>
                <p className="text-[10px] text-[#A5B0C2]">أتمتة خدمة العملاء 24/7</p>
              </div>
            </div>
            <div className="space-y-2 text-[11px] text-white/80 mt-4 bg-black/30 p-2.5 rounded-lg border border-white/5 font-mono">
              <div className="flex items-center gap-1.5 text-[10px] text-[#40D9E8]">
                <span>💬 WhatsApp Webhook:</span>
                <span className="text-white font-bold">RECEIVED</span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#647BFF]">
                <span>🤖 AI Lead Gen:</span>
                <span className="text-white font-bold">QUALIFIED</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-[#A5B0C2]">
              <span>أتمتة العمليات الفورية</span>
              <span className="text-[#40D9E8] bg-[#40D9E8]/10 px-2 py-0.5 rounded">0.4s زمن الاستجابة</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SparklesIcon, ArrowRightIcon, ArrowLeftIcon, ShieldCheckIcon, ZapIcon, BotIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative min-h-screen pt-36 pb-24 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Decorative Radial Glows */}
      <div className="ambient-orb ambient-orb-1"></div>
      <div className="ambient-orb ambient-orb-2"></div>
      <div className="ambient-orb ambient-orb-3"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        {/* Top Floating Badge */}
        <div className="badge-glow mb-8 animate-pulse">
          <SparklesIcon size={16} className="text-[#40D9E8]" />
          <span>{t('hero.badge')}</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight text-white mb-4">
            <span className="text-gradient block pb-2">{t('hero.headline')}</span>
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-[#A5B0C2]/90 font-['Plus_Jakarta_Sans'] tracking-normal">
            {t('hero.subheadline')}
          </p>
        </div>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base lg:text-lg text-[#A5B0C2] max-w-2xl leading-relaxed mb-10 font-normal">
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-14">
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

        {/* Trust Metric Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3.5 px-6 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 mb-14 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
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

        {/* Hero Visual Showcase with Real Screen Mockup */}
        <div className="relative w-full max-w-4xl min-h-[380px] sm:min-h-[440px] flex items-center justify-center mt-2">
          
          {/* Main Central Glass Mockup Card */}
          <div className="relative z-20 w-full max-w-3xl rounded-3xl p-5 sm:p-7 bg-[#101827]/95 backdrop-blur-2xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden">
            
            {/* Top Browser Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F]/90"></span>
              </div>
              <div className="px-4 py-1 rounded-full bg-black/50 border border-white/10 text-[11px] text-[#A5B0C2] font-mono flex items-center gap-2">
                <span className="text-[#40D9E8]">https://</span>enoove.agency/featured-work
              </div>
              <div className="text-[10px] text-[#40D9E8] font-bold px-2.5 py-0.5 rounded-full bg-[#40D9E8]/10 border border-[#40D9E8]/20">
                LIVE PRODUCTION
              </div>
            </div>

            {/* Content Preview with Real Showcase Screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center my-2">
              <div className="md:col-span-6 text-right rtl:text-right ltr:text-left space-y-2">
                <span className="text-xs font-bold text-[#40D9E8] uppercase tracking-wider block">
                  Gastronomy & Digital Innovation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  Maison Savour — تجربة الضيافة والمطاعم الملكية
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B0C2] leading-relaxed">
                  تصميم متكامل مع حجز طاولات ذكي بالذكاء الاصطناعي، وقائمة طعام تفاعلية فائقة السرعة.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/90">
                    Next.js 15
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[#647BFF]/10 border border-[#647BFF]/30 text-[11px] text-[#647BFF] font-semibold">
                    معدل حجز +210%
                  </span>
                </div>
              </div>

              {/* Real Mockup Image Preview */}
              <div className="md:col-span-6 rounded-2xl border border-white/15 overflow-hidden h-[190px] relative shadow-lg group">
                <img
                  src="/showcase/maison-savour.jpg"
                  alt="Maison Savour Luxury Restaurant"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-2.5 left-2.5 flex items-center justify-between text-[11px] text-white">
                  <span className="px-2 py-0.5 rounded bg-black/60 font-semibold">Michelin Experience</span>
                  <span className="text-[#40D9E8] font-bold">حجز فوري 🟢</span>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A5B0C2]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#40D9E8]"></span>
                بنية برمجية معتمدة
              </span>
              <span className="font-mono text-white/60">Enoove Spatial Framework</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

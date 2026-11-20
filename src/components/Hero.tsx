import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SparklesIcon, ArrowRightIcon, ArrowLeftIcon, ShieldCheckIcon, ZapIcon, BotIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="relative pt-6 sm:pt-10 pb-4 sm:pb-6 flex flex-col justify-center items-center overflow-hidden">
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
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight text-white mb-2">
            <span className="text-gradient block pb-2">{t('hero.headline')}</span>
          </h1>
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
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 py-3.5 px-6 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 mb-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
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
      </div>
    </section>
  );
};

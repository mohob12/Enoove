import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowLeftIcon, ArrowRightIcon, SparklesIcon, MessageSquareIcon } from './Icons';

export const CtaSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-20 relative overflow-hidden bg-[#080B14]">
      {/* Background ambient orbs */}
      <div className="ambient-orb ambient-orb-1" style={{ top: '20%', left: '20%' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-14 bg-gradient-to-tr from-white/[0.08] via-white/[0.04] to-white/[0.01] backdrop-blur-3xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
          
          {/* Subtle light streak */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-gradient-to-r from-transparent via-[#40D9E8]/20 to-transparent blur-2xl pointer-events-none"></div>

          {/* Badge */}
          <div className="badge-glow mb-6 mx-auto">
            <SparklesIcon size={16} />
            <span>ابدأ التحول الرقمي اليوم</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">
            {t('cta.headline')}
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-lg text-[#A5B0C2] max-w-2xl mx-auto mb-10 leading-relaxed">
            {t('cta.desc')}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#contact" className="btn-primary group">
              <span>{t('cta.btn.start')}</span>
              {isRtl ? (
                <ArrowLeftIcon size={18} className="transition-transform group-hover:-translate-x-1" />
              ) : (
                <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
              )}
            </a>
            <a 
              href="https://wa.me/213000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary group flex items-center gap-2"
            >
              <MessageSquareIcon size={18} className="text-[#40D9E8]" />
              <span>{t('cta.btn.contact')}</span>
            </a>
          </div>

          {/* Trust reassurance */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A5B0C2]">
            <span>✓ استشارة أولية مجانية وخطة عمل</span>
            <span>✓ تسليم سريع ومعايير عالمية</span>
            <span>✓ عقد رسمي وضمان أداء 100%</span>
          </div>

        </div>
      </div>
    </section>
  );
};

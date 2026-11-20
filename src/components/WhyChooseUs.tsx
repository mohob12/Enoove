import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheckIcon, ZapIcon, BotIcon, LayersIcon, SparklesIcon, BarChartIcon } from './Icons';

export const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const cards = [
    {
      title: t('why.c1.title'),
      desc: t('why.c1.desc'),
      icon: <LayersIcon size={24} className="text-[#40D9E8]" />,
      accent: '#40D9E8'
    },
    {
      title: t('why.c2.title'),
      desc: t('why.c2.desc'),
      icon: <SparklesIcon size={24} className="text-[#647BFF]" />,
      accent: '#647BFF'
    },
    {
      title: t('why.c3.title'),
      desc: t('why.c3.desc'),
      icon: <BotIcon size={24} className="text-[#40D9E8]" />,
      accent: '#40D9E8'
    },
    {
      title: t('why.c4.title'),
      desc: t('why.c4.desc'),
      icon: <ZapIcon size={24} className="text-[#A855F7]" />,
      accent: '#A855F7'
    },
    {
      title: t('why.c5.title'),
      desc: t('why.c5.desc'),
      icon: <BarChartIcon size={24} className="text-emerald-400" />,
      accent: '#10B981'
    },
    {
      title: t('why.c6.title'),
      desc: t('why.c6.desc'),
      icon: <ShieldCheckIcon size={24} className="text-[#647BFF]" />,
      accent: '#647BFF'
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-[#080B14]">
      {/* Background ambient light */}
      <div className="ambient-orb ambient-orb-3"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <ShieldCheckIcon size={16} />
            <span>{t('why.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('why.title')}
          </h2>
          <p className="section-desc">
            نجمع بين الهندسة البرمجية الدقيقة والفخامة البصرية لتمنح شركتك تميزاً مستداماً ونتائج أعمال قابلة للقياس.
          </p>
        </div>

        {/* 6 Feature Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group shadow-[0_20px_45px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#40D9E8] transition-colors">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B0C2] leading-relaxed">
                  {c.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A5B0C2]">
                <span className="font-mono text-[10px]">STANDARD 0{i + 1}</span>
                <span className="text-[#40D9E8] font-semibold">ضمان الجودة ✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

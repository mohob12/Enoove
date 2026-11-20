import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SparklesIcon, CheckIcon } from './Icons';

export const ProcessTimeline: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      num: t('process.step1.num'),
      name: t('process.step1.name'),
      desc: t('process.step1.desc'),
      icon: '🔍',
      details: ['جلسة استكشافية متعمقة', 'تحليل المنافسين والجمهور', 'تحديد الأهداف ومؤشرات النجاح']
    },
    {
      num: t('process.step2.num'),
      name: t('process.step2.name'),
      desc: t('process.step2.desc'),
      icon: '🧭',
      details: ['خارطة الطريق المعمارية', 'تصميم تجربة المستخدم Wireframes', 'اختيار البنية البرمجية الأنسب']
    },
    {
      num: t('process.step3.num'),
      name: t('process.step3.name'),
      desc: t('process.step3.desc'),
      icon: '⚡',
      details: ['واجهات زجاجية وتفاعلات ثلاثية الأبعاد', 'برمجة أنظمة الذكاء الاصطناعي', 'اختبارات سرعة وأمان فائقة']
    },
    {
      num: t('process.step4.num'),
      name: t('process.step4.name'),
      desc: t('process.step4.desc'),
      icon: '🚀',
      details: ['إطلاق رسمي سلس ومحمي', 'ربط منصات التحليلات والـ SEO', 'مرافقة ودعم فني مستمر']
    }
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#0e1628] to-[#080B14]">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-tag justify-center">
            <SparklesIcon size={16} />
            <span>{t('process.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('process.title')}
          </h2>
          <p className="section-desc">
            منهجية دقيقة ومدروسة تحول الرؤية الاستراتيجية إلى منتج رقمي متكامل يحقق أهدافك التجارية.
          </p>
        </div>

        {/* Process Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-[#647BFF]/20 via-[#40D9E8]/40 to-[#8B5CF6]/20 pointer-events-none z-0"></div>

          {steps.map((st, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 sm:p-7 bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-[#40D9E8]/40 transition-all duration-300 relative z-10 group shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div>
                {/* Step Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#647BFF]/20 to-[#40D9E8]/20 border border-white/15 flex items-center justify-center text-xl shadow-inner group-hover:scale-110 transition-transform">
                    {st.icon}
                  </span>
                  <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-[#40D9E8] transition-colors">
                    {st.num}
                  </span>
                </div>

                {/* Step Title & Description */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#40D9E8] transition-colors">
                  {st.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#A5B0C2] leading-relaxed mb-5">
                  {st.desc}
                </p>
              </div>

              {/* Step Key deliverables */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                {st.details.map((dt, dti) => (
                  <div key={dti} className="flex items-center gap-2 text-[11px] text-white/80">
                    <CheckIcon size={12} className="text-[#40D9E8] shrink-0" />
                    <span>{dt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

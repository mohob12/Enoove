import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BotIcon, ZapIcon, SparklesIcon, CheckIcon } from './Icons';

export const AiAutomationSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulationSteps = [
    {
      channel: 'WhatsApp Direct',
      sender: 'أحمد التميمي (عميل مهتم)',
      message: 'مرحباً، أود الاستفسار عن باقات تصميم المواقع وحجز استشارة خاصة لشركتي.',
      time: '10:02 AM',
      icon: '💬',
      badge: 'رسالة واردة'
    },
    {
      channel: 'Enoove Autonomous AI Agent',
      sender: 'المساعد الذكي لـ Enoove',
      message: 'أهلاً بك أستاذ أحمد! يسعدنا خدمتك. بناءً على مجال شركتكم، أجهز لك رابط جدول المواعيد لاختيار الوقت الأنسب لك غداً.',
      time: '10:02 AM',
      icon: '🤖',
      badge: 'رد فوري 0.3s'
    },
    {
      channel: 'Lead Qualification & CRM',
      sender: 'نظام إدارة العملاء الذكي',
      message: 'تم تأكيد حجز الموعد: الخميس الساعة 4:00 مساءً. تم تصنيف العميل: [محتمل عالي القيمة].',
      time: '10:03 AM',
      icon: '⚡',
      badge: 'تأكيد الحجز التلقائي'
    },
    {
      channel: 'Team Dispatch & Sync',
      sender: 'تنبيهات الإدارة والمبيعات',
      message: 'تم إرسال إشعار فوري لفريق العمل مع ملخص احتياجات العميل وملفه التعريفي.',
      time: '10:03 AM',
      icon: '🔔',
      badge: 'مزامنة سحابية كاملة'
    }
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < simulationSteps.length) {
        setActiveStep(step);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 1800);
  };

  const capabilities = [
    { title: 'روبوتات دردشة ذكية للمواقع', en: 'AI Web Chatbots', icon: '🤖', desc: 'إجابة فورية عن الاستفسارات وحجز الخدمات 24/7' },
    { title: 'أتمتة محادثات واتساب', en: 'WhatsApp Business API', icon: '💬', desc: 'إدارة آلاف المحادثات والطلبات وتأكيد المواعيد آلياً' },
    { title: 'أتمتة إنستغرام وفيسبوك', en: 'Meta DM Automation', icon: '📱', desc: 'الرد التلقائي على التعليقات والرسائل الخاصة في ثوانٍ' },
    { title: 'خدمة عملاء ذاتية متقدمة', en: 'Autonomous Support', icon: '🛡️', desc: 'حل المشكلات وتوجيه العملاء دون تدخل بشري دائم' },
    { title: 'توليد وتأهيل العملاء (Leads)', en: 'AI Lead Generation', icon: '🎯', desc: 'فرز المهتمين الحقيقيين وتغذية فريق المبيعات' },
    { title: 'سير عمل ذكي ومترابط', en: 'Intelligent Workflows', icon: '⚡', desc: 'ربط المنصات بـ Zapier و Make والأنظمة السحابية' },
  ];

  return (
    <section id="services-ai" className="pt-16 sm:pt-20 pb-6 sm:pb-8 relative overflow-hidden bg-[#080B14]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#647BFF]/15 to-[#40D9E8]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <BotIcon size={16} />
            <span>{t('services.ai.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('services.ai.title')}
          </h2>
          <p className="section-desc">
            {t('services.ai.desc')}
          </p>
        </div>

        {/* Central Ecosystem Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left/Main Column: Central Glass Ecosystem Simulator */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#647BFF] to-[#40D9E8] flex items-center justify-center text-white shadow-lg">
                  <ZapIcon size={20} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Enoove Neural Workflow Engine
                  </h3>
                  <p className="text-xs text-[#A5B0C2]">منظومة المحاكاة الحية لسير العمل الذكي</p>
                </div>
              </div>
              <button
                onClick={runSimulation}
                disabled={isSimulating}
                className="px-4 py-2 rounded-full bg-[#40D9E8]/10 hover:bg-[#40D9E8]/20 border border-[#40D9E8]/30 text-xs font-bold text-[#40D9E8] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <SparklesIcon size={14} className={isSimulating ? 'animate-spin' : ''} />
                <span>{isSimulating ? 'جاري المحاكاة...' : 'اختبر الأتمتة الآن'}</span>
              </button>
            </div>

            {/* Workflow Progress Steps */}
            <div className="grid grid-cols-4 gap-2 mb-6">
              {simulationSteps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    activeStep === idx
                      ? 'bg-[#647BFF]/20 border-[#40D9E8] text-white shadow-[0_0_15px_rgba(64,217,232,0.3)]'
                      : 'bg-white/[0.02] border-white/5 text-[#A5B0C2] hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="text-base mb-1">{s.icon}</div>
                  <div className="text-[10px] font-bold truncate">خطوة {idx + 1}</div>
                </button>
              ))}
            </div>

            {/* Live Step Display Card */}
            <div className="rounded-2xl p-5 sm:p-6 bg-[#101827]/80 border border-white/10 relative overflow-hidden transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-base">
                    {simulationSteps[activeStep].icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {simulationSteps[activeStep].channel}
                    </h4>
                    <span className="text-[11px] text-[#A5B0C2]">
                      {simulationSteps[activeStep].sender}
                    </span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold text-[#40D9E8] bg-[#40D9E8]/10 border border-[#40D9E8]/20">
                  {simulationSteps[activeStep].badge}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-sm sm:text-base text-white/95 leading-relaxed font-normal">
                "{simulationSteps[activeStep].message}"
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#A5B0C2]">
                <span className="font-mono text-[11px]">Timestamp: {simulationSteps[activeStep].time}</span>
                <span className="flex items-center gap-1.5 text-[#40D9E8]">
                  <CheckIcon size={14} />
                  تمت المعالجة بنجاح
                </span>
              </div>
            </div>

            {/* Neural Ecosystem Stats */}
            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-lg font-bold text-[#40D9E8]">0.4 ثانية</div>
                <div className="text-[11px] text-[#A5B0C2]">متوسط سرعة الاستجابة</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-lg font-bold text-[#647BFF]">10,000+</div>
                <div className="text-[11px] text-[#A5B0C2]">محادثة مؤتمتة شهرياً</div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-lg font-bold text-emerald-400">98.5%</div>
                <div className="text-[11px] text-[#A5B0C2]">دقة الفهم والتحويل</div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Capabilities Cards Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 hover:border-[#647BFF]/40 transition-all duration-300 flex items-start gap-3.5 group shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#647BFF]/20 to-[#40D9E8]/20 border border-white/10 flex items-center justify-center text-lg shrink-0 group-hover:scale-110 transition-transform">
                  {cap.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#40D9E8] transition-colors">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#A5B0C2] mt-1 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

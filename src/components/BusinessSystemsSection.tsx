import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BarChartIcon, ArrowUpRightIcon } from './Icons';

export const BusinessSystemsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'finance' | 'inventory' | 'crm'>('finance');

  return (
    <section id="services-systems" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#0b1220] to-[#080B14]">
      {/* Background radial highlight */}
      <div className="ambient-orb ambient-orb-2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <BarChartIcon size={16} />
            <span>{t('services.systems.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('services.systems.title')}
          </h2>
          <p className="section-desc">
            {t('services.systems.desc')}
          </p>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('finance')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'finance'
                ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-[0_0_20px_rgba(100,123,255,0.4)]'
                : 'bg-white/[0.04] text-[#A5B0C2] hover:bg-white/[0.08]'
            }`}
          >
            📊 المالية والأرباح السحابية
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'inventory'
                ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-[0_0_20px_rgba(100,123,255,0.4)]'
                : 'bg-white/[0.04] text-[#A5B0C2] hover:bg-white/[0.08]'
            }`}
          >
            📦 إدارة المستودعات والمخزون
          </button>
          <button
            onClick={() => setActiveTab('crm')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'crm'
                ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-[0_0_20px_rgba(100,123,255,0.4)]'
                : 'bg-white/[0.04] text-[#A5B0C2] hover:bg-white/[0.08]'
            }`}
          >
            👥 علاقات العملاء والموظفين CRM
          </button>
        </div>

        {/* SaaS Dashboard Showcase Window */}
        <div className="max-w-6xl mx-auto rounded-3xl p-5 sm:p-8 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-2xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
          
          {/* Dashboard Window Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              </div>
              <span className="text-xs font-mono text-[#A5B0C2] hidden sm:inline">
                Enoove Cloud ERP Enterprise v4.2
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                مزامنة حية 100%
              </span>
            </div>
          </div>

          {/* Top KPI Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-xs text-[#A5B0C2] block mb-1">{t('services.systems.kpi.revenue')}</span>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">$1,482,900</div>
              <span className="text-[11px] text-[#40D9E8] font-semibold mt-1 inline-block">↑ +28.4% هذا الشهر</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-xs text-[#A5B0C2] block mb-1">{t('services.systems.kpi.invoices')}</span>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">1,842 فاتورة</div>
              <span className="text-[11px] text-emerald-400 font-semibold mt-1 inline-block">99.2% محصلة</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-xs text-[#A5B0C2] block mb-1">{t('services.systems.kpi.inventory')}</span>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">99.8%</div>
              <span className="text-[11px] text-[#647BFF] font-semibold mt-1 inline-block">تنبيهات فورية للنقص</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <span className="text-xs text-[#A5B0C2] block mb-1">{t('services.systems.kpi.efficiency')}</span>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono">+65% كفاءة</div>
              <span className="text-[11px] text-purple-400 font-semibold mt-1 inline-block">توفير 120 ساعة شهرياً</span>
            </div>
          </div>

          {/* Main Visual Content according to Tab */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Main Chart / Activity Area */}
            <div className="lg:col-span-8 p-5 rounded-2xl bg-[#101827]/70 border border-white/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-white">
                  {activeTab === 'finance' && 'مخطط التدفقات النقدية والأرباح الشهرية'}
                  {activeTab === 'inventory' && 'حركة المواد والمنتجات الأكثر طلباً'}
                  {activeTab === 'crm' && 'معدل تحويل العملاء واكتمال العقود'}
                </h4>
                <span className="text-xs text-[#40D9E8] font-mono">2026 Live Telemetry</span>
              </div>

              {/* Simulated High-End Chart Graphic */}
              <div className="h-48 sm:h-56 w-full flex items-end gap-2 sm:gap-3 pt-6 pb-2 px-2 border-b border-white/10">
                {[45, 62, 58, 80, 75, 90, 85, 110, 95, 125, 120, 145].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                    <div 
                      className="w-full rounded-t-lg bg-gradient-to-t from-[#647BFF]/40 via-[#647BFF] to-[#40D9E8] group-hover:brightness-125 transition-all duration-300 relative"
                      style={{ height: `${(val / 150) * 100}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity bg-black px-1.5 py-0.5 rounded border border-white/10">
                        {val}k
                      </span>
                    </div>
                    <span className="text-[10px] text-[#A5B0C2] font-mono">{idx + 1}M</span>
                  </div>
                ))}
              </div>

              {/* Chart Highlights Footer */}
              <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-[#A5B0C2] gap-2">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#40D9E8]"></span>
                    المبيعات المباشرة
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#647BFF]"></span>
                    الاشتراكات والعقود
                  </span>
                </div>
                <span className="text-white font-semibold">تصدير تقرير PDF معتمد ✓</span>
              </div>
            </div>

            {/* Right Mini Widget: Recent Real-Time Transactions */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-[#101827]/70 border border-white/10 flex flex-col justify-between">
              <h4 className="text-sm font-bold text-white mb-3">
                العمليات الحديثة والمصادقات
              </h4>
              <div className="space-y-2.5 text-xs">
                {[
                  { title: 'فاتورة مبيعات #4892', time: 'منذ 3 دقائق', amt: '+$4,200', st: 'مؤكدة' },
                  { title: 'توريد مخزون مركز الرياض', time: 'منذ 18 دقيقة', amt: '-$12,450', st: 'تم التدقيق' },
                  { title: 'اشتراك سنوي سحابي', time: 'منذ 35 دقيقة', amt: '+$8,900', st: 'مؤكدة' },
                  { title: 'تسوية رواتب الموظفين', time: 'منذ ساعتين', amt: '-$24,000', st: 'تم الصرف' },
                ].map((tx, txi) => (
                  <div key={txi} className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-white truncate">{tx.title}</div>
                      <div className="text-[10px] text-[#A5B0C2]">{tx.time}</div>
                    </div>
                    <div className="text-right">
                      <div className={`font-mono font-bold ${tx.amt.startsWith('+') ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {tx.amt}
                      </div>
                      <span className="text-[9px] text-[#40D9E8]">{tx.st}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-white/10 text-center">
                <a href="#contact" className="text-xs font-bold text-[#40D9E8] hover:underline flex items-center justify-center gap-1">
                  اطلب تخصيص نظام شركتك الآن
                  <ArrowUpRightIcon size={12} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

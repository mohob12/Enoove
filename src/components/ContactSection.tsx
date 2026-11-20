import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SendIcon, CheckIcon, MessageSquareIcon, SparklesIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web',
    budget: '$3k - $8k',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: '',
        email: '',
        phone: '',
        service: 'web',
        budget: '$3k - $8k',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#080B14] via-[#0d1424] to-[#080B14]">
      {/* Background ambient orbs */}
      <div className="ambient-orb ambient-orb-2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Contact Info & Value Proposition */}
          <div className="lg:col-span-5 text-right rtl:text-right ltr:text-left">
            <div className="section-tag">
              <SparklesIcon size={16} />
              <span>{t('contact.tag')}</span>
            </div>
            <h2 className="section-title text-gradient">
              {t('contact.title')}
            </h2>
            <p className="text-sm sm:text-base text-[#A5B0C2] leading-relaxed mb-8">
              {t('contact.desc')}
            </p>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/213000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-[#40D9E8]/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-xl text-emerald-400 group-hover:scale-110 transition-transform">
                  💬
                </div>
                <div>
                  <div className="text-xs text-[#A5B0C2]">محادثة مباشرة وفورية</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#40D9E8] transition-colors">
                    واتساب الأعمال: +213 00 00 00 00
                  </div>
                </div>
              </a>

              <a 
                href="mailto:contact@enoove.agency" 
                className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-[#647BFF]/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#647BFF]/10 border border-[#647BFF]/20 flex items-center justify-center text-xl text-[#647BFF] group-hover:scale-110 transition-transform">
                  ✉️
                </div>
                <div>
                  <div className="text-xs text-[#A5B0C2]">المراسلات الرسمية وعروض الأسعار</div>
                  <div className="text-sm font-bold text-white group-hover:text-[#647BFF] transition-colors">
                    contact@enoove.agency
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-xl text-purple-400">
                  📍
                </div>
                <div>
                  <div className="text-xs text-[#A5B0C2]">المقر والعمليات</div>
                  <div className="text-sm font-bold text-white">
                    خدمات رقمية دولية (العالم العربي والخليج وأوروبا)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Interactive Form */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-3xl border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto text-3xl animate-bounce">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">تم استلام طلبك بنجاح!</h3>
                <p className="text-sm text-[#A5B0C2] max-w-md mx-auto">
                  {t('contact.success')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-2">
                      {t('contact.name')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="مثال: يوسف المنصوري"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#40D9E8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-2">
                      {t('contact.email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#40D9E8] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-2">
                      {t('contact.phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+966 50 000 0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#40D9E8] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/90 mb-2">
                      {t('contact.service')}
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#101827] border border-white/10 text-white text-sm focus:outline-none focus:border-[#40D9E8] transition-colors"
                    >
                      <option value="web">{t('contact.service.opt1')}</option>
                      <option value="ai">{t('contact.service.opt2')}</option>
                      <option value="systems">{t('contact.service.opt3')}</option>
                      <option value="branding">{t('contact.service.opt4')}</option>
                      <option value="all">{t('contact.service.opt5')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="اشرح لنا طبيعة مشروعك، أهدافك، والموعد المفضل لإطلاقه..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#40D9E8] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#647BFF] via-[#40D9E8] to-[#647BFF] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(64,217,232,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <SendIcon size={18} />
                  <span>{t('contact.submit')}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

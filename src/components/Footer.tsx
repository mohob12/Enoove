import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Logo } from './Icons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="pt-20 pb-12 relative overflow-hidden bg-[#06080F] border-t border-white/10 text-right rtl:text-right ltr:text-left">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size={42} />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-wider text-white font-['Plus_Jakarta_Sans']">
                  ENOOVE
                </span>
                <span className="text-[10px] tracking-widest text-[#40D9E8] uppercase font-bold">
                  Premium Digital Agency
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#A5B0C2] leading-relaxed max-w-sm">
              {t('footer.brand.desc')}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#40D9E8] transition-all">
                𝕏
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#40D9E8] transition-all">
                in
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#40D9E8] transition-all">
                📸
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/80 hover:text-[#40D9E8] transition-all">
                💬
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A5B0C2]">
              <li><a href="#" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#services-web" className="hover:text-white transition-colors">{t('nav.showcase')}</a></li>
              <li><a href="#services-ai" className="hover:text-white transition-colors">{t('nav.ai')}</a></li>
              <li><a href="#services-systems" className="hover:text-white transition-colors">{t('nav.systems')}</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">{t('nav.process')}</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">{t('nav.portfolio')}</a></li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer.servicesList')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A5B0C2]">
              <li><a href="#services-web" className="hover:text-white transition-colors">تصميم وتطوير المواقع الفاخرة</a></li>
              <li><a href="#services-ai" className="hover:text-white transition-colors">أنظمة الأتمتة والذكاء الاصطناعي</a></li>
              <li><a href="#services-systems" className="hover:text-white transition-colors">الأنظمة الإدارية والمحاسبية السحابية</a></li>
              <li><a href="#services-creative" className="hover:text-white transition-colors">الهويات البصرية والشعارات الراقية</a></li>
              <li><a href="#services-web" className="hover:text-white transition-colors">مواقع المطاعم والعيادات والعقارات</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              المكتب والدعم
            </h4>
            <div className="space-y-2 text-xs text-[#A5B0C2]">
              <p>واتساب: +213 00 00 00 00</p>
              <p>contact@enoove.agency</p>
              <p className="text-[#40D9E8] font-bold">دعم 24/7 مع أنظمة الذكاء الاصطناعي</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A5B0C2] gap-4">
          <div>{t('footer.rights')}</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
            <a href="#top" className="text-[#40D9E8] hover:underline">العودة للأعلى ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

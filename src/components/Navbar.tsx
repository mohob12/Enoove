import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Logo, ArrowUpRightIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, isRtl } = useLanguage();
  const { isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services-web', label: t('nav.showcase') },
    { href: '#services-ai', label: t('nav.ai') },
    { href: '#services-creative', label: t('nav.branding') },
    { href: '#services-systems', label: t('nav.systems') },
    { href: '#process', label: t('nav.process') },
    { href: '#why-us', label: t('nav.whyUs') },
    { href: '#portfolio', label: t('nav.portfolio') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-full transition-all duration-300 ${
          scrolled 
            ? isDark
              ? 'bg-[#101827]/85 backdrop-blur-xl border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)]'
              : 'bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_15px_35px_rgba(15,23,42,0.08)]'
            : isDark
              ? 'bg-white/[0.04] backdrop-blur-md border border-white/10'
              : 'bg-white/70 backdrop-blur-md border border-slate-200/60'
        }`}
      >
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group text-decoration-none">
          <Logo size={36} className="transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-wider font-['Plus_Jakarta_Sans'] flex items-center gap-1.5 text-white">
              ENOOVE
              <span className="w-1.5 h-1.5 rounded-full bg-[#40D9E8] animate-pulse"></span>
            </span>
            <span className="text-[10px] tracking-widest text-[#A5B0C2] uppercase font-semibold">
              Digital Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-[#A5B0C2] hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle, Language Toggle & CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Distinctive Theme Switcher */}
          <ThemeToggle />

          {/* Language Selector */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer ${
              isDark 
                ? 'bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-white' 
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
            }`}
            title="تبديل اللغة / Switch Language"
          >
            <span className={lang === 'ar' ? 'text-[#40D9E8]' : 'text-slate-400'}>عربي</span>
            <span className="opacity-30">|</span>
            <span className={lang === 'en' ? 'text-[#40D9E8]' : 'text-slate-400'}>EN</span>
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-[#647BFF] to-[#40D9E8] hover:shadow-[0_0_25px_rgba(100,123,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{t('nav.contact')}</span>
            <ArrowUpRightIcon size={14} className={isRtl ? 'rotate-180' : ''} />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#A5B0C2] hover:text-white rounded-lg focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden mt-3 max-w-7xl mx-auto p-5 rounded-2xl backdrop-blur-2xl border shadow-2xl flex flex-col gap-3 animate-fadeIn ${
          isDark 
            ? 'bg-[#101827]/95 border-white/10' 
            : 'bg-white/95 border-slate-200'
        }`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#A5B0C2] hover:text-[#40D9E8] py-2 border-b border-black/5 dark:border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#647BFF] to-[#40D9E8]"
          >
            {t('nav.contact')}
          </a>
        </div>
      )}
    </header>
  );
};

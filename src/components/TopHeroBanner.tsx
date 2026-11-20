import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SparklesIcon, ArrowUpRightIcon } from './Icons';

export const TopHeroBanner: React.FC = () => {
  const { lang } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Default professional example banner image (Ratio 3:1)
  const defaultBanner = '/banners/main_hero_banner.jpg';
  const [bannerSrc, setBannerSrc] = useState<string>(defaultBanner);
  const [isCustomUploaded, setIsCustomUploaded] = useState<boolean>(false);

  // Load any previously uploaded banner from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('enoove_custom_banner');
      if (saved) {
        setBannerSrc(saved);
        setIsCustomUploaded(true);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Handle user uploading their own custom designed banner
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setBannerSrc(result);
          setIsCustomUploaded(true);
          try {
            localStorage.setItem('enoove_custom_banner', result);
          } catch {
            // storage quota exceeded or disabled
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetToDefault = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBannerSrc(defaultBanner);
    setIsCustomUploaded(false);
    try {
      localStorage.removeItem('enoove_custom_banner');
    } catch {
      // Ignore
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section className="w-full pt-24 sm:pt-28 pb-4 relative z-20">
      <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* 
          Main Top Panoramic Banner 
          Ratio: 3:1 (Height is 1/3 of Width)
          Fills screen width, fully responsive across all devices
        */}
        <div className="relative w-full aspect-[3/1] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/20 sm:border-2 sm:border-white/30 bg-[#080B14] shadow-[0_25px_80px_rgba(0,0,0,0.85)] group">
          
          {/* 1. Main Banner Image (3:1 Aspect Ratio) */}
          <img
            src={bannerSrc}
            alt="Enoove Main Top Banner"
            className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            loading="eager"
          />

          {/* 2. Frosted Glass Inner Edge & Gradient Shade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border border-cyan-400/20 pointer-events-none" />

          {/* 3. Top Banner Navigation & Upload Action */}
          <div className="absolute top-3 sm:top-5 right-3 sm:right-6 left-3 sm:left-6 flex items-center justify-between z-30">
            {/* Top Brand Pill */}
            <div className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#40D9E8] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono font-bold text-white tracking-wider">
                ENOOVE • {lang === 'ar' ? 'البنر الرئيسي 3:1' : 'MAIN HERO BANNER 3:1'}
              </span>
            </div>

            {/* Upload Custom Banner Controls */}
            <div className="flex items-center gap-2">
              {isCustomUploaded && (
                <button
                  type="button"
                  onClick={resetToDefault}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white/90 bg-red-500/30 hover:bg-red-500/50 backdrop-blur-md border border-red-400/40 transition-all cursor-pointer shadow-sm"
                  title={lang === 'ar' ? 'استعادة التصميم الافتراضي' : 'Reset to Default Design'}
                >
                  ↺ {lang === 'ar' ? 'استعادة الافتراضي' : 'Reset'}
                </button>
              )}

              {/* Hidden File Input */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="banner-image-upload"
              />

              {/* Upload Trigger Button */}
              <label
                htmlFor="banner-image-upload"
                className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-white bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/25 hover:border-[#40D9E8]/70 transition-all cursor-pointer shadow-md flex items-center gap-1.5"
                title={lang === 'ar' ? 'انقر لرفع وتجربة تصميم بنر خاص بك' : 'Click to upload your custom designed banner'}
              >
                <span>📷</span>
                <span>{lang === 'ar' ? (isCustomUploaded ? 'تغيير صورتك' : 'رفع بنرك الخاص') : 'Upload Banner'}</span>
              </label>
            </div>
          </div>

          {/* 4. Center-Bottom Content Overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end z-20 pointer-events-none">
            <div className="max-w-4xl">
              {/* Category Subtitle */}
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#647BFF]/25 border border-[#647BFF]/40 text-[#40D9E8] text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-1.5 sm:mb-2 shadow-sm w-fit">
                <SparklesIcon size={12} />
                <span>{lang === 'ar' ? 'تصميم حصري عالي الدقة (3:1)' : 'Exclusive 3:1 Cinematic Ratio'}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-tight drop-shadow-md line-clamp-1 sm:line-clamp-2">
                {lang === 'ar' 
                  ? 'ENOOVE — آفاق جديدة لصناعة التجارب الرقمية الفاخرة'
                  : 'ENOOVE — Forging Iconic High-Impact Digital Experiences'}
              </h1>

              {/* Supporting tagline */}
              <p className="text-[10px] sm:text-xs md:text-sm text-white/80 font-medium mt-1 sm:mt-1.5 line-clamp-1 max-w-2xl">
                {lang === 'ar'
                  ? 'تطوير مواقع 4K • أتمتة الأعمال بالذكاء الاصطناعي • هويات بصرية ملكية • أنظمة سحابية ذكية'
                  : 'Haute 4K Web Architecture • AI Automation • Luxury Brand Identities • Cloud SaaS'}
              </p>
            </div>
          </div>

          {/* 5. Bottom Right/Left Micro Indicator (Ratio Spec) */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-6 rtl:left-auto rtl:right-3 rtl:sm:right-6 z-20 hidden md:flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono text-white/70 bg-black/50 backdrop-blur-md border border-white/15">
              📐 3:1 Widescreen Ratio
            </span>
            <span className="px-3 py-1 rounded-full text-[10px] font-mono text-emerald-400 bg-emerald-950/40 backdrop-blur-md border border-emerald-500/30">
              ✓ Fully Responsive
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

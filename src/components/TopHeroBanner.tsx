import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const TopHeroBanner: React.FC = () => {
  const { lang } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Default image is the authentic user banner
  const defaultBanner = '/banners/main_hero_banner.jpg';
  const [bannerSrc, setBannerSrc] = useState<string>(defaultBanner);
  const [isCustomUploaded, setIsCustomUploaded] = useState<boolean>(false);

  // Load custom uploaded banner from localStorage if present
  useEffect(() => {
    try {
      const saved = localStorage.getItem('enoove_custom_banner');
      if (saved) {
        setBannerSrc(saved);
        setIsCustomUploaded(true);
      }
    } catch {
      // Ignore
    }
  }, []);

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
            // Ignore
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const resetToDefault = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <section className="w-full pt-20 sm:pt-24 pb-0 relative z-20 overflow-hidden bg-transparent">
      {/* 
        Full-Bleed Panoramic Top Banner:
        - 100% Screen Width from Right to Left (Edge to Edge, Zero Margin, Zero Padding)
        - Zero Frame / Zero Border (border-0, rounded-none)
        - Height is 1/3 of Width (Natural ~3:1 aspect ratio)
      */}
      <div className="w-full relative aspect-[1024/317] overflow-hidden group select-none border-0 rounded-none shadow-none">
        
        {/* Banner Clickable Anchor */}
        <a 
          href="#contact" 
          className="block w-full h-full relative cursor-pointer"
          title={lang === 'ar' ? 'تواصل معنا — Enoove' : 'Contact Us — Enoove'}
        >
          {/* Authentic High-Resolution Banner Image */}
          <img
            src={bannerSrc}
            alt="Enoove — حلول رقمية ذكية"
            className="w-full h-full object-cover object-center border-0 rounded-none block m-0 p-0"
            loading="eager"
          />
        </a>

        {/* Discreet Floating Custom Banner Upload Controls (Visible on hover or top corner) */}
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-30 flex items-center gap-2 opacity-60 hover:opacity-100 group-hover:opacity-100 transition-opacity">
          {isCustomUploaded && (
            <button
              type="button"
              onClick={resetToDefault}
              className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-red-600/70 hover:bg-red-600 backdrop-blur-md border border-white/20 transition-all cursor-pointer shadow-md"
              title={lang === 'ar' ? 'استعادة التصميم الأصلي' : 'Reset to default banner'}
            >
              ↺ {lang === 'ar' ? 'استعادة الأصلي' : 'Reset'}
            </button>
          )}

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
            id="banner-image-upload-fullbleed"
          />

          <label
            htmlFor="banner-image-upload-fullbleed"
            className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-white bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/30 hover:border-[#40D9E8] transition-all cursor-pointer shadow-lg flex items-center gap-1.5"
            title={lang === 'ar' ? 'تغيير صورة البنر' : 'Change banner image'}
          >
            <span>📷</span>
            <span>{lang === 'ar' ? 'تغيير البنر' : 'Change Banner'}</span>
          </label>
        </div>

      </div>
    </section>
  );
};

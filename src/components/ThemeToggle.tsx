import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from './Icons';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative inline-flex items-center p-1 rounded-full border transition-all duration-500 cursor-pointer select-none group ${
        isDark
          ? 'bg-white/[0.06] hover:bg-white/[0.1] border-white/15 shadow-[0_0_15px_rgba(0,0,0,0.5)]'
          : 'bg-slate-200/80 hover:bg-slate-200 border-slate-300 shadow-[0_2px_12px_rgba(0,0,0,0.08)]'
      } ${className}`}
      aria-label={isDark ? 'التبديل إلى الوضع الفاتح' : 'التبديل إلى الوضع الليلي'}
      title={isDark ? 'التبديل للوضع الفاتح ☀️' : 'التبديل للوضع الداكن 🌙'}
    >
      {/* Sliding Glowing Thumb */}
      <span
        className={`absolute top-1 bottom-1 w-6 h-6 rounded-full transition-all duration-500 transform shadow-md flex items-center justify-center ${
          isDark
            ? 'left-1 bg-gradient-to-tr from-[#647BFF] to-[#40D9E8] shadow-[0_0_12px_rgba(64,217,232,0.6)]'
            : 'left-[calc(100%-1.75rem)] bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] shadow-[0_0_12px_rgba(245,158,11,0.6)]'
        }`}
      />

      {/* Moon Icon (Dark Mode Option) */}
      <span
        className={`relative z-10 w-6 h-6 flex items-center justify-center transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
        }`}
      >
        <MoonIcon size={14} className={isDark ? 'scale-110 drop-shadow' : 'scale-90'} />
      </span>

      {/* Sun Icon (Light Mode Option) */}
      <span
        className={`relative z-10 w-6 h-6 flex items-center justify-center transition-colors duration-300 ${
          !isDark ? 'text-white' : 'text-white/40 group-hover:text-white/70'
        }`}
      >
        <SunIcon size={14} className={!isDark ? 'scale-110 drop-shadow' : 'scale-90'} />
      </span>
    </button>
  );
};

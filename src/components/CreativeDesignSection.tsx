import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PaletteIcon, ArrowUpRightIcon, SparklesIcon, ExpandIcon, HeartIcon, ArrowLeftIcon, ArrowRightIcon } from './Icons';

export interface IdentityWork {
  id: string;
  image: string;
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  category: 'branding' | 'packaging' | 'campaign';
  tagAr: string;
  tagEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  accent: string;
}

interface CategoryGroup {
  id: 'branding' | 'packaging' | 'campaign';
  number: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  accent: string;
  items: IdentityWork[];
}

const corporateBrandingWorks: IdentityWork[] = [
  {
    id: 'id-10',
    image: '/identity/10.jpg',
    titleAr: 'فيريديان للتطوير العقاري — الهوية المعمارية المتكاملة',
    titleEn: 'Veridian Realty — Architectural & Corporate Brand Identity',
    clientAr: 'شركة فيريديان العقارية',
    clientEn: 'Veridian Realty Global',
    category: 'branding',
    tagAr: 'تطوير عقاري واستثمار فاخر',
    tagEn: 'Luxury Real Estate Development',
    deliverablesAr: ['الشعار الهندسي المذهب', 'واجهات ولافتات المباني المعمارية', 'منظومة الهوية المكتبية المتكاملة', 'تطبيق المستثمرين الذكي'],
    deliverablesEn: ['Gilded Geometric Monogram', 'Architectural Facade Signage', 'Complete Corporate Stationery', 'Smart Investor Mobile App'],
    accent: '#10B981'
  },
  {
    id: 'id-2-1',
    image: '/identity/2.1.jpg',
    titleAr: 'البنّا للتطوير العقاري — أصالة المونوغرام العربي الفاخر',
    titleEn: 'Albina Real Estate — Arabic Calligraphic Monogram Identity',
    clientAr: 'مجموعة البنّا للاستثمار',
    clientEn: 'Albina Development Group',
    category: 'branding',
    tagAr: 'هوية استثمارية وهندسية',
    tagEn: 'Investment & Architecture',
    deliverablesAr: ['شعار مونوغرام عربي أيقوني', 'دليل درجات الألوان الترابية', 'لوحات المشاريع الإنشائية', 'كتالوج الفلل الفاخرة'],
    deliverablesEn: ['Iconic Arabic Monogram', 'Earthy Color Palette Guide', 'Construction Site Signage', 'Luxury Villas Catalog'],
    accent: '#D97706'
  },
  {
    id: 'id-9',
    image: '/identity/9.jpg',
    titleAr: 'استوديو سارف — الهوية الملكية لأزياء الهوت كوتور',
    titleEn: 'Sarve Studio — Haute Couture Fashion Monogram',
    clientAr: 'دار سارف للأزياء',
    clientEn: 'Sarve Fashion House',
    category: 'branding',
    tagAr: 'دور أزياء عالمية',
    tagEn: 'High Fashion Studio',
    deliverablesAr: ['شعار مونوغرام أنثوي انسيابي', 'بطاقات الملابس الفاخرة (Tags)', 'حقائب المخمل الملكية', 'دليل الطباعة والفويل'],
    deliverablesEn: ['Fluid Haute Monogram', 'Luxury Garment Hangtags', 'Velvet Gown Shopping Bags', 'Print & Foil Guidelines'],
    accent: '#7C3AED'
  },
  {
    id: 'id-6',
    image: '/identity/6.jpg',
    titleAr: 'فرايداي فراجرانس — هندسة الشعار والهوية البصرية للعطور',
    titleEn: 'Friday Fragrance — Geometric Monogram & Brand Guide',
    clientAr: 'مؤسسة فرايداي فراجرانس',
    clientEn: 'Friday Fragrance Enterprise',
    category: 'branding',
    tagAr: 'عطور النخبة المعاصرة',
    tagEn: 'Contemporary Luxury Scents',
    deliverablesAr: ['هندسة الشعار الذهبي الشبكي', 'تطبيقات الهوية على الأقمشة', 'بطاقات الضمان والأناقة', 'طباعة الزجاج الحرارية'],
    deliverablesEn: ['Grid-Engineered Gold Monogram', 'Fabric Tote Applications', 'Warranty & Luxury Inserts', 'Direct Glass Bottle Screenprint'],
    accent: '#D97706'
  }
];

const luxuryPackagingWorks: IdentityWork[] = [
  {
    id: 'id-7-1',
    image: '/identity/7.1.jpg',
    titleAr: 'فيلورا سكين — الهوية الملكية وتغليف مستحضرات العناية',
    titleEn: 'Velora Skin — Haute Skincare Packaging & Visual Identity',
    clientAr: 'علامة فيلورا باريس',
    clientEn: 'Velora Skin Paris',
    category: 'packaging',
    tagAr: 'مستحضرات عناية ملكية',
    tagEn: 'Haute Beauty & Skincare',
    deliverablesAr: ['تصميم العلب والزجاجات الملكية', 'الشعار والأيقونات الذهبية', 'حقائب التسوق الفاخرة', 'بطاقات الشكر للعملاء'],
    deliverablesEn: ['Royal Bottles & Jars Design', 'Gold Gilded Icons & Logo', 'Haute Shopping Bags', 'Client Thank You Cards'],
    accent: '#9333EA'
  },
  {
    id: 'id-4',
    image: '/identity/4.jpg',
    titleAr: 'أوربان تيبل — منظومة الهوية والتغليف للمطابخ السحابية',
    titleEn: 'Urban Table — Cloud Kitchen Ecosystem & Eco-Packaging',
    clientAr: 'سلسلة أوربان تيبل',
    clientEn: 'Urban Table Cloud Kitchens',
    category: 'packaging',
    tagAr: 'مطابخ سحابية صديقة للبيئة',
    tagEn: 'Eco-Friendly Cloud Kitchen',
    deliverablesAr: ['تغليف الوجبات الصديق للبيئة', 'أزياء وحقائب التوصيل الحرارية', 'الهوية البصرية للمركبات', 'قوائم الطعام والعلب'],
    deliverablesEn: ['Eco-Packaging Containers', 'Thermal Delivery Uniforms & Bags', 'Fleet Van Branding Wrap', 'Menu & Food Box Layouts'],
    accent: '#16A34A'
  },
  {
    id: 'id-6-1',
    image: '/identity/6.1.jpg',
    titleAr: 'مجموعة عطور المدينة — تغليف العطور الفاخرة والناشرات',
    titleEn: 'Madina Fragrance — Royal Perfume & Diffuser Packaging',
    clientAr: 'عطور المدينة الفاخرة',
    clientEn: 'Madina Royal Fragrances',
    category: 'packaging',
    tagAr: 'عطور ملكية وزيوت شرقية',
    tagEn: 'Royal Scents & Diffusers',
    deliverablesAr: ['علب الهدايا بالفويل الذهبي', 'زجاجات العطور وناشرات الرائحة', 'حقائب التسوق المخملية', 'أكياس التخزين الكتانية'],
    deliverablesEn: ['Gold-Foil Gift Boxes', 'Perfume Bottles & Diffusers', 'Velvet Shopping Bags', 'Linen Keepsake Pouches'],
    accent: '#F59E0B'
  },
  {
    id: 'id-11',
    image: '/identity/11.jpg',
    titleAr: 'بينوز كوفي — منظومة التغليف المتكاملة للقهوة المختصة',
    titleEn: "Beano's Coffee — Comprehensive Specialty Coffee Packaging",
    clientAr: 'محامص بينوز',
    clientEn: "Beano's Specialty Roastery",
    category: 'packaging',
    tagAr: 'محامص وقهوة مختصة',
    tagEn: 'Specialty Coffee & Bakery',
    deliverablesAr: ['أكياس البن المحكمة ذات الصمام', 'أكواب التيك أواي الفاخرة', 'علب المخبوزات والحلويات', 'حوامل الأكواب المزدوجة'],
    deliverablesEn: ['Valved Coffee Bean Bags', 'Premium Takeaway Cups', 'Bakery & Pastry Gift Boxes', 'Custom Dual Cup Carriers'],
    accent: '#059669'
  }
];

const visualCampaignsWorks: IdentityWork[] = [
  {
    id: 'id-1',
    image: '/identity/1.jpg',
    titleAr: 'مطعم بجيلة — الحملة البصرية التراثية وسلسلة العروض',
    titleEn: 'Bajilah Heritage — Cinematic Hospitality Social Campaign',
    clientAr: 'سلسلة مطاعم بجيلة',
    clientEn: 'Bajilah Heritage Dining',
    category: 'campaign',
    tagAr: 'مطاعم وضيافة تراثية أصيلة',
    tagEn: 'Heritage Dining & Cuisine',
    deliverablesAr: ['جريد سوشيال ميديا سينمائي 3x3', 'حملة عروض الشتاء والمواسم', 'تصوير إعلاني عالي التباين', 'قصص تفاعلية لتقديم الطواجن'],
    deliverablesEn: ['3x3 Cinematic Social Grid', 'Seasonal Winter Promo Campaign', 'High-Contrast Food Styling', 'Interactive Tajine Story Series'],
    accent: '#B91C1C'
  },
  {
    id: 'id-1-2',
    image: '/identity/1.2.jpg',
    titleAr: 'إسبريسو ديلايت — التجربة البصرية المتناغمة لسلسلة المقاهي',
    titleEn: 'Espresso Delight — Modern Cafe Instagram Grid & Visuals',
    clientAr: 'إسبريسو ديلايت كافيه',
    clientEn: 'Espresso Delight Cafe',
    category: 'campaign',
    tagAr: 'مقاهي ومشروبات عصرية',
    tagEn: 'Specialty Coffee Brand',
    deliverablesAr: ['شبكة إنستغرام بصرية متجانسة', 'تصاميم الإعلانات الترويجية', 'رسائل المود والتركيز اليومي', 'كتالوج أدوات الباريستا'],
    deliverablesEn: ['Harmonious Instagram Visual Grid', 'Promotional Social Ads', 'Daily Mood & Focus Creative Copy', 'Barista Merch Catalog'],
    accent: '#92400E'
  },
  {
    id: 'id-2',
    image: '/identity/2.jpg',
    titleAr: 'قهوة وسترس — حملة تفاعلية شتوية لتعديل المزاج والتركيز',
    titleEn: 'Stress Coffee — Interactive Winter Mood Campaign',
    clientAr: 'قهوة وسترس',
    clientEn: 'Stress Coffee Roasters',
    category: 'campaign',
    tagAr: 'محتوى بصري ترفيهي وتفاعلي',
    tagEn: 'Interactive Social Experience',
    deliverablesAr: ['سلسلة بوسترات تفاعلية دافئة', 'حملة زود العقل بالدوبامين', 'محتوى بصري وجلسات القهوة', 'إعلانات تفاعلية مستهدفة'],
    deliverablesEn: ['Warm Interactive Poster Series', 'Dopamine Energy Boost Campaign', 'Coffee Moments Visual Content', 'Targeted Conversion Ads'],
    accent: '#CA8A04'
  },
  {
    id: 'id-3',
    image: '/identity/3.jpg',
    titleAr: 'كويك إير للسياحة — حملات الحج والعمرة الفاخرة',
    titleEn: 'Quick Air Travel — Luxury Pilgrimage Visual Narrative',
    clientAr: 'كويك إير العالمية للسياحة',
    clientEn: 'Quick Air Travel Global',
    category: 'campaign',
    tagAr: 'سياحة وسفر فاخر',
    tagEn: 'Luxury Pilgrimage & Travel',
    deliverablesAr: ['حملات إعلانية لبرامج العمرة', 'تصاميم السوشيال ميديا التسويقية', 'كتيبات الإرشاد وباقات السفر', 'بانرات العروض الحصرية'],
    deliverablesEn: ['Pilgrimage Social Ad Series', 'Marketing Social Media Kits', 'Itinerary & Package Brochures', 'Exclusive Promo Web Banners'],
    accent: '#E11D48'
  },
  {
    id: 'id-5-1',
    image: '/identity/5.1.jpg',
    titleAr: 'فيستا بيتزا — الهوية الإيطالية ومحتوى السوشيال ميديا',
    titleEn: 'Vesta Pizza — Italian Artisan Visual Narrative & Social Grid',
    clientAr: 'مطاعم فيستا بيتزا',
    clientEn: 'Vesta Artisan Pizza',
    category: 'campaign',
    tagAr: 'مطاعم إيطالية أصيلة',
    tagEn: 'Authentic Italian Pizzeria',
    deliverablesAr: ['شبكة إنستغرام بصرية متناسقة', 'تصوير أطباق البيتزا النابولي', 'تصميم علب التوصيل الفاخرة', 'إعلانات العروض والمناسبات'],
    deliverablesEn: ['Visual Instagram Grid', 'Neapolitan Food Photography', 'Luxury Delivery Box Mockups', 'Special Offers Social Assets'],
    accent: '#9F1239'
  },
  {
    id: 'id-5',
    image: '/identity/5.jpg',
    titleAr: 'زستي بروست — حملة ترويجية للمطاعم السريعة عالية التحويل',
    titleEn: 'Zesty Broast — High-Conversion Fast Casual Campaign',
    clientAr: 'سلسلة زستي بروست',
    clientEn: 'Zesty Broast Express',
    category: 'campaign',
    tagAr: 'وجبات سريعة راقية',
    tagEn: 'High-Energy Fast Casual',
    deliverablesAr: ['حملات سوشيال ميديا عالية التحويل', 'تصاميم الوجبات العائلية والمشاريع', 'بوسترات العروض الترويجية', 'تغليف الوجبات السريعة'],
    deliverablesEn: ['High-Conversion Social Campaigns', 'Family Meal Visual Assets', 'Promotional Store Posters', 'Takeout Box & Bag Packaging'],
    accent: '#EF4444'
  },
  {
    id: 'id-7',
    image: '/identity/7.jpg',
    titleAr: 'برايت سميل — محتوى تجميل وزراعة الأسنان الرقمي',
    titleEn: 'Bright Smile Clinic — Dental Aesthetics & Smile Design Grid',
    clientAr: 'عيادات برايت سميل التخصصية',
    clientEn: 'Bright Smile Dental Clinics',
    category: 'campaign',
    tagAr: 'عيادات ومراكز طبية',
    tagEn: 'Aesthetic Dentistry Center',
    deliverablesAr: ['شبكة محتوى توعوي وتجميلي', 'شروحات رقمية لابتسامة هوليوود', 'تصاميم حجز المواعيد السريعة', 'هوية عيادات رقمية حديثة'],
    deliverablesEn: ['Educational & Aesthetic Social Feed', 'Digital Smile Design Explainers', 'Instant Booking Visual Promos', 'Modern Clinic Visual Identity'],
    accent: '#0284C7'
  },
  {
    id: 'id-8',
    image: '/identity/8.jpg',
    titleAr: 'أودونتو دنتال كير — تصاميم ثلاثية الأبعاد وعناية بالابتسامة',
    titleEn: 'Odonto Dental Care — 3D Visual Campaign & Smart Booking',
    clientAr: 'مجموعة أودونتو الطبية',
    clientEn: 'Odonto Dental Care Group',
    category: 'campaign',
    tagAr: 'طب الأسنان التجميلي',
    tagEn: 'Orthodontic & Implantology',
    deliverablesAr: ['تصاميم ثلاثية الأبعاد تفاعلية', 'حملات تقويم الأسنان الشفاف', 'إعلانات رقمية لزراعة الأسنان', 'محتوى بصري طبي راقٍ'],
    deliverablesEn: ['Interactive 3D Rendered Ads', 'Clear Aligner Campaign Series', 'Dental Implant Visual Ads', 'Premium Medical Social Content'],
    accent: '#0D9488'
  },
  {
    id: 'id-9-1',
    image: '/identity/9.1.jpg',
    titleAr: 'دالتون مارين كوزمتكس — العناية المستوحاة من خلايا البحر',
    titleEn: 'Dalton Marine Cosmetics — Scientific Skincare Campaign',
    clientAr: 'دالتون العالمية لمستحضرات التجميل',
    clientEn: 'Dalton Marine Cosmetics',
    category: 'campaign',
    tagAr: 'مستحضرات عناية علمية وبحرية',
    tagEn: 'Marine Active Skincare',
    deliverablesAr: ['حملة بصرية للعناية بالخلايا الجذعية', 'تصوير منتجات مستحضرات البحر', 'سلسلة نصائح روتين البشرة', 'إعلانات رقمية سينمائية'],
    deliverablesEn: ['Stem Cell Visual Campaign', 'Marine Cosmetic Product Photography', 'Skincare Routine Educational Series', 'Cinematic Social Ad Rollout'],
    accent: '#06B6D4'
  }
];

const categoryGroups: CategoryGroup[] = [
  {
    id: 'branding',
    number: '01',
    icon: '🏛️',
    titleAr: 'الهويات المؤسسية والشعارات الفاخرة',
    titleEn: 'Corporate & Architectural Identities',
    subtitleAr: 'هندسة المونوغرام والشعارات الأيقونية ومنظومات الهوية المعمارية المتكاملة.',
    subtitleEn: 'Iconic monograms, comprehensive architectural facades, and corporate design systems.',
    accent: '#D97706',
    items: corporateBrandingWorks
  },
  {
    id: 'packaging',
    number: '02',
    icon: '📦',
    titleAr: 'التغليف وتجربة المنتجات الفاخرة',
    titleEn: 'Haute Packaging & Unboxing Systems',
    subtitleAr: 'تصميم قوالب العلب والزجاجات الملكية والتغليف الصديق للبيئة مع لمسات الذهب والفويل.',
    subtitleEn: 'Luxury packaging architecture, gold-foil stamping, and memorable unboxing experiences.',
    accent: '#9333EA',
    items: luxuryPackagingWorks
  },
  {
    id: 'campaign',
    number: '03',
    icon: '🚀',
    titleAr: 'الحملات البصرية ومحتوى السوشيال ميديا',
    titleEn: 'Cinematic Visual Campaigns & Social Grids',
    subtitleAr: 'شبكات إنستغرام بصرية متجانسة وحملات إعلانية ثلاثية الأبعاد تحقق أعلى نسب تفاعل وتحويل.',
    subtitleEn: 'Harmonious Instagram visual grids and high-converting 3D digital campaigns.',
    accent: '#06B6D4',
    items: visualCampaignsWorks
  }
];

// Reusable Category Slider Component
interface CategorySliderProps {
  group: CategoryGroup;
  lang: string;
  onSelectWork: (work: IdentityWork) => void;
  liked: Record<string, boolean>;
  onToggleLike: (id: string) => void;
}

const CategorySlider: React.FC<CategorySliderProps> = ({
  group,
  lang,
  onSelectWork,
  liked,
  onToggleLike
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    
    // In RTL or LTR support
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      return;
    }

    const currentScroll = Math.abs(scrollLeft);
    const progress = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));
    setScrollProgress(progress);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'next' | 'prev') => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth * 0.75;
    
    // Check direction based on RTL / LTR
    const isRtl = lang === 'ar';
    const scrollFactor = direction === 'next' ? 1 : -1;
    const delta = isRtl ? -scrollFactor * cardWidth : scrollFactor * cardWidth;

    scrollContainerRef.current.scrollBy({
      left: delta,
      behavior: 'smooth'
    });
  };

  return (
    <div className="mb-20 last:mb-0">
      {/* Category Header with Title, Badges, and Navigation Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b border-white/10">
        <div>
          {/* Category Pill */}
          <div className="flex items-center gap-3 mb-2.5">
            <span 
              className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider"
              style={{ backgroundColor: `${group.accent}20`, color: group.accent, border: `1px solid ${group.accent}40` }}
            >
              {group.number} — {lang === 'ar' ? group.titleAr : group.titleEn}
            </span>
            <span className="text-xs text-white/50 font-medium">
              ({group.items.length} {lang === 'ar' ? 'مشاريع حصرية' : 'Projects'})
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span>{group.icon}</span>
            <span>{lang === 'ar' ? group.titleAr : group.titleEn}</span>
          </h3>
          <p className="text-sm text-white/60 mt-1.5 max-w-2xl leading-relaxed">
            {lang === 'ar' ? group.subtitleAr : group.subtitleEn}
          </p>
        </div>

        {/* Slider Controls (Previous / Next Arrows & Progress) */}
        <div className="flex items-center gap-3 self-end md:self-auto">
          {/* Progress bar pill */}
          <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.max(15, scrollProgress)}%`, backgroundColor: group.accent }}
              />
            </div>
            <span className="text-[11px] font-mono text-white/60">
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={() => handleScroll('prev')}
            className="w-11 h-11 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md"
            title={lang === 'ar' ? 'السابق' : 'Previous'}
          >
            {lang === 'ar' ? <ArrowRightIcon size={18} /> : <ArrowLeftIcon size={18} />}
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={() => handleScroll('next')}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer hover:scale-105 active:scale-95 shadow-md"
            style={{ borderColor: `${group.accent}50` }}
            title={lang === 'ar' ? 'التالي' : 'Next'}
          >
            {lang === 'ar' ? <ArrowLeftIcon size={18} /> : <ArrowRightIcon size={18} />}
          </button>
        </div>
      </div>

      {/* The Horizontal Slider Track (Spacious, Zero Borders on Images, Smooth Momentum) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {group.items.map((work) => {
          const isLiked = liked[work.id];

          return (
            <div
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="w-[300px] sm:w-[360px] md:w-[410px] lg:w-[440px] flex-shrink-0 snap-start group flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer select-none"
            >
              {/* 1. Borderless Image Showcase Card — Uniform Window matching the smallest image (735x656) */}
              <div 
                className="relative w-full aspect-[735/656] rounded-3xl overflow-hidden shadow-[0_22px_55px_rgba(0,0,0,0.65)] bg-[#0d1424]"
                style={{ aspectRatio: '735 / 656' }}
              >
                {/* 100% Crisp Image fitted seamlessly into uniform window */}
                <img
                  src={work.image}
                  alt={lang === 'ar' ? work.titleAr : work.titleEn}
                  className="w-full h-full object-cover object-top border-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />

                {/* Subtle Hover Gradient & Fullscreen Hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-[#40D9E8] flex items-center gap-1.5">
                    <span>{lang === 'ar' ? 'انقر للمعاينة الكاملة بدقة عالية' : 'Click for Full Resolution View'}</span>
                    <ArrowUpRightIcon size={14} />
                  </span>
                </div>

                {/* Floating Top Action Badges */}
                <div className="absolute top-4 right-4 left-4 flex items-center justify-between z-10 pointer-events-auto">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-md">
                    {lang === 'ar' ? work.clientAr : work.clientEn}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleLike(work.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                        isLiked
                          ? 'bg-red-500/50 border-red-400 text-red-200'
                          : 'bg-black/50 border-white/20 text-white/80 hover:text-red-400'
                      }`}
                      title={lang === 'ar' ? 'إضافة إلى المفضلة' : 'Add to Favorites'}
                    >
                      <HeartIcon size={14} className={isLiked ? 'fill-current' : ''} />
                    </button>

                    {/* Expand Full Content Button (الزر في أعلى اليسار لعرض كامل المحتوى) */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectWork(work);
                      }}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-[#40D9E8] text-white hover:text-black backdrop-blur-md border border-white/25 hover:border-[#40D9E8] shadow-lg transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                      title={lang === 'ar' ? 'عرض كامل التصميم بدقة عالية' : 'View Full Image'}
                    >
                      <ExpandIcon size={14} />
                      <span className="text-[10px] font-bold">
                        {lang === 'ar' ? 'عرض كامل' : 'Expand'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Spacious Card Info (Generous spacing, crisp white text, aligned height) */}
              <div className="pt-4 pb-2 px-1 flex flex-col flex-grow">
                {/* Tag & Sub-category */}
                <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                  <span 
                    className="font-extrabold uppercase tracking-wider text-[11px]"
                    style={{ color: work.accent }}
                  >
                    {lang === 'ar' ? work.tagAr : work.tagEn}
                  </span>
                  <span className="text-white/45 text-[11px] font-mono">
                    HD Showcase
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#40D9E8] transition-colors leading-snug line-clamp-2 min-h-[3rem]">
                  {lang === 'ar' ? work.titleAr : work.titleEn}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CreativeDesignSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [selectedWork, setSelectedWork] = useState<IdentityWork | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Keyboard navigation for lightbox
  const allWorks = [...corporateBrandingWorks, ...luxuryPackagingWorks, ...visualCampaignsWorks];
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedWork) return;
      if (e.key === 'Escape') {
        setSelectedWork(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allWorks.findIndex((w) => w.id === selectedWork.id);
        const nextIndex = (currentIndex + 1) % allWorks.length;
        setSelectedWork(allWorks[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allWorks.findIndex((w) => w.id === selectedWork.id);
        const prevIndex = (currentIndex - 1 + allWorks.length) % allWorks.length;
        setSelectedWork(allWorks[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWork, allWorks]);

  return (
    <section id="services-creative" className="pt-2 sm:pt-4 pb-20 sm:pb-24 relative overflow-hidden bg-[#080B14]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="section-tag justify-center">
            <PaletteIcon size={16} />
            <span>{t('services.creative.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('services.creative.title')}
          </h2>
          <p className="section-desc">
            {lang === 'ar' 
              ? 'نبتكر هويات بصرية استثنائية وأنظمة تغليف فاخرة وحملات رقمية سينمائية تمنح علامتك حضوراً مهيباً وتترك أثراً خالداً في وجدان عملائك.'
              : 'We architect timeless brand identities, haute packaging systems, and cinematic campaigns that establish unshakeable market authority.'}
          </p>
        </div>

        {/* 3 Dedicated Category Sliders: Each Category Has Its Own Luxury Slider */}
        {categoryGroups.map((group) => (
          <CategorySlider
            key={group.id}
            group={group}
            lang={lang}
            onSelectWork={setSelectedWork}
            liked={liked}
            onToggleLike={toggleLike}
          />
        ))}

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#101827] via-[#141b2f] to-[#101827] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)] text-center relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#647BFF]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="section-tag justify-center mb-3">
              <SparklesIcon size={14} />
              <span>{lang === 'ar' ? 'هل تبحث عن هوية تناسب طموحك؟' : 'Looking for a Bespoke Brand Identity?'}</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              {lang === 'ar' 
                ? 'حوّل علامتك التجارية إلى أيقونة بصرية تفرض حضورها'
                : 'Transform Your Business into an Iconic Industry Leader'}
            </h3>
            <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed">
              {lang === 'ar'
                ? 'فريقنا الإبداعي يرافقك خطوة بخطوة من دراسة السوق والشعار وحتى الدليل الكامل والتغليف والواجهات الواقعية ثلاثية الأبعاد.'
                : 'Our creative studio partners with you from brand strategy and naming to full guidelines, luxury packaging, and 3D architectural mockups.'}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-white bg-gradient-to-r from-[#647BFF] to-[#40D9E8] hover:shadow-[0_10px_35px_rgba(64,217,232,0.4)] transition-all transform hover:scale-105"
            >
              <span>{lang === 'ar' ? 'طلب استشارة تصميم هوية' : 'Book a Brand Strategy Session'}</span>
              <ArrowUpRightIcon size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* ULTRA-LUXURIOUS LIGHTBOX MODAL */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl transition-opacity animate-fadeIn"
          onClick={() => setSelectedWork(null)}
        >
          {/* Modal Container */}
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#0b101b] rounded-3xl overflow-hidden border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.95)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold"
                  style={{ backgroundColor: `${selectedWork.accent}25`, color: selectedWork.accent }}
                >
                  {lang === 'ar' ? selectedWork.clientAr : selectedWork.clientEn}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {lang === 'ar' ? selectedWork.titleAr : selectedWork.titleEn}
                </h4>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                title={lang === 'ar' ? 'إغلاق (Esc)' : 'Close (Esc)'}
              >
                ✕
              </button>
            </div>

            {/* Modal Body: Image in Full Resolution (Strictly uncropped, no borders) */}
            <div className="overflow-y-auto p-4 sm:p-8 flex items-center justify-center bg-black/60">
              <img
                src={selectedWork.image}
                alt={lang === 'ar' ? selectedWork.titleAr : selectedWork.titleEn}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border-0"
                decoding="async"
              />
            </div>

            {/* Modal Footer: Project Metadata & CTA */}
            <div className="px-6 py-4 border-t border-white/10 bg-black/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {(lang === 'ar' ? selectedWork.deliverablesAr : selectedWork.deliverablesEn).map((del, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-medium text-white/85 bg-white/10"
                  >
                    ✓ {del}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setSelectedWork(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#647BFF] to-[#40D9E8] hover:shadow-[0_8px_25px_rgba(64,217,232,0.4)] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>{lang === 'ar' ? 'طلب هوية مماثلة' : 'Request Similar Identity'}</span>
                <ArrowUpRightIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

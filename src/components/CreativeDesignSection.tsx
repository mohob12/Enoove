import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PaletteIcon, ArrowUpRightIcon, SparklesIcon, ExpandIcon, HeartIcon } from './Icons';

export interface IdentityWork {
  id: string;
  image: string;
  titleAr: string;
  titleEn: string;
  clientAr: string;
  clientEn: string;
  category: 'branding' | 'packaging' | 'campaign';
  categoryLabelAr: string;
  categoryLabelEn: string;
  tagAr: string;
  tagEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  accent: string;
  aspectClass: string;
  featured?: boolean;
}

const identityWorks: IdentityWork[] = [
  // 1. Veridian Realty — Flagship Corporate & Architectural Identity
  {
    id: 'id-10',
    image: '/identity/10.jpg',
    titleAr: 'فيريديان للتطوير العقاري — الهوية المعمارية المتكاملة',
    titleEn: 'Veridian Realty — Architectural & Corporate Brand Identity',
    clientAr: 'شركة فيريديان العقارية',
    clientEn: 'Veridian Realty Global',
    category: 'branding',
    categoryLabelAr: 'هوية مؤسسية وعقارية',
    categoryLabelEn: 'Corporate & Spatial Identity',
    tagAr: 'تطوير عقاري واستثمار فاخر',
    tagEn: 'Luxury Real Estate Development',
    deliverablesAr: ['الشعار الهندسي المذهب', 'واجهات ولافتات المباني المعمارية', 'منظومة الهوية المكتبية المتكاملة', 'تطبيق المستثمرين الذكي'],
    deliverablesEn: ['Gilded Geometric Monogram', 'Architectural Facade Signage', 'Complete Corporate Stationery', 'Smart Investor Mobile App'],
    accent: '#10B981',
    aspectClass: 'aspect-[9/16]',
    featured: true
  },

  // 2. Albina Real Estate — Arabic Monogram
  {
    id: 'id-2-1',
    image: '/identity/2.1.jpg',
    titleAr: 'البنّا للتطوير العقاري — أصالة المونوغرام العربي الفاخر',
    titleEn: 'Albina Real Estate — Arabic Calligraphic Monogram Identity',
    clientAr: 'مجموعة البنّا للاستثمار',
    clientEn: 'Albina Development Group',
    category: 'branding',
    categoryLabelAr: 'مونوغرام وهوية معمارية',
    categoryLabelEn: 'Arabic Monogram & Signage',
    tagAr: 'هوية استثمارية وهندسية',
    tagEn: 'Investment & Architecture',
    deliverablesAr: ['شعار مونوغرام عربي أيقوني', 'دليل درجات الألوان الترابية', 'لوحات المشاريع الإنشائية', 'كتالوج الفلل الفاخرة'],
    deliverablesEn: ['Iconic Arabic Monogram', 'Earthy Color Palette Guide', 'Construction Site Signage', 'Luxury Villas Catalog'],
    accent: '#D97706',
    aspectClass: 'aspect-[4/5]',
    featured: true
  },

  // 3. Velora Skin — Haute Skincare Packaging & Identity
  {
    id: 'id-7-1',
    image: '/identity/7.1.jpg',
    titleAr: 'فيلورا سكين — الهوية الملكية وتغليف مستحضرات العناية',
    titleEn: 'Velora Skin — Haute Skincare Packaging & Visual Identity',
    clientAr: 'علامة فيلورا باريس',
    clientEn: 'Velora Skin Paris',
    category: 'packaging',
    categoryLabelAr: 'تغليف وتجميل فاخر',
    categoryLabelEn: 'Luxury Cosmetic Packaging',
    tagAr: 'مستحضرات عناية ملكية',
    tagEn: 'Haute Beauty & Skincare',
    deliverablesAr: ['تصميم العلب والزجاجات الملكية', 'الشعار والأيقونات الذهبية', 'حقائب التسوق الفاخرة', 'بطاقات الشكر للعملاء'],
    deliverablesEn: ['Royal Bottles & Jars Design', 'Gold Gilded Icons & Logo', 'Haute Shopping Bags', 'Client Thank You Cards'],
    accent: '#9333EA',
    aspectClass: 'aspect-[3/4]',
    featured: true
  },

  // 4. Urban Table — Cloud Kitchen Ecosystem & Eco-Packaging
  {
    id: 'id-4',
    image: '/identity/4.jpg',
    titleAr: 'أوربان تيبل — منظومة الهوية والتغليف للمطابخ السحابية',
    titleEn: 'Urban Table — Cloud Kitchen Ecosystem & Eco-Packaging',
    clientAr: 'سلسلة أوربان تيبل',
    clientEn: 'Urban Table Cloud Kitchens',
    category: 'packaging',
    categoryLabelAr: 'تغليف وضيافة عصرية',
    categoryLabelEn: 'Modern Food & Eco-Packaging',
    tagAr: 'مطابخ سحابية صديقة للبيئة',
    tagEn: 'Eco-Friendly Cloud Kitchen',
    deliverablesAr: ['تغليف الوجبات الصديق للبيئة', 'أزياء وحقائب التوصيل الحرارية', 'الهوية البصرية للمركبات', 'قوائم الطعام والعلب'],
    deliverablesEn: ['Eco-Packaging Containers', 'Thermal Delivery Uniforms & Bags', 'Fleet Van Branding Wrap', 'Menu & Food Box Layouts'],
    accent: '#16A34A',
    aspectClass: 'aspect-[9/16]',
    featured: true
  },

  // 5. Sarve Studio — Haute Couture Fashion Monogram
  {
    id: 'id-9',
    image: '/identity/9.jpg',
    titleAr: 'استوديو سارف — الهوية الملكية لأزياء الهوت كوتور',
    titleEn: 'Sarve Studio — Haute Couture Fashion Monogram',
    clientAr: 'دار سارف للأزياء',
    clientEn: 'Sarve Fashion House',
    category: 'branding',
    categoryLabelAr: 'أزياء راقية وموضة',
    categoryLabelEn: 'Haute Couture & Fashion',
    tagAr: 'دور أزياء عالمية',
    tagEn: 'High Fashion Studio',
    deliverablesAr: ['شعار مونوغرام أنثوي انسيابي', 'بطاقات الملابس الفاخرة (Tags)', 'حقائب المخمل الملكية', 'دليل الطباعة والفويل'],
    deliverablesEn: ['Fluid Haute Monogram', 'Luxury Garment Hangtags', 'Velvet Gown Shopping Bags', 'Print & Foil Guidelines'],
    accent: '#7C3AED',
    aspectClass: 'aspect-[4/5]'
  },

  // 6. Madina Fragrance — Royal Perfume & Diffuser Packaging
  {
    id: 'id-6-1',
    image: '/identity/6.1.jpg',
    titleAr: 'مجموعة عطور المدينة — تغليف العطور الفاخرة والناشرات',
    titleEn: 'Madina Fragrance — Royal Perfume & Diffuser Packaging',
    clientAr: 'عطور المدينة الفاخرة',
    clientEn: 'Madina Royal Fragrances',
    category: 'packaging',
    categoryLabelAr: 'تغليف عطور وبيرفيوم',
    categoryLabelEn: 'Haute Perfumery Packaging',
    tagAr: 'عطور ملكية وزيوت شرقية',
    tagEn: 'Royal Scents & Diffusers',
    deliverablesAr: ['علب الهدايا بالفويل الذهبي', 'زجاجات العطور وناشرات الرائحة', 'حقائب التسوق المخملية', 'أكياس التخزين الكتانية'],
    deliverablesEn: ['Gold-Foil Gift Boxes', 'Perfume Bottles & Diffusers', 'Velvet Shopping Bags', 'Linen Keepsake Pouches'],
    accent: '#F59E0B',
    aspectClass: 'aspect-[3/4]'
  },

  // 7. Beano's Coffee — Comprehensive Specialty Coffee Packaging
  {
    id: 'id-11',
    image: '/identity/11.jpg',
    titleAr: 'بينوز كوفي — منظومة التغليف المتكاملة للقهوة المختصة',
    titleEn: "Beano's Coffee — Comprehensive Specialty Coffee Packaging",
    clientAr: 'محامص بينوز',
    clientEn: "Beano's Specialty Roastery",
    category: 'packaging',
    categoryLabelAr: 'تغليف مقاهي وضيافة',
    categoryLabelEn: 'Artisan Coffee Packaging',
    tagAr: 'محامص وقهوة مختصة',
    tagEn: 'Specialty Coffee & Bakery',
    deliverablesAr: ['أكياس البن المحكمة ذات الصمام', 'أكواب التيك أواي الفاخرة', 'علب المخبوزات والحلويات', 'حوامل الأكواب المزدوجة'],
    deliverablesEn: ['Valved Coffee Bean Bags', 'Premium Takeaway Cups', 'Bakery & Pastry Gift Boxes', 'Custom Dual Cup Carriers'],
    accent: '#059669',
    aspectClass: 'aspect-[3/4]'
  },

  // 8. Friday Fragrance — Geometric Monogram & Brand Guide
  {
    id: 'id-6',
    image: '/identity/6.jpg',
    titleAr: 'فرايداي فراجرانس — هندسة الشعار والهوية البصرية للعطور',
    titleEn: 'Friday Fragrance — Geometric Monogram & Brand Guide',
    clientAr: 'مؤسسة فرايداي فراجرانس',
    clientEn: 'Friday Fragrance Enterprise',
    category: 'branding',
    categoryLabelAr: 'هوية بصرية وشعارات',
    categoryLabelEn: 'Brand Identity & Monogram',
    tagAr: 'عطور النخبة المعاصرة',
    tagEn: 'Contemporary Luxury Scents',
    deliverablesAr: ['هندسة الشعار الذهبي الشبكي', 'تطبيقات الهوية على الأقمشة', 'بطاقات الضمان والأناقة', 'طباعة الزجاج الحرارية'],
    deliverablesEn: ['Grid-Engineered Gold Monogram', 'Fabric Tote Applications', 'Warranty & Luxury Inserts', 'Direct Glass Bottle Screenprint'],
    accent: '#D97706',
    aspectClass: 'aspect-[1/1]'
  },

  // 9. Bajilah Heritage — Cinematic Hospitality Social Campaign
  {
    id: 'id-1',
    image: '/identity/1.jpg',
    titleAr: 'مطعم بجيلة — الحملة البصرية التراثية وسلسلة العروض',
    titleEn: 'Bajilah Heritage — Cinematic Hospitality Social Campaign',
    clientAr: 'سلسلة مطاعم بجيلة',
    clientEn: 'Bajilah Heritage Dining',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'مطاعم وضيافة تراثية أصيلة',
    tagEn: 'Heritage Dining & Cuisine',
    deliverablesAr: ['جريد سوشيال ميديا سينمائي 3x3', 'حملة عروض الشتاء والمواسم', 'تصوير إعلاني عالي التباين', 'قصص تفاعلية لتقديم الطواجن'],
    deliverablesEn: ['3x3 Cinematic Social Grid', 'Seasonal Winter Promo Campaign', 'High-Contrast Food Styling', 'Interactive Tajine Story Series'],
    accent: '#B91C1C',
    aspectClass: 'aspect-[3/4]'
  },

  // 10. Espresso Delight — Modern Cafe Instagram Grid & Visuals
  {
    id: 'id-1-2',
    image: '/identity/1.2.jpg',
    titleAr: 'إسبريسو ديلايت — التجربة البصرية المتناغمة لسلسلة المقاهي',
    titleEn: 'Espresso Delight — Modern Cafe Instagram Grid & Visuals',
    clientAr: 'إسبريسو ديلايت كافيه',
    clientEn: 'Espresso Delight Cafe',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'مقاهي ومشروبات عصرية',
    tagEn: 'Specialty Coffee Brand',
    deliverablesAr: ['شبكة إنستغرام بصرية متجانسة', 'تصاميم الإعلانات الترويجية', 'رسائل المود والتركيز اليومي', 'كتالوج أدوات الباريستا'],
    deliverablesEn: ['Harmonious Instagram Visual Grid', 'Promotional Social Ads', 'Daily Mood & Focus Creative Copy', 'Barista Merch Catalog'],
    accent: '#92400E',
    aspectClass: 'aspect-[3/4]'
  },

  // 11. Stress Coffee — Interactive Winter Mood Campaign
  {
    id: 'id-2',
    image: '/identity/2.jpg',
    titleAr: 'قهوة وسترس — حملة تفاعلية شتوية لتعديل المزاج والتركيز',
    titleEn: 'Stress Coffee — Interactive Winter Mood Campaign',
    clientAr: 'قهوة وسترس',
    clientEn: 'Stress Coffee Roasters',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'محتوى بصري ترفيهي وتفاعلي',
    tagEn: 'Interactive Social Experience',
    deliverablesAr: ['سلسلة بوسترات تفاعلية دافئة', 'حملة زود العقل بالدوبامين', 'محتوى بصري وجلسات القهوة', 'إعلانات تفاعلية مستهدفة'],
    deliverablesEn: ['Warm Interactive Poster Series', 'Dopamine Energy Boost Campaign', 'Coffee Moments Visual Content', 'Targeted Conversion Ads'],
    accent: '#CA8A04',
    aspectClass: 'aspect-[3/4]'
  },

  // 12. Quick Air Travel — Luxury Pilgrimage Visual Narrative
  {
    id: 'id-3',
    image: '/identity/3.jpg',
    titleAr: 'كويك إير للسياحة — حملات الحج والعمرة الفاخرة',
    titleEn: 'Quick Air Travel — Luxury Pilgrimage Visual Narrative',
    clientAr: 'كويك إير العالمية للسياحة',
    clientEn: 'Quick Air Travel Global',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'سياحة وسفر فاخر',
    tagEn: 'Luxury Pilgrimage & Travel',
    deliverablesAr: ['حملات إعلانية لبرامج العمرة', 'تصاميم السوشيال ميديا التسويقية', 'كتيبات الإرشاد وباقات السفر', 'بانرات العروض الحصرية'],
    deliverablesEn: ['Pilgrimage Social Ad Series', 'Marketing Social Media Kits', 'Itinerary & Package Brochures', 'Exclusive Promo Web Banners'],
    accent: '#E11D48',
    aspectClass: 'aspect-[3/4]'
  },

  // 13. Vesta Pizza — Italian Artisan Visual Narrative & Social Grid
  {
    id: 'id-5-1',
    image: '/identity/5.1.jpg',
    titleAr: 'فيستا بيتزا — الهوية الإيطالية ومحتوى السوشيال ميديا',
    titleEn: 'Vesta Pizza — Italian Artisan Visual Narrative & Social Grid',
    clientAr: 'مطاعم فيستا بيتزا',
    clientEn: 'Vesta Artisan Pizza',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'مطاعم إيطالية أصيلة',
    tagEn: 'Authentic Italian Pizzeria',
    deliverablesAr: ['شبكة إنستغرام بصرية متناسقة', 'تصوير أطباق البيتزا النابولي', 'تصميم علب التوصيل الفاخرة', 'إعلانات العروض والمناسبات'],
    deliverablesEn: ['Visual Instagram Grid', 'Neapolitan Food Photography', 'Luxury Delivery Box Mockups', 'Special Offers Social Assets'],
    accent: '#9F1239',
    aspectClass: 'aspect-[1/1]'
  },

  // 14. Zesty Broast — High-Conversion Fast Casual Campaign
  {
    id: 'id-5',
    image: '/identity/5.jpg',
    titleAr: 'زستي بروست — حملة ترويجية للمطاعم السريعة عالية التحويل',
    titleEn: 'Zesty Broast — High-Conversion Fast Casual Campaign',
    clientAr: 'سلسلة زستي بروست',
    clientEn: 'Zesty Broast Express',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'وجبات سريعة راقية',
    tagEn: 'High-Energy Fast Casual',
    deliverablesAr: ['حملات سوشيال ميديا عالية التحويل', 'تصاميم الوجبات العائلية والمشاريع', 'بوسترات العروض الترويجية', 'تغليف الوجبات السريعة'],
    deliverablesEn: ['High-Conversion Social Campaigns', 'Family Meal Visual Assets', 'Promotional Store Posters', 'Takeout Box & Bag Packaging'],
    accent: '#EF4444',
    aspectClass: 'aspect-[3/4]'
  },

  // 15. Bright Smile Clinic — Dental Aesthetics & Smile Design Grid
  {
    id: 'id-7',
    image: '/identity/7.jpg',
    titleAr: 'برايت سميل — محتوى تجميل وزراعة الأسنان الرقمي',
    titleEn: 'Bright Smile Clinic — Dental Aesthetics & Smile Design Grid',
    clientAr: 'عيادات برايت سميل التخصصية',
    clientEn: 'Bright Smile Dental Clinics',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'عيادات ومراكز طبية',
    tagEn: 'Aesthetic Dentistry Center',
    deliverablesAr: ['شبكة محتوى توعوي وتجميلي', 'شروحات رقمية لابتسامة هوليوود', 'تصاميم حجز المواعيد السريعة', 'هوية عيادات رقمية حديثة'],
    deliverablesEn: ['Educational & Aesthetic Social Feed', 'Digital Smile Design Explainers', 'Instant Booking Visual Promos', 'Modern Clinic Visual Identity'],
    accent: '#0284C7',
    aspectClass: 'aspect-[3/4]'
  },

  // 16. Odonto Dental Care — 3D Visual Campaign & Smart Booking
  {
    id: 'id-8',
    image: '/identity/8.jpg',
    titleAr: 'أودونتو دنتال كير — تصاميم ثلاثية الأبعاد وعناية بالابتسامة',
    titleEn: 'Odonto Dental Care — 3D Visual Campaign & Smart Booking',
    clientAr: 'مجموعة أودونتو الطبية',
    clientEn: 'Odonto Dental Care Group',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'طب الأسنان التجميلي',
    tagEn: 'Orthodontic & Implantology',
    deliverablesAr: ['تصاميم ثلاثية الأبعاد تفاعلية', 'حملات تقويم الأسنان الشفاف', 'إعلانات رقمية لزراعة الأسنان', 'محتوى بصري طبي راقٍ'],
    deliverablesEn: ['Interactive 3D Rendered Ads', 'Clear Aligner Campaign Series', 'Dental Implant Visual Ads', 'Premium Medical Social Content'],
    accent: '#0D9488',
    aspectClass: 'aspect-[9/16]'
  },

  // 17. Dalton Marine Cosmetics — Scientific Skincare Campaign
  {
    id: 'id-9-1',
    image: '/identity/9.1.jpg',
    titleAr: 'دالتون مارين كوزمتكس — العناية المستوحاة من خلايا البحر',
    titleEn: 'Dalton Marine Cosmetics — Scientific Skincare Campaign',
    clientAr: 'دالتون العالمية لمستحضرات التجميل',
    clientEn: 'Dalton Marine Cosmetics',
    category: 'campaign',
    categoryLabelAr: 'حملات بصرية وسوشيال',
    categoryLabelEn: 'Social Media Campaign',
    tagAr: 'مستحضرات عناية علمية وبحرية',
    tagEn: 'Marine Active Skincare',
    deliverablesAr: ['حملة بصرية للعناية بالخلايا الجذعية', 'تصوير منتجات مستحضرات البحر', 'سلسلة نصائح روتين البشرة', 'إعلانات رقمية سينمائية'],
    deliverablesEn: ['Stem Cell Visual Campaign', 'Marine Cosmetic Product Photography', 'Skincare Routine Educational Series', 'Cinematic Social Ad Rollout'],
    accent: '#06B6D4',
    aspectClass: 'aspect-[3/4]'
  }
];

export const CreativeDesignSection: React.FC = () => {
  const { t, lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'branding' | 'packaging' | 'campaign'>('all');
  const [selectedWork, setSelectedWork] = useState<IdentityWork | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredWorks = activeTab === 'all'
    ? identityWorks
    : identityWorks.filter((w) => w.category === activeTab);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedWork) return;
      if (e.key === 'Escape') {
        setSelectedWork(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
        const nextIndex = (currentIndex + 1) % filteredWorks.length;
        setSelectedWork(filteredWorks[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
        const prevIndex = (currentIndex - 1 + filteredWorks.length) % filteredWorks.length;
        setSelectedWork(filteredWorks[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWork, filteredWorks]);

  return (
    <section id="services-creative" className="py-28 relative overflow-hidden bg-[#080B14]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag justify-center">
            <PaletteIcon size={16} />
            <span>{t('services.creative.tag')}</span>
          </div>
          <h2 className="section-title text-gradient">
            {t('services.creative.title')}
          </h2>
          <p className="section-desc">
            {lang === 'ar' 
              ? 'نصمم هويات بصرية استثنائية وأنظمة تغليف فاخرة وحملات رقمية سينمائية تمنح علامتك حضوراً مهيباً وتترك أثراً خالداً في وجدان عملائك.'
              : 'We architect timeless brand identities, haute packaging systems, and cinematic campaigns that establish unshakeable market authority.'}
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-10">
            {[
              { key: 'all', labelAr: 'كافة الأعمال', labelEn: 'All Showcases', count: identityWorks.length },
              { key: 'branding', labelAr: 'الهويات المؤسسية والشعارات', labelEn: 'Brand Identities & Logos', count: identityWorks.filter(w => w.category === 'branding').length },
              { key: 'packaging', labelAr: 'التغليف والمنتجات الفاخرة', labelEn: 'Luxury Packaging', count: identityWorks.filter(w => w.category === 'packaging').length },
              { key: 'campaign', labelAr: 'الحملات البصرية والسوشيال ميديا', labelEn: 'Visual Campaigns', count: identityWorks.filter(w => w.category === 'campaign').length }
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#647BFF] to-[#40D9E8] text-white shadow-[0_8px_25px_rgba(100,123,255,0.4)] scale-105'
                      : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  <span>{lang === 'ar' ? tab.labelAr : tab.labelEn}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/25 text-white' : 'bg-white/10 text-white/50'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Spacious, Non-Cramped Showcase Gallery (Generous gaps, borderless natural imagery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {filteredWorks.map((work) => {
            const isLiked = liked[work.id];

            return (
              <div
                key={work.id}
                className="group flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                {/* 1. Borderless Image Container (No harsh frames or borders, soft natural shadow) */}
                <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0d1424]">
                  {/* Real Image: Clean, Borderless, Crisp */}
                  <img
                    src={work.image}
                    alt={lang === 'ar' ? work.titleAr : work.titleEn}
                    className="w-full h-auto object-cover object-top border-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gentle gradient overlay on hover only */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-[#40D9E8] flex items-center gap-1">
                      <span>{lang === 'ar' ? 'انقر للمعاينة الكاملة بدقة عالية' : 'Click for full-resolution view'}</span>
                      <ArrowUpRightIcon size={14} />
                    </span>
                  </div>

                  {/* Quick Floating Actions (Top) */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                      {lang === 'ar' ? work.categoryLabelAr : work.categoryLabelEn}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLike(work.id);
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

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedWork(work);
                        }}
                        className="p-2 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md border border-white/20 text-white transition-all cursor-pointer"
                        title={lang === 'ar' ? 'معاينة بحجم كامل' : 'View Full Image'}
                      >
                        <ExpandIcon size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Spacious, Elegant Metadata Area (Generous breathing room) */}
                <div className="pt-5 pb-2 px-1 flex flex-col flex-grow">
                  {/* Sub-tag & Client */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span 
                      className="font-extrabold uppercase tracking-wider"
                      style={{ color: work.accent }}
                    >
                      {lang === 'ar' ? work.tagAr : work.tagEn}
                    </span>
                    <span className="text-white/50 text-[11px] font-medium">
                      {lang === 'ar' ? work.clientAr : work.clientEn}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#40D9E8] transition-colors leading-snug mb-3 line-clamp-2">
                    {lang === 'ar' ? work.titleAr : work.titleEn}
                  </h3>

                  {/* Deliverables Chips (Spacious & Clean) */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {(lang === 'ar' ? work.deliverablesAr : work.deliverablesEn).map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium text-white/75 bg-white/5 border border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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

      {/* 3. ULTRA-LUXURIOUS LIGHTBOX MODAL (Zero distortion, 100% natural proportion) */}
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
                  {lang === 'ar' ? selectedWork.categoryLabelAr : selectedWork.categoryLabelEn}
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

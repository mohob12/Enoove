import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.showcase': 'معرض المواقع',
    'nav.ai': 'الذكاء الاصطناعي',
    'nav.systems': 'الأنظمة والبرامج',
    'nav.branding': 'الهوية الإبداعية',
    'nav.process': 'طريقة العمل',
    'nav.whyUs': 'لماذا Enoove',
    'nav.portfolio': 'الأعمال',
    'nav.contact': 'ابدأ مشروعك',
    'nav.talk': 'تواصل معنا',

    // Hero
    'hero.badge': 'الجيل القادم من الوكالات الرقمية',
    'hero.headline': 'نصنع تجارب رقمية ترتقي بأعمالك',
    'hero.subheadline': 'We Build Digital Experiences That Move Businesses Forward.',
    'hero.description': 'من المواقع الاحترافية إلى الأنظمة الذكية والتصاميم الإبداعية، نقدم حلولاً رقمية متكاملة تساعد علامتك التجارية على النمو والتميز.',
    'hero.cta.primary': 'اكتشف خدماتنا',
    'hero.cta.secondary': 'ابدأ مشروعك',
    'hero.stat.projects': '+120 مشروع منجز',
    'hero.stat.growth': '+250% نمو العملاء',
    'hero.stat.satisfaction': '99.4% رضا الشركاء',

    // Service 01 - Web Showcase
    'services.web.tag': 'الخدمة 01 — الواجهات والتطوير',
    'services.web.title': 'تصميم وتطوير المواقع الإلكترونية',
    'services.web.desc': 'نصمم تجارب رقمية احترافية تعكس هوية مشروعك، وتمنح عملاءك تجربة استخدام استثنائية، وتساعدك على زيادة المبيعات والحجوزات.',
    'services.web.dragHint': 'اسحب للتنقل بين المشاريع أو استخدم الأسهم',
    'services.web.explore': 'معاينة المشروع التفاعلي',

    // Industries
    'project.restaurant.title': 'مطعم فاخر وراقي — Bella Vista',
    'project.restaurant.category': 'المطاعم والكافيهات',
    'project.restaurant.desc': 'تجربة بصرية شهية، تصوير فوتوغرافي فخم، قائمة طعام رقمية تفاعلية، ونظام حجز طاولات ذكي ودقيق.',
    'project.clinic.title': 'مركز النخبة الطبي — Apex Health',
    'project.clinic.category': 'العيادات والمراكز الطبية',
    'project.clinic.desc': 'واجهة صحية ناصعة وموثوقة، ملفات تعريف الأطباء، وحجز مواعيد فوري مع تأكيد تلقائي للمرضى.',
    'project.travel.title': 'وكالة سياحة واستكشاف — Wanderlust Voyages',
    'project.travel.category': 'السياحة والسفر',
    'project.travel.desc': 'تصوير وجهات غامر وجذاب، باقات سياحية متكاملة، ونظام حجز رحلات سلس وسريع.',
    'project.realestate.title': 'عقارات النخبة الفاخرة — Elysian Properties',
    'project.realestate.category': 'العقارات والفلل الفخمة',
    'project.realestate.desc': 'استعراض بصري للمنازل والفلل الفاخرة، فلاتر بحث ذكية وخريطة تفاعلية لعرض العقارات.',
    'project.ecommerce.title': 'متجر علامة تجارية راقية — Lumina Luxe',
    'project.ecommerce.category': 'التجارة الإلكترونية',
    'project.ecommerce.desc': 'كتالوج منتجات تفاعلي عالي الفخامة، تجربة تسوق فائقة السلاسة وبوابات دفع إلكترونية آمنة وسريعة.',

    // Service 02 - AI Automation
    'services.ai.tag': 'الخدمة 02 — الحلول الذكية والأتمتة',
    'services.ai.title': 'أنظمة الذكاء الاصطناعي والأتمتة',
    'services.ai.desc': 'نساعد الشركات على توفير الوقت، تحسين خدمة العملاء، وأتمتة العمليات اليومية باستخدام حلول ذكية ومتطورة تعمل 24/7.',
    'services.ai.sim.title': 'محاكي الأتمتة المباشر (اضغط للتجربة):',
    'services.ai.sim.step1': 'عميل يرسل استفسار عبر واتساب أو إنستغرام',
    'services.ai.sim.step2': 'الذكاء الاصطناعي يحلل الطلب ويجيب في ثوانٍ',
    'services.ai.sim.step3': 'جمع بيانات العميل وحجز الموعد تلقائياً',
    'services.ai.sim.step4': 'إرسال تنبيه للمبيعات وتحديث لوحة التحكم',
    'services.ai.sim.btn': 'تشغيل دورة المحاكاة الذكية',

    // Service 03 - Business Systems
    'services.systems.tag': 'الخدمة 03 — الإدارة والتحكم',
    'services.systems.title': 'الأنظمة المحاسبية والتنظيمية',
    'services.systems.desc': 'نطور حلولاً رقمية سحابية تساعدك على إدارة أعمالك بكفاءة، ومراقبة عملياتك، وتنظيم مواردك وأرباحك من مكان واحد متكامل.',
    'services.systems.kpi.revenue': 'إجمالي الإيرادات',
    'services.systems.kpi.invoices': 'الفواتير المدفوعة',
    'services.systems.kpi.inventory': 'دقة المخزون',
    'services.systems.kpi.efficiency': 'كفاءة التشغيل',

    // Service 04 - Creative Design
    'services.creative.tag': 'الخدمة 04 — الهوية والابتكار',
    'services.creative.title': 'التصميم الإبداعي والهوية البصرية',
    'services.creative.desc': 'نبني هويات بصرية مميزة ونصمم أعمالاً إبداعية تمنح علامتك التجارية حضوراً قوياً ولا يُنسى في أذهان العملاء.',
    'services.creative.f1': 'تصميم الشعارات والهويات البصرية الكاملة',
    'services.creative.f2': 'تصاميم السوشيال ميديا والحملات الإعلانية',
    'services.creative.f3': 'تصميم واجهات المتاجر واللوحات والديكور الداخلي',
    'services.creative.f4': 'تغليف المنتجات والكتالوجات الراقية',

    // Process
    'process.tag': 'منهجية العمل',
    'process.title': 'من الفكرة إلى التنفيذ والإطلاق',
    'process.step1.num': '01',
    'process.step1.name': 'Discovery — الاكتشاف',
    'process.step1.desc': 'نفهم مشروعك، أهدافك، والجمهور المستهدف ونحلل السوق بدقة لتحديد الفرص الذهبية.',
    'process.step2.num': '02',
    'process.step2.name': 'Strategy — الاستراتيجية',
    'process.step2.desc': 'نضع الاستراتيجية الرقمية المناسبة ونحدد أفضل الحلول التقنية والبصرية المناسبة لنموك.',
    'process.step3.num': '03',
    'process.step3.name': 'Design & Development — التصميم والتطوير',
    'process.step3.desc': 'نحول الأفكار إلى تجربة رقمية استثنائية ونطور الكود بأعلى معايير الجودة والأداء.',
    'process.step4.num': '04',
    'process.step4.name': 'Launch & Growth — الإطلاق والنمو',
    'process.step4.desc': 'نطلق مشروعك بنجاح ونرافقك في المتابعة وتحسين الأداء ورفع معدل التحويل والمبيعات.',

    // Why Us
    'why.tag': 'لماذا نحن؟',
    'why.title': 'معايير تصنع الفارق لعلامتك التجارية',
    'why.c1.title': 'حلول متكاملة في مكان واحد',
    'why.c1.desc': 'من التصميم والتطوير إلى الذكاء الاصطناعي والأنظمة الإدارية، كل ما تحتاجه تحت سقف واحد.',
    'why.c2.title': 'تصميم عصري وتجربة استثنائية',
    'why.c2.desc': 'واجهات زجاجية وفخامة بصرية تُبهر زوارك وتزيد من ثقة العملاء بعلامتك التجارية.',
    'why.c3.title': 'أحدث تقنيات الذكاء الاصطناعي',
    'why.c3.desc': 'دمج الأتمتة الذكية في صلب عملك لتقليل التكاليف التشغيلية وزيادة سرعة الرد.',
    'why.c4.title': 'حلول مخصصة حسب طبيعة مشروعك',
    'why.c4.desc': 'لا نستخدم قوالب مكررة؛ بل نبني كل نظام وتصميم خصيصاً ليناسب نموذج أعمالك.',
    'why.c5.title': 'التركيز على النتائج والمبيعات',
    'why.c5.desc': 'تصاميمنا ليست مجرد جمال بصري، بل أدوات تسويقية مدروسة لرفع المبيعات ومعدلات التحويل.',
    'why.c6.title': 'دعم ومرافقة مستمرة',
    'why.c6.desc': 'فريقنا معك دائماً في الصيانة والتطوير والتحديث المستمر لضمان استقرار أعمالك.',

    // Portfolio
    'portfolio.tag': 'معرض المشاريع',
    'portfolio.title': 'أعمال صُنعت بشغف وإتقان',
    'portfolio.filter.all': 'الكل',
    'portfolio.filter.web': 'مواقع وتطبيقات',
    'portfolio.filter.ai': 'أتمتة وذكاء اصطناعي',
    'portfolio.filter.systems': 'أنظمة إدارية',
    'portfolio.filter.branding': 'هوية وبصريات',

    // CTA
    'cta.headline': 'لنجعل مشروعك القادم استثنائياً',
    'cta.desc': 'سواء كنت تبحث عن موقع احترافي، نظام ذكي، أو هوية بصرية مميزة، نحن هنا لتحويل أفكارك إلى واقع يفوق التوقعات.',
    'cta.btn.start': 'ابدأ مشروعك الآن',
    'cta.btn.contact': 'تواصل معنا مباشرة',

    // Contact Form
    'contact.tag': 'تواصل معنا',
    'contact.title': 'دعنا نتحدث عن فكرتك القادمة',
    'contact.desc': 'املأ النموذج وسنتواصل معك خلال أقل من 24 ساعة بمقترح عملي ومخصص لمشروعك.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف / واتساب',
    'contact.service': 'نوع الخدمة المطلوبة',
    'contact.service.opt1': 'تصميم وتطوير موقع إلكتروني',
    'contact.service.opt2': 'أنظمة الذكاء الاصطناعي والأتمتة',
    'contact.service.opt3': 'الأنظمة المحاسبية والإدارية',
    'contact.service.opt4': 'الهوية البصرية والتصميم الإبداعي',
    'contact.service.opt5': 'حل متكامل (عدة خدمات)',
    'contact.budget': 'الميزانية التقريبية',
    'contact.message': 'تفاصيل المشروع وأهدافك',
    'contact.submit': 'إرسال الطلب الآن',
    'contact.success': 'شكراً لتواصلك! استلمنا طلبك وسنتواصل معك سريعاً.',

    // Footer
    'footer.brand.desc': 'وكالة رقمية فاخرة متخصصة في صناعة التجارب الرقمية الذكية، التصاميم الإبداعية، وأنظمة الأتمتة المتقدمة للشركات ورواد الأعمال.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.servicesList': 'خدماتنا',
    'footer.rights': 'جميع الحقوق محفوظة © 2026 Enoove Digital Agency.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'الشروط والأحكام'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.showcase': 'Web Showcase',
    'nav.ai': 'AI Automation',
    'nav.systems': 'Business Systems',
    'nav.branding': 'Branding',
    'nav.process': 'Process',
    'nav.whyUs': 'Why Enoove',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Start Project',
    'nav.talk': "Let's Talk",

    // Hero
    'hero.badge': 'Next-Generation Digital Agency',
    'hero.headline': 'نصنع تجارب رقمية ترتقي بأعمالك',
    'hero.subheadline': 'We Build Digital Experiences That Move Businesses Forward.',
    'hero.description': 'From high-end bespoke websites to intelligent systems and creative design, we craft integrated digital solutions that help your brand lead and scale.',
    'hero.cta.primary': 'Discover Services',
    'hero.cta.secondary': 'Start Your Project',
    'hero.stat.projects': '120+ Completed Projects',
    'hero.stat.growth': '+250% Client Growth',
    'hero.stat.satisfaction': '99.4% Partner Satisfaction',

    // Service 01 - Web Showcase
    'services.web.tag': 'Service 01 — Web Architecture & Design',
    'services.web.title': 'Web Design & Development',
    'services.web.desc': 'We engineer bespoke digital experiences that reflect your brand identity, captivate your audience, and drive sales and reservations.',
    'services.web.dragHint': 'Drag or use arrows to navigate through projects',
    'services.web.explore': 'Inspect Interactive Preview',

    // Industries
    'project.restaurant.title': 'Luxury Gastronomy — Bella Vista',
    'project.restaurant.category': 'Restaurants & Cafés',
    'project.restaurant.desc': 'Cinematic culinary visuals, bespoke digital interactive menus, and an intelligent table reservation engine.',
    'project.clinic.title': 'Elite Healthcare — Apex Health',
    'project.clinic.category': 'Medical Clinics & Centers',
    'project.clinic.desc': 'Pristine medical UI, physician profiles, and instant online appointment scheduling with automated reminders.',
    'project.travel.title': 'Curated Expeditions — Wanderlust Voyages',
    'project.travel.category': 'Travel & Expeditions',
    'project.travel.desc': 'Immersive destination storytelling, dynamic tour packages, and frictionless direct booking flow.',
    'project.realestate.title': 'Architectural Estates — Elysian Properties',
    'project.realestate.category': 'Luxury Real Estate',
    'project.realestate.desc': 'High-fidelity property galleries, intelligent filter matrices, and interactive location previews.',
    'project.ecommerce.title': 'Haute Living E-Commerce — Lumina Luxe',
    'project.ecommerce.category': 'E-Commerce & Retail',
    'project.ecommerce.desc': 'Bespoke micro-interactions, high-converting product pages, and ultra-secure instant checkout pipelines.',

    // Service 02 - AI Automation
    'services.ai.tag': 'Service 02 — Smart Systems & AI',
    'services.ai.title': 'AI Automation & Smart Systems',
    'services.ai.desc': 'We empower modern enterprises to save hours, revolutionize customer care, and automate workflows with 24/7 intelligent agents.',
    'services.ai.sim.title': 'Live Automation Simulator (Click to Test):',
    'services.ai.sim.step1': 'Client sends an inquiry via WhatsApp or Instagram',
    'services.ai.sim.step2': 'Autonomous AI understands intent and replies instantly',
    'services.ai.sim.step3': 'Lead qualification and automated appointment booking',
    'services.ai.sim.step4': 'Sales team notified and CRM updated in real-time',
    'services.ai.sim.btn': 'Trigger Intelligent Workflow Demo',

    // Service 03 - Business Systems
    'services.systems.tag': 'Service 03 — Operations & Control',
    'services.systems.title': 'Business Management & Accounting Systems',
    'services.systems.desc': 'We architect cloud enterprise software that unifies your sales, accounting, inventory, and analytics in one cohesive cockpit.',
    'services.systems.kpi.revenue': 'Gross Revenue',
    'services.systems.kpi.invoices': 'Settled Invoices',
    'services.systems.kpi.inventory': 'Inventory Precision',
    'services.systems.kpi.efficiency': 'Operational Efficiency',

    // Service 04 - Creative Design
    'services.creative.tag': 'Service 04 — Identity & Aesthetics',
    'services.creative.title': 'Creative Design & Visual Identity',
    'services.creative.desc': 'We forge unforgettable brand identities and captivating visual narratives that command authority and inspire loyalty.',
    'services.creative.f1': 'Brand strategy, iconic logo design & guidelines',
    'services.creative.f2': 'High-converting social campaigns & 3D motion',
    'services.creative.f3': 'Storefront facades, signage & spatial architectural aesthetics',
    'services.creative.f4': 'Luxury packaging & editorial publications',

    // Process
    'process.tag': 'Methodology',
    'process.title': 'From Conception to Scaled Execution',
    'process.step1.num': '01',
    'process.step1.name': 'Discovery',
    'process.step1.desc': 'Deep-dive audit into your business DNA, market opportunities, audience psychographics, and strategic objectives.',
    'process.step2.num': '02',
    'process.step2.name': 'Strategy',
    'process.step2.desc': 'Formulating the architectural roadmap, design system, and technical stack tailored for exponential growth.',
    'process.step3.num': '03',
    'process.step3.name': 'Design & Development',
    'process.step3.desc': 'Engineering high-fidelity glass interfaces and ultra-performant code with meticulous attention to detail.',
    'process.step4.num': '04',
    'process.step4.name': 'Launch & Growth',
    'process.step4.desc': 'Seamless production deployment accompanied by performance tracking, analytics, and conversion tuning.',

    // Why Us
    'why.tag': 'Why Choose Enoove',
    'why.title': 'Engineering Distinction for Forward-Thinking Brands',
    'why.c1.title': 'Unified End-to-End Solutions',
    'why.c1.desc': 'From branding and web architecture to autonomous AI and ERPs—everything orchestrated under one elite team.',
    'why.c2.title': 'Bespoke Glass Aesthetics',
    'why.c2.desc': 'Award-grade visual depth, specular lighting, and micro-interactions that elevate brand prestige.',
    'why.c3.title': 'Cutting-Edge Autonomous AI',
    'why.c3.desc': 'Direct integration of state-of-the-art LLMs and workflow engines to slash operating friction.',
    'why.c4.title': 'Zero Cookie-Cutter Templates',
    'why.c4.desc': 'Every single screen, line of code, and asset is custom-crafted specifically for your business model.',
    'why.c5.title': 'Conversion-Obsessed Architecture',
    'why.c5.desc': 'Visual beauty merged with rigorous UX psychology to maximize conversions, bookings, and revenue.',
    'why.c6.title': 'Dedicated Continuous Partnership',
    'why.c6.desc': 'Persistent support, proactive performance optimizations, and infrastructure scaling.',

    // Portfolio
    'portfolio.tag': 'Selected Works',
    'portfolio.title': 'Crafted with Precision & Passion',
    'portfolio.filter.all': 'All Works',
    'portfolio.filter.web': 'Web & Digital',
    'portfolio.filter.ai': 'AI Automation',
    'portfolio.filter.systems': 'SaaS & ERP',
    'portfolio.filter.branding': 'Brand Identity',

    // CTA
    'cta.headline': "Let's Make Your Next Venture Extraordinary",
    'cta.desc': 'Whether you seek an award-caliber website, autonomous AI infrastructure, or a distinct brand identity, we are here to manifest your vision.',
    'cta.btn.start': 'Start Your Project Now',
    'cta.btn.contact': 'Speak with an Expert',

    // Contact Form
    'contact.tag': "Let's Connect",
    'contact.title': 'Initiate Your Next Transformation',
    'contact.desc': 'Submit your project details and our senior directors will respond within 24 hours with a comprehensive strategic roadmap.',
    'contact.name': 'Full Name',
    'contact.email': 'Business Email',
    'contact.phone': 'Phone / WhatsApp',
    'contact.service': 'Primary Service Needed',
    'contact.service.opt1': 'Web Design & Bespoke Development',
    'contact.service.opt2': 'AI Automation & Autonomous Systems',
    'contact.service.opt3': 'Business Management & Accounting Systems',
    'contact.service.opt4': 'Brand Identity & Creative Design',
    'contact.service.opt5': 'Full-Scale Enterprise Transformation',
    'contact.budget': 'Estimated Investment',
    'contact.message': 'Project Goals & Description',
    'contact.submit': 'Submit Request',
    'contact.success': 'Thank you! Your inquiry has been received. We will connect with you shortly.',

    // Footer
    'footer.brand.desc': 'Premier creative technology agency specializing in high-end digital experiences, autonomous AI ecosystems, and bespoke enterprise systems for pioneering brands.',
    'footer.quickLinks': 'Navigation',
    'footer.servicesList': 'Capabilities',
    'footer.rights': 'All rights reserved © 2026 Enoove Digital Agency.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ar',
  setLang: () => {},
  t: (key: string) => key,
  isRtl: true
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  const isRtl = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

/* ═══════════════════════════════════════════════════════
   إبداع — Ebdā' Official Website
   Script: Navigation, i18n, Animations
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── i18n Translations ─── */
  const translations = {
    ar: {
      'nav.home': 'الرئيسية',
      'nav.apps': 'التطبيقات',
      'nav.about': 'عن إبداع',
      'nav.vision': 'الرؤية',
      'nav.lang': 'EN',
      'hero.kicker': 'منظومة إبداعية مفتوحة المصدر',
      'hero.title1': 'أبدع',
      'hero.title2': 'بلا حدود.',
      'hero.desc': 'منظومة أدوات إبداعية احترافية، مفتوحة المصدر ومجانية بالكامل. بديل حر لبرامج Adobe Creative Cloud — مبنية للمبدعين العرب والعالم.',
      'hero.cta1': 'استكشف التطبيقات',
      'hero.cta2': 'GitHub',
      'hero.meta1': 'تطبيقات إبداعية',
      'hero.meta2': 'مفتوح المصدر',
      'hero.meta3': 'مجاني بالكامل',
      'about.overline': 'عن إبداع',
      'about.title': 'ما هي إبداع؟',
      'about.lead': 'إبداع هي منظومة برمجيات إبداعية مفتوحة المصدر، تهدف إلى تقديم بديل حر ومجاني لأدوات Adobe Creative Cloud.',
      'about.body1': 'تضم المنظومة مجموعة متكاملة من التطبيقات الاحترافية — من تحرير الصور والتصميم الرقمي، إلى الرسم المتجه وتحرير الفيديو، ومعالجة الصوت والنشر المكتبي — جميعها مصممة بواجهة عربية أصلية مع دعم كامل للغة الإنجليزية.',
      'about.body2': 'المشروع في مراحل التطوير المبكرة، ويسعى لبناء مجتمع من المطورين والمبدعين العرب لإنشاء أدوات إبداعية عالمية المستوى.',
      'about.card_label': 'المنظومة الإبداعية',
      'apps.overline': 'التطبيقات الإبداعية',
      'apps.title': 'التطبيقات الإبداعية',
      'apps.desc': 'ثماني أدوات احترافية تغطي كل جوانب العمل الإبداعي — من التصميم إلى النشر.',
      'apps.cat.photos': 'الصور',
      'apps.cat.drawing': 'الرسم',
      'apps.cat.video': 'الفيديو',
      'apps.cat.motion': 'الحركة',
      'apps.cat.publishing': 'النشر',
      'apps.cat.audio': 'الصوت',
      'apps.cat.docs': 'المستندات',
      'apps.musammim.desc': 'محرر الصور والتصميم الرقمي — لإنشاء التصاميم وتعديل الصور باحترافية.',
      'apps.rassam.desc': 'رسومات متجهة وشعارات وأيقونات — لتصميم الهويات البصرية والرسوم التوضيحية.',
      'apps.mumentej.desc': 'تحرير الفيديو وترتيب المقاطع — لإنتاج محتوى مرئي احترافي.',
      'apps.muharrik.desc': 'تحريك العناصر والمؤثرات البصرية — لإنشاء رسوم متحركة ومؤثرات سينمائية.',
      'apps.nasher.desc': 'تصميم الكتب والمجلات والصفحات — للنشر المكتبي الاحترافي.',
      'apps.sawt.desc': 'تحرير الصوت ومعالجة التسجيلات — لإنتاج صوتي احترافي.',
      'apps.modie.desc': 'معالجة الصور وتصحيح الألوان — لتحسين الصور الفوتوغرافية باحترافية.',
      'apps.wathaeq.desc': 'قراءة ملفات PDF والتعليق عليها — لإدارة المستندات والمراجعات.',
      'apps.status.dev': 'قيد التطوير',
      'vision.overline': 'الرؤية والمبادئ',
      'vision.title': 'الرؤية والمبادئ',
      'vision.desc': 'إبداع مبنية على مبادئ واضحة تضمن بقاءها مفتوحة، حرة، ومتاحة للجميع.',
      'vision.opensource.title': 'مفتوحة المصدر',
      'vision.opensource.desc': 'الشفرة المصدرية متاحة بالكامل تحت رخصة MIT. يمكن لأي شخص قراءتها، تعديلها، وبناء مشاريع عليها.',
      'vision.free.title': 'مجانية بالكامل',
      'vision.free.desc': 'لا اشتراكات، لا رسوم، لا قيود. كل أداة في المنظومة مجانية تمامًا ومتاحة لكل المبدعين.',
      'vision.professional.title': 'أدوات احترافية',
      'vision.professional.desc': 'مصممة لتلبي احتياجات المحترفين والهواة على حد سواء، بمعايير جودة عالمية.',
      'vision.bilingual.title': 'عربية وإنجليزية',
      'vision.bilingual.desc': 'واجهات أصلية باللغة العربية مع دعم كامل للإنجليزية. اتجاه RTL و LTR مدمج في التصميم.',
      'vision.crossplatform.title': 'متعددة المنصات',
      'vision.crossplatform.desc': 'تطمح إبداع للعمل على Windows وmacOS وLinux، لتكون متاحة على جميع أنظمة التشغيل.',
      'vision.community.title': 'مجتمعية التطوير',
      'vision.community.desc': 'مشروع مدفوع بالمجتمع. كل مساهمة — من كتابة الكود إلى التوثيق والتصميم — تساعد في بناء أدوات أفضل.',
      'community.overline': 'المجتمع المفتوح',
      'community.title': 'ساهم في بناء إبداع',
      'community.desc': 'إبداع مشروع مفتوح المصدر ويرحب بكل المساهمات. سواء كنت مطورًا، مصممًا، كاتبًا تقنيًا، أو مبدعًا — يمكنك المساهمة في بناء أدوات إبداعية يستخدمها الملايين.',
      'community.cta1': 'زيارة المستودع على GitHub',
      'community.repo_desc': 'منظومة إبداعية مفتوحة المصدر — بديل حر لبرامج Adobe Creative Cloud.',
      'footer.copy': 'إبداع — مشروع مفتوح المصدر تحت رخصة MIT.',
      'footer.tagline': 'أبدع بلا حدود — Create Without Limits'
    },
    en: {
      'nav.home': 'Home',
      'nav.apps': 'Applications',
      'nav.about': 'About',
      'nav.vision': 'Vision',
      'nav.lang': 'ع',
      'hero.kicker': 'Open-Source Creative Ecosystem',
      'hero.title1': 'Create',
      'hero.title2': 'Without Limits.',
      'hero.desc': 'A professional creative toolkit — fully open-source and completely free. A libre alternative to Adobe Creative Cloud — built for Arab creators and the world.',
      'hero.cta1': 'Explore Applications',
      'hero.cta2': 'GitHub',
      'hero.meta1': 'Creative Apps',
      'hero.meta2': 'Open Source',
      'hero.meta3': 'Completely Free',
      'about.overline': 'ABOUT EBDĀ\'',
      'about.title': 'What is Ebdā\'?',
      'about.lead': 'Ebdā\' is an open-source creative software ecosystem, aiming to provide a free and libre alternative to Adobe Creative Cloud.',
      'about.body1': 'The ecosystem includes a comprehensive suite of professional applications — from photo editing and digital design, to vector illustration and video editing, audio processing and desktop publishing — all designed with a native Arabic interface and full English support.',
      'about.body2': 'The project is in early development stages, seeking to build a community of Arab developers and creators to build world-class creative tools.',
      'about.card_label': 'Creative Ecosystem',
      'apps.overline': 'CREATIVE APPLICATIONS',
      'apps.title': 'Creative Applications',
      'apps.desc': 'Eight professional tools covering every aspect of creative work — from design to publishing.',
      'apps.cat.photos': 'Photos',
      'apps.cat.drawing': 'Drawing',
      'apps.cat.video': 'Video',
      'apps.cat.motion': 'Motion',
      'apps.cat.publishing': 'Publishing',
      'apps.cat.audio': 'Audio',
      'apps.cat.docs': 'Documents',
      'apps.musammim.desc': 'Photo editing and digital design — for creating designs and editing photos professionally.',
      'apps.rassam.desc': 'Vector graphics, logos, and icons — for designing brand identities and illustrations.',
      'apps.mumentej.desc': 'Video editing and clip arrangement — for producing professional visual content.',
      'apps.muharrik.desc': 'Motion graphics and visual effects — for creating animations and cinematic effects.',
      'apps.nasher.desc': 'Book, magazine, and page design — for professional desktop publishing.',
      'apps.sawt.desc': 'Audio editing and recording processing — for professional audio production.',
      'apps.modie.desc': 'Photo processing and color correction — for professional photo enhancement.',
      'apps.wathaeq.desc': 'PDF reading and annotation — for document management and review.',
      'apps.status.dev': 'In Development',
      'vision.overline': 'VISION & PRINCIPLES',
      'vision.title': 'Vision & Principles',
      'vision.desc': 'Ebdā\' is built on clear principles ensuring it remains open, free, and accessible to everyone.',
      'vision.opensource.title': 'Open Source',
      'vision.opensource.desc': 'Source code fully available under the MIT license. Anyone can read, modify, and build upon it.',
      'vision.free.title': 'Completely Free',
      'vision.free.desc': 'No subscriptions, no fees, no restrictions. Every tool in the ecosystem is completely free for all creators.',
      'vision.professional.title': 'Professional Tools',
      'vision.professional.desc': 'Designed to meet the needs of professionals and hobbyists alike, with world-class quality standards.',
      'vision.bilingual.title': 'Arabic & English',
      'vision.bilingual.desc': 'Native Arabic interfaces with full English support. RTL and LTR layouts built into the design.',
      'vision.crossplatform.title': 'Cross-Platform',
      'vision.crossplatform.desc': 'Ebdā\' aspires to run on Windows, macOS, and Linux, to be available on all operating systems.',
      'vision.community.title': 'Community-Driven',
      'vision.community.desc': 'A community-driven project. Every contribution — from coding to documentation and design — helps build better tools.',
      'community.overline': 'OPEN SOURCE COMMUNITY',
      'community.title': 'Help Build Ebdā\'',
      'community.desc': 'Ebdā\' is an open-source project welcoming all contributions. Whether you\'re a developer, designer, technical writer, or creator — you can contribute to building creative tools used by millions.',
      'community.cta1': 'Visit the GitHub Repository',
      'community.repo_desc': 'Open-source creative ecosystem — a libre alternative to Adobe Creative Cloud.',
      'footer.copy': 'Ebdā\' — An open-source project under the MIT license.',
      'footer.tagline': 'Create Without Limits — أبدع بلا حدود'
    }
  };

  let currentLang = 'ar';

  /* ─── Language Switching ─── */
  function setLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update document title
    document.title = lang === 'ar'
      ? 'إبداع — أبدع بلا حدود | Ebdā\' — Create Without Limits'
      : 'Ebdā\' — Create Without Limits | إبداع — أبدع بلا حدود';

    // Store preference
    try { localStorage.setItem('ebdaa-lang', lang); } catch (e) { /* ignore */ }
  }

  /* ─── Navigation ─── */
  const nav = document.getElementById('siteNav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const langSwitch = document.getElementById('langSwitch');

  // Sticky nav on scroll
  let lastScroll = 0;
  function handleScroll() {
    const scrollY = window.scrollY;
    nav.classList.toggle('nav--scrolled', scrollY > 60);
    nav.classList.toggle('nav--hidden', scrollY > lastScroll && scrollY > 400);
    lastScroll = scrollY;

    // Update active nav link
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (scrollY >= top) currentSection = section.id;
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        link.classList.toggle('active', href === '#' + currentSection);
      }
    });
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile toggle
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('nav-links--open');
    document.body.classList.toggle('nav-open');
  });

  // Close mobile nav on link click
  navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('nav-link')) {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('nav-links--open');
      document.body.classList.remove('nav-open');
    }
  });

  // Language switch
  langSwitch.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
  });

  // Smooth scroll for anchor links
  document.addEventListener('click', e => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 20;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });

  /* ─── Intersection Observer Animations ─── */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  };

  const animateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        animateObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  function initAnimations() {
    const animateElements = document.querySelectorAll(
      '.app-card, .vision-card, .about-layout, .community-layout, .section-title, .section-desc'
    );
    animateElements.forEach(el => {
      el.classList.add('animate-in');
      animateObserver.observe(el);
    });
  }

  /* ─── Hero Parallax ─── */
  function initParallax() {
    const heroArt = document.querySelector('.hero-art');
    if (!heroArt) return;
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroArt.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    }, { passive: true });
  }

  /* ─── Initialize ─── */
  function init() {
    // Check stored language preference
    try {
      const stored = localStorage.getItem('ebdaa-lang');
      if (stored === 'en') setLanguage('en');
    } catch (e) { /* ignore */ }

    initAnimations();
    initParallax();
    handleScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

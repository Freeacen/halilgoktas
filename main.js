/**
 * ==========================================================================
 * KİŞİSEL WEB SİTESİ - JAVASCRIPT MOTORU (main.js)
 * Çoklu Sayfa (Multi-Page) Mimarisi & %100 Eksiksiz Çift Dil (TR/EN) Desteği
 * Halil Göktaş - Otomotiv ve Tasarım Mühendisi & Bağımsız Geliştirici
 * ==========================================================================
 */

// 1. KAPSAMLI ÇOKLU DİL SÖZLÜĞÜ (TR & EN)
const TRANSLATIONS = {
  tr: {
    titles: {
      home: "Halil Göktaş | Otomotiv Mühendisi & Bağımsız Geliştirici",
      about: "Hakkımda | Halil Göktaş",
      skills: "Yetenekler & Uzmanlıklar | Halil Göktaş",
      experience: "Deneyim & Eğitim | Halil Göktaş",
      projects: "Projeler & Vitrin | Halil Göktaş",
      contact: "İletişim | Halil Göktaş"
    },
    meta: {
      desc: "Halil Göktaş - Otomotiv ve Tasarım Mühendisi, Bağımsız Geliştirici. Mühendislik ve yazılım portfolyosu."
    },
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımda",
      skills: "Yetenekler",
      experience: "Deneyim",
      projects: "Projeler",
      contact: "İletişim",
      contactBtn: "İletişime Geç"
    },
    hero: {
      badge: "Yeni Projeler & İş Birlikleri İçin Müsait",
      greeting: "Merhaba, Ben",
      name: "Halil Göktaş",
      typewriterPrefix: "Ben bir",
      roles: [
        "Otomotiv Mühendisiyim",
        "Tasarım Mühendisiyim (CATIA)",
        "Bağımsız Geliştiriciyim",
        "Mobil & Web Geliştiricisiyim"
      ],
      desc: "Otomotiv tasarımı ve mühendislik disiplinini modern yazılım vizyonuyla birleştiriyorum. Mekanik sistemler, CAD parça modelleme ve yenilikçi Flutter mobil / web çözümleri üretiyorum.",
      viewProjects: "Projelerimi Gör",
      contactBtn: "İletişime Geç",
      cvBtn: "CV İndir (PDF)",
      cvFile: "Halil_Goktas_CV_TR.pdf",
      linksLabel: "Bağlantılar:",
      badgeCad: "⚙️ CAD & Otomotiv",
      badgeDev: "📱 Bağımsız Geliştirici",
      codeProfession: '"Otomotiv & Tasarım Mühendisi"',
      codePassion: '"Mobil & Web Yazılım"',
      stat1Number: "10+",
      stat1Text: "Teknoloji & Araç",
      stat2Number: "3D",
      stat2Text: "Parametrik Modelleme",
      stat3Number: "CAD",
      stat3Text: "Ölçümden Modele"
    },
    homeExplore: {
      badge: "Keşfedin",
      title: "Sayfalar ve Bölümler",
      subtitle: "Mühendislik geçmişim, yetkinliklerim, kariyer yolculuğum ve projelerim hakkında detaylı bilgi edinin.",
      cardAboutTitle: "Hakkımda & Eğitim",
      cardAboutDesc: "Afyon Kocatepe Üniversitesi Otomotiv Mühendisliği ve Anadolu Üniversitesi Web Tasarım mezuniyeti.",
      cardAboutBtn: "Biyografimi İncele",
      cardSkillsTitle: "Teknoloji & Yetenekler",
      cardSkillsDesc: "CATIA V5, SolidWorks, imalat süreçleri, Flutter, modern web dilleri ve veritabanı mimarisi.",
      cardSkillsBtn: "Tüm Yetenekler",
      cardExpTitle: "Deneyim & Zaman Çizelgesi",
      cardExpDesc: "Grebo Otomotiv ve Pimsun A.Ş. stajları, bağımsız geliştirme süreçleri ve sertifikalar.",
      cardExpBtn: "Kariyer Çizelgesi",
      cardProjectsTitle: "Projeler & Çalışmalar",
      cardProjectsDesc: "Şanzıman modelleme, 3D baskı imalat parçaları ve geliştirilmekte olan mobil uygulamalar.",
      cardProjectsBtn: "Proje Vitrini",
      cardContactTitle: "İletişim & Kanallar",
      cardContactDesc: "Doğrudan e-posta, telefon görüşmesi, LinkedIn ve GitHub profilleri ile mesaj formu.",
      cardContactBtn: "Mesaj Gönder"
    },
    about: {
      badge: "Beni Tanıyın",
      title: "Hakkımda",
      subtitle: "Mühendislik felsefem, akademik geçmişim ve bağımsız geliştirici vizyonum.",
      heading: "Mühendislik hassasiyetini modern yazılım dünyasıyla birleştiriyorum.",
      p1: "Merhaba! Ben Halil Göktaş. Afyon Kocatepe Üniversitesi Otomotiv Mühendisliği lisans programından mezunum. Tasarım mühendisliğine duyduğum tutkuyla özellikle CATIA V5 başta olmak üzere 3D parça ve montaj tasarımı, sac metal modelleme, yüzey işleme ve mekanik taşıt sistemlerinde yetkinlik kazandım.",
      p2: "Mühendislik disiplinime paralel olarak Anadolu Üniversitesi Web Tasarım ve Kodlama bölümünü bitirdim. Bağımsız bir geliştirici (Indie Developer) olarak Flutter & Dart ile kullanıcı deneyimi yüksek mobil uygulamalar üretiyor; HTML, CSS, PHP ve SQL ile dinamik web çözümleri geliştiriyorum. Ayrıca Java, TypeScript ve Python teknolojileriyle kendimi sürekli güncelliyorum.",
      locLabel: "📍 Konum:",
      locVal: "Ankara, Türkiye (Uzaktan & Hibrit Çalışmaya Açık)",
      deg1Label: "🎓 Lisans:",
      deg1Val: "Otomotiv Mühendisliği - Afyon Kocatepe Üniversitesi (2017 - 2023)",
      deg2Label: "🎓 Ön Lisans:",
      deg2Val: "Web Tasarım ve Kodlama - Anadolu Üniversitesi (2019 - 2021)",
      expLabel: "⚙️ Uzmanlık:",
      expVal: "Tasarım Mühendisliği (CATIA) & Mobil Geliştirme (Flutter)",
      card1Title: "Otomotiv & Tasarım Mühendisliği",
      card1Desc: "CATIA V5 ile parça, montaj ve sac metal modelleme; SolidWorks ile mekanik çizim deneyimi.",
      card2Title: "Mobil Uygulama Geliştirme",
      card2Desc: "Flutter & Dart ile Android ve iOS için modern, akıcı ve yüksek performanslı mobil ürünler.",
      card3Title: "Web & Veritabanı Mimarisi",
      card3Desc: "HTML5, modern CSS3, PHP ve SQL ile dinamik web sayfaları, veri yönetimi ve entegrasyon."
    },
    skills: {
      badge: "Teknoloji Yığını",
      title: "Yetenekler & Uzmanlıklar",
      subtitle: "Mühendislik ve yazılım projelerimde aktif olarak kullandığım araçlar, standartlar ve teknolojiler.",
      tabs: {
        all: "Tümü",
        cad: "CAD & Mühendislik",
        mobile: "Mobil & Flutter",
        web: "Web & Diller"
      },
      levels: {
        advanced: "İleri Düzey",
        intermediate: "Orta Düzey",
        foundational: "Temel / Gelişen",
        proficient: "Yetkin"
      },
      catiaDesc: "3D parça tasarımı (Part Design), montaj modelleme (Assembly), sac metal (Generative Sheetmetal) ve teknik resim hazırlama.",
      solidworksDesc: "3D katı modelleme, mekanik montajlar, parça tasarımı ve teknik resimlendirme süreçleri.",
      manufacturingTitle: "İmalat Süreçleri & Problem Çözme",
      manufacturingDesc: "Atölye ve imalat süreçlerine (talaşlı imalat, montaj ve üretim adımları) saha hakimiyeti; tasarımdan üretime kadar karşılaşılan teknik aksaklıklara analitik ve uygulanabilir mühendislik çözümleri üretme.",
      sheetmetalDesc: "Atölye ve imalat süreçlerine (talaşlı imalat, montaj ve üretim adımları) saha hakimiyeti; tasarımdan üretime kadar karşılaşılan teknik aksaklıklara analitik ve uygulanabilir mühendislik çözümleri üretme.",
      flutterDesc: "Android ve iOS için modern, performanslı ve akıcı çapraz platform mobil uygulamalar geliştirme.",
      dartDesc: "Nesne yönelimli programlama, asenkron yapılar, durum yönetimi (State Management) ve REST API entegrasyonları.",
      htmlCssDesc: "Responsive tasarım, CSS Grid/Flexbox, semantik HTML ve erişilebilir arayüzler.",
      phpDesc: "Dinamik web arka yüzleri, form doğrulama, oturum yönetimi ve veritabanı entegrasyonlu servisler.",
      sqlDesc: "İlişkisel veritabanı mimarisi, CRUD operasyonları, MySQL sorguları ve veri güvenliği yapılandırması.",
      gitDesc: "Git iş akışları, branch stratejileri, versiyonlama ve GitHub üzerinde açık kaynak/özel repo yönetimi.",
      javaTsPyDesc: "Veri işleme, otomasyon scriptleri; Java ve TypeScript ile modern yazılım geliştirme pratikleri."
    },
    experience: {
      badge: "Kariyer Yolculuğum",
      title: "Deneyim & Eğitim",
      subtitle: "Profesyonel staj geçmişim, bağımsız yazılım çalışmalarım ve akademik başarılarım.",
      exp1Role: "Bağımsız Geliştirici (Indie Dev) & Mekanik Tasarım",
      exp1Comp: "Kişisel Projeler & Girişim",
      exp1Date: "Güncel",
      exp1Desc: "Flutter & Dart ile Android ve iOS için modern mobil uygulamalar geliştirildi. Web tasarım disipliniyle dinamik web sayfaları üretildi. CATIA V5 ile mekanik parça ve 3D otomotiv modelleme çalışmaları yürütüldü.",
      exp2Role: "Tasarım Mühendisi Stajyeri",
      exp2Comp: "GREBO OTOMOTİV (Anadolu OSB, Ankara)",
      exp2Date: "Şubat 2023 - Mart 2023",
      exp2Desc: "Fabrika çözümleri ve standart malzemeler referans alınarak tasarım bölümü için çekmeceli parça taşıma ekipmanı CATIA V5 ile tasarlandı; 3D parça, sac parça ve montaj modelleri ile parça teknik resimleri hazırlandı. Seri üretim öncesi sac büküm, geri esneme ve üretilebilirlik kontrollerinde saha deneyimi kazanıldı.",
      exp3Role: "Üretim Mühendisi Stajyeri",
      exp3Comp: "PİMSUN A.Ş. (Başkent OSB, Ankara)",
      exp3Date: "Eylül 2022 - Ocak 2023",
      exp3Desc: "CNC tezgâhlarının çalışma ve verimlilik durumunu karşılaştırmak için sıfırdan Excel takip aracı geliştirildi (günlük yönetim raporlarına dahil edildi). Parçaların CNC ve sonraki operasyonlar arası saha takibi yapıldı. Eksik ölçüler CAD dosyalarından kontrol edildi ve SAP üzerinde iş emirleri/üretim verisi takibi yürütüldü.",
      exp4Role: "Lisans Derecesi - Otomotiv Mühendisliği",
      exp4Comp: "Afyon Kocatepe Üniversitesi",
      exp4Date: "2017 - 2023",
      exp4Desc: "Otomotiv sistemleri, taşıt mekaniği, CAD tabanlı ürün geliştirme (CATIA & SolidWorks modelleme), üretim yöntemleri, mekanik mukavemet ve tasarım mühendisliği üzerine kapsamlı lisans eğitimi.",
      exp5Role: "Ön Lisans Derecesi - Web Tasarım ve Kodlama",
      exp5Comp: "Anadolu Üniversitesi (AÖF)",
      exp5Date: "2019 - 2021",
      exp5Desc: "İnternet teknolojileri, istemci ve sunucu taraflı web programlama (HTML, CSS, JavaScript, PHP), veritabanı yönetimi (SQL) ve modern kullanıcı arayüzü tasarımı eğitimi.",
      exp6Role: "Sertifikalar, Yabancı Dil & Ek Yetkinlikler",
      exp6Comp: "Mesleki ve Kişisel Gelişim",
      exp6Date: "Sertifikalı",
      exp6Desc: "• <strong>Six Sigma Yellow Belt</strong> - VMEdu Inc.<br>• <strong>İngilizce:</strong> TOEFL iBT 71<br>• <strong>Ek Bilgiler:</strong> Askerlik: Tamamlandı | Sürücü Belgesi: B Sınıfı"
    },
    projects: {
      badge: "Vitrin",
      title: "Projeler & Çalışmalar",
      subtitle: "Mühendislik ve yazılım alanlarındaki seçili çalışmalar ve geliştirme aşamasındaki projeler.",
      bannerTitle: "Yeni Projeler ve Mobil Uygulamalar Hazırlanıyor",
      bannerDesc: "Gizlilik sözleşmesi (NDA) kapsamındaki kurumsal mühendislik çalışmaları ve üzerinde çalıştığım yeni Flutter mobil uygulamaları çok yakında bu alanda yayınlanacaktır.",
      proj1Title: "Şanzıman Modelleme Projesi",
      proj1Cat: "Otomotiv CAD & Mekanik",
      proj1Badge: "Mühendislik",
      proj1Desc: "6 kişilik ekip çalışmasında araç şanzımanının söküm, ölçüm, CATIA V5 ile parça modelleme, 3D montaj, teknik resim ve mühendislik proje raporu hazırlama süreci.",
      proj2Title: "3D Baskıya Yönelik Özel Parça Tasarımları",
      proj2Cat: "Özel Parça Geliştirme",
      proj2Badge: "İmalat & Tasarım",
      proj2Desc: "Alan kısıtları ve montaj ölçülerine uyum gereksinimleri dikkate alınarak ihtiyaca özel CAD parçaların tasarlanması ve PLA malzeme ile 3D baskı prototiplenmesi.",
      proj3Title: "Flutter Çok Platformlu Mobil Çözümler",
      proj3Cat: "Mobil Uygulama (Indie Dev)",
      proj3Badge: "Geliştirme Aşamasında",
      proj3Desc: "Android ve iOS için modern UI/UX prensiplerine uygun, yüksek performanslı ve kullanıcı dostu bağımsız mobil uygulamalar (Çok yakında mağazalarda yerini alacak).",
      modalClose: "Kapat",
      featuresTitle: "Önemli Özellikler:",
      techTitle: "Kullanılan Teknolojiler:"
    },
    contact: {
      badge: "Bağlantı Kurun",
      title: "İletişime Geçin",
      subtitle: "Yeni bir proje fikriniz mi var, yoksa sadece merhaba mı demek istiyorsunuz?",
      heading: "Projelerinizi ve fikirlerinizi birlikte hayata geçirelim.",
      desc: "Tasarım mühendisliği pozisyonları, freelance mobil/web projeleri veya teknik iş birlikleri için bana dilediğiniz zaman ulaşabilirsiniz. Genellikle 24 saat içinde dönüş yapıyorum.",
      emailLabel: "E-posta Adresi",
      phoneLabel: "Telefon Numarası",
      locLabel: "Konum & Saat Dilimi",
      locVal: "Ankara / Sincan, Türkiye (GMT+3)",
      profilesLabel: "Profesyonel Profiller",
      formTitle: "Mesaj Gönderin",
      nameLabel: "Adınız Soyadınız",
      namePlaceholder: "Örn: Ahmet Yılmaz",
      emailInputLabel: "E-posta Adresiniz",
      emailPlaceholder: "ornek@email.com",
      subjectLabel: "Konu",
      subjectPlaceholder: "Proje teklifi veya genel soru",
      messageLabel: "Mesajınız",
      messagePlaceholder: "Mesajınızı buraya yazabilirsiniz...",
      submitBtn: "E-posta Taslağı Aç",
      sendingBtn: "Gönderiliyor...",
      copyTooltip: "Kopyala",
      copiedTooltip: "Kopyalandı!"
    },
    footer: {
      desc: "Otomotiv mekanik tasarım mühendisliği ve modern yazılım çözümleri kişisel vitrini.",
      copyright: "Halil Göktaş. Tüm hakları saklıdır.",
      credits: "Mühendislik disiplini ve modern web standartları ile geliştirildi."
    },
    toast: {
      themeDark: "Koyu tema etkinleştirildi.",
      themeLight: "Açık tema etkinleştirildi.",
      emailCopied: "E-posta adresi panoya kopyalandı!",
      phoneCopied: "Telefon numarası panoya kopyalandı!",
      copyFailed: "Kopyalanamadı, lütfen manuel kopyalayın.",
      msgSent: "Mesajınız alındı! En kısa sürede geri döneceğim. Teşekkürler!"
    }
  },

  en: {
    titles: {
      home: "Halil Göktaş | Automotive Engineer & Indie Developer",
      about: "About Me | Halil Göktaş",
      skills: "Skills & Expertise | Halil Göktaş",
      experience: "Experience & Education | Halil Göktaş",
      projects: "Projects & Showcase | Halil Göktaş",
      contact: "Contact | Halil Göktaş"
    },
    meta: {
      desc: "Halil Göktaş - Automotive and Mechanical Design Engineer, Indie Developer. Engineering and software portfolio."
    },
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      contactBtn: "Contact Me"
    },
    hero: {
      badge: "Available for New Projects & Opportunities",
      greeting: "Hello, I am",
      name: "Halil Göktaş",
      typewriterPrefix: "I am",
      roles: [
        "a Design Engineer (CATIA)",
        "an Automotive Engineer",
        "an Indie Developer",
        "a Mobile & Web Developer"
      ],
      desc: "Combining automotive design and engineering discipline with modern software development vision. Building CAD models, mechanical systems, and innovative Flutter mobile/web solutions.",
      viewProjects: "View Projects",
      contactBtn: "Get in Touch",
      cvBtn: "Download CV (PDF)",
      cvFile: "Halil_Goktas_CV_EN.pdf",
      linksLabel: "Connect:",
      badgeCad: "⚙️ CAD & Automotive",
      badgeDev: "📱 Indie Developer",
      codeProfession: '"Automotive & Design Engineer"',
      codePassion: '"Mobile & Web Development"',
      stat1Number: "10+",
      stat1Text: "Tech & Tools",
      stat2Number: "3D",
      stat2Text: "Parametric Modeling",
      stat3Number: "CAD",
      stat3Text: "Measurement to Model"
    },
    homeExplore: {
      badge: "Explore",
      title: "Pages & Sections",
      subtitle: "Learn more about my engineering background, technical skill matrix, career path, and project portfolio.",
      cardAboutTitle: "About & Education",
      cardAboutDesc: "Afyon Kocatepe University Automotive Engineering & Anadolu University Web Design credentials.",
      cardAboutBtn: "Read Biography",
      cardSkillsTitle: "Tech & Skill Matrix",
      cardSkillsDesc: "CATIA V5, SolidWorks, manufacturing processes, Flutter, modern web tech, and database architecture.",
      cardSkillsBtn: "Explore Skills",
      cardExpTitle: "Experience & Timeline",
      cardExpDesc: "Grebo Automotive & Pimsun A.Ş. internships, independent development journey, and certifications.",
      cardExpBtn: "Career Timeline",
      cardProjectsTitle: "Projects & Showcase",
      cardProjectsDesc: "Transmission modeling, 3D printing custom parts, and upcoming mobile applications.",
      cardProjectsBtn: "View Projects",
      cardContactTitle: "Contact & Channels",
      cardContactDesc: "Direct email, phone calling, LinkedIn and GitHub profiles, plus an interactive message form.",
      cardContactBtn: "Send a Message"
    },
    about: {
      badge: "Get to Know Me",
      title: "About Me",
      subtitle: "My engineering philosophy, academic background, and independent developer vision.",
      heading: "Bridging engineering precision with modern software technologies.",
      p1: "Hello! I am Halil Göktaş. I hold a B.Sc. in Automotive Engineering from Afyon Kocatepe University. With my passion for mechanical design, I specialize in 3D CAD modeling, part and assembly design, sheet metal, surface modeling, and mechanical vehicle systems, primarily in CATIA V5.",
      p2: "Alongside my engineering studies, I completed an associate degree in Web Design and Coding from Anadolu University. As an indie developer, I craft user-friendly mobile applications using Flutter & Dart, and build dynamic web solutions with HTML, CSS, PHP, and SQL, while continuously expanding my knowledge in Java, TypeScript, and Python.",
      locLabel: "📍 Location:",
      locVal: "Ankara, Turkey (Open to Remote & Hybrid)",
      deg1Label: "🎓 B.Sc. Degree:",
      deg1Val: "Automotive Engineering - Afyon Kocatepe University (2017 - 2023)",
      deg2Label: "🎓 Associate Degree:",
      deg2Val: "Web Design & Coding - Anadolu University (2019 - 2021)",
      expLabel: "⚙️ Core Expertise:",
      expVal: "Design Engineering (CATIA) & Mobile Development (Flutter)",
      card1Title: "Automotive & Mechanical Design",
      card1Desc: "3D part design, sheet metal, assembly modeling, and drafting in CATIA V5 and SolidWorks.",
      card2Title: "Mobile App Development",
      card2Desc: "Building cross-platform (Android & iOS) mobile products with Flutter & Dart, focused on UI/UX and performance.",
      card3Title: "Web & Database Architecture",
      card3Desc: "Developing responsive modern web interfaces, relational SQL database structures, and backend services with PHP."
    },
    skills: {
      badge: "Tech Stack",
      title: "Skills & Expertise",
      subtitle: "Tools, software, languages, and standards I actively use across engineering and digital projects.",
      tabs: {
        all: "All",
        cad: "CAD & Engineering",
        mobile: "Mobile & Flutter",
        web: "Web & Languages"
      },
      levels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        foundational: "Foundational",
        proficient: "Proficient"
      },
      catiaDesc: "3D part modeling (Part Design), assemblies, sheet metal design (Generative Sheetmetal), and technical 2D drafting.",
      solidworksDesc: "3D solid modeling, mechanical part assemblies, component design, and engineering drafting.",
      manufacturingTitle: "Manufacturing Processes & Problem Solving",
      manufacturingDesc: "Hands-on familiarity with shop floor and manufacturing processes (machining, assembly, and production workflows); developing analytical and practical engineering solutions for technical challenges from design to production.",
      sheetmetalDesc: "Hands-on familiarity with shop floor and manufacturing processes (machining, assembly, and production workflows); developing analytical and practical engineering solutions for technical challenges from design to production.",
      flutterDesc: "Building responsive, modern, high-performance cross-platform mobile apps for Android & iOS.",
      dartDesc: "Object-oriented programming, asynchronous streams, state management architectures, and REST API integrations.",
      htmlCssDesc: "Responsive layouts, CSS Grid/Flexbox, glassmorphism UI styling, and semantic modern web standards.",
      phpDesc: "Dynamic web backends, server-side form validation, session handling, and database-driven REST services.",
      sqlDesc: "Relational database schema design, CRUD operations, SQL queries, and secure database management.",
      gitDesc: "Git version control workflows, branch strategies, versioning, and repository management on GitHub.",
      javaTsPyDesc: "Data processing, workflow automation scripts; applying software practices with Java and TypeScript."
    },
    experience: {
      badge: "Career Journey",
      title: "Experience & Education",
      subtitle: "Professional internships, independent software projects, and academic milestones.",
      exp1Role: "Indie Developer & Mechanical Design",
      exp1Comp: "Personal Projects & Freelance",
      exp1Date: "Present",
      exp1Desc: "Developing cross-platform mobile apps for Android and iOS using Flutter & Dart. Building dynamic web solutions and conducting 3D CAD mechanical part modeling in CATIA V5.",
      exp2Role: "Design Engineer Intern",
      exp2Comp: "GREBO OTOMOTİV (Anadolu Industrial Zone, Ankara)",
      exp2Date: "Feb 2023 - Mar 2023",
      exp2Desc: "Designed a drawer-equipped parts transport trolley in CATIA V5 using standard factory materials; created 3D part, sheet metal, and assembly models with technical drawings. Gained hands-on exposure to sheet-metal bending, springback, and manufacturability.",
      exp3Role: "Production Engineer Intern",
      exp3Comp: "PİMSUN A.Ş. (Başkent Industrial Zone, Ankara)",
      exp3Date: "Sep 2022 - Jan 2023",
      exp3Desc: "Built an Excel tracking tool from scratch to evaluate CNC station efficiency (integrated into daily management reports). Tracked parts between operations on the shop-floor, checked missing dimensions in CAD drawings, and managed work orders via SAP ERP.",
      exp4Role: "B.Sc. in Automotive Engineering",
      exp4Comp: "Afyon Kocatepe University",
      exp4Date: "2017 - 2023",
      exp4Desc: "Comprehensive engineering curriculum covering vehicle systems, mechanical mechanics, CAD product development (CATIA & SolidWorks), manufacturing methods, and mechanical strength analysis.",
      exp5Role: "Associate Degree in Web Design & Coding",
      exp5Comp: "Anadolu University",
      exp5Date: "2019 - 2021",
      exp5Desc: "Internet technologies, client & server-side web programming (HTML, CSS, JavaScript, PHP), relational database management (SQL), and user interface design.",
      exp6Role: "Certifications, Languages & Additional",
      exp6Comp: "Professional Growth",
      exp6Date: "Certified",
      exp6Desc: "• <strong>Six Sigma Yellow Belt</strong> - VMEdu Inc.<br>• <strong>English:</strong> TOEFL iBT 71<br>• <strong>Additional:</strong> Military Service: Completed | Driving Licence: Class B"
    },
    projects: {
      badge: "Showcase",
      title: "Projects & Works",
      subtitle: "Selected works in mechanical design, CAD modeling, and digital software development.",
      bannerTitle: "New Projects & Mobile Applications In Development",
      bannerDesc: "Corporate engineering projects subject to NDA and new cross-platform mobile apps built with Flutter will be showcased here shortly.",
      proj1Title: "Transmission Modeling Project",
      proj1Cat: "Automotive CAD & Mechanics",
      proj1Badge: "Engineering",
      proj1Desc: "Disassembly and measurement of an automotive transmission in a 6-person team; 3D part modeling, assembly, technical drawings, and project reporting in CATIA V5.",
      proj2Title: "Personal Parts for 3D Printing",
      proj2Cat: "Custom Part Development",
      proj2Badge: "Design & Manufacturing",
      proj2Desc: "Designed custom CAD parts around space constraints and fit requirements, followed by rapid prototyping and manufacturing in PLA via 3D printing.",
      proj3Title: "Flutter Cross-Platform Mobile Apps",
      proj3Cat: "Mobile App (Indie Dev)",
      proj3Badge: "In Progress",
      proj3Desc: "Developing intuitive, high-performance independent mobile applications for Android and iOS adhering to modern UI/UX design guidelines (Launching soon).",
      modalClose: "Close",
      featuresTitle: "Key Features:",
      techTitle: "Technologies Used:"
    },
    contact: {
      badge: "Get in Touch",
      title: "Contact Me",
      subtitle: "Have an exciting project idea or want to discuss engineering and software?",
      heading: "Let's bring your projects and ideas to life together.",
      desc: "Feel free to reach out regarding design engineering opportunities, freelance mobile/web projects, or technical collaboration. I typically respond within 24 hours.",
      emailLabel: "Email Address",
      phoneLabel: "Phone Number",
      locLabel: "Location & Timezone",
      locVal: "Ankara / Sincan, Turkey (GMT+3)",
      profilesLabel: "Professional Profiles",
      formTitle: "Send a Message",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g. John Doe",
      emailInputLabel: "Your Email Address",
      emailPlaceholder: "e.g. name@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "Project inquiry or general question",
      messageLabel: "Your Message",
      messagePlaceholder: "Write your message here...",
      submitBtn: "Open Email Draft",
      sendingBtn: "Sending...",
      copyTooltip: "Copy",
      copiedTooltip: "Copied!"
    },
    footer: {
      desc: "Personal portfolio showcasing automotive mechanical design engineering and modern software development.",
      copyright: "Halil Göktaş. All rights reserved.",
      credits: "Built with engineering precision and modern web standards."
    },
    toast: {
      themeDark: "Dark theme activated.",
      themeLight: "Light theme activated.",
      emailCopied: "Email address copied to clipboard!",
      phoneCopied: "Phone number copied to clipboard!",
      copyFailed: "Could not copy, please select manually.",
      msgSent: "Message received! I will get back to you shortly. Thank you!"
    }
  }
};


// Project descriptions based on the author's work and supplied photographs.
TRANSLATIONS.tr.work = {
  "title": "Projeler & Çalışmalar",
  "subtitle": "Gerçek parçalarla yürüttüğüm modelleme ve inceleme çalışmaları; her projedeki sorumluluğum ve ortaya çıkan sonuç.",
  "homeTitle": "Seçili mühendislik çalışmaları",
  "homeSubtitle": "Ölçüsünü aldığım bir amortisörün CAD modeli ve yağlama kanallarını görünür kılan motor bloğu kesiti.",
  "shockTitle": "Amortisör ölçümü ve CAD montajı",
  "shockType": "Bireysel dönem projesi",
  "shockSummary": "Sanayiden temin ettiğim amortisörün ölçülerini alarak parçalarını CATIA ortamında modelledim ve montajını oluşturdum.",
  "shockDetail": "Taşıt Teknolojisi dersi kapsamında yürüttüğüm çalışmanın ölçüm, parça modelleme, montaj ve raporlama aşamalarını tek başıma tamamladım. Raporda amortisörün görevini ve çalışma prensibini de ele aldım.",
  "shockResult": "Sonuç: Gerçek parçadan alınan ölçülere dayalı CAD parça modelleri, montaj modeli ve çalışma prensibini açıklayan rapor.",
  "shockAlt": "Ölçüleri alınarak CATIA ortamında modellenen amortisör montajı",
  "treeAlt": "Amortisör montajının parçalarını ve montaj kısıtlarını gösteren CATIA ürün ağacı",
  "treeCaption": "Parçalar ve montaj kısıtlarıyla birlikte ürün ağacı.",
  "engineTitle": "Motor bloğunda yağlama kanallarının incelenmesi",
  "engineType": "Bitirme projesi · 2 kişilik çalışma",
  "engineSummary": "Motorun içindeki yağlama yollarını göstermek amacıyla temin ettiğim motor bloğunun kesim sürecini organize ederek yağlama kanallarını açığa çıkardım.",
  "engineDetail": "Motor bloğunun teminini, kesimi yapacak atölyenin bulunmasını ve kesim işleminin yaptırılmasını üstlendim. Raporun hazırlanmasına ve gözden geçirilmesine katkı sağladım. Proje arkadaşım rapor hazırlığına ve bütçeye destek verdi.",
  "engineResult": "Sonuç: Motor içindeki yağlama kanallarını doğrudan gözlemlemeye ve yağlama sistemini anlatmaya yönelik fiziksel bir kesit örneği.",
  "engineAlt": "Yağlama kanallarını açığa çıkarmak amacıyla kesilmiş motor bloğunun atölye fotoğrafı",
  "engineCaption": "Kesim sonrası motor bloğu; yağlama kanallarını incelemek için hazırlanan fiziksel örnek.",
  "details": "Süreç ve katkım",
  "openImage": "Görseli tam boyutta aç",
  "viewWork": "Çalışmayı incele",
  "otherTitle": "Diğer çalışmalar",
  "gearTitle": "Şanzıman muhafazası modelleme",
  "gearType": "6 kişilik ekip projesi · CATIA V5",
  "gearSummary": "Şanzıman muhafazasını oluşturan iki parçanın ölçülerini alıp CAD modellerini hazırladım. Proje raporunun yazımına ve montaj modelinin oluşturulmasına destek verdim.",
  "printTitle": "3D baskıya yönelik özel parçalar",
  "printSummary": "Alan ve montaj ölçülerine göre CAD parça tasarımı ve PLA ile prototipleme çalışmaları.",
  "appTitle": "Flutter mobil uygulamaları",
  "appSummary": "Android ve iOS için Flutter ve Dart ile bağımsız mobil uygulamalar üzerinde çalışıyorum.",
  "inProgress": "Geliştirme aşamasında",
  "more": "Tüm projeler",
  "formNote": "Bu form e-posta uygulamanızda bir taslak açar; gönderimi oradan tamamlayın. E-posta uygulamanız açılmazsa adresimi kopyalayarak mesajınızı gönderebilirsiniz.",
  "draftOpened": "E-posta uygulamanız açıldıysa gönderimi oradan tamamlayın. Mesajınız bu sayfadan gönderilmedi."
};
TRANSLATIONS.en.work = {
  "title": "Projects & Work",
  "subtitle": "Modeling and inspection projects based on real components, with my responsibilities and the outcome of each study.",
  "homeTitle": "Selected engineering work",
  "homeSubtitle": "A CAD assembly measured from a real shock absorber, and an engine block section that reveals its oil passages.",
  "shockTitle": "Shock absorber measurement and CAD assembly",
  "shockType": "Individual semester project",
  "shockSummary": "I sourced a shock absorber from an automotive workshop, measured its components, modeled them in CATIA and created the assembly.",
  "shockDetail": "I completed the measurement, part modeling, assembly and report independently as a Vehicle Technology course project. The report also explained the purpose and operating principle of the shock absorber.",
  "shockResult": "Outcome: CAD part models and an assembly based on measurements of a real component, together with a report on its operation.",
  "shockAlt": "CATIA shock absorber assembly modeled from measurements of a real component",
  "treeAlt": "CATIA product tree showing the shock absorber components and assembly constraints",
  "treeCaption": "Product tree showing individual components and assembly constraints.",
  "engineTitle": "Investigating oil passages in an engine block",
  "engineType": "Graduation project · Team of two",
  "engineSummary": "I sourced an engine block and organized its sectioning to expose the oil passages and demonstrate the lubrication paths inside the engine.",
  "engineDetail": "I sourced the engine block, found a workshop and coordinated the cutting work. I also contributed to preparing and reviewing the report. My project partner supported report preparation and the project budget.",
  "engineResult": "Outcome: A physical engine block section for observing oil passages and explaining the lubrication system.",
  "engineAlt": "Workshop photograph of an engine block sectioned to expose its oil passages",
  "engineCaption": "The engine block after sectioning, prepared as a physical example for examining oil passages.",
  "details": "Process and my contribution",
  "openImage": "Open full-size image",
  "viewWork": "Explore this project",
  "otherTitle": "Other work",
  "gearTitle": "Transmission housing modeling",
  "gearType": "Team of six · CATIA V5",
  "gearSummary": "I measured and modeled the two parts of the transmission housing. I also contributed to the project report and assisted with the assembly model.",
  "printTitle": "Custom parts for 3D printing",
  "printSummary": "CAD part design around space and fit requirements, followed by prototyping in PLA.",
  "appTitle": "Flutter mobile applications",
  "appSummary": "I am developing independent mobile applications for Android and iOS with Flutter and Dart.",
  "inProgress": "In development",
  "more": "All projects",
  "formNote": "This form opens a draft in your email app; complete sending there. If no email app opens, copy my address and send your message from your preferred email service.",
  "draftOpened": "If your email app opened, complete sending there. Your message was not sent from this page."
};

// Mühendislik Yaklaşımı & Vizyon Özeti (Ana Sayfa İçeriği)
TRANSLATIONS.tr.vision = {
  badge: "Mühendislik Yaklaşımı",
  title: "Ölçümden Modele, Tasarımdan Koda",
  subtitle: "Otomotiv mühendisliği titizliğini modern yazılım vizyonuyla birleştiren çalışma felsefem ve temel odak alanlarım.",
  card1Tag: "CATIA V5 · Parametrik",
  card1Title: "CAD & Parça Hassasiyeti",
  card1Desc: "Atölye ve sanayi ortamında kumpas ve mikrometre ile fiziksel ölçüm; CATIA V5'te hassas parça modelleme, yüzey işleme ve ürün ağacı montaj ilişkileri.",
  card1Btn: "Amortisör CAD İncele",
  card2Tag: "İmalat & 3D Baskı",
  card2Title: "İmalat & Fiziksel İnceleme",
  card2Desc: "Motor bloğu kesim süreçleri, yağlama kanallarının doğrudan analizi, talaşlı imalat yöntemleri ve PLA malzeme ile fonksiyonel 3D baskı prototipleri.",
  card2Btn: "Motor Bloğu Kesitini Gör",
  card3Tag: "Flutter & Web Mimarisi",
  card3Title: "Yazılım & Bağımsız Geliştirme",
  card3Desc: "Mühendislik analitiğini dijital dünyaya taşıyan Flutter & Dart mobil uygulamaları, veritabanı şemaları, temiz mimari ve modern web arayüzleri.",
  card3Btn: "Yazılım Yeteneklerini Gör",
  viewAllProjects: "Tüm Projeleri İncele",
  viewExperience: "Kariyer Çizelgesi",
  viewContact: "İletişime Geç"
};

TRANSLATIONS.en.vision = {
  badge: "Engineering Approach",
  title: "From Measurement to Model, From Design to Code",
  subtitle: "My working principles and focus areas bridging automotive engineering rigor with modern software craft.",
  card1Tag: "CATIA V5 · Parametric",
  card1Title: "CAD & Dimensional Precision",
  card1Desc: "Physical measurements with calipers and micrometers in workshop settings; high-precision part modeling, surface drafting, and product tree assembly in CATIA V5.",
  card1Btn: "Explore Shock CAD",
  card2Tag: "Manufacturing & 3D Print",
  card2Title: "Manufacturing & Physical Inspection",
  card2Desc: "Engine block sectioning, direct inspection of oil lubrication passages, machining methods, and functional 3D-printed PLA prototyping.",
  card2Btn: "View Engine Section",
  card3Tag: "Flutter & Web Architecture",
  card3Title: "Software & Indie Development",
  card3Desc: "Bringing engineering problem-solving to digital products: mobile apps built with Flutter & Dart, relational schemas, clean code, and modern web architectures.",
  card3Btn: "View Software Skills",
  viewAllProjects: "All Engineering Projects",
  viewExperience: "Career Timeline",
  viewContact: "Get in Touch"
};

let currentLang = "tr";
let typewriterTimeout = null;

// 2. SAYFA YÜKLENDİĞİNDE BAŞLATMA
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initNavigation();
  initScrollEffects();
  initSkillFilters();
  initContactForm();
  initCopyButtons();
  initFooterYear();
  initPageTransitions();
});

/* ==========================================================================
   3. ÇOKLU DİL YÖNETİMİ (TR / EN)
   ========================================================================== */
function initLanguage() {
  const langToggleBtn = document.getElementById("lang-toggle");
  const savedLang = localStorage.getItem("preferred_lang");

  if (savedLang && (savedLang === "tr" || savedLang === "en")) {
    currentLang = savedLang;
  } else {
    // Cihaz dili tespiti:
    // Cihaz dili Türkçe ise veya algılanamıyorsa -> Türkçe
    // Türkçe dışında herhangi bir dil algılanırsa -> İngilizce
    const deviceLang = (navigator.language || navigator.userLanguage || "").toLowerCase().trim();

    if (!deviceLang || deviceLang.startsWith("tr")) {
      currentLang = "tr";
    } else {
      currentLang = "en";
    }
  }

  setLanguage(currentLang);

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      const nextLang = currentLang === "tr" ? "en" : "tr";
      setLanguage(nextLang);
    });
  }
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];
  if (!t) return;

  // Sayfa başlığını belirle
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  let pageKey = "home";
  if (currentPath.includes("about")) pageKey = "about";
  else if (currentPath.includes("skills")) pageKey = "skills";
  else if (currentPath.includes("experience")) pageKey = "experience";
  else if (currentPath.includes("projects")) pageKey = "projects";
  else if (currentPath.includes("contact")) pageKey = "contact";

  if (t.titles[pageKey]) {
    document.title = t.titles[pageKey];
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.meta && t.meta.desc) {
    metaDesc.setAttribute("content", pageKey === "projects" ? t.work.subtitle : t.meta.desc);
  }

  // Dil Rozetleri
  const trBadge = document.getElementById("lang-tr-badge");
  const enBadge = document.getElementById("lang-en-badge");
  if (trBadge && enBadge) {
    if (lang === "tr") {
      trBadge.className = "lang-active";
      enBadge.className = "lang-inactive";
    } else {
      trBadge.className = "lang-inactive";
      enBadge.className = "lang-active";
    }
  }

  // 1. data-i18n İle İşaretlenen Tüm Öğeleri Güncelle
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = getNestedValue(t, key);
    if (val !== undefined && val !== null) {
      if (el.getAttribute("data-i18n-html") === "true") {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
  });

  // 2. data-i18n-placeholder İle İşaretlenen Giriş Kutularını Güncelle
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = getNestedValue(t, key);
    if (val !== undefined && val !== null) {
      el.setAttribute("placeholder", val);
    }
  });

  // 3. data-i18n-title İle İşaretlenen Buton İpuçlarını Güncelle
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    const val = getNestedValue(t, key);
    if (val !== undefined && val !== null) {
      el.setAttribute("title", val);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const value = getNestedValue(t, el.getAttribute("data-i18n-alt"));
    if (value) el.alt = value;
  });

  // 4. CV İndirme Butonu Bağlantısı
  const cvBtn = document.getElementById("download-cv-btn");
  if (cvBtn && t.hero && t.hero.cvFile) {
    cvBtn.setAttribute("href", t.hero.cvFile);
    cvBtn.setAttribute("download", t.hero.cvFile);
    cvBtn.setAttribute("title", t.hero.cvBtn);
  }

  // 5. Daktilo Efektini Yeni Dile Göre Yeniden Başlat (Eğer sayfada varsa)
  if (document.getElementById("typewriter-text") && t.hero && t.hero.roles) {
    startTypewriter(t.hero.roles);
  }
}

// İç içe anahtarları ("about.heading", "skills.levels.advanced" vb.) güvenle çöz
function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
}

/* ==========================================================================
   4. TEMA YÖNETİMİ (Koyu / Açık CAD Teması)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const currentTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");
  setTheme(currentTheme);

  themeToggleBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = activeTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    const toastMsg = newTheme === "dark" 
      ? TRANSLATIONS[currentLang].toast.themeDark 
      : TRANSLATIONS[currentLang].toast.themeLight;
    showToast(toastMsg);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

/* ==========================================================================
   5. DİNAMİK YAZI EFEKTİ (Typewriter)
   ========================================================================== */
let typewriterRoleIndex = 0;
let typewriterCharIndex = 0;
let typewriterIsDeleting = false;

function startTypewriter(roles) {
  if (typewriterTimeout) clearTimeout(typewriterTimeout);
  typewriterRoleIndex = 0;
  typewriterCharIndex = 0;
  typewriterIsDeleting = false;

  const typewriterElem = document.getElementById("typewriter-text");
  if (!typewriterElem) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    typewriterElem.textContent = roles[0];
    return;
  }
  typewriterElem.textContent = "";

  function type() {
    const currentRole = roles[typewriterRoleIndex % roles.length];

    if (typewriterIsDeleting) {
      typewriterElem.textContent = currentRole.substring(0, typewriterCharIndex - 1);
      typewriterCharIndex--;
    } else {
      typewriterElem.textContent = currentRole.substring(0, typewriterCharIndex + 1);
      typewriterCharIndex++;
    }

    let speed = typewriterIsDeleting ? 40 : 80;

    if (!typewriterIsDeleting && typewriterCharIndex === currentRole.length) {
      speed = 1800;
      typewriterIsDeleting = true;
    } else if (typewriterIsDeleting && typewriterCharIndex === 0) {
      typewriterIsDeleting = false;
      typewriterRoleIndex = (typewriterRoleIndex + 1) % roles.length;
      speed = 400;
    }

    typewriterTimeout = setTimeout(type, speed);
  }

  type();
}

/* ==========================================================================
   6. NAVİGASYON & ÇOKLU SAYFA AKTİF BAĞLANTI
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (mobileToggle && navMenu) {
    const setMenuOpen = (open) => {
      navMenu.classList.toggle("open", open);
      mobileToggle.setAttribute("aria-expanded", String(open));
    };
    mobileToggle.addEventListener("click", () => setMenuOpen(!navMenu.classList.contains("open")));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navMenu.classList.contains("open")) {
        setMenuOpen(false);
        mobileToggle.focus();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        setMenuOpen(false);
      }
    });
  }

  // Çoklu sayfa: Bulunulan sayfayı tespit et ve nav linkini .active yap
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    link.classList.remove("active");
    if (href === currentPath || (currentPath === "" && href === "index.html") || (currentPath === "index.html" && href === "index.html")) {
      link.classList.add("active");
    }
  });
}

/* ==========================================================================
   7. SCROLL EFEKTLERİ & BACK TO TOP
   ========================================================================== */
function initScrollEffects() {
  const progressBar = document.getElementById("scroll-progress");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${currentProgress}%`;
    }

    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ==========================================================================
   8. YETENEKLER FİLTRELEME (Skills Sayfası)
   ========================================================================== */
function initSkillFilters() {
  const tabs = document.querySelectorAll("#skill-filter-tabs .filter-tab");
  const cards = document.querySelectorAll(".skill-card");
  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");

      cards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* ==========================================================================
   9. İLETİŞİM FORMU DOĞRULAMA & GÖNDERİM (Contact Sayfası)
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    const isEn = currentLang === "en";

    // İsim
    if (!nameInput.value.trim()) {
      nameError.textContent = isEn ? "Please enter your name." : "Lütfen adınızı ve soyadınızı giriniz.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // E-posta
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = isEn ? "Please enter your email." : "Lütfen e-posta adresinizi giriniz.";
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = isEn ? "Please enter a valid email address." : "Lütfen geçerli bir e-posta adresi yazınız.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Mesaj
    if (!messageInput.value.trim()) {
      messageError.textContent = isEn ? "Please write your message." : "Lütfen mesajınızı yazınız.";
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = isEn ? "Message must be at least 10 characters." : "Mesajınız en az 10 karakter olmalıdır.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    if (!isValid) return;

    const subject = document.getElementById("subject").value.trim() || (isEn ? "Portfolio inquiry" : "Portföy üzerinden iletişim");
    const body = [messageInput.value.trim(), "", nameInput.value.trim(), emailInput.value.trim()].join("\r\n");
    window.location.href = "mailto:halilgoktas0@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    showToast(TRANSLATIONS[currentLang].work.draftOpened);
  });
}

/* ==========================================================================
   10. PANOYA KOPYALAMA (E-posta & Telefon)
   ========================================================================== */
function initCopyButtons() {
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const emailText = document.getElementById("email-address-text");

  if (copyEmailBtn && emailText) {
    copyEmailBtn.addEventListener("click", () => {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email).then(() => {
        showToast(TRANSLATIONS[currentLang].toast.emailCopied);
        updateTooltip(copyEmailBtn, TRANSLATIONS[currentLang].contact.copiedTooltip);
      }).catch(() => {
        showToast(TRANSLATIONS[currentLang].toast.copyFailed);
      });
    });
  }

  const copyPhoneBtn = document.getElementById("copy-phone-btn");
  const phoneText = document.getElementById("phone-number-text");

  if (copyPhoneBtn && phoneText) {
    copyPhoneBtn.addEventListener("click", () => {
      const phone = phoneText.textContent.trim();
      navigator.clipboard.writeText(phone).then(() => {
        showToast(TRANSLATIONS[currentLang].toast.phoneCopied);
        updateTooltip(copyPhoneBtn, TRANSLATIONS[currentLang].contact.copiedTooltip);
      }).catch(() => {
        showToast(TRANSLATIONS[currentLang].toast.copyFailed);
      });
    });
  }
}

function updateTooltip(btn, text) {
  const tooltip = btn.querySelector(".copy-tooltip");
  if (!tooltip) return;
  const original = tooltip.textContent;
  tooltip.textContent = text;
  setTimeout(() => {
    tooltip.textContent = TRANSLATIONS[currentLang].contact.copyTooltip;
  }, 2000);
}

/* ==========================================================================
   11. PROJE MODAL PENCERESİ (Projects Sayfası)
   ========================================================================== */
/* ==========================================================================
   12. TOAST BİLDİRİMİ
   ========================================================================== */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toast-message");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.remove("hidden");

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 3200);
}

/* ==========================================================================
   13. FOOTER YIL BİLGİSİ
   ========================================================================== */
function initFooterYear() {
  const yearElem = document.getElementById("current-year");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   14. SAYFALAR ARASI YUMUŞAK GEÇİŞ (Page Transitions)
   ========================================================================== */
function initPageTransitions() {
  let isNavigating = false;

  document.addEventListener("click", (e) => {
    // Tıklanan elemanın 'a' ebeveynini yakala
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Harici linkler, indirmeler, ankorlar veya klavye kombinasyonlarını atla
    if (
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#") ||
      href.startsWith("javascript:") ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0
    ) {
      return;
    }

    // Yalnızca .html sayfaları veya kök bağlantılar için
    const isHtmlPage = href.endsWith(".html") || href === "/" || (!href.includes(":") && !href.startsWith("//"));
    if (!isHtmlPage) return;

    // Aynı sayfaya tıklanmışsa gereksiz işlem yapma
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    if (href === currentPath) return;

    if (isNavigating) return;
    isNavigating = true;

    e.preventDefault();

    // Üstteki ilerleme çubuğunu doldurarak anlık geri bildirim ver
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      progressBar.style.transition = "width 0.28s cubic-bezier(0.22, 1, 0.36, 1)";
      progressBar.style.width = "100%";
    }

    // Mevcut sayfa içeriğini hafifçe yukarı kaydırıp söndür
    document.body.classList.add("page-is-leaving");

    setTimeout(() => {
      window.location.href = href;
    }, 280);
  });

  // Tarayıcı İleri/Geri (BFCache) durumlarında durumu sıfırla
  window.addEventListener("pageshow", () => {
    isNavigating = false;
    document.body.classList.remove("page-is-leaving");
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      progressBar.style.transition = "";
    }
  });
}

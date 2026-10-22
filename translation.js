/**
 * Bilingual Translation Dictionary (English & Lao)
 * Designed for SengKueVang BLONGMAI (huevangxp) Portfolio
 */

const translations = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navTerminal: "Terminal",
    navSkills: "Skills",
    navExperience: "Experience",
    navProjects: "Projects",
    navGithub: "GitHub Stats",
    navContact: "Contact",

    // Hero Section
    heroGreeting: "Sabaidee! 🙏 Welcome to my profile, I'm",
    heroName: "SengKueVang BLONGMAI",
    heroHandle: "@huevangxp",
    heroSubtitle: "Full-Stack Developer & UI/UX Designer based in Vientiane, Laos. Building elegant, scalable web applications and enterprise banking solutions.",
    heroCtaExplore: "Explore Work",
    heroCtaTerminal: "Launch CLI Terminal",
    heroCtaContact: "Get In Touch",
    
    // Status badges
    badgeLocation: "Vientiane, Laos 🇱🇦",
    badgeRole: "Banking Systems & Full-Stack",
    badgeRepos: "170+ Public Repos",
    badgeOpen: "Open to Collaboration",

    // Rotating role titles in Hero
    roleFullStack: "Full-Stack Developer",
    roleUIUX: "UI/UX Designer",
    roleBanking: "Banking Systems Specialist",
    roleMobile: "Mobile App Engineer",
    roleSpiderman: "Code Adventurer 🕷️",

    // About Section
    aboutSectionTitle: "About Me",
    aboutSectionSubtitle: "Crafting digital experiences with precision, modern design, and robust code.",
    aboutText1: "I'm a passionate full-stack developer and designer from Vientiane, Laos 🇱🇦. I specialize in building performant web applications, cross-platform mobile apps, and mission-critical banking architectures.",
    aboutText2: "With over 4+ years of hands-on software development experience across governmental organizations, IT consultancies, and the banking sector, I bridge the gap between aesthetic user interfaces and rock-solid backend infrastructure.",
    aboutLaoQuote: "🇱🇦 ຂ້ອຍເປັນນັກພັດທະນາເວັບ ແລະ ລະບົບຊອບແວ ຈາກນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ. ຍິນດີຮ່ວມມື ແລະ ສ້າງສັນຜົນງານຮ່ວມກັບທຸກຄົນ!",
    aboutNuol: "Bachelor of Website Development",
    aboutNuolDesc: "National University of Laos (2019 – 2023)",
    aboutBanking: "Banking & Financial Solutions",
    aboutBankingDesc: "Freelance & Core Enterprise Systems (2023 – Present)",
    aboutLocation: "Based in Vientiane, Laos",
    aboutLocationDesc: "Available for remote, hybrid & on-site collaborations",
    aboutMotto: "Core Motto",
    aboutMottoDesc: "Keep it simple, make it beautiful.",
    aboutCopyCode: "Copy Code",
    aboutCopied: "Copied!",

    // Terminal Section
    terminalTitle: "Interactive Terminal",
    terminalSubtitle: "Experience my profile through a Unix-style interactive command-line interface.",
    terminalWindowHeader: "seng@vientiane: ~ - zsh",
    terminalHelpTip: "Type 'help' or click any quick command below:",
    terminalAutoPlay: "Auto-Play Demo",
    terminalClear: "Clear Terminal",

    // Skills Section
    skillsTitle: "Tech Stack & Skills",
    skillsSubtitle: "A curated orbit of modern programming languages, frameworks, and tools I use every day.",
    skillsTabAll: "All Technologies",
    skillsTabFrontend: "Frontend & Mobile",
    skillsTabBackend: "Backend & APIs",
    skillsTabDatabase: "Database & Cloud",
    skillsTabTools: "Design & DevOps",

    // Experience Section
    experienceTitle: "Work & Education Timeline",
    experienceSubtitle: "My professional journey from academic graduation to banking infrastructure and freelance engineering.",
    expPresent: "Present",
    
    expRoleFreelance: "Freelance Developer & Banking Sector",
    expTimeFreelance: "2023 – Present",
    expCompanyFreelance: "Financial & Enterprise Sector",
    expDescFreelance: "Engineering secure financial web services, payment integrations, internal administrative dashboards, and handling diverse client requirements with Vue, Node.js, and Python.",

    expRoleLaosIt: "Front-End Developer",
    expTimeLaosIt: "2022 – 2023",
    expCompanyLaosIt: "Laos IT Capital Co., Ltd",
    expDescLaosIt: "Engineered scalable component libraries, partnered with UI/UX designers, optimized application responsiveness, and reduced web load latency by over 40%.",

    expRoleLaiLaoLab: "Full-Stack Developer",
    expTimeLaiLaoLab: "2021 – 2022",
    expCompanyLaiLaoLab: "LaiLaoLab ICT Solution",
    expDescLaiLaoLab: "Developed end-to-end web apps, engineered RESTful APIs, and maintained database architectures for governmental departments and enterprise clients.",

    eduDegree: "Bachelor of Website Development",
    eduTime: "2019 – 2023",
    eduSchool: "National University of Laos (NUOL)",
    eduDesc: "Graduated with comprehensive coursework in software architecture, database management systems, UI/UX aesthetics, and web security protocols.",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsSubtitle: "Selected real-world applications, open-source repositories, and digital platforms.",
    projectsTabAll: "All Projects",
    projectsTabWeb: "Web Applications",
    projectsTabMobile: "Mobile Apps",
    projectsTabBackend: "Backend & AI",
    projectLiveDemo: "Live Demo",
    projectSourceCode: "Source Code",

    // Project cards
    projMeUIPayDesc: "Modern banking & payment UI interface supporting seamless transaction processing, wallet management, and multi-channel settlements.",
    projBookingDesc: "Full-featured apartment and property reservation portal with real-time room availability, interactive maps, and automated booking receipts.",
    projAiServerDesc: "High-throughput asynchronous AI server and automation engine delivering intelligent scripting, document parsing, and inference APIs.",
    projFoodDeliveryDesc: "Cross-platform mobile food ordering & dispatch application with live cart tracking, interactive menus, and restaurant catalogs.",
    projIbookDesc: "Nuxt.js powered digital library & online bookstore with rapid server-side rendering, categorized catalogs, and smooth reader previews.",
    projFlutterCrudDesc: "Complete full-stack architecture demonstrating RESTful backend operations in Node.js connected with reactive Flutter mobile widgets.",

    // GitHub Section
    githubTitle: "GitHub Contributions & Activity",
    githubSubtitle: "Live contribution stats, activity metrics, 3D skyline, and repository data directly from GitHub.",
    githubPublicRepos: "Public Repos",
    githubFollowers: "Followers",
    githubFollowing: "Following",
    githubProfileViews: "Profile Views",
    githubViewOnGithub: "View GitHub Profile",
    githubSkylineTitle: "3D Contribution Skyline",
    githubSkylineRainbow: "Night Rainbow",
    githubSkylineGitblock: "Git Block",
    githubSkylineNight: "Night View",
    githubSkylineGreen: "Green Animate",
    githubSnakeTitle: "Contribution Snake Game",

    // Contact Section
    contactTitle: "Let's Build Something Together",
    contactSubtitle: "Have an exciting project, freelance opportunity, or just want to discuss tech? I'd love to hear from you!",
    contactEmailLabel: "Email Address",
    contactLocationLabel: "Primary Location",
    contactSocialLabel: "Connect Online",
    formName: "Your Full Name",
    formEmail: "Your Email Address",
    formSubject: "Subject / Project Type",
    formMessage: "Tell me about your project or message...",
    formSubmit: "Send Message",
    formSending: "Transmitting Message...",
    formSuccess: "Thank you! Your message has been sent successfully. I will respond to you shortly.",
    formError: "Unable to transmit message. Please contact me directly via email at skvgithub@gmail.com.",

    // Footer
    footerMotto: "Keep it simple, make it beautiful.",
    footerSpider: "With great code comes great responsibility 🕷️",
    footerCopyright: "Designed & Built with ❤️ by SengKueVang BLONGMAI (huevangxp). All rights reserved.",
    backToTop: "Back to Top"
  },

  la: {
    // Navigation
    navHome: "ໜ້າທຳອິດ",
    navAbout: "ກ່ຽວກັບຂ້ອຍ",
    navTerminal: "ຄອນໂຊນ CLI",
    navSkills: "ທັກສະເຕັກໂນໂລຢີ",
    navExperience: "ປະສົບການ & ການສຶກສາ",
    navProjects: "ຜົນງານໂຄງການ",
    navGithub: "ສະຖິຕິ GitHub",
    navContact: "ຕິດຕໍ່",

    // Hero Section
    heroGreeting: "ສະບາຍດີ! 🙏 ຍິນດີຕ້ອນຮັບສູ່ໂປຣໄຟລ໌ຂອງຂ້ອຍ, ຂ້ອຍແມ່ນ",
    heroName: "SengKueVang BLONGMAI",
    heroHandle: "@huevangxp",
    heroSubtitle: "ນັກພັດທະນາ Full-Stack & ນັກອອກແບບ UI/UX ຈາກນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ. ຊ່ຽວຊານການສ້າງລະບົບເວັບແອັບພລິເຄຊັນ ແລະ ລະບົບທະນາຄານທີ່ທັນສະໄໝ.",
    heroCtaExplore: "ເບິ່ງຜົນງານ",
    heroCtaTerminal: "ເປີດໃຊ້ Terminal",
    heroCtaContact: "ຕິດຕໍ່ຂ້ອຍ",
    
    // Status badges
    badgeLocation: "ນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ 🇱🇦",
    badgeRole: "ລະບົບທະນາຄານ & Full-Stack",
    badgeRepos: "170+ Repositories ສາທາລະນະ",
    badgeOpen: "ພ້ອມຮ່ວມງານ & ຮ່ວມໂຄງການ",

    // Rotating role titles in Hero
    roleFullStack: "ນັກພັດທະນາ Full-Stack",
    roleUIUX: "ນັກອອກແບບ UI / UX",
    roleBanking: "ຜູ້ຊ່ຽວຊານລະບົບທະນາຄານ",
    roleMobile: "ວິສະວະກອນໂມບາຍແອັບ",
    roleSpiderman: "ນັກຂຽນໂຄ້ດ Spiderman 🕷️",

    // About Section
    aboutSectionTitle: "ກ່ຽວກັບຂ້ອຍ",
    aboutSectionSubtitle: "ສ້າງສັນປະສົບການດິຈິທອນດ້ວຍຄວາມລະອຽດ, ດີໄຊທັນສະໄໝ ແລະ ໂຄງສ້າງລະບົບທີ່ໝັ້ນຄົງ.",
    aboutText1: "ຂ້ອຍເປັນນັກພັດທະນາ Full-Stack ແລະ ນັກອອກແບບ ຈາກນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ 🇱🇦. ຊ່ຽວຊານດ້ານການພັດທະນາເວັບແອັບພລິເຄຊັນ, ແອັບມືຖື, ແລະ ລະບົບທະນາຄານທີ່ມີຄວາມປອດໄພສູງ.",
    aboutText2: "ດ້ວຍປະສົບການຫຼາຍກວ່າ 4+ ປີໃນການພັດທະນາຊອບແວໃຫ້ແກ່ພາກລັດ, ບໍລິສັດໄອທີ ແລະ ພາກສ່ວນທະນາຄານ, ຂ້ອຍມຸ່ງໝັ້ນໃນການເຊື່ອມຕໍ່ລະຫວ່າງໜ້າຕາທີ່ສວຍງາມ ແລະ ລະບົບຫຼັງບ້ານທີ່ເຂັ້ມແຂງ.",
    aboutLaoQuote: "🇱🇦 ຂ້ອຍເປັນນັກພັດທະນາເວັບ ແລະ ລະບົບຊອບແວ ຈາກນະຄອນຫຼວງວຽງຈັນ, ສປປ ລາວ. ຍິນດີຮ່ວມມື ແລະ ສ້າງສັນຜົນງານຮ່ວມກັບທຸກຄົນ!",
    aboutNuol: "ປະລິນຍາຕີ ສາຂາພັດທະນາເວັບໄຊ",
    aboutNuolDesc: "ມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ (2019 – 2023)",
    aboutBanking: "ລະບົບທະນາຄານ & ການເງິນ",
    aboutBankingDesc: "ນັກພັດທະນາອິດສະຫຼະ & ລະບົບຫຼັກ (2023 – ປະຈຸບັນ)",
    aboutLocation: "ນະຄອນຫຼວງວຽງຈັນ, ລາວ",
    aboutLocationDesc: "ພ້ອມເຮັດວຽກທັງ Remote, Hybrid ແລະ On-site",
    aboutMotto: "ຄະຕິປະຈຳໃຈ",
    aboutMottoDesc: "Keep it simple, make it beautiful. (ເຮັດໃຫ້ລຽບງ່າຍ, ສ້າງໃຫ້ສວຍງາມ)",
    aboutCopyCode: "ຄັດລອກໂຄ້ດ",
    aboutCopied: "ຄັດລອກແລ້ວ!",

    // Terminal Section
    terminalTitle: "ຄອນໂຊນ CLI ແບບໂຕ້ຕອບໄດ້",
    terminalSubtitle: "ສຳຜັດກັບໂປຣໄຟລ໌ຂອງຂ້ອຍຜ່ານໜ້າຈໍຄຳສັ່ງ Terminal ແບບ Unix.",
    terminalWindowHeader: "seng@vientiane: ~ - zsh",
    terminalHelpTip: "ພິມ 'help' ຫຼື ກົດປຸ່ມຄຳສັ່ງດ່ວນດ້ານລຸ່ມ:",
    terminalAutoPlay: "ສະແດງອັດຕະໂນມັດ",
    terminalClear: "ລ້າງໜ້າຈໍ",

    // Skills Section
    skillsTitle: "ທັກສະ & ເຕັກໂນໂລຢີ",
    skillsSubtitle: "ວົງໂຄຈອນເຕັກໂນໂລຢີ, ພາສາໂປຣແກຣມ ແລະ ເຄື່ອງມືທີ່ຂ້ອຍນຳໃຊ້ໃນທຸກໆມື້.",
    skillsTabAll: "ທຸກເຕັກໂນໂລຢີ",
    skillsTabFrontend: "Frontend & Mobile",
    skillsTabBackend: "Backend & APIs",
    skillsTabDatabase: "Database & Cloud",
    skillsTabTools: "Design & DevOps",

    // Experience Section
    experienceTitle: "ເສັ້ນທາງປະສົບການ & ການສຶກສາ",
    experienceSubtitle: "ເສັ້ນທາງການເຮັດວຽກຕັ້ງແຕ່ຮຽນຈົບ ຈົນເຖິງການພັດທະນາລະບົບທະນາຄານ ແລະ ໂຄງການອິດສະຫຼະ.",
    expPresent: "ປະຈຸບັນ",
    
    expRoleFreelance: "ນັກພັດທະນາອິດສະຫຼະ & ລະບົບທະນາຄານ",
    expTimeFreelance: "2023 – ປະຈຸບັນ",
    expCompanyFreelance: "ຂະແໜງການເງິນ & ທະນາຄານ",
    expDescFreelance: "ອອກແບບ ແລະ ພັດທະນາລະບົບການເງິນ, ການເຊື່ອມຕໍ່ການຊຳລະເງິນ, Dashboard ບໍລິຫານພາຍໃນ ແລະ ຕອບສະໜອງຄວາມຕ້ອງການຂອງລູກຄ້າດ້ວຍ Vue, Node.js, ແລະ Python.",

    expRoleLaosIt: "ນັກພັດທະນາ Front-End",
    expTimeLaosIt: "2022 – 2023",
    expCompanyLaosIt: "ບໍລິສັດ Laos IT Capital",
    expDescLaosIt: "ສ້າງ Component ທີ່ສາມາດນຳໃຊ້ຄືນໄດ້, ຮ່ວມມືກັບທີມ UI/UX, ປັບປຸງຄວາມໄວໃນການໂຫຼດ ແລະ ປະສິດທິພາບຂອງແອັບພລິເຄຊັນ.",

    expRoleLaiLaoLab: "ນັກພັດທະນາ Full-Stack",
    expTimeLaiLaoLab: "2021 – 2022",
    expCompanyLaiLaoLab: "LaiLaoLab ICT Solution",
    expDescLaiLaoLab: "ພັດທະນາເວັບແອັບຄົບວົງຈອນ, ສ້າງ RESTful APIs ແລະ ຄຸ້ມຄອງຖານຂໍ້ມູນສຳລັບອົງກອນພາກລັດ ແລະ ລູກຄ້າວິສາຫະກິດ.",

    eduDegree: "ປະລິນຍາຕີ ສາຂາພັດທະນາເວັບໄຊ",
    eduTime: "2019 – 2023",
    eduSchool: "ມະຫາວິທະຍາໄລແຫ່ງຊາດລາວ (ມຊ)",
    eduDesc: "ສຳເລັດການສຶກສາຫຼັກສູດວິສະວະກຳເວັບ, ຖານຂໍ້ມູນ, ຫຼັກການອອກແບບ UI/UX ແລະ ຄວາມປອດໄພຂອງລະບົບ.",

    // Projects Section
    projectsTitle: "ຜົນງານໂຄງການທີ່ໂດດເດັ່ນ",
    projectsSubtitle: "ໂຄງການຕົວຈິງ, ລະບົບ Open-Source ແລະ ແອັບພລິເຄຊັນທີ່ໄດ້ພັດທະນາຂຶ້ນ.",
    projectsTabAll: "ທຸກໂຄງການ",
    projectsTabWeb: "ເວັບແອັບພລິເຄຊັນ",
    projectsTabMobile: "ແອັບມືຖື",
    projectsTabBackend: "Backend & AI",
    projectLiveDemo: "ທົດລອງໃຊ້",
    projectSourceCode: "ເບິ່ງໂຄ້ດ",

    // Project cards
    projMeUIPayDesc: "ລະບົບໜ້າຕາ UI ສຳລັບການຊຳລະເງິນ ແລະ ທະນາຄານ ຮອງຮັບການໂອນເງິນ, ກະເປົາເງິນດິຈິທອນ ແລະ ການຈັດການທຸລະກຳ.",
    projBookingDesc: "ເວັບໄຊຈອງຫ້ອງພັກ ແລະ ອະສັງຫາລິມະຊັບ ພ້ອມລະບົບກວດສອບຫ້ອງວ່າງແບບ Real-time, ແຜນທີ່ໂຕ້ຕອບ ແລະ ໃບບິນອັດຕະໂນມັດ.",
    projAiServerDesc: "ລະບົບເຊີບເວີ AI ແລະ ລະບົບອັດຕະໂນມັດທີ່ເຮັດວຽກດ້ວຍ Python ຮອງຮັບການປະມວນຜົນເອກະສານ ແລະ APIs ຄວາມໄວສູງ.",
    projFoodDeliveryDesc: "ແອັບພລິເຄຊັນສັ່ງອາຫານເທິງມືຖືດ້ວຍ Flutter ພ້ອມລະບົບຕິດຕາມລົດສົ່ງ, ເມນູອາຫານ ແລະ ລະບົບກະຕ່າສິນຄ້າ.",
    projIbookDesc: "ຮ້ານໜັງສືດິຈິທອນ ແລະ ຫ້ອງສະໝຸດອອນລາຍທີ່ຂັບເຄື່ອນດ້ວຍ Nuxt.js & Vue 3 ໂຫຼດໄວ ແລະ ອ່ານຕົວຢ່າງໄດ້ທັນທີ.",
    projFlutterCrudDesc: "ໂຄງສ້າງລະບົບ Full-Stack ເຊື່ອມຕໍ່ຖານຂໍ້ມູນ Node.js ກັບ UI ຂອງ Flutter ແບບຄົບຖ້ວນ (Create, Read, Update, Delete).",

    // GitHub Section
    githubTitle: "ການເຄື່ອນໄຫວ & ສະຖິຕິ GitHub",
    githubSubtitle: "ຂໍ້ມູນສະຖິຕິການຂຽນໂຄ້ດ, 3D Skyline ແລະ ການປະກອບສ່ວນໂດຍກົງຈາກ GitHub.",
    githubPublicRepos: "Repos ສາທາລະນະ",
    githubFollowers: "ຜູ້ຕິດຕາມ",
    githubFollowing: "ກຳລັງຕິດຕາມ",
    githubProfileViews: "ຍອດເຂົ້າຊົມ",
    githubViewOnGithub: "ເບິ່ງໃນ GitHub",
    githubSkylineTitle: "ເສັ້ນຂອບຟ້າ 3D Skyline",
    githubSkylineRainbow: "ສີສາຍຮຸ້ງກາງຄືນ",
    githubSkylineGitblock: "Git Block",
    githubSkylineNight: "Night View",
    githubSkylineGreen: "ສີຂຽວເຄື່ອນໄຫວ",
    githubSnakeTitle: "ເກມງູກິນ Commit (Snake Animation)",

    // Contact Section
    contactTitle: "ມາຮ່ວມງານ ແລະ ສ້າງສັນນຳກັນ",
    contactSubtitle: "ມີໂຄງການໃໝ່, ວຽກ Freelance ຫຼື ຢາກລົມເລື່ອງເຕັກໂນໂລຢີ? ສົ່ງຂໍ້ຄວາມຫາຂ້ອຍໄດ້ເລີຍ!",
    contactEmailLabel: "ອີເມວຕິດຕໍ່",
    contactLocationLabel: "ສະຖານທີ່ຢູ່",
    contactSocialLabel: "ຊ່ອງທາງອອນລາຍ",
    formName: "ຊື່ ແລະ ນາມສະກຸນຂອງທ່ານ",
    formEmail: "ອີເມວຂອງທ່ານ",
    formSubject: "ຫົວຂໍ້ / ປະເພດໂຄງການ",
    formMessage: "ລາຍລະອຽດໂຄງການ ຫຼື ຂໍ້ຄວາມ...",
    formSubmit: "ສົ່ງຂໍ້ຄວາມ",
    formSending: "ກຳລັງສົ່ງ...",
    formSuccess: "ຂອບໃຈຫຼາຍໆ! ຂໍ້ຄວາມຂອງທ່ານຖືກສົ່ງຮຽບຮ້ອຍແລ້ວ. ຂ້ອຍຈະຕິດຕໍ່ກັບຫາທ່ານໂດຍໄວທີ່ສຸດ.",
    formError: "ເກີດຂໍ້ຜິດພາດໃນການສົ່ງ. ກະລຸນາຕິດຕໍ່ຫາອີເມວໂດຍກົງທີ່ skvgithub@gmail.com.",

    // Footer
    footerMotto: "Keep it simple, make it beautiful.",
    footerSpider: "ດ້ວຍໂຄ້ດທີ່ຍິ່ງໃຫຍ່ ມານຳດ້ວຍຄວາມຮັບຜິດຊອບອັນໃຫຍ່ຫຼວງ 🕷️",
    footerCopyright: "ອອກແບບ ແລະ ພັດທະນາດ້ວຍ ❤️ ໂດຍ SengKueVang BLONGMAI (huevangxp). ສະຫງວນລິຂະສິດ.",
    backToTop: "ກັບຂຶ້ນເທິງ"
  }
};

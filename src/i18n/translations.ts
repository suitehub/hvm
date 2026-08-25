export type Language = "pt" | "en";

export interface Translations {
  nav: {
    services: string;
    howItWorks: string;
    cases: string;
    about: string;
    faq: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine3: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    diff1: string;
    diff2: string;
    diff3: string;
    imgAlt: string;
    revenueLabel: string;
    revenueValue: string;
    revenueGrowth: string;
    leadsLabel: string;
    leadsValue: string;
    leadsGrowth: string;
    partnersTitle1: string;
    partnersTitle2: string;
    partnersHighlight: string;
  };
  accelerate: {
    title1: string;
    title2: string;
    titleHighlight: string;
    descriptionBold: string;
    descriptionRest: string;
    ctaButton: string;
    statProjects: string;
    statClients: string;
    statAds: string;
    structureTitle: string;
    structureStrategy: string;
    structurePaidTraffic: string;
    structureSocialMedia: string;
    structureWebDesign: string;
    investmentLabel: string;
    investmentPeriod: string;
    roiLabel: string;
    organicGrowthLabel: string;
    organicGrowthPeriod: string;
    imgAlt: string;
  };
  growFast: {
    titleHighlight: string;
    titleRest: string;
    p1: string;
    p2: string;
    p3: string;
    ctaButton: string;
    imgAlt: string;
  };
  services: {
    googleTitle1: string;
    googleTitle2: string;
    googleDesc: string;
    metaTitle1: string;
    metaTitle2: string;
    metaDesc: string;
    designTitle1: string;
    designTitle2: string;
    designDesc: string;
  };
  process: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  testimonials: {
    titleHighlight: string;
    titleRest1: string;
    titleRest2: string;
    ctaButton: string;
    googleReview: string;
    items: Array<{
      name: string;
      role: string;
      text: string;
    }>;
  };
  authority: {
    title1: string;
    titleHighlight: string;
    title3Prefix: string;
    title3Highlight: string;
    description: string;
    statYears: string;
    statRetention: string;
    statInvested: string;
    statYearsVal: string;
    statRetentionVal: string;
    statInvestedVal: string;
    imgAlt: string;
    clientPlaceholders: string[];
  };
  ctaFaq: {
    warningTag: string;
    warningTitle: string;
    warningDesc: string;
    warningCta: string;
    faqTitle: string;
    faqHighlight: string;
    faqItems: Array<{
      q: string;
      a: string;
    }>;
    doubtTitle1: string;
    doubtTitle2: string;
    doubtDesc: string;
    doubtCta: string;
  };
  footer: {
    slogan: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    servicesList: string[];
    contactPhone: string;
    contactEmail: string;
    contactLocation: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      services: "Serviços",
      howItWorks: "Como funciona",
      cases: "Cases",
      about: "Sobre",
      faq: "FAQ",
      ctaButton: "Falar com especialista",
    },
    hero: {
      badge: "Agência de marketing digital",
      titleLine1: "Performance que",
      titleHighlight: "gera crescimento",
      titleLine3: "de verdade",
      description:
        "Estratégias personalizadas, gestão de tráfego e marketing orientado por dados para escalar seu negócio todos os meses.",
      ctaPrimary: "Quero escalar meu negócio",
      ctaSecondary: "Ver cases reais",
      diff1: "Estratégias\npersonalizadas",
      diff2: "Foco em dados\ne resultados",
      diff3: "Acompanhamento\npróximo",
      imgAlt: "Especialista da HVM analisando dashboards de performance em múltiplos monitores",
      revenueLabel: "Faturamento gerado",
      revenueValue: "R$ 1.280.000",
      revenueGrowth: "137% vs. período anterior",
      leadsLabel: "Leads gerados",
      leadsValue: "2.642",
      leadsGrowth: "190% vs. período anterior",
      partnersTitle1: "Estratégia, tráfego e performance.",
      partnersTitle2: "Tudo",
      partnersHighlight: "em um só lugar.",
    },
    accelerate: {
      title1: "O nosso negócio é",
      title2: "Acelerar os seus",
      titleHighlight: "Resultados.",
      descriptionBold:
        "Vamos elaborar o melhor plano de ação para aumentar a sua receita e a do seu negócio,",
      descriptionRest: "no menor tempo possível.",
      ctaButton: "Começar Agora!",
      statProjects: "Projetos",
      statClients: "Clientes",
      statAds: "Em anúncios",
      structureTitle: "Estrutura completa",
      structureStrategy: "Estratégia",
      structurePaidTraffic: "Tráfego Pago",
      structureSocialMedia: "Mídias Sociais",
      structureWebDesign: "Web Design",
      investmentLabel: "Investimento",
      investmentPeriod: "/mês",
      roiLabel: "ROI acompanhado",
      organicGrowthLabel: "Crescimento orgânico",
      organicGrowthPeriod: "últimos 6 meses",
      imgAlt: "Peças de xadrez em vidro azul representando estratégia e crescimento",
    },
    growFast: {
      titleHighlight: "CRESÇA RÁPIDO",
      titleRest: "COM O PODER DA INTERNET.",
      p1: "Se você quer acelerar o crescimento do seu negócio, precisa atrair mais pessoas e ter uma estratégia montada e validada para converter leads em clientes.",
      p2: "Quer saber como o seu negócio pode ganhar visibilidade e aumentar o seu poder de vendas? Fale com um dos nossos especialistas e vamos te apresentar as ideias e o plano de ação mais assertivo para o seu momento.",
      p3: "A HVM está aqui para te ajudar!",
      ctaButton: "Falar com especialista",
      imgAlt: "Notebook e celular exibindo dashboard de performance da HVM",
    },
    services: {
      googleTitle1: "POSICIONAMENTO NAS",
      googleTitle2: "BUSCAS DO GOOGLE.",
      googleDesc:
        "Seja encontrado por quem realmente está buscando pelos seus produtos ou serviços.",
      metaTitle1: "META ADS: FACEBOOK",
      metaTitle2: "& INSTAGRAM.",
      metaDesc:
        "Alcance potenciais clientes, promova seus posts e conquiste mais resultados.",
      designTitle1: "DESIGN & WEB, SOCIAL",
      designTitle2: "MEDIA, BRANDING.",
      designDesc:
        "Sua empresa merece um visual impactante e presença de forma estratégica.",
    },
    process: {
      title: "O QUE A HVM FAZ?",
      step1:
        "Buscamos o melhor cliente para o seu negócio, aquele que de fato lucra mais, que sua empresa tem afinidade.",
      step2:
        "Olhamos diariamente para suas vendas e montamos uma estratégia personalizada para alavancar seu faturamento.",
      step3:
        "Mostramos o seu negócio para tomada de novas decisões, trazendo a previsibilidade viável para os seus momentos.",
      step4:
        "Com base em métricas válidas, técnicas para potencializar e acelerar o crescimento do seu negócio.",
      step5:
        "Planejamento estratégico, gestão de tráfego pago, design, branding, CRO e web em uma só equipe.",
    },
    testimonials: {
      titleHighlight: "O QUE NOSSOS",
      titleRest1: "CLIENTES",
      titleRest2: "ESTÃO FALANDO SOBRE NÓS.",
      ctaButton: "Quero crescer mais",
      googleReview: "Avaliação do Google",
      items: [
        {
          name: "Carlos Eduardo",
          role: "Diretor Comercial • E-commerce",
          text: "A HVM transformou nossa operação de tráfego pago. Em 3 meses multiplicamos o ROAS e atingimos faturamento recorde.",
        },
        {
          name: "Mariana Silveira",
          role: "CEO • Clínica & Saúde",
          text: "Atendimento impecável e foco absoluto em resultados. Nossos agendamentos diários aumentaram em mais de 180%.",
        },
        {
          name: "Rodrigo Mendes",
          role: "Fundador • SaaS B2B",
          text: "Estratégia personalizada de ponta a ponta. A previsibilidade de novos leads qualificados mudou o patamar da empresa.",
        },
        {
          name: "Fernanda Costa",
          role: "Head de Marketing • Varejo",
          text: "Parceria estratégica com relatórios claros e acompanhamento diário. A melhor agência de performance com quem já trabalhamos.",
        },
      ],
    },
    authority: {
      title1: "A HVM É RESPONSÁVEL",
      titleHighlight: "PELO CRESCIMENTO DE",
      title3Prefix: "GRANDES",
      title3Highlight: "NEGÓCIOS",
      description:
        "Essas grandes empresas confiam na HVM devido ao nosso método desenvolvido exclusivamente para performance e receita.",
      statYears: "Anos de operação",
      statRetention: "Retenção de clientes",
      statInvested: "Investimento gerido",
      statYearsVal: "5+",
      statRetentionVal: "96%",
      statInvestedVal: "R$ 5M+",
      imgAlt: "Peças de xadrez rei e rainha em vidro azul iluminado",
      clientPlaceholders: ["[Logo cliente 01]", "[Logo cliente 02]", "[Logo cliente 03]", "[Logo cliente 04]"],
    },
    ctaFaq: {
      warningTag: "ATENÇÃO!",
      warningTitle: "Acelere seu crescimento agora com a HVM",
      warningDesc:
        "Pronto para elevar seu negócio a um novo nível com a HVM? Simplesmente clique no botão abaixo, preencha o formulário e nossa equipe de especialistas fará contato para dar início a sua transformação.",
      warningCta: "Eleve seu Negócio Agora!",
      faqTitle: "Perguntas",
      faqHighlight: "Frequentes",
      faqItems: [
        {
          q: "Por que a HVM é a melhor escolha?",
          a: "Porque unimos estratégia, gestão de tráfego, design e análise de dados em um único time focado em receita e previsibilidade.",
        },
        {
          q: "Como a HVM pode impulsionar minhas vendas?",
          a: "Estruturamos campanhas orientadas por dados, otimizamos o funil de conversão e acompanhamos as métricas diariamente para escalar o que gera resultado.",
        },
        {
          q: "Quais países posso esperar resultados com a HVM?",
          a: "Atendemos negócios no Brasil e operações internacionais, adaptando estratégia, idioma e canais ao mercado de atuação.",
        },
        {
          q: "Como funciona o relatório com a HVM?",
          a: "Você recebe relatórios periódicos com investimento, leads, custo por resultado e faturamento gerado, além de reuniões de acompanhamento.",
        },
        {
          q: "Quais serviços vocês prestam?",
          a: "Gestão de tráfego pago, SEO e posicionamento no Google, mídias sociais, design, web e branding orientado a performance.",
        },
      ],
      doubtTitle1: "Ainda ficou com",
      doubtTitle2: "alguma dúvida?",
      doubtDesc:
        "Chame no WhatsApp, envie sua dúvida e converse direto com um dos nossos especialistas.",
      doubtCta: "Chamar no WhatsApp",
    },
    footer: {
      slogan: "Estratégia, tráfego e performance para escalar o que importa.",
      navTitle: "Navegação",
      servicesTitle: "Serviços",
      contactTitle: "Contato",
      servicesList: [
        "Gestão de Tráfego Pago",
        "Posicionamento no Google",
        "Mídias Sociais",
        "Design & Branding",
        "Web Design",
      ],
      contactPhone: "(11) 96070-5785",
      contactEmail: "[e-mail de contato]",
      contactLocation: "[cidade — estado]",
      copyright: `© ${new Date().getFullYear()} HVM Digital Performance. Desenvolvido com performance.`,
    },
  },
  en: {
    nav: {
      services: "Services",
      howItWorks: "How it works",
      cases: "Case Studies",
      about: "About",
      faq: "FAQ",
      ctaButton: "Talk to a Specialist",
    },
    hero: {
      badge: "Digital Marketing Agency",
      titleLine1: "Performance that",
      titleHighlight: "drives real growth",
      titleLine3: "for your business",
      description:
        "Tailored strategies, paid traffic management, and data-driven marketing engineered to scale your revenue every single month.",
      ctaPrimary: "Scale My Business",
      ctaSecondary: "View Case Studies",
      diff1: "Customized\nStrategies",
      diff2: "Data & Results\nDriven",
      diff3: "Dedicated\nSupport",
      imgAlt: "HVM specialist analyzing multi-screen performance dashboards",
      revenueLabel: "Generated Revenue",
      revenueValue: "$ 1,280,000",
      revenueGrowth: "137% vs. previous period",
      leadsLabel: "Generated Leads",
      leadsValue: "2,642",
      leadsGrowth: "190% vs. previous period",
      partnersTitle1: "Strategy, traffic & performance.",
      partnersTitle2: "Everything",
      partnersHighlight: "in one place.",
    },
    accelerate: {
      title1: "Our business is",
      title2: "Accelerating your",
      titleHighlight: "Results.",
      descriptionBold:
        "We craft the best action plan to maximize your business revenue,",
      descriptionRest: "in the shortest time possible.",
      ctaButton: "Get Started Now!",
      statProjects: "Projects",
      statClients: "Clients",
      statAds: "Ad Spend",
      structureTitle: "Complete Structure",
      structureStrategy: "Strategy",
      structurePaidTraffic: "Paid Traffic",
      structureSocialMedia: "Social Media",
      structureWebDesign: "Web Design",
      investmentLabel: "Investment",
      investmentPeriod: "/mo",
      roiLabel: "Tracked ROI",
      organicGrowthLabel: "Organic Growth",
      organicGrowthPeriod: "last 6 months",
      imgAlt: "Blue glass chess pieces representing strategic marketing and business growth",
    },
    growFast: {
      titleHighlight: "GROW FAST",
      titleRest: "WITH THE POWER OF DIGITAL.",
      p1: "If you want to accelerate your company's growth, you need to attract high-intent audiences and deploy a validated strategy to turn leads into high-ticket clients.",
      p2: "Want to see how your business can gain market authority and increase sales conversion? Talk to one of our growth specialists for a tailored diagnostic and actionable roadmap.",
      p3: "HVM is here to power your scale!",
      ctaButton: "Talk to a Specialist",
      imgAlt: "Laptop and mobile phone displaying HVM performance analytics dashboard",
    },
    services: {
      googleTitle1: "GOOGLE SEARCH &",
      googleTitle2: "ADS POSITIONING.",
      googleDesc:
        "Be discovered by high-intent customers actively searching for your products and services.",
      metaTitle1: "META ADS: FACEBOOK",
      metaTitle2: "& INSTAGRAM.",
      metaDesc:
        "Reach ideal audiences, scale your conversion funnels, and achieve predictable customer acquisition.",
      designTitle1: "DESIGN & WEB, SOCIAL",
      designTitle2: "MEDIA, BRANDING.",
      designDesc:
        "Give your brand an impactful visual identity and strategic presence that commands authority.",
    },
    process: {
      title: "WHAT DOES HVM DO?",
      step1:
        "We identify the ideal high-LTV customer profiles that generate the highest profit margins for your company.",
      step2:
        "We analyze your sales funnel daily and architect customized growth campaigns to boost your bottom line.",
      step3:
        "We provide data clarity for high-impact decision making, bringing predictability to your revenue forecast.",
      step4:
        "Using proven analytical frameworks, we optimize metrics to accelerate sustainable business growth.",
      step5:
        "Strategic planning, paid media execution, creative design, branding, CRO, and web development in one synchronized team.",
    },
    testimonials: {
      titleHighlight: "WHAT OUR",
      titleRest1: "CLIENTS",
      titleRest2: "ARE SAYING ABOUT US.",
      ctaButton: "I Want to Grow More",
      googleReview: "Google Verified Review",
      items: [
        {
          name: "Edward Miller",
          role: "Commercial Director • E-commerce",
          text: "HVM transformed our paid traffic operation. Within 3 months we multiplied our ROAS and achieved all-time record revenue.",
        },
        {
          name: "Mary Silverstone",
          role: "CEO • Health & Medical Group",
          text: "Flawless support and absolute focus on business outcomes. Our daily client bookings jumped by more than 180%.",
        },
        {
          name: "Roger Bennett",
          role: "Founder • B2B SaaS",
          text: "End-to-end custom strategy with incredible precision. The flow of qualified enterprise leads elevated our business to the next tier.",
        },
        {
          name: "Rachel Costa",
          role: "Head of Marketing • Retail Brands",
          text: "A true strategic growth partner with transparent reporting and proactive execution. The best performance agency we've ever worked with.",
        },
      ],
    },
    authority: {
      title1: "HVM IS TRUSTED FOR",
      titleHighlight: "THE GROWTH OF",
      title3Prefix: "LEADING",
      title3Highlight: "BRANDS",
      description:
        "Market leaders trust HVM because of our proprietary performance methodology engineered exclusively for revenue and scalability.",
      statYears: "Years in market",
      statRetention: "Client retention",
      statInvested: "Managed ad spend",
      statYearsVal: "5+",
      statRetentionVal: "96%",
      statInvestedVal: "$ 1M+",
      imgAlt: "Illuminated blue glass king and queen chess pieces",
      clientPlaceholders: ["[Client Logo 01]", "[Client Logo 02]", "[Client Logo 03]", "[Client Logo 04]"],
    },
    ctaFaq: {
      warningTag: "ATTENTION!",
      warningTitle: "Accelerate your growth today with HVM",
      warningDesc:
        "Ready to take your business to the next level with HVM? Simply click the button below, submit your details, and our growth specialists will get in touch to initiate your custom roadmap.",
      warningCta: "Elevate Your Business Now!",
      faqTitle: "Frequently Asked",
      faqHighlight: "Questions",
      faqItems: [
        {
          q: "Why is HVM the best choice for my company?",
          a: "Because we unite high-level strategy, media buying, conversion design, and data analytics in a single senior team focused purely on revenue and predictability.",
        },
        {
          q: "How will HVM drive my sales growth?",
          a: "We structure data-backed marketing campaigns, optimize your full-funnel conversion rate, and monitor daily metrics to rapidly scale winning channels.",
        },
        {
          q: "Which international markets can HVM operate in?",
          a: "We run campaigns in Brazil, Latin America, North America, and Europe, tailoring messaging, language, and ad channels to each target region.",
        },
        {
          q: "How does reporting and communication work?",
          a: "You get transparent real-time dashboards with spend, leads, CAC, and generated revenue, along with regular strategic review meetings.",
        },
        {
          q: "What core services do you provide?",
          a: "Paid media management (Google, Meta, LinkedIn), Search Engine Optimization, conversion design, performance web development, and branding.",
        },
      ],
      doubtTitle1: "Still have",
      doubtTitle2: "questions?",
      doubtDesc:
        "Connect with us directly on WhatsApp and speak directly with one of our growth specialists.",
      doubtCta: "Chat on WhatsApp",
    },
    footer: {
      slogan: "Strategy, paid traffic, and performance to scale what truly matters.",
      navTitle: "Navigation",
      servicesTitle: "Services",
      contactTitle: "Contact",
      servicesList: [
        "Paid Traffic Management",
        "Google Search & Ads",
        "Social Media Ads",
        "Design & Branding",
        "Web Design & Development",
      ],
      contactPhone: "+55 (11) 96070-5785",
      contactEmail: "[Contact Email]",
      contactLocation: "[City — Country]",
      copyright: `© ${new Date().getFullYear()} HVM Digital Performance. Engineered for performance.`,
    },
  },
};

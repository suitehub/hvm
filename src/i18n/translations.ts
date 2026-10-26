export type Language = "pt" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    structure: string;
    cases: string;
    faq: string;
    ctaSpecialist: string;
    ctaCompany: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine3: string;
    description: string;
    ctaPrimary: string;
    ctaSpecialist: string;
    ctaCompany: string;
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
    ctaSpecialist: string;
    ctaCompany: string;
    statProjects: string;
    statClients: string;
    statAds: string;
    structureTitle: string;
    structureSubtitle: string;
    structureItems: Array<{
      title: string;
      desc: string;
    }>;
    imgAlt: string;
  };
  growFast: {
    titleHighlight: string;
    titleRest: string;
    p1: string;
    p2: string;
    p3: string;
    ctaSpecialist: string;
    ctaCompany: string;
    imgAlt: string;
  };
  services: {
    sectionBadge: string;
    sectionTitle: string;
    sectionHighlight: string;
    sectionDesc: string;
    viewDetails: string;
    topics: Array<{
      id: string;
      title: string;
      subtitle: string;
      shortDesc: string;
      fullDesc: string;
      benefits: string[];
      deliverables: string[];
    }>;
  };
  aboutSection: {
    badge: string;
    title: string;
    titleHighlight: string;
    intro: string;
    methodTitle: string;
    methodDesc: string;
    teamTitle: string;
    teamSubtitle: string;
    founderName: string;
    founderRole: string;
    founderBio: string;
    isabellaName: string;
    isabellaRole: string;
    isabellaBio: string;
    ctaButton: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      desc: string;
    }>;
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
      company: string;
      text: string;
      metric: string;
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
    emailPromptTitle: string;
    emailPromptDesc: string;
    emailPromptBtn: string;
    doubtTitle1: string;
    doubtTitle2: string;
    doubtDesc: string;
    doubtSpecialistCta: string;
    doubtCompanyCta: string;
  };
  footer: {
    slogan: string;
    navTitle: string;
    servicesTitle: string;
    contactTitle: string;
    servicesList: string[];
    contactPhoneSpecialist: string;
    contactPhoneCompany: string;
    contactEmail: string;
    contactLocation: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    nav: {
      home: "Início",
      about: "Quem Somos",
      services: "Serviços",
      structure: "Estrutura",
      cases: "Depoimentos",
      faq: "FAQ",
      ctaSpecialist: "Falar com Especialista",
      ctaCompany: "Falar com a Empresa",
    },
    hero: {
      badge: "Agência de Marketing Digital & Performance",
      titleLine1: "Performance que",
      titleHighlight: "gera crescimento",
      titleLine3: "de verdade",
      description:
        "Estratégias sob medida, tráfego qualificado e engenharia de vendas orientada a dados para escalar o faturamento da sua empresa com consistência.",
      ctaPrimary: "Quero Escalar Meu Negócio",
      ctaSpecialist: "Falar com Especialista: (11) 95585-5376",
      ctaCompany: "Falar com a Empresa: (11) 93402-4647",
      diff1: "Estratégias\npersonalizadas",
      diff2: "Foco em dados\ne resultados",
      diff3: "Acompanhamento\npróximo e diário",
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
        "Elaboramos o plano de ação mais assertivo para multiplicar as vendas do seu negócio,",
      descriptionRest: "com máxima eficiência de investimento e previsibilidade.",
      ctaSpecialist: "Falar com Especialista",
      ctaCompany: "Falar com a Empresa",
      statProjects: "Projetos entregues",
      statClients: "Clientes atendidos",
      statAds: "Em anúncios investidos",
      structureTitle: "Estrutura Completa da HVM Digital Performance",
      structureSubtitle:
        "Nossa metodologia integral conecta todas as pontas do seu funil comercial:",
      structureItems: [
        {
          title: "1. Gestão de Tráfego Pago",
          desc: "Nosso principal serviço e posicionamento comercial. Criação, gestão e escala de campanhas de alta conversão.",
        },
        {
          title: "2. Google Ads e Meta Ads",
          desc: "Anúncios altamente segmentados no Google, Instagram e Facebook. Presença completa onde o seu cliente decide comprar.",
        },
        {
          title: "3. SEO e Posicionamento no Google",
          desc: "Para atrair visitantes qualificados por meio de buscas orgânicas e construir autoridade digital duradoura.",
        },
        {
          title: "4. Geração de Leads",
          desc: "Atrair potenciais clientes em volume e gerar oportunidades comerciais quentes para a sua equipe de vendas.",
        },
        {
          title: "5. Landing Pages",
          desc: "Páginas de ultra conversão desenvolvidas especificamente para transformar visitantes em contatos e vendas.",
        },
        {
          title: "6. Análise de Dados e Resultados",
          desc: "Acompanhamento contínuo de campanhas, métricas de ROI, CAC, LTV e identificação ágil de oportunidades de melhoria.",
        },
      ],
      imgAlt: "Estratégia e aceleração de resultados da HVM Digital Performance",
    },
    growFast: {
      titleHighlight: "CRESÇA RÁPIDO",
      titleRest: "COM O PODER DA PERFORMANCE DIGITAL.",
      p1: "No mercado atual, velocidade e precisão estratégica determinam quem lidera. Não basta apenas veicular anúncios; é indispensável dominar a intenção de busca, a psicologia de compra do seu público e a conversão de cada clique em faturamento real.",
      p2: "Na HVM Digital Performance, combinamos inteligência analítica profunda, testes contínuos de criativos e funis de alta tração para fazer seu investimento se transformar em lucro sustentável. Quer ver o plano ideal para a sua empresa crescer neste exato momento?",
      p3: "A HVM está pronta para impulsionar a sua escala!",
      ctaSpecialist: "Falar com Especialista: (11) 95585-5376",
      ctaCompany: "Falar com a Empresa: (11) 93402-4647",
      imgAlt: "Painel tecnológico de alto impacto com curva de crescimento e faturamento",
    },
    services: {
      sectionBadge: "Serviços Estratégicos",
      sectionTitle: "Especialidades de",
      sectionHighlight: "Alto Impacto",
      sectionDesc:
        "Explore em detalhes as três frentes essenciais da HVM para consolidar sua presença e multiplicar suas vendas.",
      viewDetails: "Ver Detalhes do Serviço",
      topics: [
        {
          id: "posicionamento-google",
          title: "Posicionamento nas Buscas do Google",
          subtitle: "SEO Estratégico & Google Ads para Dominar o Topo",
          shortDesc:
            "Seja encontrado por quem já está ativamente procurando pelo que você vende, com máxima taxa de conversão.",
          fullDesc:
            "Estar no topo do Google no momento exato em que o cliente tem uma necessidade de compra é a forma mais lucrativa de aquisição. Combinamos campanhas cirúrgicas no Google Ads (Rede de Pesquisa, Performance Max, Remarketing e YouTube) com otimização técnica de SEO e Google Meu Negócio para captar a demanda existente no mercado.",
          benefits: [
            "Captura de demanda com alta intenção de compra imediata",
            "Otimização de palavras-chave negativas para zerar desperdício de verba",
            "SEO on-page, velocidade de carregamento e autoridade de domínio",
            "Presença no topo das pesquisas locais e nacionais",
          ],
          deliverables: [
            "Configuração e gestão profissional de Google Ads",
            "Mapeamento de palavras-chave de fundo de funil",
            "Auditoria técnica completa de SEO e indexação",
            "Relatórios semanais de custo por clique (CPC) e conversões",
          ],
        },
        {
          id: "meta-ads",
          title: "Metadados: Facebook e Instagram",
          subtitle: "Segmentação Comportamental, CAPI & Escala de ROAS",
          shortDesc:
            "Alcance seu cliente ideal nas redes sociais com criativos magnéticos, segmentação avançada e tracking blindado.",
          fullDesc:
            "O Meta Ads é a ferramenta definitiva para gerar demanda, despertar desejo e reengajar potenciais clientes. Implementamos a API de Conversões da Meta (CAPI) aliada ao Pixel para contornar perdas de rastreamento do iOS, alimentando os algoritmos de machine learning com dados reais de vendas para baratear o custo por lead e impulsionar o ROAS.",
          benefits: [
            "Implementação avançada da API de Conversões (CAPI) e Pixel",
            "Segmentação por interesses, comportamento e públicos Lookalike (semelhantes)",
            "Esteira de testes rápidos de criativos (vídeos, carrosséis e estáticos)",
            "Funil completo de topo, meio e fundo com remarketing dinâmico",
          ],
          deliverables: [
            "Estruturação de conta de anúncios profissional no Meta Business Suite",
            "Direcionamento criativo focado em persuasão e CTR elevado",
            "Otimização diária de orçamento e distribuição de verba",
            "Painel de métricas em tempo real com ROAS e CPL rastreados",
          ],
        },
        {
          id: "design-web",
          title: "Design e Web",
          subtitle: "Landing Pages de Alta Conversão & Experiência Persuasiva",
          shortDesc:
            "Transforme tráfego caro em clientes reais com páginas velozes, persuasivas e visualmente marcantes.",
          fullDesc:
            "De nada adianta trazer milhares de visitantes se a sua página não converte. Desenvolvemos Landing Pages, sites institucionais e interfaces focadas 100% em Conversion Rate Optimization (CRO). Criamos designs autoritários, layout mobile-first ultra veloz (carregamento em menos de 1.5s) e copies persuasivas que guiam o visitante até o botão de contato.",
          benefits: [
            "Arquitetura da informação focada em conduzir o usuário à ação",
            "Carregamento ultra-rápido otimizado para celulares e computadores",
            "Integração nativa com WhatsApp, formulários, CRM e ferramentas de tracking",
            "Design profissional e sofisticado que valoriza a autoridade da sua marca",
          ],
          deliverables: [
            "Design exclusivo alinhado ao posicionamento premium da sua empresa",
            "Desenvolvimento responsivo com código limpo e seguro",
            "Instalação de tags do Google Tag Manager, Google Analytics 4 e Pixels",
            "Testes A/B de chamadas, botões e formulários",
          ],
        },
      ],
    },
    aboutSection: {
      badge: "Quem Somos Nós",
      title: "Conheça a Equipe e o Método da",
      titleHighlight: "HVM Digital Performance",
      intro:
        "A HVM nasceu com um propósito claro: substituir promessas vazias e métricas de vaidade por crescimento de faturamento mensurável. Há 2 anos no mercado, atendemos mais de 100 clientes e gerimos mais de R$ 800 mil em anúncios com uma taxa de retenção de 96%.",
      methodTitle: "O Que Fazemos e Como Trabalhamos",
      methodDesc:
        "Não somos apenas executores de mídia: atuamos como o braço estratégico de crescimento da sua empresa. Nosso método engloba diagnóstico comercial aprofundado, arquitetura de oferta, campanhas multi-canal integradas e acompanhamento diário com reuniões estratégicas para garantir que cada centavo investido retorne com lucro.",
      teamTitle: "Liderança e Estratégia",
      teamSubtitle:
        "À frente de cada projeto, profissionais com compromisso inegociável com os seus resultados:",
      founderName: "Hygor V. Miranda",
      founderRole: "Fundador & Estrategista-Chefe",
      founderBio:
        "Especialista em inteligência de tráfego pago, planejamento de aquisição e escala de negócios. Lidera o direcionamento comercial, a otimização de campanhas e a arquitetura de dados que já alavancaram mais de 100 projetos com alta taxa de rentabilidade.",
      isabellaName: "Isabella",
      isabellaRole: "Diretora de Operações e Conversão (COO)",
      isabellaBio:
        "Especialista em gestão de processos, esteira de criativos de alta conversão, alinhamento de funil e experiência do cliente. Garante que cada campanha execute com agilidade impecável e gere leads prontos para fechar negócio.",
      ctaButton: "Conversar com Nossa Equipe",
    },
    process: {
      title: "O QUE A HVM FAZ?",
      subtitle:
        "Uma metodologia estruturada passo a passo para transformar tráfego em vendas consistentes:",
      steps: [
        {
          number: "01",
          title: "Diagnóstico Comercial 360°",
          desc: "Mapeamos profundamente o seu público lucrativo, seu ticket médio e o histórico das suas vendas para encontrar os maiores gargalos e oportunidades imediatas.",
        },
        {
          number: "02",
          title: "Arquitetura da Oferta & Funil",
          desc: "Alinhamos suas páginas, criativos e mensagens para gerar atração magnética e diferenciar sua marca dos concorrentes no primeiro contato.",
        },
        {
          number: "03",
          title: "Implementação de Tracking Blindado",
          desc: "Instalamos Google Tag Manager, GA4, Meta CAPI e ferramentas de rastreamento para garantir que cada clique e conversão sejam mensurados com precisão.",
        },
        {
          number: "04",
          title: "Gestão Ativa & Otimização Diária",
          desc: "Monitoramos e refinamos os lances, orçamentos e criativos todos os dias, eliminando desperdício e potencializando os anúncios mais lucrativos.",
        },
        {
          number: "05",
          title: "Relatórios Claros & Reuniões de Escala",
          desc: "Você acompanha métricas reais de ROI, custo por lead e vendas geradas, com reuniões periódicas para planejar os próximos saltos de crescimento.",
        },
      ],
    },
    testimonials: {
      titleHighlight: "O QUE NOSSOS",
      titleRest1: "CLIENTES",
      titleRest2: "ESTÃO FALANDO SOBRE NÓS.",
      ctaButton: "Quero Escalar Meus Resultados",
      googleReview: "Avaliação 5 Estrelas no Google",
      items: [
        {
          name: "Carlos Eduardo Silveira",
          role: "Diretor Comercial",
          company: "Nexus Soluções Corporativas B2B",
          text: "A HVM transformou nossa operação de aquisição. Saltamos de 8 para mais de 45 reuniões qualificadas por mês com o mesmo orçamento que antes era desperdiçado. O foco em dados e o atendimento diário fazem toda a diferença.",
          metric: "+460% de reuniões comerciais agendadas",
        },
        {
          name: "Dra. Mariana Esteves",
          role: "Diretora Clínica",
          company: "Instituto Odontológico & Estética",
          text: "Em apenas 60 dias de parceria com a HVM, nosso custo por agendamento caiu 42% e a recepção ficou com fila de espera para procedimentos de alto ticket. Transparência e competência que nunca vi em outra agência.",
          metric: "-42% no custo de aquisição por paciente",
        },
        {
          name: "Rodrigo Mendes Viana",
          role: "CEO & Fundador",
          company: "Lumina Moda & E-commerce",
          text: "Fechamos o último trimestre com ROAS de 6.2x no Google e Meta Ads. A equipe da HVM não apenas gerencia tráfego, mas analisa a conversão do site e dá sugestões práticas de vendas que aumentaram nosso faturamento.",
          metric: "ROAS de 6.2x consistente o ano todo",
        },
        {
          name: "Fernanda Castanheira",
          role: "Head de Expansão",
          company: "Valore Empreendimentos Imobiliários",
          text: "Geramos mais de R$ 4,8 milhões em VGV a partir dos leads gerados pelas campanhas da HVM. O alinhamento das landing pages com os anúncios captou compradores altamente qualificados.",
          metric: "+R$ 4.8M em negócios prospectados",
        },
      ],
    },
    authority: {
      title1: "A HVM É RESPONSÁVEL",
      titleHighlight: "PELO CRESCIMENTO DE",
      title3Prefix: "MAIS DE",
      title3Highlight: "100 NEGÓCIOS",
      description:
        "Essas empresas confiam na HVM devido ao nosso método desenvolvido exclusivamente para performance, previsibilidade e retorno consistente sobre o investimento.",
      statYears: "Anos de mercado",
      statRetention: "Retenção de clientes",
      statInvested: "Investimento gerido",
      statYearsVal: "2 anos",
      statRetentionVal: "96%",
      statInvestedVal: "+800k",
      imgAlt: "Estratégia e autoridade da HVM Digital Performance",
    },
    ctaFaq: {
      warningTag: "OPORTUNIDADE DE ESCALA",
      warningTitle: "Acelere seu crescimento agora com a HVM",
      warningDesc:
        "Pronto para elevar sua empresa ao próximo patamar com tráfego qualificado e funis de alta conversão? Entre em contato agora pelo WhatsApp com nosso especialista ou com a nossa empresa para receber um diagnóstico inicial do seu negócio.",
      warningCta: "Falar com Especialista Agora!",
      faqTitle: "Perguntas",
      faqHighlight: "Frequentes",
      faqItems: [
        {
          q: "Qual é o investimento mínimo recomendado para começar a ter resultados?",
          a: "Recomendamos um orçamento inicial que permita testar diferentes públicos e criativos com volume estatístico suficiente. Durante nosso diagnóstico inicial gratuito, analisamos seu nicho e ticket médio para indicar a verba ideal que traga retorno rápido e seguro.",
        },
        {
          q: "Em quanto tempo começo a ver os primeiros contatos e leads qualificados?",
          a: "Diferente de estratégias lentas, o tráfego pago no Google Ads e Meta Ads gera as primeiras impressões e contatos qualificados já nos primeiros dias após a veiculação das campanhas e validação das tags.",
        },
        {
          q: "Por que investir em Google Ads e Meta Ads de forma combinada?",
          a: "O Google Ads capta os clientes que já estão pesquisando ativamente com intenção de compra imediata. O Meta Ads desperta o desejo, constrói público e realiza remarketing persuasivo. A união dos dois canais gera o menor custo por lead e maior volume de vendas.",
        },
        {
          q: "Como sei se a HVM é a agência ideal para o meu segmento?",
          a: "Já atuamos com sucesso em mais de 100 projetos em múltiplos segmentos (B2B, clínicas de saúde, e-commerce, imobiliárias, prestadores de serviços e produtos de alto valor). Nosso foco é 100% em números, dados e margem de lucro real.",
        },
        {
          q: "Qual a diferença entre 'Falar com o Especialista' e 'Falar com a Empresa'?",
          a: "Ao falar com o Especialista (11 95585-5376), você conversa direto com nosso estrategista sênior sobre metas, diagnóstico e plano de mídia. Ao falar com a Empresa (11 93402-4647), você tem acesso aos canais institucionais, parcerias e informações corporativas da agência.",
        },
        {
          q: "Quais relatórios e acompanhamentos eu recebo durante a parceria?",
          a: "Transparência total: você tem acesso a dashboards em tempo real com investimento, cliques, leads e custo por conversão, além de reuniões periódicas de alinhamento com os diretores de projeto.",
        },
      ],
      emailPromptTitle: "Quer enviar uma dúvida ou solicitar uma proposta por e-mail?",
      emailPromptDesc:
        "Nossa equipe responde em até 2 horas úteis. Envie sua mensagem diretamente para nosso e-mail oficial:",
      emailPromptBtn: "Enviar e-mail para a HVM",
      doubtTitle1: "Ainda ficou com",
      doubtTitle2: "alguma dúvida?",
      doubtDesc:
        "Fale diretamente conosco pelo canal da sua preferência. Estamos prontos para apresentar um plano personalizado para sua empresa.",
      doubtSpecialistCta: "Falar com Especialista: (11) 95585-5376",
      doubtCompanyCta: "Falar com a Empresa: (11) 93402-4647",
    },
    footer: {
      slogan: "Estratégia, tráfego qualificado e performance para acelerar o que importa: suas vendas.",
      navTitle: "Navegação",
      servicesTitle: "Estrutura & Serviços",
      contactTitle: "Canais de Contato",
      servicesList: [
        "1. Gestão de Tráfego Pago",
        "2. Google Ads e Meta Ads",
        "3. SEO e Posicionamento no Google",
        "4. Geração de Leads Qualificados",
        "5. Landing Pages de Alta Conversão",
        "6. Análise de Dados e Resultados",
      ],
      contactPhoneSpecialist: "Especialista: (11) 95585-5376",
      contactPhoneCompany: "Empresa: (11) 93402-4647",
      contactEmail: "hvmdigitalperformance@gmail.com",
      contactLocation: "São Paulo — SP | Atendimento em todo o Brasil e Exterior",
      copyright: `© ${new Date().getFullYear()} HVM Digital Performance. Todos os direitos reservados.`,
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      structure: "Structure",
      cases: "Case Studies",
      faq: "FAQ",
      ctaSpecialist: "Talk to a Specialist",
      ctaCompany: "Talk to Company",
    },
    hero: {
      badge: "Digital Marketing & Performance Agency",
      titleLine1: "Performance that",
      titleHighlight: "drives real growth",
      titleLine3: "for your business",
      description:
        "Tailored strategies, qualified traffic, and data-driven sales architecture engineered to scale your company's revenue with predictable consistency.",
      ctaPrimary: "Scale My Business Now",
      ctaSpecialist: "Specialist: +55 (11) 95585-5376",
      ctaCompany: "Company: +55 (11) 93402-4647",
      diff1: "Customized\nStrategies",
      diff2: "Data & Results\nDriven",
      diff3: "Daily Dedicated\nSupport",
      imgAlt: "HVM performance specialist analyzing multi-screen dashboards",
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
      title1: "Our mission is",
      title2: "Accelerating your",
      titleHighlight: "Results.",
      descriptionBold:
        "We craft the most assertive action plan to multiply your company's sales revenue,",
      descriptionRest: "with maximum capital efficiency and reliable predictability.",
      ctaSpecialist: "Talk to Specialist",
      ctaCompany: "Talk to Company",
      statProjects: "Projects delivered",
      statClients: "Clients served",
      statAds: "In managed ad spend",
      structureTitle: "Complete Structure of HVM Digital Performance",
      structureSubtitle:
        "Our end-to-end framework bridges every stage of your customer acquisition funnel:",
      structureItems: [
        {
          title: "1. Paid Traffic Management",
          desc: "Our flagship service and commercial positioning. End-to-end campaign engineering and scaling.",
        },
        {
          title: "2. Google Ads and Meta Ads",
          desc: "Precision targeted advertising across Google, Instagram, and Facebook in one synchronized engine.",
        },
        {
          title: "3. SEO & Google Positioning",
          desc: "Attract high-intent visitors through organic search and build durable digital domain authority.",
        },
        {
          title: "4. Lead Generation",
          desc: "Attract qualified prospects at scale and deliver hot commercial opportunities to your sales force.",
        },
        {
          title: "5. High-Converting Landing Pages",
          desc: "Conversion-optimized landing pages engineered to transform clicks into qualified contacts and deals.",
        },
        {
          title: "6. Data Analytics & Business Intelligence",
          desc: "Continuous tracking of campaign KPIs, CAC, LTV, ROAS, and rapid identification of scale opportunities.",
        },
      ],
      imgAlt: "Strategic growth and acceleration by HVM Digital Performance",
    },
    growFast: {
      titleHighlight: "GROW FAST",
      titleRest: "WITH THE POWER OF DIGITAL PERFORMANCE.",
      p1: "In today's fast-moving market, speed and strategic precision determine who leads. It is not enough to simply publish ads; you must master intent, consumer psychology, and the seamless conversion of every impression into bottom-line revenue.",
      p2: "At HVM Digital Performance, we combine deep analytical intelligence, rapid creative testing, and high-velocity funnels to transform your media investment into sustainable profit. Want to see the custom roadmap for your company to scale right now?",
      p3: "HVM is prepared to power your next tier of growth!",
      ctaSpecialist: "Specialist: +55 (11) 95585-5376",
      ctaCompany: "Company: +55 (11) 93402-4647",
      imgAlt: "High-tech performance analytics dashboard displaying exponential growth",
    },
    services: {
      sectionBadge: "Strategic Pillars",
      sectionTitle: "High-Impact",
      sectionHighlight: "Core Services",
      sectionDesc:
        "Explore in detail the three fundamental growth pillars deployed by HVM to solidify your authority and scale your sales.",
      viewDetails: "Explore Service Details",
      topics: [
        {
          id: "posicionamento-google",
          title: "Google Search & Ads Positioning",
          subtitle: "Strategic SEO & Google Ads to Dominate Search Intent",
          shortDesc:
            "Be discovered at the exact moment high-intent customers search for your solutions.",
          fullDesc:
            "Being at the very top of Google when prospects have acute buying intent is the highest ROI customer acquisition channel available. We integrate surgical Google Search, Performance Max, and Remarketing campaigns with technical SEO and Google Business Profile optimization to capture existing market demand.",
          benefits: [
            "Immediate capture of high-intent commercial search traffic",
            "Negative keyword architecture eliminating wasted budget",
            "Technical on-page SEO, Core Web Vitals, and domain authority",
            "Top rankings across local, national, and international search",
          ],
          deliverables: [
            "Complete Google Ads setup, tracking, and ongoing management",
            "Bottom-of-the-funnel keyword mapping and competitor analysis",
            "Comprehensive technical SEO and indexing audit",
            "Weekly performance reports detailing CPC, CPA, and conversions",
          ],
        },
        {
          id: "meta-ads",
          title: "Metadata: Facebook and Instagram",
          subtitle: "Behavioral Targeting, Meta CAPI & ROAS Scaling",
          shortDesc:
            "Reach your ideal prospects across social media with magnetic creatives and hardened data tracking.",
          fullDesc:
            "Meta Ads is the ultimate engine for demand generation and customer re-engagement. We deploy server-side Meta Conversions API (CAPI) synchronized with the Meta Pixel to bypass browser tracking loss, feeding Meta's machine learning algorithms with validated conversion data to reduce CPL and scale return on ad spend.",
          benefits: [
            "Server-side Meta Conversions API (CAPI) and Pixel integration",
            "Advanced behavioral targeting, custom audiences, and Lookalikes",
            "High-cadence creative testing across Reels, Stories, and Carousels",
            "Full-funnel remarketing architecture driving warm prospects to buy",
          ],
          deliverables: [
            "Enterprise Meta Business Suite configuration and asset protection",
            "Creative direction designed for high engagement and click-throughs",
            "Daily budget optimization and algorithmic bid management",
            "Real-time analytics dashboard with transparent ROAS and CPL",
          ],
        },
        {
          id: "design-web",
          title: "Design and Web",
          subtitle: "Ultra High-Converting Landing Pages & Persuasive UX",
          shortDesc:
            "Turn expensive clicks into confirmed deals with lightning-fast, persuasive web experiences.",
          fullDesc:
            "Traffic is worthless if your landing page fails to convert. We design and build landing pages and corporate websites engineered for 100% Conversion Rate Optimization (CRO). We combine authority-driven visual hierarchy, sub-1.5s mobile loading speeds, and psychological copywriting that guides prospects smoothly to your checkout or sales team.",
          benefits: [
            "Information architecture built specifically to guide user action",
            "Ultra-fast mobile-first loading performance (< 1.5 seconds)",
            "Native integration with WhatsApp, CRM, and analytics platforms",
            "Elevated, premium visual design that inspires immediate confidence",
          ],
          deliverables: [
            "Bespoke landing page design aligned with your brand positioning",
            "Clean, responsive front-end development optimized for speed",
            "Google Tag Manager, GA4, and pixel conversion tracking setup",
            "A/B split testing on key headlines, buttons, and lead forms",
          ],
        },
      ],
    },
    aboutSection: {
      badge: "Who We Are",
      title: "Meet the Team and Method of",
      titleHighlight: "HVM Digital Performance",
      intro:
        "HVM was founded with one clear commitment: replace empty promises and vanity metrics with verifiable revenue growth. Operating for 2 years in the market, we have partnered with over 100 clients and managed over $800k in advertising spend with a 96% client retention rate.",
      methodTitle: "What We Do and How We Work",
      methodDesc:
        "We are not merely media buyers; we operate as your dedicated growth and revenue engine. Our methodology combines in-depth commercial diagnosis, offer architecture, integrated multi-channel campaigns, and proactive daily management with regular strategy meetings to ensure every dollar invested delivers a tangible return.",
      teamTitle: "Leadership & Strategic Direction",
      teamSubtitle:
        "At the helm of every campaign, senior leaders committed to your outcomes:",
      founderName: "Hygor V. Miranda",
      founderRole: "Founder & Head Strategist",
      founderBio:
        "Specialist in paid traffic architecture, customer acquisition economics, and enterprise scaling. Directs commercial roadmaps, media optimization, and data pipelines that have accelerated over 100 projects with outstanding profitability.",
      isabellaName: "Isabella",
      isabellaRole: "Director of Operations & Conversion (COO)",
      isabellaBio:
        "Specialist in operational workflows, high-converting creative engines, funnel alignment, and client experience. Ensures every campaign is executed with speed and precision, delivering prospects ready to close.",
      ctaButton: "Connect with Our Leadership",
    },
    process: {
      title: "WHAT DOES HVM DO?",
      subtitle:
        "A structured 5-step methodology engineered to turn media clicks into consistent business revenue:",
      steps: [
        {
          number: "01",
          title: "360° Commercial Diagnostic",
          desc: "We analyze your high-LTV customer segments, historical sales data, and commercial bottlenecks to identify immediate revenue opportunities.",
        },
        {
          number: "02",
          title: "Offer & Funil Architecture",
          desc: "We align your landing pages, ad creatives, and value propositions to establish instant market differentiation from the very first interaction.",
        },
        {
          number: "03",
          title: "Hardened Tracking Infrastructure",
          desc: "We deploy GTM, GA4, Meta CAPI, and custom server-side tracking to guarantee that every click, lead, and sale is accurately attributed.",
        },
        {
          number: "04",
          title: "Active Management & Daily Tuning",
          desc: "We review bids, audiences, and creatives daily, cutting underperforming ads immediately while scaling high-ROAS winners.",
        },
        {
          number: "05",
          title: "Transparent Dashboards & Scale Reviews",
          desc: "You receive transparent real-time metric reporting accompanied by regular strategic reviews to plan your next growth milestones.",
        },
      ],
    },
    testimonials: {
      titleHighlight: "WHAT OUR",
      titleRest1: "CLIENTS",
      titleRest2: "ARE SAYING ABOUT US.",
      ctaButton: "I Want to Scale My Results",
      googleReview: "5-Star Google Verified Review",
      items: [
        {
          name: "Charles Edward Silveira",
          role: "Commercial Director",
          company: "Nexus B2B Enterprise Solutions",
          text: "HVM completely transformed our outbound and inbound acquisition. We jumped from 8 to over 45 qualified meetings per month with the exact same budget that was previously wasted. Their data rigor and daily commitment are exceptional.",
          metric: "+460% growth in qualified pipeline",
        },
        {
          name: "Dr. Marianne Esteves",
          role: "Clinical Director",
          company: "Advanced Aesthetics & Dental Institute",
          text: "Within 60 days of onboarding with HVM, our cost per patient booking fell by 42% and we developed a waiting list for high-ticket procedures. Professionalism and transparency we haven't seen in any other agency.",
          metric: "-42% reduction in customer acquisition cost",
        },
        {
          name: "Roger Bennett Viana",
          role: "CEO & Founder",
          company: "Lumina Fashion & Lifestyle E-commerce",
          text: "We closed our last quarter with a 6.2x ROAS across Google and Meta Ads. HVM doesn't just manage media—they audit website conversion flow and deliver commercial insights that dramatically increased our top-line revenue.",
          metric: "Consistent 6.2x ROAS all year round",
        },
        {
          name: "Rachel Castanheira",
          role: "Head of Expansion",
          company: "Valore Luxury Real Estate",
          text: "We generated over $4.8M in property sales directly from leads produced by HVM campaigns. The seamless synergy between their landing pages and search ads captured high-net-worth buyers effortlessly.",
          metric: "+$4.8M in qualified prospect deals",
        },
      ],
    },
    authority: {
      title1: "HVM IS RESPONSIBLE",
      titleHighlight: "FOR THE EXPANSION OF",
      title3Prefix: "MORE THAN",
      title3Highlight: "100 BUSINESSES",
      description:
        "Leading companies trust HVM because of our proprietary performance framework engineered exclusively for revenue, predictability, and consistent ROI.",
      statYears: "Years in market",
      statRetention: "Client retention",
      statInvested: "Managed ad spend",
      statYearsVal: "2 years",
      statRetentionVal: "96%",
      statInvestedVal: "+800k",
      imgAlt: "HVM Digital Performance authority and market proof",
    },
    ctaFaq: {
      warningTag: "SCALING OPPORTUNITY",
      warningTitle: "Accelerate your growth today with HVM",
      warningDesc:
        "Ready to elevate your business with qualified traffic and high-converting funnels? Connect directly via WhatsApp with our specialist or our company to receive a preliminary growth diagnosis.",
      warningCta: "Talk to Specialist Now!",
      faqTitle: "Frequently Asked",
      faqHighlight: "Questions",
      faqItems: [
        {
          q: "What is the recommended minimum ad spend to get started?",
          a: "We recommend an initial media budget that allows testing multiple audiences and creatives with statistical significance. During our preliminary diagnosis, we assess your industry and average order value to recommend the optimal spend.",
        },
        {
          q: "How quickly will we see our first qualified leads and sales?",
          a: "Unlike slow organic-only approaches, paid traffic across Google and Meta delivers qualified clicks and inbound leads within the very first days after campaign activation and pixel verification.",
        },
        {
          q: "Why should we combine Google Ads and Meta Ads simultaneously?",
          a: "Google captures customers actively seeking your solution with high buying intent right now. Meta generates demand, nurtures interest, and re-engages visitors through retargeting. Uniting both lowers CPA and maximizes total volume.",
        },
        {
          q: "How do I know if HVM is the right fit for my industry?",
          a: "We have proven track records across 100+ projects in B2B, healthcare, luxury goods, real estate, e-commerce, and professional services. Our approach is 100% focused on mathematical ROI, profit margin, and scalable acquisition.",
        },
        {
          q: "What is the difference between 'Talk to Specialist' and 'Talk to Company'?",
          a: "Contacting the Specialist (11 95585-5376) connects you directly with our senior media strategist for audits and media plans. Contacting the Company (11 93402-4647) directs you to agency administration, partnerships, and corporate inquiries.",
        },
        {
          q: "What reports and ongoing communication will I receive?",
          a: "Complete transparency: you get real-time dashboards showing investment, clicks, leads, and cost per acquisition, alongside regular strategic reviews with project directors.",
        },
      ],
      emailPromptTitle: "Prefer to send a question or request a proposal by email?",
      emailPromptDesc:
        "Our strategic team responds within 2 business hours. Send your inquiry directly to our official inbox:",
      emailPromptBtn: "Email HVM Digital Performance",
      doubtTitle1: "Still have",
      doubtTitle2: "questions?",
      doubtDesc:
        "Reach out directly via your preferred channel. We are ready to present a customized growth plan for your company.",
      doubtSpecialistCta: "Specialist: +55 (11) 95585-5376",
      doubtCompanyCta: "Company: +55 (11) 93402-4647",
    },
    footer: {
      slogan: "Strategy, qualified paid traffic, and performance to scale what truly matters: your revenue.",
      navTitle: "Navigation",
      servicesTitle: "Structure & Services",
      contactTitle: "Contact Channels",
      servicesList: [
        "1. Paid Traffic Management",
        "2. Google Ads and Meta Ads",
        "3. SEO & Google Positioning",
        "4. Qualified Lead Generation",
        "5. High-Converting Landing Pages",
        "6. Data Analytics & Results",
      ],
      contactPhoneSpecialist: "Specialist: +55 (11) 95585-5376",
      contactPhoneCompany: "Company: +55 (11) 93402-4647",
      contactEmail: "hvmdigitalperformance@gmail.com",
      contactLocation: "São Paulo — SP | Serving clients across Brazil and Internationally",
      copyright: `© ${new Date().getFullYear()} HVM Digital Performance. All rights reserved.`,
    },
  },
};

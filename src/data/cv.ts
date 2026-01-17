export type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
  };
};

export type Training = {
  name: string;
  badge: string;
  inProgress?: boolean;
};

export type CV = {
  updatedAt: string;
  name: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    endYear: string;
  };
  experiences: Experience[];
  trainings: Training[];
  certifications: string[];
  projects: Project[];
  skills: {
    stackPrincipal: string[];
    iaAutomacao: string[];
    databases: string[];
    devopsInfra: string[];
    ferramentas: string[];
  };
  languages: {
    pt: string;
    en: string;
    es: string;
  };
};

export const cv: CV = {
  updatedAt: 'Atualizado em: 24/10/2025',
  name: 'Giancarlo Salomone',
  email: 'g.salomone@live.com',
  github: 'https://github.com/Gian-UC',
  linkedin: 'https://www.linkedin.com/in/dev-giancarlo-salomone',
  whatsapp: 'https://wa.me/5511992364776',
  summary:
    'Desenvolvedor Back-End em transição de carreira, com background sólido em Recursos Humanos e forte paixão por tecnologia. Estudante de Engenharia da Computação e formado em Desenvolvimento de Software Full Stack pelas Cubos Academy. Busco oportunidade para aplicar meus conhecimentos em ambientes dinâmicos e colaborativos, sempre evoluindo como dev e futuro full stack.',
  education: {
    degree: 'Bacharelado em Engenharia da Computação',
    institution: 'Universidade Anhembi Morumbi',
    endYear: '2028',
  },
  experiences: [
    {
      role: 'Starter',
      company: 'GFT Technologies',
      period: '2025 até atualmente',
      bullets: [
        'Atuação em projetos de desenvolvimento de software utilizando tecnologias modernas e arquiteturas escaláveis.',
        'Participação ativa em equipes ágeis, contribuindo para entregas de valor contínuas.',
      ],
    },
    {
      role: 'Expert em Interação',
      company: 'Teleperformance CRM S.A.',
      period: '09/2024 até 02/2025',
      bullets: [
        'Atendimento e Suporte Especializado nas plataformas Betano e Max, com comunicação clara, empática e eficiente.',
        'Promoção e Retenção de Clientes, explicando regras e incentivando o engajamento para fidelização e satisfação.',
      ],
    },
    {
      role: 'Entrevistador I',
      company: 'Kantar Ibope Pesquisa de Mídia LTDA',
      period: '02/2025 até 04/2025',
      bullets: [
        'Entrevistas presenciais e telefônicas para coleta de dados de audiência e hábitos de consumo seguindo metodologias específicas.',
        'Registro preciso das informações em sistemas internos, contribuindo para geração de insights estratégicos.',
      ],
    },
    {
      role: 'Expert em Interação',
      company: 'Teleperformance CRM S.A.',
      period: '06/2025 até 10/2025',
      bullets: [
        'Suporte técnico e solução de dúvidas na plataforma Amazon com foco em experiência clara e empática.',
        'Promoção e retenção de clientes, explicando regras e incentivando engajamento.',
      ],
    },
    {
      role: 'Analista de RH / Departamento Pessoal',
      company: 'SGS DO BRASIL LTDA',
      period: '2014 até 2020',
      bullets: [
        'Condução ponta a ponta de rotinas de folha, admissão, rescisão, férias e benefícios, garantindo compliance trabalhista e prazos legais.',
        'Fechamento de ponto, controle de banco de horas e integração com sistemas de folha, reduzindo retrabalho e inconsistências.',
        'Apoio a líderes e colaboradores em dúvidas trabalhistas, políticas internas e atendimento de demandas de auditoria.',
        'Organização de documentação e dossiês funcionais, mantendo rastreabilidade para fiscalizações e processos internos.',
      ],
    },
  ],
  trainings: [
    { name: 'Santander 2025 - Back-End com Python', badge: '/badges/python-developer.png', inProgress: true },
    { name: 'Avanade - Back-end com .NET e IA', badge: '/badges/backend-python.png', inProgress: true },
    { name: 'Akad - Fullstack Developer', badge: '/badges/fullstack-developer.png', inProgress: true },
    { name: 'Neo4J - Análise de Dados com Grafos', badge: '/badges/analise-dados-grafos.png', inProgress: true },
    { name: 'TIVIT - .Net com GitHub Copilot', badge: '/badges/dotnet-github-copilot.png', inProgress: true },
    { name: 'Formação Docker Fundamentals', badge: '/badges/docker-fundamentals.png', inProgress: true },
    { name: 'CAIXA - Inteligência Artificial na Prática', badge: '/badges/ia-pratica-caixa.png', inProgress: true },
    { name: 'GitHub Copilot - Código na Prática', badge: '/badges/codigo-pratica.png', inProgress: true },
    { name: 'Microsoft Certification Challenge #5 - AI 102', badge: '/badges/microsoft-challenge-ai102.png', inProgress: true },
    { name: 'Formação Angular Developer', badge: '/badges/angular-developer.png', inProgress: true },
    { name: 'Suzano - Python Developer #2', badge: '/badges/python-developer.png', inProgress: true },
    { name: 'Suzano - Python Developer', badge: '/badges/python-developer.png', inProgress: true },
    { name: 'Bradesco - GenAI & Dados', badge: '/badges/genai-dados.png', inProgress: true },
    { name: 'Inteligência Artificial – DIO', badge: '/badges/ia-pratica-caixa.png' },
    { name: 'Engenharia de Dados com Python – DIO', badge: '/badges/python-developer.png' },
    { name: 'Azure Machine Learning – Coursera', badge: '/badges/backend-python.png' },
    { name: 'Cloud com Inteligência Artificial – DIO', badge: '/badges/ia-pratica-caixa.png' },
  ],
  certifications: [
    'Google IT Support – Coursera',
    'ITIL V4 Certification Preparation – Coursera',
  ],
  projects: [
    {
      title: 'HospitalHub',
      description:
        'Arquitetura de microserviços em .NET 8 para ambiente hospitalar: APIs de Agendamentos, Clínica e Cirúrgico; Gateway (Ocelot); autenticação/autorização com Keycloak; mensageria RabbitMQ; cache Redis; observabilidade com OpenTelemetry/Jaeger; envio de e-mails assíncrono pela Notificação API. Docker Compose para orquestração local.',
      tech: [
        '.NET 8',
        'ASP.NET Core',
        'Docker',
        'MySQL',
        'RabbitMQ',
        'Keycloak',
        'Redis',
        'OpenTelemetry',
        'Jaeger',
        'Ocelot Gateway',
        'Swagger'
      ],
      links: {
        github: 'https://github.com/Gian-UC/hospitalhub'
      }
    }
  ],
  skills: {
    stackPrincipal: [
      'C#',
      '.NET',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'PostgreSQL',
    ],
    iaAutomacao: [
      'OpenAI',
      'Machine Learning',
      'ChatGPT',
      'Google Gemini',
      'Python ML',
      'Power Platform',
      'Power Apps',
      'Power Automate',
      'Copilot Studio',
    ],
    databases: [
      'PostgreSQL',
      'MySQL',
      'SQL Server',
      'Neo4j (Graph DB)',
      'Redis',
      'MongoDB',
    ],
    devopsInfra: [
      'Docker',
      'RabbitMQ',
      'Grafana',
      'Prometheus',
      'Jaeger',
      'OpenTelemetry',
      'Keycloak',
      'Swagger',
      'MailHog',
      'Git',
      'GitHub',
      'GitLab',
      'AWS',
      'Azure',
    ],
    ferramentas: [
      'Git',
      'GitHub',
      'VSCode',
      'Figma',
      'Postman',
      'Dynamics 365',
    ],
  },
  languages: {
    pt: 'Português – Nativo',
    en: 'Inglês – Intermediário/Avançado (B2 – Leitura) e Básico (A1 – Conversação)',
    es: 'Espanhol – Básico (A2)',
  },
};

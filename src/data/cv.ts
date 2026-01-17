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
    },
    {
      title: 'E-commerce Order System',
      description:
        'Sistema de pedidos e-commerce com arquitetura event-driven usando Kafka. Três microserviços: Orders (gestão de pedidos), Inventory (controle de estoque), Notifications (envio de emails). Dashboard React com atualizações em tempo real via SignalR. Implementa padrões CQRS e event sourcing.',
      tech: [
        '.NET 8',
        'Apache Kafka',
        'React',
        'PostgreSQL',
        'Redis',
        'SignalR',
        'Docker',
        'Entity Framework Core'
      ],
      links: {}
    },
    {
      title: 'Real-time Log Streaming Platform',
      description:
        'Plataforma de processamento e análise de logs em tempo real usando Kafka como message broker. Consumer em .NET processa logs de múltiplas aplicações, categorizando por severidade. Dashboard Angular exibe métricas e gráficos em tempo real com Chart.js.',
      tech: [
        'C#',
        '.NET 8',
        'Apache Kafka',
        'Angular',
        'ClickHouse',
        'Chart.js',
        'Docker',
        'Grafana'
      ],
      links: {}
    },
    {
      title: 'Sistema de RH Completo',
      description:
        'Plataforma completa para gestão de recursos humanos: controle de funcionários, folha de pagamento, ponto eletrônico, gestão de férias e benefícios. Autenticação via Keycloak com roles (admin, manager, employee). Relatórios interativos e upload de documentos para Azure Blob Storage.',
      tech: [
        'React',
        '.NET 8',
        'PostgreSQL',
        'Keycloak',
        'Azure Blob Storage',
        'Chart.js',
        'Docker'
      ],
      links: {}
    },
    {
      title: 'AI-Powered CRM',
      description:
        'CRM inteligente com IA generativa para gestão de leads e pipeline de vendas. Sugestão automática de emails, resumo de conversas e análise de sentimento usando OpenAI. Notificações em tempo real via SignalR. Armazena documentos no MongoDB e dados estruturados no PostgreSQL.',
      tech: [
        'React',
        '.NET 8',
        'OpenAI API',
        'MongoDB',
        'PostgreSQL',
        'SignalR',
        'Azure AI',
        'Docker'
      ],
      links: {}
    },
    {
      title: 'Code Assistant with RAG',
      description:
        'Assistente de código inteligente usando Retrieval-Augmented Generation (RAG). Permite upload de documentação técnica (PDF, MD) para criar base de conhecimento. Chat interativo para consultar docs, gerar código e explicar erros. Vector database (Pinecone) + OpenAI embeddings.',
      tech: [
        'Python',
        'LangChain',
        'React',
        'OpenAI',
        'Pinecone',
        'FastAPI',
        'Monaco Editor',
        'Docker'
      ],
      links: {}
    },
    {
      title: 'Social Media Sentiment Analyzer',
      description:
        'Analisador de sentimento em redes sociais para marcas e produtos. Coleta tweets/posts, processa com modelos de NLP (BERT/GPT) e exibe dashboard com gráficos de evolução de sentimento. Armazena posts no MongoDB e analytics no PostgreSQL.',
      tech: [
        'Python',
        'Angular',
        'BERT',
        'OpenAI',
        'MongoDB',
        'PostgreSQL',
        'FastAPI',
        'Chart.js'
      ],
      links: {}
    },
    {
      title: 'Self-Service DevOps Portal',
      description:
        'Portal self-service para desenvolvedores criarem ambientes e deploys via interface. Backend .NET controla Kubernetes (client-go), gera Terraform/Helm charts dinamicamente. Dashboards Grafana + Prometheus para observabilidade. Implementa práticas de Platform Engineering.',
      tech: [
        'React',
        '.NET 8',
        'Kubernetes',
        'Terraform',
        'Helm',
        'Grafana',
        'Prometheus',
        'Docker'
      ],
      links: {}
    },
    {
      title: 'API Gateway with Advanced Features',
      description:
        'Gateway centralizado para múltiplos microserviços com rate limiting (Redis), circuit breaker e retry policies (Polly). Métricas detalhadas com OpenTelemetry e Jaeger. Autenticação JWT e roteamento inteligente usando Ocelot.',
      tech: [
        'C#',
        '.NET 8',
        'Ocelot',
        'Redis',
        'Polly',
        'OpenTelemetry',
        'Jaeger',
        'Docker'
      ],
      links: {}
    },
    {
      title: 'Gamified Learning Platform',
      description:
        'Plataforma de cursos online com sistema de gamificação: pontos, badges e ranking em tempo real. Vídeos, quizzes e acompanhamento de progresso. SignalR para notificações e chat ao vivo. Leaderboards armazenados em Redis para performance.',
      tech: [
        'React',
        '.NET 8',
        'SignalR',
        'PostgreSQL',
        'Redis',
        'Azure Media Services',
        'Docker'
      ],
      links: {}
    },
    {
      title: 'API Marketplace with Metering',
      description:
        'Marketplace onde desenvolvedores publicam e consomem APIs. Kafka processa stream de chamadas para billing e analytics. Sistema de metering conta uso por API key com limites por plano. Integração com Stripe para pagamentos.',
      tech: [
        'Angular',
        '.NET 8',
        'Apache Kafka',
        'PostgreSQL',
        'Redis',
        'Stripe API',
        'Docker',
        'Grafana'
      ],
      links: {}
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

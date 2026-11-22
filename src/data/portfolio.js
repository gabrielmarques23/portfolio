export const portfolioData = {
  profile: {
    name: "Gabriel Marques",
    role: "Desenvolvedor fullstack & UI/UX",
    statusText: "Disponível para novas oportunidades",
    available: true,
    location: "São Paulo, Brasil"
  },

  hero: {
    badge: "Disponível para novas oportunidades",
    titlePrefix: "CÓDIGO COM",
    titleSerif: "intenção.",
    titleSuffix: "EXPERIÊNCIAS COM IDENTIDADE",
    description:
      "Desenvolvo aplicações web que unem engenharia, interfaces cuidadosas e interações que fazem sentido."
  },

  metrics: [
    { label: "Anos de experiência", value: "+4" },
    { label: "Projetos entregues", value: "+20" }
  ],

  stack: [
    "React",
    "Node.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "Styled Components",
    "GSAP Motion",
    "Vite",
    "UI / UX Design"
  ],

  navigation: [
    { id: "home", label: "Início", icon: "Home", href: "#home" },
    { id: "skills", label: "Habilidades", icon: "Code", href: "#skills" },
    { id: "projects", label: "Projetos", icon: "Folder", href: "#projects" },
    { id: "contact", label: "Contato", icon: "Mail", href: "#contact" }
  ],

  projects: [
    {
      id: "autostore",
      title: "AutoStore",
      category: "Aplicação full-stack · IA",
      demonstration: false,
      description: "Catálogo de veículos com busca e filtros, páginas de detalhes, assistente de IA baseado nos dados do catálogo e formulário de interesse.",
      art: "aura",
      image: null,
      challenge: "Desenvolver uma jornada de venda de veículos para um desafio técnico de hackathon, reunindo catálogo, atendimento e captura de leads.",
      solution: "Aplicação Next.js com consultas via Prisma, endpoints de chat e leads persistidos em PostgreSQL. O assistente combina recuperação por embeddings e similaridade com Google Gemini para contextualizar as respostas nos dados do catálogo.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Google Gemini"],
      links: [{ label: "Código no GitHub", href: "https://github.com/gabrielmarques23/AutoStore" }]
    },
    {
      id: "orbit-workspace",
      title: "Orbit Workspace",
      category: "Produto digital",
      demonstration: true,
      description: "Um espaço de trabalho para organizar tarefas, conectar pessoas e acompanhar ideias.",
      art: "orbit",
      image: null,
      challenge: "Organizar tarefas e informações sem sobrecarregar a experiência de quem trabalha.",
      solution: "Navegação direta, prioridades visíveis e uma estrutura que acompanha o fluxo da equipe.",
      technologies: ["React", "TypeScript", "Node.js"],
      links: []
    },
    {
      id: "nexo-studio",
      title: "Nexo Studio",
      category: "Experiência web",
      demonstration: true,
      description: "Uma presença digital editorial para um estúdio criativo, com foco em projetos e identidade.",
      art: "nexo",
      image: null,
      challenge: "Apresentar trabalhos criativos com personalidade e espaço para cada história.",
      solution: "Composição editorial, imagens amplas e detalhes que se revelam conforme a exploração.",
      technologies: ["React", "Vite", "UI / UX"],
      links: []
    }
  ]
};

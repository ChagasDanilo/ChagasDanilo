import type { IPortfolioRepository } from '@/src/domain/repositories/IPortfolioRepository';
import type { Profile } from '@/src/domain/entities/Profile';
import type { Project } from '@/src/domain/entities/Project';
import type { Experience } from '@/src/domain/entities/Experience';
import type { Skill } from '@/src/domain/entities/Skill';
import type { Certificate } from '@/src/domain/entities/Certificate';
import type { Education } from '@/src/domain/entities/Education';

export class StaticPortfolioRepository implements IPortfolioRepository {
  getProfile(): Profile {
    return {
      name: 'Danilo Chagas Amorim',
      title: 'Software Engineer',
      subtitle: 'Mobile & Full Stack Developer',
      bio: `Engenheiro Mobile/Full Stack Sênior. Único responsável pela frente mobile de uma rede de franquias educacionais: 4 apps publicados, dezenas de milhares de usuários ativos e crash-free rate consistentemente acima de 99%.
        Minha base veio do Delphi e de sistemas legados onde aprendi o valor de arquitetura sólida e hoje está no ecossistema React Native/Expo no front-end e Node.js/NestJS no back-end.
        Atuo no ciclo completo do produto: do levantamento de requisitos com stakeholders à publicação nas lojas, passando por estratégia de testes (Jest, Maestro), CI/CD (EAS Workflows) e observabilidade (Sentry, Crashlytics). Gosto de transformar processo em resultado como quando levei o ciclo de release de dias para horas, ou quando introduzi Spec-Driven Development e reduzi drasticamente o retrabalho da equipe.
        Acredito que bom código é o que resolve problema real: já construí de app educacional de alta performance a integração segura com equipamentos médicos.`,
      avatarUrl: 'https://avatars.githubusercontent.com/u/38306914?v=4',
      location: 'Goiás — Brasil',
      company: 'MoveEdu',
      socialLinks: {
        github: 'https://github.com/ChagasDanilo',
        linkedin: 'https://www.linkedin.com/in/danilo-chagas-amorim/',
        email: 'danilochagas009@gmail.com',
      },
    };
  }

  getProjects(): Project[] {
    return [
      {
        id: 'moveedu-conecta',
        name: 'MoveEdu Conecta',
        description: 'App de gestão para franqueados da rede MoveEdu — comunicação, relatórios e controle operacional da franquia.',
        techStack: ['React Native', 'Expo', 'TypeScript', 'NestJS'],
        androidUrl: 'https://play.google.com/store/apps/details?id=com.moveedu.moveapp',
        iosUrl: 'https://apps.apple.com/us/app/moveedu-conecta/id6746497211',
        featured: true,
      },
      {
        id: 'ensina-mais',
        name: 'Ensina Mais',
        description: 'Plataforma mobile educacional (responsável) da MoveEdu — acompanhamento da jornada do aluno, comunicados.',
        techStack: ['React Native', 'Expo', 'TypeScript'],
        androidUrl: 'https://play.google.com/store/apps/details?id=com.moveedu.appensinapais',
        iosUrl: 'https://apps.apple.com/br/app/ensina-mais/id6737055451',
        featured: true,
      },
      {
        id: 'prepara-ia',
        name: 'Prepara IA',
        description: 'App oficial da rede Prepara IA para alunos — acesso a cursos, trilhas de aprendizado, emissão de certificados e acompanhamento acadêmico.',
        techStack: ['React Native', 'Expo', 'TypeScript', 'AI/ML'],
        androidUrl: 'https://play.google.com/store/apps/details?id=com.moveedu.prepara',
        iosUrl: 'https://apps.apple.com/us/app/prepara-ia/id6502964269',
        featured: true,
      },
      {
        id: 'microlins',
        name: 'Microlins',
        description: 'App oficial da rede Microlins para alunos — acesso a cursos, trilhas de aprendizado, emissão de certificados e acompanhamento acadêmico.',
        techStack: ['React Native', 'Expo', 'TypeScript'],
        androidUrl: 'https://play.google.com/store/apps/details?id=com.moveedu.microlins',
        iosUrl: 'https://apps.apple.com/us/app/microlins/id6503015878',
        featured: true,
      },
      {
        id: 'moveedu-analytics',
        name: 'MoveEdu Analytics',
        description: 'Plataforma web interna de analytics para acompanhamento de acessos, fluxos e ciclo de vida do usuário em apps mobile da MoveEdu.',
        techStack: ['React', 'TypeScript', 'NestJS', 'Google Analytics'],
        featured: true,
      },
      {
        id: 'servelar',
        name: 'ServeLar',
        description: 'App de gestão de serviços para a rede ServeLar — controle de ordem de serviços, orçamentos e acompanhamento do ciclo de vida do serviço.',
        techStack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'PostgreSQL'],
        featured: true,
        url: 'https://servelar.club',
        androidUrl: 'https://play.google.com/store/apps/details?id=com.servelarclub.servelar',
        // iosUrl: 'https://apps.apple.com/br/app/ensina-mais/id6737055451',
      },
      {
        id: 'sniff',
        name: 'Sniff',
        description: 'Projeto TypeScript com foco em qualidade de código e boas práticas de engenharia.',
        techStack: ['TypeScript'],
        url: 'https://github.com/ChagasDanilo/sniff',
        repoUrl: 'https://github.com/ChagasDanilo/sniff',
        featured: true,
      },
      {
        id: 'aciau',
        name: 'ACIAU',
        description: 'Projeto React Native para Associação Comercial, Industrial e Agropecuária de Uruaçu',
        techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 'acaic',
        name: 'ACAIC',
        description: 'Projeto React Native para Associação Comercial, Industrial e Agropecuária de Cristalina',
        techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
        featured: false,
      },
      {
        id: 'portfolio',
        name: 'Portfólio',
        description: 'Este portfolio — Next.js 16, Clean Architecture, Framer Motion e Tailwind CSS v4.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        url: 'https://danilochagas.com',
        repoUrl: 'https://github.com/ChagasDanilo',
        featured: true,
      },
    ];
  }

  getExperiences(): Experience[] {
    return [
      {
        id: 'moveedu',
        company: 'MoveEdu',
        role: 'Mobile & Full Stack Developer',
        period: 'jan 2023 — presente',
        description: [
          'Único responsável pela frente mobile da empresa: desenvolvo e mantenho 4 aplicativos (alunos e gestão de franquias) utilizados por 30 mil usuários ativos.',
          'Estruturei a estratégia de testes com Jest, React Testing Library e Maestro integrados ao CI (EAS Workflows), cobrindo fluxos críticos (login, financeiro, contratos) e reduzindo bugs em produção e horas de teste manual por release.',
          'Estruturei o pipeline de publicação contínua (EAS Workflows) para Google Play e App Store, reduzindo o ciclo de release de 2 dias para 4 horas, com 95% das releases publicadas sem rollback.',
          'Instrumentei eventos no Google Analytics que orientaram decisões de produto — ex.: redesign da tela de login que eliminou erros de navegação dos usuários.',
          'Estruturei a stack de observabilidade (Sentry, Crashlytics, Google Analytics), elevando o crash-free rate de 80% para 99%+.',
          'Introduzi Spec-Driven Development na equipe, definindo especificações formais antes da implementação, reduzindo retrabalho em 70% e alinhando expectativas entre produto e engenharia.',
          'Desenvolvi APIs BFF em Node.js/NestJS aplicando Clean Architecture e princípios SOLID.',
        ],
        techStack: ['React Native', 'Expo', 'TypeScript', 'NestJS', 'Node.js', 'EAS', 'Sentry', 'Jest', 'Maestro'],
        current: true,
      },
      {
        id: 'freelance',
        company: 'Autônomo',
        role: 'Full Stack Developer',
        period: 'mar 2020 — jan 2023',
        description: [
          'Atuação no ciclo completo de desenvolvimento: concepção, levantamento de requisitos com stakeholders, arquitetura e publicação nas lojas.',
          'Gestão de Benefícios Pet: app com autenticação segura, módulos de pagamento/assinatura e sistema de solicitação de serviços, com monitoramento ativo de falhas.',
          'Integração de Equipamento Médico: interface de controle para hardware de exames oculares com tratamento criterioso de dados sensíveis de saúde.',
          'Sistema de Ordem de Serviços: arquitetura offline-first com banco de dados local para gestão de orçamentos em áreas sem cobertura de internet.',
          'Plataforma para Associações Comerciais: desenvolvimento full stack (Mobile + API) para comunicação entre associações, comerciantes e clientes.',
        ],
        techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Offline-first', 'BLE/Hardware'],
        current: false,
      },
      {
        id: 'foco',
        company: 'Foco Sistemas e Consultoria',
        role: 'Full Stack Developer',
        period: 'dez 2017 — mar 2020',
        description: [
          'Desenvolvimento e manutenção de sistemas ERP legados para desktop e mobile em Delphi e Sybase.',
          'Otimização de aplicações para performance e escalabilidade em ambientes de produção.',
          'Análise e correção de bugs críticos, garantindo a estabilidade do código em sistemas legados.',
        ],
        techStack: ['Delphi', 'Sybase', 'SQL Server', 'PostgreSQL'],
        current: false,
      },
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'React Native', level: 'expert', category: 'mobile' },
      { name: 'Expo', level: 'expert', category: 'mobile' },
      { name: 'TypeScript', level: 'expert', category: 'mobile' },
      { name: 'React', level: 'advanced', category: 'frontend' },
      { name: 'Next.js', level: 'advanced', category: 'frontend' },
      { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },

      { name: 'Node.js', level: 'advanced', category: 'backend' },
      { name: 'NestJS', level: 'advanced', category: 'backend' },
      { name: 'Fastify', level: 'advanced', category: 'backend' },
      { name: 'REST APIs', level: 'advanced', category: 'backend' },
      { name: 'ORMs', level: 'advanced', category: 'backend' },
      { name: 'PostgreSQL', level: 'advanced', category: 'backend' },
      { name: 'MySQL', level: 'advanced', category: 'backend' },

      { name: 'Git', level: 'advanced', category: 'tools' },
      { name: 'Maestro', level: 'advanced', category: 'tools' },
      { name: 'Jest / Testing Library', level: 'advanced', category: 'tools' },
      { name: 'Vitest', level: 'advanced', category: 'tools' },
      { name: 'Google Analytics', level: 'advanced', category: 'tools' },
      { name: 'Google Play', level: 'advanced', category: 'tools' },
      { name: 'App Store', level: 'advanced', category: 'tools' },
      
      { name: 'Delphi', level: 'advanced', category: 'legacy' },
      { name: 'Sybase', level: 'advanced', category: 'legacy' },
      
      { name: 'Clean Architecture', level: 'advanced', category: 'architecture' },
      { name: 'Architecture Design', level: 'advanced', category: 'architecture' },
      { name: 'MVVM', level: 'advanced', category: 'architecture' },
      { name: 'SDD', level: 'advanced', category: 'architecture' },
      { name: 'TDD', level: 'advanced', category: 'architecture' },

      { name: 'GCP', level: 'intermediate', category: 'cloud' },
      { name: 'Firebase', level: 'advanced', category: 'cloud' },
      { name: 'Vercel', level: 'advanced', category: 'cloud' },
      { name: 'Supabase', level: 'advanced', category: 'cloud' },
      { name: 'Digital Ocean', level: 'advanced', category: 'cloud' },
      { name: 'AWS', level: 'intermediate', category: 'cloud' },
      
      { name: 'GitHub Actions', level: 'advanced', category: 'cicd' },
      { name: 'EAS Workflows', level: 'advanced', category: 'cicd' },
    ];
  }

  getCertificates(): Certificate[] {
    return [
      { id: '1', name: 'Expo e React Native', issuer: 'Coffstack', year: 2026 },
      { id: '2', name: 'Profissional TypeScript', issuer: 'Coffstack', year: 2026 },
      { id: '3', name: 'Profissional React Native', issuer: 'Coffstack', year: 2026 },
      { id: '4', name: 'Navegação com Expo Router', issuer: 'Rocketseat', year: 2025 },
      { id: '5', name: 'Figma', issuer: 'Rocketseat', year: 2023 },
      { id: '6', name: 'Clean Code', issuer: 'Rocketseat', year: 2023 },
      { id: '7', name: `Electron for Desktop Apps: The Complete Developer's Guide`, issuer: 'Udemy', year: 2022 },
      { id: '8', name: 'Curso de Design para Redes Sociais', issuer: 'Udemy', year: 2020 },
    ];
  }

  getEducation(): Education[] {
    return [
      {
        id: 'bsi',
        name: 'Bacharelado em Tecnologia da Informação / Sistemas da Informação',
        institution: 'Cruzeiro do Sul (EAD)',
        period: 'jun/2026',
        current: false,
      },
      {
        id: 'ifg',
        name: 'Ensino Técnico Integrado ao Ensino Médio — Informática',
        institution: 'Instituto Federal de Goiás',
        period: 'dez/2018',
        current: false,
      },
    ];
  }
}

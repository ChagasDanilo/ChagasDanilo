import type { IPortfolioRepository } from '@/src/domain/repositories/IPortfolioRepository';
import type { Profile } from '@/src/domain/entities/Profile';
import type { Project } from '@/src/domain/entities/Project';
import type { Experience } from '@/src/domain/entities/Experience';
import type { Skill } from '@/src/domain/entities/Skill';
import type { Certificate } from '@/src/domain/entities/Certificate';

export class StaticPortfolioRepository implements IPortfolioRepository {
  getProfile(): Profile {
    return {
      name: 'Danilo Chagas Amorim',
      title: 'Software Engineer',
      subtitle: 'Mobile & Full Stack Developer',
      bio: 'Especialista em React Native com foco em criar experiências mobile de alta performance. Construo aplicações que unem design refinado e arquitetura sólida — do app ao backend.',
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
        role: 'Software Engineer — Mobile',
        period: 'jan 2023 — atual',
        description: [
          'Desenvolvimento e manutenção do app mobile em React Native',
          'Arquitetura de features com Clean Architecture e padrões SOLID',
          'Integração com APIs RESTful e serviços de terceiros',
          'Code review e mentoria de desenvolvedores júnior',
        ],
        techStack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'React'],
        current: true,
      },
      {
        id: 'freelance',
        company: 'Freelance',
        role: 'Desenvolvedor Mobile & Full Stack',
        period: 'mar 2020 — dez 2022',
        description: [
          'Ciclo completo de desenvolvimento: levantamento de requisitos, arquitetura, entrega e publicação nas lojas (Google Play e App Store)',
          'Gestão de Benefícios Pet: app com autenticação, módulos de pagamento/assinatura e monitoramento ativo de falhas',
          'Integração de Equipamento Médico: interface de controle e comunicação direta com hardware de exames oculares, com segurança extrema no tráfego de dados de saúde',
          'Sistema de Ordem de Serviços: arquitetura offline-first com banco de dados local para gestão de orçamentos sem internet',
          'Plataforma para Associações Comerciais: full stack (Mobile + API) para comunicação entre associações, comerciantes e clientes',
        ],
        techStack: ['React Native', 'TypeScript', 'Node.js', 'Offline-first', 'BLE/Hardware'],
        current: false,
      },
      {
        id: 'foco',
        company: 'Foco Sistemas e Consultoria',
        role: 'Full Stack Developer',
        period: 'dez 2017 — mar 2020',
        description: [
          'Desenvolvimento e manutenção de sistemas ERP legados para desktop em Delphi',
          'Integração com base de dados Sybase, SQL Server e PostgreSQL',
          'Desenvolvimento de relatórios gerenciais',
        ],
        techStack: ['Delphi', 'Sybase', 'SQL', 'PostgreSQL'],
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
      
      { name: 'Delphi', level: 'advanced', category: 'legacy' },
      { name: 'Sybase', level: 'advanced', category: 'legacy' },
      
      { name: 'Clean Architecture', level: 'advanced', category: 'architecture' },
      { name: 'Architecture Design', level: 'advanced', category: 'architecture' },
      { name: 'MVVM', level: 'advanced', category: 'architecture' },
      { name: 'SDD', level: 'advanced', category: 'architecture' },
      { name: 'TDD', level: 'advanced', category: 'architecture' },

      { name: 'GCP', level: 'intermediate', category: 'cloud' },
      { name: 'Vercel', level: 'advanced', category: 'cloud' },
      { name: 'Supabase', level: 'advanced', category: 'cloud' },
      { name: 'Digital Ocean', level: 'advanced', category: 'cloud' },
      { name: 'AWS', level: 'intermediate', category: 'cloud' },
      
      { name: 'GitHub Actions', level: 'advanced', category: 'cicd' },
      { name: 'EAS Workflows', level: 'advanced', category: 'cicd' },
      { name: 'Vercel', level: 'advanced', category: 'cicd' },
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
}

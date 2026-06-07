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
      location: 'Crixás, GO — Brasil',
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
        id: 'sniff',
        name: 'Sniff',
        description: 'Projeto TypeScript com foco em qualidade de código e boas práticas de engenharia.',
        techStack: ['TypeScript'],
        url: 'https://github.com/ChagasDanilo/sniff',
        repoUrl: 'https://github.com/ChagasDanilo/sniff',
        featured: true,
      },
      {
        id: 'moveedu-app',
        name: 'MoveEdu App',
        description: 'Aplicativo mobile para a plataforma MoveEdu, conectando alunos e professores com foco em educação de movimento.',
        techStack: ['React Native', 'TypeScript', 'Node.js'],
        url: '#',
        featured: true,
      },
      {
        id: 'portfolio',
        name: 'Portfolio',
        description: 'Este portfolio — construído com Next.js 16, Clean Architecture, Framer Motion e Tailwind CSS v4.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        url: '#',
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
        period: '2023 — atual',
        description: [
          'Desenvolvimento e manutenção do app mobile em React Native',
          'Arquitetura de features com Clean Architecture e padrões SOLID',
          'Integração com APIs RESTful e serviços de terceiros',
          'Code review e mentoria de desenvolvedores júnior',
        ],
        techStack: ['React Native', 'TypeScript', 'Node.js', 'React'],
        current: true,
      },
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'React Native', level: 'expert', category: 'mobile' },
      { name: 'TypeScript', level: 'expert', category: 'mobile' },
      { name: 'React', level: 'advanced', category: 'frontend' },
      { name: 'Next.js', level: 'advanced', category: 'frontend' },
      { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
      { name: 'Node.js', level: 'advanced', category: 'backend' },
      { name: 'REST APIs', level: 'advanced', category: 'backend' },
      { name: 'Clean Architecture', level: 'advanced', category: 'tools' },
      { name: 'Git', level: 'advanced', category: 'tools' },
      { name: 'Jest / Testing Library', level: 'intermediate', category: 'tools' },
    ];
  }

  getCertificates(): Certificate[] {
    return [
      { id: '1', name: 'React Native — Avançado', issuer: 'Rocketseat', year: 2024 },
      { id: '2', name: 'TypeScript Completo', issuer: 'Udemy', year: 2023 },
      { id: '3', name: 'Node.js do Zero à Maestria', issuer: 'Udemy', year: 2023 },
      { id: '4', name: 'Clean Code & Clean Architecture', issuer: 'Branas', year: 2024 },
    ];
  }
}

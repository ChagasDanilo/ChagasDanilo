# Danilo Chagas Amorim

**Software Engineer — Mobile & Full Stack**  
Goiás, Brasil · [LinkedIn](https://www.linkedin.com/in/danilo-chagas-amorim/) · [danilochagas009@gmail.com](mailto:danilochagas009@gmail.com)

---

Especialista em React Native com foco em criar experiências mobile de alta performance. Construo aplicações que unem design refinado e arquitetura sólida — do app ao backend.

Atualmente na **MoveEdu**, desenvolvendo e arquitetando apps publicados nas lojas com centenas de milhares de usuários.

---

## Stack

**Mobile**  
React Native · Expo · TypeScript · EAS

**Frontend**  
React · Next.js · Tailwind CSS

**Backend**  
Node.js · NestJS · Fastify · PostgreSQL · REST APIs

**Cloud & Deploy**  
Digital Ocean · Supabase · GCP · AWS · Vercel · GitHub Actions · EAS Workflows

**Arquitetura**  
Clean Architecture · SOLID · TDD · MVVM

---

## Apps publicados

| App | Google Play | App Store |
|-----|-------------|-----------|
| MoveEdu Conecta | [Play](https://play.google.com/store/apps/details?id=com.moveedu.moveapp) | [Store](https://apps.apple.com/us/app/moveedu-conecta/id6746497211) |
| Ensina Mais | [Play](https://play.google.com/store/apps/details?id=com.moveedu.appensinapais) | [Store](https://apps.apple.com/br/app/ensina-mais/id6737055451) |
| Prepara IA | [Play](https://play.google.com/store/apps/details?id=com.moveedu.prepara) | [Store](https://apps.apple.com/us/app/prepara-ia/id6502964269) |
| Microlins | [Play](https://play.google.com/store/apps/details?id=com.moveedu.microlins) | [Store](https://apps.apple.com/us/app/microlins/id6503015878) |
| ServeLar | [Play](https://play.google.com/store/apps/details?id=com.servelarclub.servelar) | — |

---

## Este repositório

Portfolio pessoal construído com arquitetura limpa, animações fluidas e design dark.

**Tech:** Next.js 16 · TypeScript · Tailwind CSS v4 · Framer Motion · Clean Architecture

```bash
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint     # ESLint
```

### Arquitetura

```
src/
  domain/          # entidades, value objects, interfaces de repositório
  application/     # use cases, DTOs, ports
  infrastructure/  # repositórios concretos, adapters HTTP
  presentation/    # Next.js App Router, componentes React, hooks
```

Dependências fluem estritamente para dentro: `Presentation → Application → Domain ← Infrastructure`

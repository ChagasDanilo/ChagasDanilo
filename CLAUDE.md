# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # start dev server on http://localhost:3000
pnpm build        # production build
pnpm start        # run production build
pnpm lint         # run ESLint
```

No test runner is configured yet. When adding tests, prefer **Vitest** with **Testing Library**.

---

## Architecture: Clean Architecture

This project follows Clean Architecture. Dependency direction is strictly inward:

```
Presentation → Application → Domain ← Infrastructure
```

### Layer structure

```
src/
  domain/
    entities/         # pure domain models (no framework deps)
    value-objects/    # immutable primitives with validation
    repositories/     # interfaces (ports) — never implementations
    services/         # domain services with business invariants
    errors/           # domain-specific error classes
  application/
    use-cases/        # one class per use case, orchestrates domain
    dtos/             # plain input/output shapes crossing layer boundaries
    ports/            # interfaces for external services (email, storage, etc.)
  infrastructure/
    repositories/     # concrete implementations of domain/repositories
    services/         # concrete implementations of application/ports
    http/             # fetch wrappers, third-party SDK adapters
  presentation/
    app/              # Next.js App Router (pages, layouts, loading, error)
    components/       # React components (ui/ for primitives, features/ for composed)
    hooks/            # custom React hooks — call use cases, never domain directly
    view-models/      # data shaped for the UI, mapped from DTOs
```

> **Rule:** `presentation` and `infrastructure` know about `application` and `domain`. `application` knows only `domain`. `domain` knows nothing outside itself.

---

## Key conventions

### Domain layer
- Entities expose behavior, not just data. Never expose raw setters.
- Value objects are immutable; validation lives in the constructor and throws a domain error on failure.
- Repository interfaces live in `domain/repositories/` and return domain entities, never DB models.

### Application layer
- Each use case is a class with a single `execute(input: InputDTO): Promise<OutputDTO>` method.
- Use cases receive dependencies via constructor injection (interfaces, not concretions).
- No framework imports inside `domain/` or `application/`.

### Infrastructure layer
- Repository implementations map between domain entities and persistence models.
- HTTP adapters wrap external APIs; they are injected into use cases via the port interface.

### Presentation layer
- Next.js Server Components call use cases directly (server-side DI).
- Client Components use custom hooks which call use cases via a client-side DI container or Server Actions.
- Components receive data as props; no component fetches data or instantiates use cases directly.
- Feature components live in `components/features/<feature-name>/`; reusable primitives in `components/ui/`.

### Design patterns in use
- **Repository Pattern** — all data access behind interfaces in `domain/repositories/`
- **Factory** — complex entity creation lives in dedicated factory classes, not constructors
- **Adapter** — infrastructure wraps third-party SDKs behind port interfaces
- **DTO** — layer boundaries crossed only with plain data objects, never domain entities
- **Dependency Injection** — constructor injection; no service locators or global singletons

---

## TypeScript

- Strict mode is on (`"strict": true`). Never use `any`; prefer `unknown` and narrow explicitly.
- Path alias `@/*` maps to the repo root. Use it for all non-relative imports.
- Prefer `type` over `interface` for DTOs and view-models; `interface` for contracts/ports.

## Tailwind CSS v4

This project uses Tailwind v4 via `@tailwindcss/postcss`. Configuration is CSS-first (no `tailwind.config.js`). Theme tokens and custom utilities are defined in `app/globals.css` using `@theme`.

## Next.js version note

This project runs Next.js **16.x** — significantly newer than most training data. Before implementing any Next.js feature, read the relevant guide in `node_modules/next/dist/docs/`. APIs and conventions may differ from Next.js 14/15.

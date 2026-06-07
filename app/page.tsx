import { StaticPortfolioRepository } from '@/src/infrastructure/repositories/StaticPortfolioRepository';
import { GetPortfolioDataUseCase } from '@/src/application/use-cases/GetPortfolioDataUseCase';
import { Navbar } from '@/src/presentation/components/features/navbar/Navbar';
import { HeroSection } from '@/src/presentation/components/features/hero/HeroSection';
import { AboutSection } from '@/src/presentation/components/features/about/AboutSection';
import { SkillsSection } from '@/src/presentation/components/features/skills/SkillsSection';
import { ExperienceSection } from '@/src/presentation/components/features/experience/ExperienceSection';
import { ProjectsSection } from '@/src/presentation/components/features/projects/ProjectsSection';
import { CertificatesSection } from '@/src/presentation/components/features/certificates/CertificatesSection';
import { ContactSection } from '@/src/presentation/components/features/contact/ContactSection';

export default function Home() {
  const repository = new StaticPortfolioRepository();
  const useCase = new GetPortfolioDataUseCase(repository);
  const data = useCase.execute();

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection profile={data.profile} />
      <AboutSection profile={data.profile} />
      <SkillsSection skills={data.skills} />
      <ExperienceSection experiences={data.experiences} />
      <ProjectsSection projects={data.projects} />
      <CertificatesSection certificates={data.certificates} />
      <ContactSection profile={data.profile} />
    </main>
  );
}

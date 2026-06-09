import type { IPortfolioRepository } from '@/src/domain/repositories/IPortfolioRepository';
import type { Profile } from '@/src/domain/entities/Profile';
import type { Project } from '@/src/domain/entities/Project';
import type { Experience } from '@/src/domain/entities/Experience';
import type { Skill } from '@/src/domain/entities/Skill';
import type { Certificate } from '@/src/domain/entities/Certificate';
import type { Education } from '@/src/domain/entities/Education';

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  experiences: Experience[];
  skills: Skill[];
  certificates: Certificate[];
  education: Education[];
}

export class GetPortfolioDataUseCase {
  constructor(private readonly repository: IPortfolioRepository) {}

  execute(): PortfolioData {
    return {
      profile: this.repository.getProfile(),
      projects: this.repository.getProjects(),
      experiences: this.repository.getExperiences(),
      skills: this.repository.getSkills(),
      certificates: this.repository.getCertificates(),
      education: this.repository.getEducation(),
    };
  }
}

import type { Profile } from '../entities/Profile';
import type { Project } from '../entities/Project';
import type { Experience } from '../entities/Experience';
import type { Skill } from '../entities/Skill';
import type { Certificate } from '../entities/Certificate';
import type { Education } from '../entities/Education';

export interface IPortfolioRepository {
  getProfile(): Profile;
  getProjects(): Project[];
  getExperiences(): Experience[];
  getSkills(): Skill[];
  getCertificates(): Certificate[];
  getEducation(): Education[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  url?: string;
  repoUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
  featured: boolean;
}

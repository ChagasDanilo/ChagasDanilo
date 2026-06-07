export interface SocialLinks {
  github: string;
  linkedin: string;
  email?: string;
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  avatarUrl: string;
  location: string;
  company: string;
  socialLinks: SocialLinks;
}

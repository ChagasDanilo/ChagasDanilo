export type SkillLevel = 'expert' | 'advanced' | 'intermediate';

export interface Skill {
  name: string;
  level: SkillLevel;
  category: 'mobile' | 'frontend' | 'backend' | 'tools';
}

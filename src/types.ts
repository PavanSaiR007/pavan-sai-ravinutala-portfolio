export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  technologies: string[];
  category: 'ai' | 'fullstack' | 'web' | 'featured';
  featured?: boolean;
  highlight?: string;
  githubUrl?: string;
  demoType?: 'orbit-iq' | 'campus-radar' | 'f1-tracker';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  score: string;
  scoreLabel: string;
  semesters?: { semester: string; gpa: number }[];
  details?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeType?: 'ai' | 'network' | 'code' | 'lang' | 'hackathon';
  year?: string;
  highlight?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  category: 'Hackathon' | 'Record' | 'Club' | 'Sports';
  description: string;
  year?: string;
}

export interface LanguageSkill {
  name: string;
  proficiency: string;
  level: number; // percentage or scale
}

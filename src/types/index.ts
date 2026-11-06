export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'Frontend' | 'AI & Web';
  description: string;
  longDescription: string;
  highlights: string[];
  techStack: string[];
  featured: boolean;
  githubUrl?: string; // Optional real link, placeholder if undefined
  liveUrl?: string;   // Optional real demo link
  badge?: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    keyFeature: string;
  };
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    tag?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: 'Technical' | 'Leadership';
  credentialId?: string;
  description: string;
  icon: string;
}

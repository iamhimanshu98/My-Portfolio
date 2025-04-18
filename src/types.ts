export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  grade: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'database' | 'tools';
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
  url: string;
}

export interface ContactLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}
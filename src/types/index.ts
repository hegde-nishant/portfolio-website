export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string;
  funFact?: string;
  profilePhoto: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string; // or "Present"
  summary: string;
  techStack?: string[];
}

export interface Education {
  id: string;
  degree: string; // "Masters" or "Bachelors"
  branch: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
}

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  shortDescription: string;
  overview: string;
  problemStatement: string;
  approach: string;
  results: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  codeSnippets?: CodeSnippet[];
  visualizations?: string[];
  imageCredit?: ImageCredit;
}

export interface ImageCredit {
  author: string;
  source: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
}

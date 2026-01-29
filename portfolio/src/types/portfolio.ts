// types/portfolio.ts

export interface ContactInfo {
  phone: string;
  phoneLink: string;
  email: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
  discord: string;
  blog: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  featured: boolean;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  url?: string;
  category: 'technical' | 'professional' | 'installation';
}

export interface Publication {
  id: string;
  title: string;
  url: string;
  description: string;
  topics: string[];
  publishDate?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  url?: string;
  description?: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  color: "primary" | "secondary" | "accent";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    summary: string;
    contact: ContactInfo;
  };
  skills: Skill[];
  workExperience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  awards: Award[];
  languages: string[];
  resumeUrl: string;
  cvUrl: string;
  pricingPlans: PricingPlan[];
  featuredProjects: Project[];
}

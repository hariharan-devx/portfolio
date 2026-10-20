export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
  isDynamic?: boolean;
}

export interface SkillItem {
  name: string;
  icon?: string;
  category: 'Frontend' | 'Backend' | 'Databases' | 'DevOps & Tools' | 'Security & Quality' | 'Additional';
  confirmed: boolean; // Confirmed skills show in main skills list; unconfirmed wait for confirmation
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string; // ISO date string or "YYYY-MM"
  endDate?: string;
  periodLabel?: string;
  isCurrent: boolean;
  achievements: string[];
  techStack: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  problem: string;
  myRole: string;
  solution: string;
  outcome: string;
  metrics?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Full Stack' | 'Backend / Enterprise' | 'Frontend' | 'API & Microservices';
  imagePlaceholder?: {
    gradient: string;
    icon: string;
    previewText: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    typedRoles: string[];
    tagline: string;
    story: string[];
    location: string;
    relocationNote: string;
    openToWork: boolean;
    availabilityStatus: string;
    resumeUrl: string;
    startDate: string; // e.g. "2021-03-01" for dynamic experience computation
  };
  socials: SocialLinks;
  stats: StatItem[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  testimonials: {
    enabled: boolean;
    items: TestimonialItem[];
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    typicalReplyTime: string;
    formspreeEndpoint: string;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    ogImage: string;
    keywords: string[];
  };
}

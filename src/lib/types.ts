export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  process: ProcessStep[];
  faqs: FAQ[];
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  year: string;
  client?: string;
  link?: string;
  github?: string;
  results?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  image: string;
}

export interface Author {
  name: string;
  title: string;
  avatar: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  type: "open-source" | "product" | "sdk" | "api" | "tool";
  technologies: string[];
  features: string[];
  github?: string;
  docs?: string;
  demo?: string;
  status: "stable" | "beta" | "alpha" | "development";
}

export interface TeamMember {
  name: string;
  title: string;
  description: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  isDemo: boolean;
}

export interface NavItem {
  name: string;
  href: string;
  dropdown?: NavItem[];
}

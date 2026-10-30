import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "enterprise-analytics-platform",
    title: "Enterprise Analytics Platform",
    category: "Custom Software",
    shortDescription: "A comprehensive real-time analytics platform for enterprise data visualization and business intelligence.",
    description: "Built a sophisticated analytics platform that processes millions of events per day, providing real-time insights through interactive dashboards. The platform integrates with 15+ data sources and serves 500+ enterprise users.",
    image: "/images/projects/analytics-platform.jpg",
    technologies: ["React", "Next.js", "TypeScript", "Python", "PostgreSQL", "Redis", "AWS", "D3.js"],
    featured: true,
    year: "2024",
    client: "Enterprise Client (Demo)",
    results: [
      "40% reduction in report generation time",
      "Processing 2M+ events per day",
      "99.9% uptime SLA achieved",
    ],
  },
  {
    id: "2",
    slug: "fintech-mobile-app",
    title: "FinTech Mobile Application",
    category: "Mobile App",
    shortDescription: "A secure mobile banking application with AI-powered financial insights and real-time transaction processing.",
    description: "Developed a comprehensive mobile banking application with advanced security features, real-time notifications, AI-driven spending analysis, and seamless payment integration.",
    image: "/images/projects/fintech-app.jpg",
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Plaid API", "AWS", "Firebase"],
    featured: true,
    year: "2024",
    client: "FinTech Startup (Demo)",
    results: [
      "50,000+ downloads in first month",
      "4.8 star App Store rating",
      "Bank-grade security certification",
    ],
  },
  {
    id: "3",
    slug: "ecommerce-platform",
    title: "Premium E-commerce Platform",
    category: "Web Development",
    shortDescription: "A high-performance, scalable e-commerce platform with AI-powered product recommendations.",
    description: "Built a full-featured e-commerce platform with advanced search, personalized recommendations, multi-currency support, and seamless payment processing.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "Elasticsearch", "AWS CloudFront"],
    featured: true,
    year: "2023",
    client: "Retail Brand (Demo)",
    results: [
      "35% increase in conversion rate",
      "200ms average page load time",
      "99.95% uptime",
    ],
  },
  {
    id: "4",
    slug: "ai-content-platform",
    title: "AI Content Generation Platform",
    category: "AI Solutions",
    shortDescription: "An enterprise AI platform for automated content generation, editing, and brand voice management.",
    description: "Created a sophisticated AI content platform leveraging large language models for automated content creation, brand voice consistency, and multi-language support.",
    image: "/images/projects/ai-content.jpg",
    technologies: ["Python", "OpenAI API", "LangChain", "FastAPI", "React", "PostgreSQL", "Redis"],
    featured: false,
    year: "2024",
    client: "Media Company (Demo)",
    results: [
      "10x faster content production",
      "92% brand voice consistency score",
      "15 languages supported",
    ],
  },
  {
    id: "5",
    slug: "healthcare-telemedicine",
    title: "Telemedicine Platform",
    category: "Custom Software",
    shortDescription: "HIPAA-compliant telemedicine platform enabling secure video consultations and patient management.",
    description: "Developed a comprehensive telemedicine platform with secure video consultations, electronic health records integration, prescription management, and appointment scheduling.",
    image: "/images/projects/telemedicine.jpg",
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS", "HIPAA Compliance", "Stripe"],
    featured: false,
    year: "2023",
    client: "Healthcare Provider (Demo)",
    results: [
      "HIPAA compliance certification",
      "10,000+ consultations facilitated",
      "4.9 patient satisfaction score",
    ],
  },
  {
    id: "6",
    slug: "logistics-management",
    title: "Logistics Management System",
    category: "Custom Software",
    shortDescription: "Real-time logistics tracking and fleet management system with predictive route optimization.",
    description: "Built an intelligent logistics platform with real-time GPS tracking, AI-powered route optimization, automated dispatch, and comprehensive reporting.",
    image: "/images/projects/logistics.jpg",
    technologies: ["React", "Node.js", "Google Maps API", "Machine Learning", "PostgreSQL", "Kafka", "Docker"],
    featured: false,
    year: "2023",
    client: "Logistics Company (Demo)",
    results: [
      "25% reduction in delivery times",
      "30% fuel cost savings",
      "Real-time tracking for 500+ vehicles",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

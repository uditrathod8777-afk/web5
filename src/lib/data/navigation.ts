import { NavItem } from "../types";

export const navItems: NavItem[] = [
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Custom Software", href: "/services/custom-software" },
      { name: "UI/UX Design", href: "/services/ui-ux-design" },
      { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "API Development", href: "/services/api-development" },
      { name: "DevOps Solutions", href: "/services/devops" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "IT Consulting", href: "/services/it-consulting" },
    ],
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

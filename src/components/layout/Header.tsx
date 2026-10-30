"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X, ChevronDown, ExternalLink } from "lucide-react";

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "Custom Software", href: "/services/custom-software" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
  { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  { name: "API Development", href: "/services/api-development" },
  { name: "DevOps", href: "/services/devops" },
  { name: "Cybersecurity", href: "/services/cybersecurity" },
  { name: "IT Consulting", href: "/services/it-consulting" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/about#team" },
  { name: "Our Story", href: "/about#story" },
  { name: "Contact", href: "/contact" },
];

const navLinks = [
  { name: "Services", href: "/services", dropdown: services },
  { name: "Open Source", href: "/open-source" },
  { name: "Products", href: "/products" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Company", href: "/about", dropdown: company },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080A0C]/90 backdrop-blur-xl border-b border-[#29272A]/60 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="url(#bronzeGrad)" strokeWidth="1.5" fill="rgba(166,108,69,0.08)"/>
                <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" stroke="url(#bronzeGrad)" strokeWidth="1" fill="rgba(166,108,69,0.12)"/>
                <circle cx="18" cy="18" r="4" fill="url(#bronzeGrad)"/>
                <defs>
                  <linearGradient id="bronzeGrad" x1="0" y1="0" x2="36" y2="36">
                    <stop offset="0%" stopColor="#75472F"/>
                    <stop offset="50%" stopColor="#A66C45"/>
                    <stop offset="100%" stopColor="#D69A69"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#F5F3F0] group-hover:text-white transition-colors">
              Nexo<span className="text-[#A66C45]">rant</span>
            </span>
          </Link>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname.startsWith(link.href)
                        ? "text-[#C58B55]"
                        : "text-[#A5A5AA] hover:text-[#F5F3F0]"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? "text-[#C58B55]"
                        : "text-[#A5A5AA] hover:text-[#F5F3F0]"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-56 bg-[#101114] border border-[#29272A] rounded-xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center px-3 py-2.5 rounded-lg text-sm text-[#A5A5AA] hover:text-[#F5F3F0] hover:bg-[#141518] transition-all duration-150 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#29272A] group-hover:bg-[#A66C45] mr-3 transition-colors flex-shrink-0"></span>
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/nexorant"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#77777D] hover:text-[#F5F3F0] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <Link
              href="/contact"
              className="relative px-5 py-2.5 text-sm font-semibold text-[#F5F3F0] rounded-lg overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #75472F, #A66C45)" }}
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#A5A5AA] hover:text-[#F5F3F0] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#080A0C]/95 backdrop-blur-xl border-t border-[#29272A]/60 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "text-[#C58B55] bg-[#141518]"
                        : "text-[#A5A5AA] hover:text-[#F5F3F0] hover:bg-[#101114]"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 rounded-lg text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-[#29272A] flex flex-col gap-3">
                <a
                  href="https://github.com/nexorant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-[#A5A5AA] hover:text-[#F5F3F0]"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-3 text-center text-sm font-semibold text-[#F5F3F0] rounded-lg"
                  style={{ background: "linear-gradient(135deg, #75472F, #A66C45)" }}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

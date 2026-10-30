import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile Apps", href: "/services/mobile-app-development" },
    { name: "Custom Software", href: "/services/custom-software" },
    { name: "UI/UX Design", href: "/services/ui-ux-design" },
    { name: "AI & ML", href: "/services/ai-machine-learning" },
    { name: "Cloud Solutions", href: "/services/cloud-solutions" },
  ],
  products: [
    { name: "Open Source", href: "/open-source" },
    { name: "Developer Tools", href: "/products" },
    { name: "SDKs & APIs", href: "/products#apis" },
    { name: "Documentation", href: "/products#docs" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#080A0C] border-t border-[#29272A]/60 overflow-hidden">
      {/* Bronze top glow */}
      <div className="absolute top-0 left-1/4 w-96 h-px bg-gradient-to-r from-transparent via-[#A66C45]/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-8 h-8">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="18,2 34,10 34,26 18,34 2,26 2,10" stroke="url(#footerBronze)" strokeWidth="1.5" fill="rgba(166,108,69,0.08)"/>
                  <polygon points="18,8 28,13 28,23 18,28 8,23 8,13" stroke="url(#footerBronze)" strokeWidth="1" fill="rgba(166,108,69,0.12)"/>
                  <circle cx="18" cy="18" r="4" fill="url(#footerBronze)"/>
                  <defs>
                    <linearGradient id="footerBronze" x1="0" y1="0" x2="36" y2="36">
                      <stop offset="0%" stopColor="#75472F"/>
                      <stop offset="50%" stopColor="#A66C45"/>
                      <stop offset="100%" stopColor="#D69A69"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-lg font-bold text-[#F5F3F0]">
                Nexo<span className="text-[#A66C45]">rant</span>
              </span>
            </Link>
            <p className="text-sm text-[#77777D] leading-relaxed max-w-sm">
              We are a premium international technology and software engineering company, delivering world-class digital solutions that transform businesses and drive innovation.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/nexorant", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com/nexorant", label: "Twitter" },
                { icon: Linkedin, href: "https://linkedin.com/company/nexorant", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#101114] border border-[#29272A] text-[#77777D] hover:text-[#A66C45] hover:border-[#65503F] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            {/* Contact */}
            <div className="space-y-3">
              <a href="mailto:hello@nexorant.com" className="flex items-center gap-3 text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors">
                <Mail size={15} className="text-[#A66C45] flex-shrink-0" />
                hello@nexorant.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors">
                <Phone size={15} className="text-[#A66C45] flex-shrink-0" />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-sm text-[#77777D]">
                <MapPin size={15} className="text-[#A66C45] flex-shrink-0" />
                Global Remote &amp; International Offices
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F3F0] uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#A66C45]">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F3F0] uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#A66C45]">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-[#F5F3F0] uppercase tracking-wider mb-5">Products</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors flex items-center gap-1 group">
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-[#A66C45]">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Newsletter teaser */}
            <div className="p-4 bg-[#101114] border border-[#29272A] rounded-xl">
              <p className="text-xs text-[#77777D] mb-3">Stay updated with our latest work</p>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-xs font-medium text-[#A66C45] hover:text-[#C58B55] transition-colors"
              >
                Get in Touch <ArrowUpRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-[#29272A]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#77777D]">
            © {new Date().getFullYear()} Nexorant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-[#77777D] hover:text-[#A5A5AA] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

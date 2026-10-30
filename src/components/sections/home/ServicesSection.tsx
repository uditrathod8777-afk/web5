"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Smartphone, Code2, Palette, Brain, Cloud, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, scalable web applications built with React, Next.js, and TypeScript. From MVPs to enterprise platforms.",
    href: "/services/web-development",
    color: "bronze",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    href: "/services/mobile-app-development",
    color: "teal",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions designed precisely for your unique business workflows and challenges.",
    href: "/services/custom-software",
    color: "bronze",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design that transforms complex problems into intuitive, beautiful digital experiences.",
    href: "/services/ui-ux-design",
    color: "teal",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by cutting-edge AI to automate processes and unlock data insights.",
    href: "/services/ai-machine-learning",
    color: "bronze",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable, secure cloud infrastructure and migration services on AWS, GCP, and Azure.",
    href: "/services/cloud-solutions",
    color: "teal",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-[#0C0D10] relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#29272A] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We Build"
            title="Full-Spectrum"
            highlight="Technology Services"
            description="From ideation to deployment and beyond — we provide comprehensive technology solutions that drive business growth."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBronze = service.color === "bronze";
            return (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <Link href={service.href} className="block group h-full">
                  <div className="h-full p-7 bg-[#141518] border border-[#29272A] rounded-2xl hover:border-[#65503F] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 relative overflow-hidden">
                    {/* Hover glow */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: isBronze
                          ? "radial-gradient(circle at 80% 20%, rgba(166,108,69,0.12) 0%, transparent 70%)"
                          : "radial-gradient(circle at 80% 20%, rgba(13,119,117,0.12) 0%, transparent 70%)",
                      }}
                    />

                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                      style={{
                        background: isBronze
                          ? "rgba(166,108,69,0.1)"
                          : "rgba(13,119,117,0.1)",
                        border: isBronze
                          ? "1px solid rgba(166,108,69,0.2)"
                          : "1px solid rgba(13,119,117,0.2)",
                      }}
                    >
                      <Icon
                        size={22}
                        style={{ color: isBronze ? "#A66C45" : "#0D7775" }}
                      />
                    </div>

                    <h3 className="text-lg font-semibold text-[#F5F3F0] mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#77777D] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div
                      className="flex items-center gap-2 text-xs font-medium"
                      style={{ color: isBronze ? "#A66C45" : "#0D7775" }}
                    >
                      <span>Learn More</span>
                      <ArrowUpRight
                        size={13}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#A5A5AA] border border-[#29272A] rounded-xl hover:border-[#65503F] hover:text-[#F5F3F0] transition-all duration-200"
            >
              View All Services
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

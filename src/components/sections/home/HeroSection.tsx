"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Layers } from "lucide-react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/three-dimensional/HeroScene"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full animate-spin-slow"
            >
              <polygon
                points="150,20 270,85 270,215 150,280 30,215 30,85"
                fill="none"
                stroke="url(#heroGrad)"
                strokeWidth="1.5"
              />
              <polygon
                points="150,50 240,100 240,200 150,250 60,200 60,100"
                fill="rgba(166,108,69,0.05)"
                stroke="url(#heroGrad)"
                strokeWidth="1"
              />
              <circle
                cx="150"
                cy="150"
                r="60"
                fill="rgba(13,119,117,0.08)"
                stroke="rgba(13,119,117,0.3)"
                strokeWidth="1"
              />
              <circle
                cx="150"
                cy="150"
                r="30"
                fill="rgba(166,108,69,0.15)"
                stroke="url(#heroGrad)"
                strokeWidth="1.5"
              />
              <defs>
                <linearGradient
                  id="heroGrad"
                  x1="0"
                  y1="0"
                  x2="300"
                  y2="300"
                >
                  <stop offset="0%" stopColor="#75472F" />
                  <stop offset="50%" stopColor="#A66C45" />
                  <stop offset="100%" stopColor="#D69A69" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    ),
  }
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#080A0C]">
      {/* Hexagonal background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpath d='M30 0L60 17.32V34.64L30 52L0 34.64V17.32L30 0Z' fill='none' stroke='%23A66C45' stroke-width='0.7'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 52px",
        }}
      />

      {/* Bronze radial glow — upper right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, rgba(166,108,69,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Teal radial glow — lower right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 80%, rgba(13,119,117,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080A0C] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-8"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#A66C45]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A66C45]">
                Next-Generation Technology Partner
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-7"
            >
              <span className="text-[#F5F3F0]">Empower</span>{" "}
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #A66C45, #C58B55, #D69A69)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Innovation.
              </span>
              <br />
              <span className="text-[#F5F3F0]">Engineer</span>{" "}
              <span className="text-[#F5F3F0]">Excellence.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-[#A5A5AA] leading-relaxed max-w-xl mb-10"
            >
              We build powerful digital experiences, scalable software
              solutions, and innovative technology products that help businesses
              transform their ideas into reality.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-white rounded-xl transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#A66C45]/20"
                style={{ background: "linear-gradient(135deg, #75472F, #A66C45)" }}
              >
                <Calendar size={16} />
                Book a Consultation
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 px-7 py-4 text-sm font-semibold text-[#F5F3F0] rounded-xl border border-[#29272A] hover:border-[#65503F] hover:bg-[#141518] transition-all duration-200"
              >
                <Layers size={16} />
                Explore Our Services
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="mt-14 pt-10 border-t border-[#29272A]/60 grid grid-cols-3 gap-6"
            >
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "12+", label: "Countries Served" },
                { value: "98%", label: "Client Satisfaction" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{
                      background: "linear-gradient(135deg, #A66C45, #D69A69)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <div className="text-xs text-[#77777D] font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center h-[400px] lg:h-[600px]"
          >
            {/* Orbit ring decoration */}
            <div
              className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-[#29272A]/40"
              style={{ animation: "spin 30s linear infinite" }}
            />
            <div
              className="absolute w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full border border-[#A66C45]/10"
              style={{ animation: "spin 20s linear infinite reverse" }}
            />

            {/* 3D Canvas */}
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]">
              <HeroScene />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-0 lg:-left-8 px-4 py-3 rounded-xl bg-[#101114] border border-[#29272A] flex items-center gap-3 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-[#0D7775] animate-pulse" />
              <span className="text-xs font-medium text-[#A5A5AA]">
                Full-Stack Engineering
              </span>
            </motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-12 right-0 lg:-right-8 px-4 py-3 rounded-xl bg-[#101114] border border-[#29272A] flex items-center gap-3 shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-[#A66C45] animate-pulse" />
              <span className="text-xs font-medium text-[#A5A5AA]">
                AI & Cloud Solutions
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#080A0C] to-transparent pointer-events-none" />
    </section>
  );
}

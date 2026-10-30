import HeroSection from "@/components/sections/home/HeroSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import AboutSection from "@/components/sections/home/AboutSection";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import FeaturedProjects from "@/components/sections/home/FeaturedProjects";
import TechStack from "@/components/sections/home/TechStack";
import DevelopmentProcess from "@/components/sections/home/DevelopmentProcess";
import Testimonials from "@/components/sections/home/Testimonials";
import CTASection from "@/components/sections/home/CTASection";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexorant | Next-Generation Technology Partner",
  description:
    "We build powerful digital experiences, scalable software solutions, and innovative technology products that help businesses transform their ideas into reality.",
};

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <FeaturedProjects />
      <TechStack />
      <DevelopmentProcess />
      <Testimonials />
      <CTASection />
      <BackToTop />
    </>
  );
}

import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { TechStackBlock } from "@/components/TechStackBlock";
import { ValueProps } from "@/components/ValueProps";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <ProcessTimeline />
      <TechStackBlock />
      <ValueProps />
      <AboutSection />
      <ContactSection />
    </>
  );
}

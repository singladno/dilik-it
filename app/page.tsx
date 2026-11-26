import { Hero } from "@/components/Hero";
import { EntryOffer } from "@/components/EntryOffer";
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
      <EntryOffer />
      <ServicesGrid />
      <ProcessTimeline />
      <TechStackBlock />
      <ValueProps />
      <AboutSection />
      <ContactSection />
    </>
  );
}

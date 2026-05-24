import { Header } from "@/components/layout/Header";
import { SectionPager } from "@/components/layout/SectionPager";
import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HomeSection } from "@/components/sections/HomeSection";
import { LinksSection } from "@/components/sections/LinksSection";
import { RecognitionSection } from "@/components/sections/RecognitionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WritersSection } from "@/components/sections/WritersSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionPager>
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <LinksSection />
        <ServicesSection />
        <RecognitionSection />
        <WritersSection />
        <BlogSection />
        <ContactsSection />
      </SectionPager>
    </>
  );
}

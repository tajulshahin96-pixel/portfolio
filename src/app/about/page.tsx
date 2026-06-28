import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';
import AboutHero from '@/components/about/AboutHero';
import MissionValues from '@/components/about/MissionValues';
import ExperienceTimeline from '@/components/about/ExperienceTimeline';
import SkillsExpertise from '@/components/about/SkillsExpertise';
import AboutCTA from '@/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <Header />
      <SectionObserver />
      <main className="relative pt-20 overflow-hidden">
        <div className="bg-blob w-[500px] h-[500px] bg-primary/20 top-0 -left-64"></div>
        <div className="bg-blob w-[400px] h-[400px] bg-secondary/10 bottom-0 -right-48"></div>
        
        <AboutHero />
        <MissionValues />
        <ExperienceTimeline />
        <SkillsExpertise />
        <AboutCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

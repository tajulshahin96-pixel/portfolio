import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';
import CaseStudiesHero from '@/components/casestudies/CaseStudiesHero';
import CaseStudiesMetrics from '@/components/casestudies/CaseStudiesMetrics';
import CaseStudiesDetailed from '@/components/casestudies/CaseStudiesDetailed';
import CaseStudiesCTA from '@/components/casestudies/CaseStudiesCTA';

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <SectionObserver />
      <main className="relative pt-32 pb-section-gap overflow-hidden">
        <div className="bg-blob w-[500px] h-[500px] bg-primary top-[0%] left-[-10%] rounded-full"></div>
        <div className="bg-blob w-[600px] h-[600px] bg-secondary-container bottom-[20%] right-[-10%] rounded-full"></div>
        
        <CaseStudiesHero />
        <CaseStudiesMetrics />
        <CaseStudiesDetailed />
        <CaseStudiesCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import BackgroundBlobs from '@/components/BackgroundBlobs';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoCloud from '@/components/LogoCloud';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import ProcessRoadmap from '@/components/ProcessRoadmap';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';

export default function Home() {
  return (
    <>
      <BackgroundBlobs />
      <Header />
      <SectionObserver />
      <main className="pt-20">
        <Hero />
        <LogoCloud />
        <Services />
        <CaseStudies />
        <ProcessRoadmap />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ServicesProcess from '@/components/services/ServicesProcess';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <SectionObserver />
      <main className="relative pt-20 overflow-hidden">
        <div className="bg-blob w-96 h-96 bg-primary top-1/4 left-[-80px] rounded-full"></div>
        <div className="bg-blob w-80 h-80 bg-secondary bottom-1/4 right-[-80px] rounded-full"></div>
        
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';
import ContactHero from '@/components/contactpage/ContactHero';
import ContactLayout from '@/components/contactpage/ContactLayout';

export default function ContactPage() {
  return (
    <>
      <Header />
      <SectionObserver />
      <main className="relative pt-32 pb-section-gap overflow-hidden">
        <div className="bg-blob w-[700px] h-[700px] bg-secondary/10 top-[-200px] right-[-200px]"></div>
        
        <ContactHero />
        <ContactLayout />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

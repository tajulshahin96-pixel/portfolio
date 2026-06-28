import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="py-section-gap px-gutter relative z-10">
      <div className="max-w-container-max mx-auto rounded-3xl overflow-hidden relative p-card-padding text-center border border-primary/20">
        <div className="relative z-10">
          <h2 className="font-headline-xl text-headline-lg md:text-headline-xl mb-6">Ready to Scale Your Digital Impact?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Stop guessing and start growing. Book a 15-minute strategy call to see how we can transform your digital presence.
          </p>
          <Link href="/contact" className="inline-block primary-gradient-btn text-white px-10 py-5 rounded-full font-headline-md text-body-lg hover:scale-105 transition-transform">
            Schedule Your Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

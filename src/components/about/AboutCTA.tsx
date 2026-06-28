import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="relative glass-card rounded-[40px] p-8 md:p-12 lg:p-20 overflow-hidden text-center">
        <div className="relative z-10">
          <h2 className="font-headline-xl text-4xl sm:text-5xl md:text-headline-xl mb-6 leading-tight">Let&apos;s Build Something <span className="gradient-text">Together</span></h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto mb-10 text-body-lg">
            Ready to take your digital presence to the next level? Whether it&apos;s a high-converting ad campaign or a bespoke web application, I&apos;m here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-block bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_30px_rgba(184,195,255,0.6)] transition-all">
              Book a Strategy Call
            </Link>
            <Link href="/contact" className="inline-block glass-card px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

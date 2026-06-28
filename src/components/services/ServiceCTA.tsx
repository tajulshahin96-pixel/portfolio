import Link from 'next/link';

export default function ServiceCTA() {
  return (
    <section className="max-w-container-max mx-auto px-gutter pb-section-gap">
      <div className="relative overflow-hidden rounded-[32px] bg-[#104af0] p-12 md:p-24 text-center">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-white mb-6">Let&apos;s Build Something<br/>Amazing Together</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-10 font-body-lg">
            Ready to scale your business with a data-driven approach? Schedule a free 30-minute strategy call today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="inline-flex bg-white text-[#104af0] px-8 py-4 rounded-xl font-bold items-center justify-center gap-2 hover:scale-105 transition-transform">
              Book Free Strategy Call <span className="material-symbols-outlined">calendar_today</span>
            </Link>
            <Link href="/contact" className="inline-flex bg-black/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold items-center justify-center gap-2 border border-white/20 hover:bg-black/30 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

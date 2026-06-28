export default function ServicesHero() {
  return (
    <section className="relative min-h-[819px] flex items-center justify-center px-gutter py-section-gap overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="relative z-10 max-w-4xl text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest">Future-Proof Strategies</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl md:text-headline-xl text-on-surface mb-8 leading-none">
          Scalable Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Modern Brands</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
          We bridge the gap between technical complexity and business growth, delivering high-performance digital ecosystems that dominate markets.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="primary-gradient-btn text-white px-8 py-4 rounded-xl font-headline-md text-body-lg transition-all">
            View All Services
          </button>
          <button className="px-8 py-4 rounded-xl font-headline-md text-body-lg border border-white/20 backdrop-blur hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            Get Strategy Call <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section id="services" className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-0.5 rounded-full glass-card border-primary/30 text-primary font-label-mono text-[12px] mb-4 uppercase">My Expertise</div>
        <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-4">Precision <span className="text-primary">Digital</span> Performance</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto text-body-md">Optimized strategies designed to drive high-performance growth for your brand.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-card p-card-padding rounded-xl border-white/5 bg-surface-container-low/40">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 shadow-inner">
            <span className="material-symbols-outlined text-2xl">ads_click</span>
          </div>
          <h3 className="font-headline-md text-[20px] mb-3">Paid Advertising</h3>
          <p className="text-on-surface-variant text-[14px] leading-relaxed">Meta, Google, and YouTube campaigns engineered to maximize your acquisition ROI.</p>
        </div>
        <div className="glass-card p-card-padding rounded-xl border-white/5 bg-surface-container-low/40">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 shadow-inner">
            <span className="material-symbols-outlined text-2xl">web</span>
          </div>
          <h3 className="font-headline-md text-[20px] mb-3">High-Impact Landing Pages</h3>
          <p className="text-on-surface-variant text-[14px] leading-relaxed">Performance-first landing pages optimized for speed and conversion psychology.</p>
        </div>
        <div className="glass-card p-card-padding rounded-xl border-white/5 bg-surface-container-low/40">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 shadow-inner">
            <span className="material-symbols-outlined text-2xl">filter_list</span>
          </div>
          <h3 className="font-headline-md text-[20px] mb-3">Revenue Funnels</h3>
          <p className="text-on-surface-variant text-[14px] leading-relaxed">Custom sales funnels that automate lead nurturing and maximize customer LTV.</p>
        </div>
        <div className="glass-card p-card-padding rounded-xl border-white/5 bg-surface-container-low/40">
          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5 shadow-inner">
            <span className="material-symbols-outlined text-2xl">code</span>
          </div>
          <h3 className="font-headline-md text-[20px] mb-3">Modern Web Dev</h3>
          <p className="text-on-surface-variant text-[14px] leading-relaxed">Fast, SEO-optimized experiences built with a premium architectural feel.</p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <a className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider" href="#">
          View All Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}

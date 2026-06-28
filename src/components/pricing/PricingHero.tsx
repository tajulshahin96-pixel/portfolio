export default function PricingHero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter text-center mb-16 relative">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <span className="glow-dot"></span>
        <span className="text-primary font-label-mono text-label-mono uppercase tracking-wider">Simple Pricing</span>
      </div>
      <h1 className="text-headline-xl font-headline-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-on-surface to-outline-variant">
        Flexible Plans for <span className="text-primary">Every Business</span>
      </h1>
      <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Choose the perfect plan that fits your business needs and budget. Transparent pricing with no hidden fees, designed to scale with your growth.
      </p>
    </section>
  );
}

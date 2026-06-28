export default function BlogHero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter text-center mb-16 relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <span className="material-symbols-outlined text-primary text-[18px]">article</span>
        <span className="text-primary font-label-mono text-label-mono uppercase tracking-wider">Our Blog</span>
      </div>
      <h1 className="text-headline-xl font-headline-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-on-surface to-outline-variant">
        Insights &amp; <span className="text-primary">Strategies</span>
      </h1>
      <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Deep dives into performance marketing, technical SEO, and modern web architecture. Stay ahead of the curve.
      </p>
    </section>
  );
}

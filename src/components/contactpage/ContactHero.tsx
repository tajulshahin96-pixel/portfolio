export default function ContactHero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter text-center mb-16 relative z-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
        <span className="material-symbols-outlined text-secondary text-[18px]">forum</span>
        <span className="text-secondary font-label-mono text-label-mono uppercase tracking-wider">Get in Touch</span>
      </div>
      <h1 className="text-headline-xl font-headline-xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-on-surface to-outline-variant">
        Let&apos;s Talk <span className="text-secondary">Growth</span>
      </h1>
      <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl mx-auto">
        Whether you have a specific project in mind or just want to explore possibilities, our team is ready to listen and architect the right solution.
      </p>
    </section>
  );
}

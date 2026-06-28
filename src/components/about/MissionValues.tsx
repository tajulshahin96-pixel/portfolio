export default function MissionValues() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">Built on Core <span className="gradient-text">Values</span></h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">The principles that drive every campaign I manage and every line of code I write.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-card p-card-padding rounded-3xl">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Data-Driven Strategy</h3>
          <p className="text-on-surface-variant">I don&apos;t believe in guesswork. Every decision is backed by analytics, user behavior data, and market trends to ensure maximum ROI.</p>
        </div>
        <div className="glass-card p-card-padding rounded-3xl">
          <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Client Success First</h3>
          <p className="text-on-surface-variant">Your growth is my metric for success. I maintain a radical transparency policy and treat every business as if it were my own.</p>
        </div>
        <div className="glass-card p-card-padding rounded-3xl">
          <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">Innovation</h3>
          <p className="text-on-surface-variant">The digital landscape evolves daily. I stay at the forefront of AI, performance marketing, and modern web frameworks.</p>
        </div>
      </div>
    </section>
  );
}

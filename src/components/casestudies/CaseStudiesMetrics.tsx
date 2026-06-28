export default function CaseStudiesMetrics() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mb-section-gap relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-card-padding rounded-xl flex flex-col justify-center text-center border-l-4 border-l-primary">
          <div className="text-headline-lg font-headline-lg text-primary">$1M+</div>
          <div className="text-on-surface-variant font-label-mono text-label-mono uppercase mt-2">Ad Spend Managed</div>
        </div>
        <div className="glass-card p-card-padding rounded-xl flex flex-col justify-center text-center border-l-4 border-l-tertiary">
          <div className="text-headline-lg font-headline-lg text-tertiary">312%</div>
          <div className="text-on-surface-variant font-label-mono text-label-mono uppercase mt-2">Avg. Lead Growth</div>
        </div>
        <div className="glass-card p-card-padding rounded-xl flex flex-col justify-center text-center border-l-4 border-l-secondary">
          <div className="text-headline-lg font-headline-lg text-secondary">4.2x</div>
          <div className="text-on-surface-variant font-label-mono text-label-mono uppercase mt-2">Target ROAS</div>
        </div>
        <div className="glass-card p-card-padding rounded-xl flex flex-col justify-center text-center border-l-4 border-l-primary-fixed">
          <div className="text-headline-lg font-headline-lg text-primary-fixed">500+</div>
          <div className="text-on-surface-variant font-label-mono text-label-mono uppercase mt-2">Campaigns Optimized</div>
        </div>
      </div>
    </section>
  );
}

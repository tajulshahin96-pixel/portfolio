export default function ProcessRoadmap() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-0.5 rounded-full glass-card border-white/10 text-on-surface-variant font-label-mono text-[12px] mb-4 uppercase">Workflow</div>
        <h2 className="font-headline-lg text-3xl md:text-headline-lg">Strategic <span className="text-primary">Execution</span></h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mt-3 text-body-md">A systematic approach to scaling your brand&apos;s digital presence.</p>
      </div>
      <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4">
        <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10"></div>
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary mb-5 bg-background shadow-xl border-primary/20">
            <span className="material-symbols-outlined text-2xl">search</span>
          </div>
          <span className="font-label-mono text-[11px] text-primary mb-1 font-bold">01</span>
          <h4 className="font-bold text-[18px] mb-2">Discovery</h4>
          <p className="text-[13px] text-on-surface-variant px-3 leading-relaxed">In-depth data audit and audience profiling.</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary mb-5 bg-background shadow-xl border-white/5">
            <span className="material-symbols-outlined text-2xl">architecture</span>
          </div>
          <span className="font-label-mono text-[11px] text-primary mb-1 font-bold">02</span>
          <h4 className="font-bold text-[18px] mb-2">Strategy</h4>
          <p className="text-[13px] text-on-surface-variant px-3 leading-relaxed">Multichannel roadmap and funnel architecture.</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary mb-5 bg-background shadow-xl border-white/5">
            <span className="material-symbols-outlined text-2xl">rocket_launch</span>
          </div>
          <span className="font-label-mono text-[11px] text-primary mb-1 font-bold">03</span>
          <h4 className="font-bold text-[18px] mb-2">Launch</h4>
          <p className="text-[13px] text-on-surface-variant px-3 leading-relaxed">High-precision campaign and asset deployment.</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary mb-5 bg-background shadow-xl border-white/5">
            <span className="material-symbols-outlined text-2xl">query_stats</span>
          </div>
          <span className="font-label-mono text-[11px] text-primary mb-1 font-bold">04</span>
          <h4 className="font-bold text-[18px] mb-2">Optimize</h4>
          <p className="text-[13px] text-on-surface-variant px-3 leading-relaxed">Continuous A/B testing and data refinement.</p>
        </div>
        <div className="flex-1 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center text-primary mb-5 bg-background shadow-xl border-primary/30">
            <span className="material-symbols-outlined text-2xl">trending_up</span>
          </div>
          <span className="font-label-mono text-[11px] text-primary mb-1 font-bold">05</span>
          <h4 className="font-bold text-[18px] mb-2">Scale</h4>
          <p className="text-[13px] text-on-surface-variant px-3 leading-relaxed">Expansion of winning models for market dominance.</p>
        </div>
      </div>
    </section>
  );
}

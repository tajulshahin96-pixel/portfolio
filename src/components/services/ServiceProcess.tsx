export default function ServiceProcess() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mb-section-gap relative">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">How We Deliver Results</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">A rigorous, data-driven framework that ensures your project doesn&apos;t just launch, but succeeds.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-12"></div>
        
        {/* Step 1 */}
        <div className="relative group">
          <div className="font-label-mono text-[48px] text-white/5 font-extrabold mb-[-24px] ml-[-12px]">01</div>
          <div className="glass-card p-8 rounded-2xl relative z-10 border-primary/20">
            <span className="material-symbols-outlined text-primary mb-4 text-[32px]">manage_search</span>
            <h4 className="font-headline-md text-headline-md mb-2">Discovery</h4>
            <p className="text-on-surface-variant text-sm">Deep dive into your business, market landscape, and specific growth friction points.</p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="relative group">
          <div className="font-label-mono text-[48px] text-white/5 font-extrabold mb-[-24px] ml-[-12px]">02</div>
          <div className="glass-card p-8 rounded-2xl relative z-10 border-white/10">
            <span className="material-symbols-outlined text-secondary mb-4 text-[32px]">architecture</span>
            <h4 className="font-headline-md text-headline-md mb-2">Strategy</h4>
            <p className="text-on-surface-variant text-sm">Architecting a bespoke roadmap focused on maximizing ROI and long-term sustainability.</p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="relative group">
          <div className="font-label-mono text-[48px] text-white/5 font-extrabold mb-[-24px] ml-[-12px]">03</div>
          <div className="glass-card p-8 rounded-2xl relative z-10 border-white/10">
            <span className="material-symbols-outlined text-tertiary mb-4 text-[32px]">rocket_launch</span>
            <h4 className="font-headline-md text-headline-md mb-2">Execution</h4>
            <p className="text-on-surface-variant text-sm">Precision deployment of the strategy across all selected digital channels and touchpoints.</p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="relative group">
          <div className="font-label-mono text-[48px] text-white/5 font-extrabold mb-[-24px] ml-[-12px]">04</div>
          <div className="glass-card p-8 rounded-2xl relative z-10 border-white/10">
            <span className="material-symbols-outlined text-primary mb-4 text-[32px]">query_stats</span>
            <h4 className="font-headline-md text-headline-md mb-2">Optimization</h4>
            <p className="text-on-surface-variant text-sm">Continuous monitoring and iterative improvements based on real-time performance data.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesProcess() {
  return (
    <section className="py-section-gap bg-surface-container-low relative z-10">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="font-label-mono text-label-mono text-tertiary mb-4 block uppercase tracking-widest">Our Methodology</span>
            <h2 className="font-headline-lg text-headline-lg mb-8">How We Deliver <span className="text-tertiary">Exceptional Results</span></h2>
            <p className="text-on-surface-variant font-body-lg mb-12">
              A systematic approach to growth that removes guesswork. We utilize a four-stage process that ensures every dollar spent contributes to your bottom line.
            </p>
            <div className="space-y-12">
              <div className="relative flex gap-6 step-line">
                <div className="flex-none w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center font-label-mono text-label-mono bg-primary/10 z-10">01</div>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Discovery</h4>
                  <p className="text-on-surface-variant">Deep audit of your current assets, market positioning, and growth bottlenecks.</p>
                </div>
              </div>
              <div className="relative flex gap-6 step-line">
                <div className="flex-none w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center font-label-mono text-label-mono bg-primary/10 z-10">02</div>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Strategy</h4>
                  <p className="text-on-surface-variant">Crafting a bespoke roadmap focused on high-impact wins and long-term scalability.</p>
                </div>
              </div>
              <div className="relative flex gap-6 step-line">
                <div className="flex-none w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center font-label-mono text-label-mono bg-primary/10 z-10">03</div>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Execution</h4>
                  <p className="text-on-surface-variant">Rapid deployment of assets, from ad copy to high-performance web architecture.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-none w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center font-label-mono text-label-mono bg-primary/10 z-10">04</div>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">Optimization</h4>
                  <p className="text-on-surface-variant">Continuous A/B testing and data analysis to maximize conversion efficiency.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt="Dashboard Strategy"
                className="w-full h-full object-cover rounded-2xl opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRx21SZKLWZwpMC-zN75wZb_kLL9_KHY0K3cAZjsB07acIqbhfoxPKFGvTJNAANvPG8j2KL5TwzSwtmRtZZaEQQD37oPstmIs15yx-M2r9oklDc5zM1q2QspdMm4hL0v9rWwCUW_8mndQTvXQHRhajpi9aVdY1w5nw0JTPGalWEb7ku2eZq8GZkFp3zPB6Lnn_ml2JG9_U4rt27nQCQw1Pgwty9P7IawosxlvYu2ghSvjHYBFsNXwM-OHtr6Ym7G5QlfIRNaUYmw2b"
              />
            </div>
            {/* Floating KPI Badge */}
            <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-2xl animate-bounce">
              <div className="text-primary font-headline-xl text-headline-md leading-tight">314%</div>
              <div className="text-on-surface-variant font-label-mono text-label-mono uppercase">Avg. Client ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

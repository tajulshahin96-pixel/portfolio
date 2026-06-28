export default function PricingGrid() {
  return (
    <section className="max-w-container-max mx-auto px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {/* Starter Plan */}
        <div className="glass-card rounded-xl p-card-padding flex flex-col">
          <div className="mb-8">
            <span className="material-symbols-outlined text-primary mb-4" style={{ fontSize: '32px' }}>rocket_launch</span>
            <h3 className="text-headline-md font-headline-md mb-2">Starter</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">Perfect for small businesses</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-headline-lg font-headline-lg">$299</span>
              <span className="text-on-surface-variant font-body-md">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Social Media Management
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Basic Campaign Setup
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Landing Page (1 Page)
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Monthly Report
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Email Support
            </li>
          </ul>
          <button className="w-full py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-bold text-body-md">
            Get Started
          </button>
        </div>

        {/* Growth Plan (Highlighted) */}
        <div className="relative rounded-xl p-card-padding flex flex-col bg-surface-container-high border-2 border-primary-container shadow-[0_0_40px_rgba(45,91,255,0.15)] overflow-hidden">
          <div className="absolute top-4 right-[-32px] rotate-45 bg-primary-container text-white text-[10px] font-bold px-10 py-1 uppercase tracking-widest">
            Most Popular
          </div>
          <div className="mb-8">
            <span className="material-symbols-outlined text-primary-container mb-4" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>trending_up</span>
            <h3 className="text-headline-md font-headline-md mb-2">Growth</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">Ideal for growing businesses</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-headline-lg font-headline-lg">$599</span>
              <span className="text-on-surface-variant font-body-md">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Everything in Starter
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Advanced Campaigns
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Sales Funnel Setup
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Tracking &amp; Analytics
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Priority Support
            </li>
          </ul>
          <button className="primary-gradient-btn w-full py-4 rounded-lg font-bold text-body-md text-white">
            Get Started
          </button>
        </div>

        {/* Scale Plan */}
        <div className="glass-card rounded-xl p-card-padding flex flex-col">
          <div className="mb-8">
            <span className="material-symbols-outlined text-tertiary mb-4" style={{ fontSize: '32px' }}>speed</span>
            <h3 className="text-headline-md font-headline-md mb-2">Scale</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">For scaling businesses</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-headline-lg font-headline-lg">$999</span>
              <span className="text-on-surface-variant font-body-md">/month</span>
            </div>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Everything in Growth
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Multi-platform Marketing
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Advanced Tracking
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              CRO &amp; A/B Testing
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Weekly Strategy Call
            </li>
          </ul>
          <button className="w-full py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-bold text-body-md">
            Get Started
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="glass-card rounded-xl p-card-padding flex flex-col">
          <div className="mb-8">
            <span className="material-symbols-outlined text-secondary mb-4" style={{ fontSize: '32px' }}>corporate_fare</span>
            <h3 className="text-headline-md font-headline-md mb-2">Enterprise</h3>
            <p className="text-body-md font-body-md text-on-surface-variant">For large businesses</p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-headline-lg font-headline-lg">Custom</span>
            </div>
            <p className="text-label-mono font-label-mono text-secondary mt-1">Get a custom quote</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Custom Strategy
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Dedicated Manager
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              Advanced Solutions
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              White-label Reporting
            </li>
            <li className="flex items-center gap-3 text-body-md font-body-md">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              24/7 Support
            </li>
          </ul>
          <button className="w-full py-4 rounded-lg border border-white/10 hover:bg-white/5 transition-colors font-bold text-body-md">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface-container-low/30 py-section-gap">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-0.5 rounded-full glass-card border-primary/20 text-primary font-label-mono text-[12px] mb-4 uppercase">Investment</div>
          <h2 className="font-headline-lg text-headline-lg">Performance <span className="text-primary">Packages</span></h2>
          <p className="text-on-surface-variant mt-3 text-body-md">Scalable solutions tailored to your growth stage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="glass-card p-7 rounded-2xl flex flex-col h-full border-white/5 bg-background/40">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-on-surface-variant text-xl">rocket</span>
              <span className="font-bold text-on-surface-variant text-sm uppercase tracking-wide">Starter</span>
            </div>
            <div className="mb-7">
              <span className="text-3xl font-black">$299</span>
              <span className="text-on-surface-variant text-sm">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Social Media Mgmt
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Basic Campaign Setup
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Monthly Reporting
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-bold text-sm">Get Started</button>
          </div>
          <div className="glass-card p-7 rounded-2xl flex flex-col h-full border-primary/40 relative bg-primary/[0.03]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 primary-gradient-bg px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest shadow-lg">Popular</div>
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
              <span className="font-bold text-primary text-sm uppercase tracking-wide">Growth</span>
            </div>
            <div className="mb-7">
              <span className="text-3xl font-black">$599</span>
              <span className="text-on-surface-variant text-sm">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Advanced Ads
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Sales Funnel Setup
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Weekly Analytics Call
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> CRM Integration
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg primary-gradient-bg text-white glow-button transition-all font-bold text-sm shadow-xl">Get Started</button>
          </div>
          <div className="glass-card p-7 rounded-2xl flex flex-col h-full border-white/5 bg-background/40">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-primary text-xl">speed</span>
              <span className="font-bold text-on-surface text-sm uppercase tracking-wide">Scale</span>
            </div>
            <div className="mb-7">
              <span className="text-3xl font-black">$999</span>
              <span className="text-on-surface-variant text-sm">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Multi-platform Ads
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Conv Tracking
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> A/B Testing & CRO
              </li>
              <li className="flex items-center gap-2 text-[14px]">
                <span className="material-symbols-outlined text-primary text-[16px]">check_circle</span> Dedicated Manager
              </li>
            </ul>
            <button className="w-full py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-all font-bold text-sm">Get Started</button>
          </div>
          <div className="glass-card p-7 rounded-2xl flex flex-col h-full bg-primary/10 border-white/10">
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-primary text-xl">workspace_premium</span>
              <span className="font-bold text-primary text-sm uppercase tracking-wide">Enterprise</span>
            </div>
            <div className="mb-7">
              <span className="text-3xl font-black">Custom</span>
            </div>
            <p className="text-on-surface-variant text-[14px] leading-relaxed mb-8 flex-grow">For large scale businesses looking for a complete digital transformation and dedicated expert team.</p>
            <button className="w-full py-3 rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-all font-bold text-sm">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}

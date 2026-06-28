export default function ServiceDeepDives() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Paid Advertising */}
        <div className="md:col-span-8 glass-card p-card-padding rounded-3xl relative overflow-hidden group">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-4">Paid Advertising</h3>
              <p className="text-on-surface-variant mb-8 font-body-md">
                Precision-targeted campaigns designed for immediate ROI. We dominate Google, Meta, and LinkedIn with algorithmic optimization and creative testing.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span> Search &amp; Display Mastery</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span> Multi-Variant Creative Testing</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span> Dynamic Remarketing Funnels</li>
              </ul>
              <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-square rounded-2xl overflow-hidden relative border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Data Dashboard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzankH-xT3sgD4rpskg0A0AIZ8bBP9QhBv8ycseiIJEVF1bmxIa2eGahHg06xUJPwa2BVCoEr5c8dC0ru_gyOfog44g2bMtsedenOape0qSCIzirM-PIPObav0IRGWVMbHh_AKxLbDMk8OT8KeA4z8-IdBI7HAlOzOB01tW-aWi_MJxpIOgvFaNFJ2bewkBOeOy8zv-nUUUofhqJDS69gN62VLE6ak1Gdv3mVk7BxqzffTPwJu_4c79YxVL-i6r-ag1jSTUzMxM8KI" />
            </div>
          </div>
        </div>

        {/* SEO Strategy */}
        <div className="md:col-span-4 glass-card p-card-padding rounded-3xl group">
          <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">SEO Strategy</h3>
          <p className="text-on-surface-variant mb-6 font-body-md">
            Organic growth that compounds over time. Technical SEO meets semantic content.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">done_all</span> Technical Audits</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">done_all</span> Semantic Clustering</li>
          </ul>
          <button className="text-tertiary font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
            View Roadmap <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Web Development */}
        <div className="md:col-span-4 glass-card p-card-padding rounded-3xl group">
          <div className="w-12 h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-4">High-Perf Dev</h3>
          <p className="text-on-surface-variant mb-6 font-body-md">
            Blazing fast, secure, and infinitely scalable web architecture for modern enterprise.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">verified</span> Headless Architectures</li>
            <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-[20px]">verified</span> Real-time Integrations</li>
          </ul>
          <button className="text-secondary font-bold flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
            Stack Details <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        {/* Sales Funnels */}
        <div className="md:col-span-8 glass-card p-card-padding rounded-3xl group relative overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse gap-10 items-start">
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg mb-4">Sales Funnels</h3>
              <p className="text-on-surface-variant mb-8 font-body-md">
                Psychology-driven customer journeys. We map every touchpoint to convert cold traffic into loyal brand advocates automatically.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="font-headline-md text-primary">45%</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-tighter">Avg. Conversion Lift</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="font-headline-md text-tertiary">3.2x</div>
                  <div className="text-xs text-on-surface-variant uppercase tracking-tighter">LTV Improvement</div>
                </div>
              </div>
              <button className="primary-btn px-6 py-3 rounded-xl text-white font-bold flex items-center gap-2">
                Analyze My Funnel <span className="material-symbols-outlined">science</span>
              </button>
            </div>
            <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden relative border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Sales Funnel abstract" className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40NAI54GmH5zOlNbSKOS_rbMh3TZyX8oFlc31RUgt2L6-UbcTdMdH7Kg-Eb_bbMEQmn4xnYegGeWpx7QBQXEp3X5ZWWNsrrNQzx3nVZjnVldXxAf2XLKryEzF8rItcKaynx5YMENSov6TQzg2P8RiUQfINduHD-fBwtzIdrldaztWvzFAMXaf_-80-R8xzPbXSrpnp1ic3bfpzkHNRA46pOw2-I5S5tNZY78DHqgaBevTpMS81268keNR0M2fMZph7ctgoa6UOyiA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

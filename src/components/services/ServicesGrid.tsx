export default function ServicesGrid() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {/* Paid Advertising */}
        <div className="glass-card rounded-2xl p-card-padding group">
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>ads_click</span>
          </div>
          <h3 className="font-headline-lg text-headline-md mb-4">Paid Advertising</h3>
          <p className="text-on-surface-variant mb-8 font-body-md">
            Dominate Google, Facebook, and YouTube with precision-targeted campaigns designed for ROI. We focus on data-driven scaling and audience intelligence.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Search &amp; Display Ads
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Retargeting Funnels
            </li>
          </ul>
          <a className="inline-flex items-center gap-2 text-primary font-headline-md hover:underline decoration-2 underline-offset-4" href="#">
            Learn More <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>
        
        {/* Landing Page Design */}
        <div className="glass-card rounded-2xl p-card-padding group">
          <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-8 border border-tertiary/20 group-hover:bg-tertiary/20 transition-colors">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>conversion_path</span>
          </div>
          <h3 className="font-headline-lg text-headline-md mb-4">Landing Page Design</h3>
          <p className="text-on-surface-variant mb-8 font-body-md">
            High-converting, fast-loading pages that turn traffic into profit. Optimized for every device and built on psychological conversion triggers.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
              A/B Testing Integration
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
              UX/UI Optimization
            </li>
          </ul>
          <a className="inline-flex items-center gap-2 text-tertiary font-headline-md hover:underline decoration-2 underline-offset-4" href="#">
            Learn More <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>

        {/* Sales Funnels */}
        <div className="glass-card rounded-2xl p-card-padding group">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-8 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
            <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
          </div>
          <h3 className="font-headline-lg text-headline-md mb-4">Sales Funnel Creation</h3>
          <p className="text-on-surface-variant mb-8 font-body-md">
            Strategic funnels that nurture cold leads into loyal advocates. We architect the entire journey from awareness to the final transaction.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
              Email Sequence Logic
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-secondary text-lg">check_circle</span>
              CRM Automation
            </li>
          </ul>
          <a className="inline-flex items-center gap-2 text-secondary font-headline-md hover:underline decoration-2 underline-offset-4" href="#">
            Learn More <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>

        {/* Web Development */}
        <div className="glass-card rounded-2xl p-card-padding group">
          <div className="w-14 h-14 rounded-xl bg-primary-fixed-dim/10 flex items-center justify-center mb-8 border border-primary-fixed-dim/20 group-hover:bg-primary-fixed-dim/20 transition-colors">
            <span className="material-symbols-outlined text-primary-fixed-dim text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
          </div>
          <h3 className="font-headline-lg text-headline-md mb-4">Web Development</h3>
          <p className="text-on-surface-variant mb-8 font-body-md">
            Modern, responsive websites engineered with performance and SEO at the core. Clean code, headless architecture, and blazing speed.
          </p>
          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-primary-fixed-dim text-lg">check_circle</span>
              Jamstack &amp; Headless CMS
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant font-label-mono text-label-mono">
              <span className="material-symbols-outlined text-primary-fixed-dim text-lg">check_circle</span>
              Mobile-First Design
            </li>
          </ul>
          <a className="inline-flex items-center gap-2 text-primary-fixed-dim font-headline-md hover:underline decoration-2 underline-offset-4" href="#">
            Learn More <span className="material-symbols-outlined">north_east</span>
          </a>
        </div>
      </div>
    </section>
  );
}

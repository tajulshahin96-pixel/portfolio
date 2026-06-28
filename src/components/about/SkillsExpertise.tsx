export default function SkillsExpertise() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-headline-lg text-headline-lg mb-8">Technical <span className="gradient-text">Proficiency</span></h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Google & Meta Ads</span>
                <span className="text-primary font-label-mono">95%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(184,195,255,0.5)]" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Next.js & React</span>
                <span className="text-primary font-label-mono">90%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(184,195,255,0.5)]" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">SEO & SEM Strategy</span>
                <span className="text-primary font-label-mono">88%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(184,195,255,0.5)]" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold">Tailwind CSS & UI/UX</span>
                <span className="text-primary font-label-mono">92%</span>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full shadow-[0_0_10px_rgba(184,195,255,0.5)]" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card rounded-2xl p-6 text-center hover:bg-primary/5 cursor-default group">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform">database</span>
            <h4 className="font-bold mb-1">Analytics</h4>
            <p className="text-xs text-on-surface-variant">GTM, GA4, Hotjar</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center hover:bg-tertiary/5 cursor-default group">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-4 block group-hover:scale-110 transition-transform">cloud_done</span>
            <h4 className="font-bold mb-1">DevOps</h4>
            <p className="text-xs text-on-surface-variant">Vercel, AWS, Git</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center hover:bg-secondary/5 cursor-default group">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4 block group-hover:scale-110 transition-transform">brush</span>
            <h4 className="font-bold mb-1">Design</h4>
            <p className="text-xs text-on-surface-variant">Figma, Adobe CC</p>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center hover:bg-primary/5 cursor-default group">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 block group-hover:scale-110 transition-transform">hub</span>
            <h4 className="font-bold mb-1">CRM</h4>
            <p className="text-xs text-on-surface-variant">Hubspot, Salesforce</p>
          </div>
        </div>
      </div>
    </section>
  );
}

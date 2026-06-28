export default function CaseStudiesDetailed() {
  return (
    <section className="max-w-container-max mx-auto px-gutter space-y-24 relative z-10">
      {/* Project 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Fashion Brand Scaling" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn8I00lAFwnvcZYU-7OZLGaNUilAAx-c9-h8gcxINDzfwjVbsPSCcuFU1JdRMPC5E352QpB891dN6Cj1M0TbusGZQXRAP0YTTd27rIgURhnah6uW9izFwHhexdL5udhfnNhoz8XkdlQp6jA-Yb7CpA94D1oJN9qEIqdSK8P2Bp4aytQq6g5gRGBg26-I1A6HbpFq5KFXJ_SaFbC1-_L1IonZ56rcgIMWm2OGNy8iKRHexWpYmKWyCiEDJafJst_6oNOpFXpwYHF8tG"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex gap-4">
              <span className="px-3 py-1 bg-surface/80 backdrop-blur-md rounded-full text-primary font-label-mono text-label-mono">E-COMMERCE</span>
              <span className="px-3 py-1 bg-surface/80 backdrop-blur-md rounded-full text-tertiary font-label-mono text-label-mono">PAID SOCIAL</span>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="font-headline-lg text-headline-lg">Fashion Brand Scaling</h2>
          <p className="text-on-surface-variant text-body-lg">
            Faced with stagnating sales, this boutique brand needed a high-performance funnel. We implemented a multi-stage remarketing strategy that transformed their digital presence.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg">
              <div className="text-primary font-headline-md text-headline-md">4.2x</div>
              <div className="text-on-surface-variant text-sm">Return on Ad Spend</div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="text-primary font-headline-md text-headline-md">$320k</div>
              <div className="text-on-surface-variant text-sm">Monthly Revenue</div>
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Dynamic product catalog optimization for Instagram Shop</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">check_circle</span>
              <span>Advanced attribution modeling to track cross-device sales</span>
            </li>
          </ul>
          <button className="flex items-center gap-2 font-bold text-primary group">
            Read Full Case Study 
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Project 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6">
          <h2 className="font-headline-lg text-headline-lg">SaaS Lead Generation</h2>
          <p className="text-on-surface-variant text-body-lg">
            For a complex B2B SaaS platform, we shifted focus from raw traffic to Marketing Qualified Leads (MQLs), reducing acquisition costs while scaling volume.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-lg">
              <div className="text-tertiary font-headline-md text-headline-md">312%</div>
              <div className="text-on-surface-variant text-sm">MQL Growth</div>
            </div>
            <div className="glass-card p-4 rounded-lg">
              <div className="text-tertiary font-headline-md text-headline-md">-45%</div>
              <div className="text-on-surface-variant text-sm">Cost Per Lead</div>
            </div>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary">check_circle</span>
              <span>Landing page A/B testing increasing conversion by 24%</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-tertiary">check_circle</span>
              <span>Account-Based Marketing (ABM) setup on LinkedIn Ads</span>
            </li>
          </ul>
          <button className="flex items-center gap-2 font-bold text-tertiary group">
            Read Full Case Study 
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
          </button>
        </div>
        <div className="order-1 lg:order-2 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-tertiary to-primary opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="SaaS Case Study" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5b1Vegt-Or771mhaowu4sAGeMW_xOOjzzuQSS2YzsEVjf0jzuQ1AQdJwlC2raY2Nn37GndjRfeuff-_ZsWFcXgaO7FW6j3Wz8DZL_VlrwCnPi6MN-fVsi8hgnqRUQcPJ1DYzmnW3av58P90XzL81UjbQiuoTaZh-rTXr0A1kUGvXP9Z1ScWo9gD4RvsB2SNrCyDVX2tVfaCE3IN_5BwnA1YRknip3QlTr2pr759wP-mx6sYkH-C0-RAeSCc0xIiwYVcZIsJxUQRBV"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex gap-4">
              <span className="px-3 py-1 bg-surface/80 backdrop-blur-md rounded-full text-tertiary font-label-mono text-label-mono">B2B SAAS</span>
              <span className="px-3 py-1 bg-surface/80 backdrop-blur-md rounded-full text-primary font-label-mono text-label-mono">LEAD GEN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

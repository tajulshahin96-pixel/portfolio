export default function Testimonials() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-0.5 rounded-full glass-card border-white/10 text-on-surface-variant font-label-mono text-[12px] mb-4 uppercase">Reviews</div>
        <h2 className="font-headline-lg text-headline-lg">Global <span className="text-primary">Endorsements</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8 rounded-2xl relative border-white/5 bg-surface-container-low/50">
          <span className="material-symbols-outlined absolute top-6 right-6 text-5xl text-primary/10" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="text-body-md text-on-surface mb-8 italic leading-relaxed">&quot;Tajul transformed our online presence. Our sales increased by 300% in just 3 months! His data-driven approach is truly unmatched in the industry.&quot;</p>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Sarah Johnson" className="w-11 h-11 rounded-full object-cover border-2 border-primary/40 img-refined" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_unX_9471M_dRNG1byUsMnNkf76wVBAG8_UhQ28UH1WPWOlwjrnTP36wsQcgdIXpAp1qqVmaQUlelmZAsfGm-AC_R8lHFqr9A0fcx0VAYjgIIzUfXnEfwPFIgA4lA00-ftyar515JEHeSs7n_oE-zwY0dLQ-Li-P3wIQNs572Qu4-DMrmsmDXgjUwyHDsDG46xzfCwhZU79viZGoHXLm5urcEYVZTOTgZnURe-F3BwcdFiXDL8pnaRK-tjL7ZSGloRdx2Hbtjw0F"/>
            <div>
              <div className="font-bold text-on-surface text-sm">Sarah Johnson</div>
              <div className="text-[12px] text-on-surface-variant">CEO, Fashion Hub</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl relative border-primary/20 bg-primary/[0.04]">
          <span className="material-symbols-outlined absolute top-6 right-6 text-5xl text-primary/20" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="text-body-md text-on-surface mb-8 italic leading-relaxed">&quot;Professional, efficient, and results-driven. Best investment we&apos;ve made for our SaaS business growth this year. The funnel optimization was game-changing.&quot;</p>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Mike Chen" className="w-11 h-11 rounded-full object-cover border-2 border-primary/40 img-refined" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCabxUjPRxuRIqKyop1nuUkxhAGvk70_e4dQ6X-G9f6e0gGrYCFfWrXFeMJYfnMsZBj-eGZEbZY56ePREMZ_HC3eXE95PBXE1wQ9hMZmxt8NK4r3hkkqYWhogQDTs5YMZqvUETotMAwPRgHpza3uEhJ-Ie-T0c4eiJjc9DvW3yORQAKMOiKvaZ46A9FKv7zZ_dnHee9AzvYBpcrcp4gI_WHmg4S5ixPdQhgKQesDLlu_9sLcdjbXwyc5DUClk_SJSEMSMIi7PwjJLND"/>
            <div>
              <div className="font-bold text-on-surface text-sm">Mike Chen</div>
              <div className="text-[12px] text-on-surface-variant">Founder, TechStack</div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl relative border-white/5 bg-surface-container-low/50">
          <span className="material-symbols-outlined absolute top-6 right-6 text-5xl text-primary/10" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
          <p className="text-body-md text-on-surface mb-8 italic leading-relaxed">&quot;Amazing work on our ad campaigns. Highly recommend for anyone serious about growth! The ROI we achieved exceeded our most optimistic projections.&quot;</p>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Emily Davis" className="w-11 h-11 rounded-full object-cover border-2 border-primary/40 img-refined" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVmArBWXrdWmp9zZR9tBOiwpy7-zYAV_ObM6_9txCM6Yluwc7UK_Ro16woK33YPwYTO9LWhJkI4-ZJ-cAuTzgz-NV4LjDHxP1bco36Fiotl0kZ4GY4MAZ6As4NUvqkv6qCF7zVYgNoVyrqnoUUeGWa4roGLjaEcR9UQ6U24zwGcw1WMw-PVoebi4jDizjUcA2vLZ3jLaw969S9YRbNnFglYU9XNkdQgtZZQct4rgh4McFGutgOpM1HiW3HwweCTgccwc1daFU6lrYN"/>
            <div>
              <div className="font-bold text-on-surface text-sm">Emily Davis</div>
              <div className="text-[12px] text-on-surface-variant">Marketing Director, GloApp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="glass-card rounded-[2rem] p-10 md:p-16 overflow-hidden relative bg-surface-container-low border-primary/20">
        <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/30 blur-[100px] rounded-full"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-label-mono text-[11px] uppercase mb-4 block font-black tracking-widest text-center md:text-left">Connect</span>
            <h2 className="font-headline-lg text-3xl md:text-headline-lg mb-6 text-center md:text-left">Drive Your <span className="text-primary">Next Growth Phase</span></h2>
            <p className="text-body-md text-on-surface-variant mb-8 text-center md:text-left">Discuss a custom roadmap for your digital transformation today.</p>
            <Link href="/contact" className="inline-flex primary-gradient-bg w-full md:w-auto justify-center text-white px-8 py-4 rounded-xl font-bold items-center gap-3 glow-button text-lg">
              Book Free Strategy Call <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="space-y-4">
            <div className="p-6 glass-card rounded-2xl flex items-start gap-5 border-white/5 bg-background/50">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div>
                <div className="text-on-surface-variant text-[11px] uppercase tracking-wider mb-0.5">Email Me</div>
                <div className="text-base sm:text-lg font-bold text-on-surface break-all">tajulshahin96@gmail.com</div>
              </div>
            </div>
            <div className="p-6 glass-card rounded-2xl flex items-start gap-5 border-white/5 bg-background/50">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 shadow-inner">
                <span className="material-symbols-outlined text-xl">call</span>
              </div>
              <div>
                <div className="text-on-surface-variant text-[11px] uppercase tracking-wider mb-0.5">WhatsApp Me</div>
                <div className="text-lg font-bold text-on-surface">+8801629105607</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-10 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-7/12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-5 border-white/10 text-center mx-auto md:mx-0">
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(45,91,255,0.8)]"></span>
          <span className="text-primary font-label-mono text-[10px] sm:text-label-mono uppercase tracking-wider text-center">
            Digital Marketing Expert & Web Developer
          </span>
        </div>

        <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-headline-xl text-on-surface mb-5 leading-[1.2] md:leading-[1.1] text-center md:text-left">
          Scaling Businesses With{" "}
          <span className="text-primary text-glow-primary">
            Data-Driven
          </span>{" "}
          Marketing That Delivers Results
        </h1>

        <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant mb-8 max-w-xl text-center md:text-left mx-auto md:mx-0">
          I help businesses grow with result-oriented digital marketing
          strategies, high-converting funnels, and performance-driven campaigns.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
          <button className="primary-gradient-bg w-full sm:w-auto text-white px-7 py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 glow-button transition-all">
            Book Strategy Call{" "}
            <span className="material-symbols-outlined text-xl">call</span>
          </button>

          <button className="w-full sm:w-auto px-7 py-3.5 rounded-lg glass-card text-on-surface font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all border-white/10">
            View Case Studies{" "}
            <span className="material-symbols-outlined text-xl text-primary">
              play_circle
            </span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center md:text-left">
          <div>
            <div className="text-headline-md font-bold text-on-surface">
              $1M+
            </div>
            <div className="text-label-mono text-on-surface-variant uppercase text-[11px] mt-1">
              Ad Spend Managed
            </div>
          </div>

          <div>
            <div className="text-headline-md font-bold text-on-surface">
              5+
            </div>
            <div className="text-label-mono text-on-surface-variant uppercase text-[11px] mt-1">
              Years Experience
            </div>
          </div>

          <div>
            <div className="text-headline-md font-bold text-on-surface">
              100+
            </div>
            <div className="text-label-mono text-on-surface-variant uppercase text-[11px] mt-1">
              Projects Done
            </div>
          </div>

          <div>
            <div className="text-headline-md font-bold text-on-surface">
              98%
            </div>
            <div className="text-label-mono text-on-surface-variant uppercase text-[11px] mt-1">
              Satisfaction
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-5/12 relative group mt-12 md:mt-0">
        <div className="relative z-10 rounded-[1.5rem] overflow-hidden border border-white/5 glass-card shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://i.ibb.co.com/B50zgJSB/Gemini-Generated-Image-88gsrq88gsrq88gs.png"
            alt="TazulShahin"
            className="w-full aspect-[4/5] object-cover object-center img-refined"
          />

          <div className="absolute bottom-4 left-4 right-4 p-3.5 glass-card rounded-lg flex items-center justify-between border-white/10 bg-background/40">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(45,91,255,0.6)]"></div>
              <span className="text-[13px] font-semibold text-white">
                Open for Projects
              </span>
            </div>

            <div className="flex items-center gap-1 text-primary">
              <span
                className="material-symbols-outlined text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-bold text-[14px]">5.0 Rating</span>
            </div>
          </div>
        </div>

        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-primary/10 rounded-full"></div>

        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-white/5 rounded-full"></div>
      </div>
    </section>
  );
}
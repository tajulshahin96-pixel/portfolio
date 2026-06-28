export default function AboutHero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter py-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-mono text-label-mono mb-6">
            EST. 2018
          </span>
          <h1 className="font-headline-xl text-headline-xl mb-6">
            The Person Behind the <span className="gradient-text">Results</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
            I&apos;m Tajul Islam, a digital strategist and web developer focused on bridging the gap between high-performance code and data-driven marketing. Over the last 5 years, I&apos;ve helped scale businesses through technical precision and tactical insights.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-primary w-full sm:w-auto justify-center text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(184,195,255,0.4)] transition-all">
              Download CV <span className="material-symbols-outlined">download</span>
            </button>
            <button className="glass-card w-full sm:w-auto justify-center px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
              View My Work
            </button>
          </div>
        </div>
        <div className="relative group mt-8 lg:mt-0 w-full max-w-sm mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="relative rounded-3xl overflow-hidden glass-card p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              alt="Tajul Islam" 
              className="w-full h-auto rounded-2xl object-cover aspect-[4/5]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDrsCQhGijCIPgUpNsgVEDKerf_g4n_XFjX7b1Leomr9-2nUa66DDAqVFtXi34vsHzKTR3IMpb6K1bg-9HwCz8Vhi6kvwA2RVlAlXWEUlX0UE-k8HOeuayXw7c3SCxQNJ0shFnwnbpELeNJEXjMphtzdnobMTxu3cufXPVa6MWOavofuRVuSXAfF3nIONwKuTQ7qntB3v4oqGYX0ZhIz5PCX7HPdbC3-5xZjz4kQg7Wn-1fRiIzsKahOuUOAoljt7gLzvx_mG_YHf"
            />
          </div>
          <div className="absolute -bottom-6 left-4 lg:-left-6 glass-card p-4 lg:p-6 rounded-2xl shadow-xl z-10">
            <div className="text-headline-md font-bold text-primary">98%</div>
            <div className="text-body-md text-on-surface-variant">Client Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

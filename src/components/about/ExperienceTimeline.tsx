export default function ExperienceTimeline() {
  return (
    <section className="bg-surface-container-low/30 py-section-gap overflow-hidden">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="font-headline-lg text-headline-lg mb-6">Career <span className="gradient-text">Journey</span></h2>
            <p className="text-on-surface-variant mb-8">A look back at the milestones that shaped my expertise in the digital ecosystem.</p>
            <div className="p-8 rounded-3xl bg-primary-container text-white">
              <p className="font-label-mono text-label-mono mb-2 opacity-80">CURRENT STATUS</p>
              <h4 className="font-headline-md text-headline-md">Open for Strategic Partnerships</h4>
            </div>
          </div>
          <div className="lg:w-2/3 relative">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px timeline-line hidden lg:block"></div>
            <div className="space-y-12">
              <div className="relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center w-full group">
                <div className="hidden lg:block w-[45%]"></div>
                <div className="absolute left-[-8px] lg:left-1/2 lg:-ml-2 w-4 h-4 rounded-full bg-primary ring-8 ring-primary/20 mt-6 lg:mt-0"></div>
                <div className="lg:w-[45%] glass-card p-6 rounded-2xl flex-1 ml-8 lg:ml-0 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary font-label-mono mb-2 block">2022 - Present</span>
                  <h4 className="text-xl font-bold mb-1">Lead Digital Architect</h4>
                  <p className="text-sm text-on-surface-variant">Founded Midnight Matrix, focusing on full-stack marketing solutions and custom web development for B2B enterprises.</p>
                </div>
              </div>
              <div className="relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center w-full group">
                <div className="lg:w-[45%] glass-card p-6 rounded-2xl flex-1 ml-8 lg:ml-0 lg:text-right group-hover:-translate-x-2 transition-transform duration-300">
                  <span className="text-primary font-label-mono mb-2 block">2020 - 2022</span>
                  <h4 className="text-xl font-bold mb-1">Senior Performance Marketer</h4>
                  <p className="text-sm text-on-surface-variant">Managed $1M+ in ad spend for e-commerce brands, achieving an average ROAS of 4.5x across Google and Meta platforms.</p>
                </div>
                <div className="absolute left-[-8px] lg:left-1/2 lg:-ml-2 w-4 h-4 rounded-full bg-surface-variant border-2 border-primary mt-6 lg:mt-0"></div>
                <div className="hidden lg:block w-[45%]"></div>
              </div>
              <div className="relative flex flex-col lg:flex-row lg:justify-between items-start lg:items-center w-full group">
                <div className="hidden lg:block w-[45%]"></div>
                <div className="absolute left-[-8px] lg:left-1/2 lg:-ml-2 w-4 h-4 rounded-full bg-surface-variant border-2 border-primary mt-6 lg:mt-0"></div>
                <div className="lg:w-[45%] glass-card p-6 rounded-2xl flex-1 ml-8 lg:ml-0 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-primary font-label-mono mb-2 block">2018 - 2020</span>
                  <h4 className="text-xl font-bold mb-1">Full Stack Developer</h4>
                  <p className="text-sm text-on-surface-variant">Specialized in building high-conversion landing pages and e-commerce stores using modern JavaScript frameworks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

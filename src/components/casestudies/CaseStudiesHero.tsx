export default function CaseStudiesHero() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mb-20 relative z-10">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-mono text-label-mono uppercase">
          <span className="material-symbols-outlined text-[14px]">show_chart</span>
          Impactful Solutions
        </div>
        <h1 className="font-headline-xl text-headline-xl max-w-4xl">
          Proven <span className="text-gradient">Results</span> That Speak For Themselves
        </h1>
        <p className="text-on-surface-variant text-body-lg max-w-2xl">
          We don&apos;t just build websites or run ads; we engineer growth engines. Explore how we&apos;ve helped industry leaders scale their digital footprint.
        </p>
      </div>
    </section>
  );
}

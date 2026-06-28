export default function CaseStudiesCTA() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mt-section-gap">
      <div className="glass-card p-12 rounded-3xl relative overflow-hidden text-center border-primary/20">
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline-lg text-headline-lg md:text-headline-lg">
            Ready to see these numbers <br/><span className="text-gradient">in your account?</span>
          </h2>
          <p className="text-on-surface-variant text-body-lg max-w-xl mx-auto">
            Stop guessing and start growing. Join the elite brands using data-driven strategies to dominate their markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="primary-btn px-8 py-4 rounded-full font-bold text-white shadow-lg">
              Book Free Strategy Call
            </button>
            <button className="px-8 py-4 rounded-full font-bold text-primary border border-primary/30 hover:bg-primary/5 transition-colors">
              Browse All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

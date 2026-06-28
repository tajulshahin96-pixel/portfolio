export default function PricingCTA() {
  return (
    <section className="max-w-container-max mx-auto px-gutter mt-section-gap">
      <div className="relative rounded-3xl p-12 md:p-16 overflow-hidden bg-surface-container-low border border-white/5">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-headline-lg font-headline-lg mb-4">Let&apos;s Build Something <span className="text-primary">Amazing Together</span></h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant mb-8">Have a project in mind? Let&apos;s discuss how I can help you grow your business through data-driven strategies.</p>
            <button className="primary-gradient-btn px-8 py-4 rounded-full text-white font-bold text-body-md flex items-center gap-3">
              Book Free Strategy Call
              <span className="material-symbols-outlined">call_made</span>
            </button>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-all duration-500 rounded-full"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                alt="Professional Headshot" 
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border-2 border-white/10" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyN4unbFuxI8y-8I2FE8Nzpj-TbQmBEpOvPvN-qjE7ell1DVioPMBk8a9U4_z8J8teOzZSpxf7hrvwCtl1SQ8zYn00zC11n04GLQVy7mJPvIxu41_gQXx0buvOqF-1e4qbjMOS_RLcgEGeOO4ydGUvDxpJhoAEvGzpTS8omM5loLSryopo82dEf80vB-54wnx5fmMAdpZm17LnuFCCM3Gswah802Ytd35F_eFgtoQTRPIlZtjE1e3OIQv81FS4Rfs0n199H2ekBQY-" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

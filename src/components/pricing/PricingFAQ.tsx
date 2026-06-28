export default function PricingFAQ() {
  return (
    <section className="max-w-[800px] mx-auto px-gutter mt-section-gap">
      <h2 className="text-headline-lg font-headline-lg text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="glass-card rounded-lg p-6 cursor-pointer group hover:bg-white/5">
          <div className="flex justify-between items-center">
            <span className="text-body-lg font-bold">Can I switch plans later?</span>
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">chevron_right</span>
          </div>
        </div>
        <div className="glass-card rounded-lg p-6 cursor-pointer group hover:bg-white/5">
          <div className="flex justify-between items-center">
            <span className="text-body-lg font-bold">Is there a contract or commitment?</span>
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">chevron_right</span>
          </div>
        </div>
        <div className="glass-card rounded-lg p-6 cursor-pointer group hover:bg-white/5">
          <div className="flex justify-between items-center">
            <span className="text-body-lg font-bold">Do you offer a money-back guarantee?</span>
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">chevron_right</span>
          </div>
        </div>
      </div>
    </section>
  );
}

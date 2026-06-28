export default function ServicesFAQ() {
  return (
    <section className="py-section-gap px-gutter max-w-3xl mx-auto relative z-10">
      <h2 className="font-headline-lg text-headline-lg text-center mb-16">Frequently Asked <span className="text-primary">Questions</span></h2>
      <div className="space-y-4">
        <details className="glass-card rounded-xl group overflow-hidden" open>
          <summary className="p-6 cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
            <span className="font-headline-md text-headline-md">How long does a typical implementation take?</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant font-body-md border-t border-white/5 pt-4">
            Typically, our core setup for ad campaigns and landing pages takes 14 to 21 days. Larger enterprise web development projects can range from 8 to 12 weeks depending on complexity.
          </div>
        </details>
        
        <details className="glass-card rounded-xl group overflow-hidden">
          <summary className="p-6 cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
            <span className="font-headline-md text-headline-md">Do you offer ongoing management?</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant font-body-md border-t border-white/5 pt-4">
            Yes, we provide retained services for advertising management, funnel optimization, and technical maintenance to ensure your digital ecosystem stays ahead of competitors.
          </div>
        </details>
        
        <details className="glass-card rounded-xl group overflow-hidden">
          <summary className="p-6 cursor-pointer flex justify-between items-center list-none [&::-webkit-details-marker]:hidden">
            <span className="font-headline-md text-headline-md">Can you work with our existing CRM?</span>
            <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
          </summary>
          <div className="px-6 pb-6 text-on-surface-variant font-body-md border-t border-white/5 pt-4">
            Absolutely. We specialize in custom integrations with HubSpot, Salesforce, GoHighLevel, and other leading platforms to ensure data flows seamlessly.
          </div>
        </details>
      </div>
    </section>
  );
}

export default function LogoCloud() {
  return (
    <section className="py-12 border-y border-white/5 bg-surface-container-lowest/80">
      <div className="max-w-container-max mx-auto px-gutter text-center">
        <p className="text-on-surface-variant font-label-mono text-[11px] uppercase tracking-[0.3em] mb-10 opacity-70">Trusted by Global Brands</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          <span className="text-headline-md font-bold tracking-tight">Google</span>
          <span className="text-headline-md font-bold tracking-tight">Meta</span>
          <span className="text-headline-md font-bold tracking-tight">LinkedIn</span>
          <span className="text-headline-md font-bold tracking-tight">Instagram</span>
          <span className="text-headline-md font-bold tracking-tight">YouTube</span>
          <span className="text-headline-md font-bold tracking-tight">Shopify</span>
        </div>
      </div>
    </section>
  );
}

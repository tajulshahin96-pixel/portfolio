export default function BlogGrid() {
  const posts = [
    {
      title: "The Death of Third-Party Cookies: What's Next?",
      category: "Marketing",
      date: "Oct 12, 2024",
      excerpt: "How to pivot your paid advertising strategy to thrive in a privacy-first world.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzankH-xT3sgD4rpskg0A0AIZ8bBP9QhBv8ycseiIJEVF1bmxIa2eGahHg06xUJPwa2BVCoEr5c8dC0ru_gyOfog44g2bMtsedenOape0qSCIzirM-PIPObav0IRGWVMbHh_AKxLbDMk8OT8KeA4z8-IdBI7HAlOzOB01tW-aWi_MJxpIOgvFaNFJ2bewkBOeOy8zv-nUUUofhqJDS69gN62VLE6ak1Gdv3mVk7BxqzffTPwJu_4c79YxVL-i6r-ag1jSTUzMxM8KI"
    },
    {
      title: "Semantic SEO: Ranking Without Backlinks",
      category: "SEO",
      date: "Sep 28, 2024",
      excerpt: "A technical guide to structuring content clusters that Google's algorithm loves.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC40NAI54GmH5zOlNbSKOS_rbMh3TZyX8oFlc31RUgt2L6-UbcTdMdH7Kg-Eb_bbMEQmn4xnYegGeWpx7QBQXEp3X5ZWWNsrrNQzx3nVZjnVldXxAf2XLKryEzF8rItcKaynx5YMENSov6TQzg2P8RiUQfINduHD-fBwtzIdrldaztWvzFAMXaf_-80-R8xzPbXSrpnp1ic3bfpzkHNRA46pOw2-I5S5tNZY78DHqgaBevTpMS81268keNR0M2fMZph7ctgoa6UOyiA"
    },
    {
      title: "Why Headless CMS is the Future of Enterprise",
      category: "Web Dev",
      date: "Sep 15, 2024",
      excerpt: "Analyzing the performance and scalability benefits of decoupling your front-end architecture.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyN4unbFuxI8y-8I2FE8Nzpj-TbQmBEpOvPvN-qjE7ell1DVioPMBk8a9U4_z8J8teOzZSpxf7hrvwCtl1SQ8zYn00zC11n04GLQVy7mJPvIxu41_gQXx0buvOqF-1e4qbjMOS_RLcgEGeOO4ydGUvDxpJhoAEvGzpTS8omM5loLSryopo82dEf80vB-54wnx5fmMAdpZm17LnuFCCM3Gswah802Ytd35F_eFgtoQTRPIlZtjE1e3OIQv81FS4Rfs0n199H2ekBQY-"
    }
  ];

  return (
    <section className="max-w-container-max mx-auto px-gutter mb-section-gap relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <article key={idx} className="glass-card rounded-2xl overflow-hidden group flex flex-col cursor-pointer">
            <div className="w-full aspect-[16/10] overflow-hidden relative border-b border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-surface/80 backdrop-blur border border-white/10 text-on-surface font-label-mono text-[12px] uppercase px-3 py-1 rounded-full">
                {post.category}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="text-on-surface-variant text-[14px] mb-3">{post.date}</div>
              <h3 className="text-headline-md font-headline-md mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="text-body-md font-body-md text-on-surface-variant flex-grow mb-6">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-2 text-primary font-bold">
                Read Article <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="glass-card px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border-white/20 mx-auto hover:bg-white/5 transition-colors">
          Load More Articles
        </button>
      </div>
    </section>
  );
}

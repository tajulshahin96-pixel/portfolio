"use client";

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';
import Image from 'next/image';

export default function BlogPage() {
  return (
    <>
      <Header />
      <SectionObserver />
      
      <main className="pt-32 pb-section-gap relative overflow-hidden">
        {/* Background Blobs */}
        <div className="blob bg-primary absolute top-0 -left-64 w-[600px] h-[600px] rounded-full pointer-events-none"></div>
        <div className="blob bg-secondary absolute top-[20%] -right-64 w-[600px] h-[600px] rounded-full pointer-events-none"></div>
        <div className="blob bg-tertiary absolute bottom-0 left-[20%] w-[600px] h-[600px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          {/* Header Section */}
          <header className="mb-12 md:mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
              <span className="font-label-mono text-label-mono uppercase">Knowledge Hub</span>
            </div>
            <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-headline-xl text-on-surface mb-6 max-w-3xl leading-tight">
              Insights for <span className="gradient-text">Modern Growth</span>
            </h1>
            <p className="font-body-lg text-base md:text-body-lg text-on-surface-variant max-w-2xl">
              Strategies, trends, and technical guides designed for scaling businesses in a data-driven world.
            </p>
          </header>

          {/* Featured Article */}
          <section className="mb-16 md:mb-24">
            <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer flex flex-col lg:flex-row min-h-[500px]">
              <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt="A futuristic digital representation of generative artificial intelligence" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtojw1QlwuUBEOTjdunjFhT8PVXEecIgT5xQLuWfvm8sjKPowzfkFO_MjoBG-dW2-UAD7UkpPp-_672vJBrf_Lng4Kw0qgqDlVWX4iwLhiwOvAohjdmM3NbReUAONFEErUf3FAwnEqYNJASqEZi1eeSJuIMh4i9NCilENtfAWwD9Lnq2xjv3AmEc_boDdJmb1ikNkiZTmG3EkaF-ASf-CCE9x6G44mIZaWtBvH2Frv7Amm9RYJZRaQ23xtFN4Z76Z7yjSNwp9yf7mU"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent lg:hidden"></div>
              </div>
              <div className="lg:w-1/2 p-6 md:p-card-padding flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label-mono text-label-mono">Marketing</span>
                  <span className="text-on-surface-variant font-label-mono text-label-mono">• 12 Min Read</span>
                </div>
                <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-headline-lg text-on-surface mb-6 group-hover:text-primary transition-colors leading-snug">
                  The Future of Generative AI in Marketing
                </h2>
                <p className="font-body-md text-sm sm:text-body-md text-on-surface-variant mb-8 leading-relaxed">
                  Explore how large language models and generative visual AI are reshaping the landscape of performance marketing, content creation, and customer personalization at scale. Learn how to stay ahead of the curve.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full border border-primary/20 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        className="w-full h-full object-cover" 
                        alt="Tajul Shahin" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn8ip2OTv1Gzwb4m3GyC7XtD8UvPf5WVwUhBtJLr1L7GuDtUBLBOY2k2w0cXwBR9KbqCYRlP4HsbtTLIeE-ddZXAU-tJrrxODnxamtpGTlOYeFTO7kzJZtPP5NlVhnQ81jZ6oCJyLL4C4NPPgdWD7h5GVtUcuRpD1Gp6shNohfxPWGkNCX7yfPqgTxi5Q7Wunqxr65tgBhzLCWUieD26uYk5RqszQBpDyCMbVTmFjbiagbXb6x4g6OUjmHUJKtA16H-7EQiG1mHsHh"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">Tajul Shahin</p>
                      <p className="text-on-surface-variant text-sm">March 24, 2024</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Insights Grid */}
          <section className="mb-section-gap">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4">
              <h3 className="font-headline-md text-headline-md">Latest Insights</h3>
              <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide w-full md:w-auto">
                <button className="px-6 py-2 rounded-full glass-card border-primary/40 text-primary font-label-mono text-label-mono shrink-0">All</button>
                <button className="px-6 py-2 rounded-full glass-card border-white/5 text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors shrink-0">Marketing</button>
                <button className="px-6 py-2 rounded-full glass-card border-white/5 text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors shrink-0">Development</button>
                <button className="px-6 py-2 rounded-full glass-card border-white/5 text-on-surface-variant font-label-mono text-label-mono hover:text-primary transition-colors shrink-0">Strategy</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <article className="glass-card rounded-xl overflow-hidden flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Mastering Data-Driven Growth Loops" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcPGAmERPWYLPpp-m6GE5OWbLY0f4neMLRwQIK7IIAd3nGjMkeGucqS_yNL-N4kkaGKh1zjq4cZi1bY0XOU50eTWEM3dul3VBOf0DtBvgPaa8zfc_ujo1dAx5GJj606DGFir7asPD6yhmx8OYweOzKIpjgU-HxltJYB9r6-7sRREsGUR8NzFK1NgZeJ3DjYD9uF8T3jCe4hj3xicH--5tqHCwvJKZnWfA_p8UBtCBXfL6CTfpVXbAC80d1Hv48bGgpzPcL9k1qLEiL"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-mono text-label-mono text-tertiary">Strategy</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">8 Min Read</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-3 leading-tight">Mastering Data-Driven Growth Loops</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">How to implement feedback mechanisms that compound your customer acquisition efforts automatically.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-on-surface-variant text-sm">March 20, 2024</span>
                    <a className="text-primary flex items-center hover:gap-2 transition-all" href="#">Read More <span className="material-symbols-outlined ml-1 text-sm">open_in_new</span></a>
                  </div>
                </div>
              </article>

              {/* Article 2 */}
              <article className="glass-card rounded-xl overflow-hidden flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Next.js 14 for High-Performance SEO" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-DfiDyn-_f6eANiql5iE6f89p18xX-jelFKIoWKTDytUSFSHJrL23IxpPoZ4RjV7CBQUzicmXTeyEzMSOmeyiq3gqQiDzzlfyPDYBLlIIy7sK_17DR4fDUQNU4gYQUQwtLSbNY9rMIX1dBwGbkii6FtqOsI6lR6zQUD8MfLyAZ6GRxUV2Vu4RfJtWrBEOfzw_kmros152ehJndrYRUuU3z6lgPbueDz-f9Ci7HCrOFci4zY6KUY2QBzIie_ng2gdz_614WT8RaLHt"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-mono text-label-mono text-secondary">Development</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">15 Min Read</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-3 leading-tight">Next.js 14 for High-Performance SEO</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Leveraging server actions and streaming to achieve perfect Lighthouse scores and better rankings.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-on-surface-variant text-sm">March 15, 2024</span>
                    <a className="text-primary flex items-center hover:gap-2 transition-all" href="#">Read More <span className="material-symbols-outlined ml-1 text-sm">open_in_new</span></a>
                  </div>
                </div>
              </article>

              {/* Article 3 */}
              <article className="glass-card rounded-xl overflow-hidden flex flex-col group">
                <div className="h-48 overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    alt="Beyond ROAS: The Real LTV Formula" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwYiSqzT_29XeEsTcm9LOzCMJSoT-7dcLdGIq1HQvX8RXf2qtMNZqc3mAlMFfuk5ry8BxbTGrKlBHv0S2GvU_rMvLVZ-1abL3e8BikyqH3BXRt8EtUQHGyP2c-A-2jRqNOD6lSqMhYaB6_J25__Rw0S3wRu0IX6JZgzoGXvVWHdUUpwy7DsWX0rh3WZN7l_HBkwLiXnCHpse0CFP-CqJ1j-7NF4qDTyXJUrQa0xGzGZq57pcUJymXbKNkHj1xDa_05Ue5zoGlh5Ixg"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-label-mono text-label-mono text-primary">Marketing</span>
                    <span className="font-label-mono text-label-mono text-on-surface-variant">10 Min Read</span>
                  </div>
                  <h4 className="font-headline-md text-headline-md text-on-surface mb-3 leading-tight">Beyond ROAS: The Real LTV Formula</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Why prioritizing Customer Lifetime Value over immediate Return on Ad Spend is the key to 10x growth.</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-on-surface-variant text-sm">March 12, 2024</span>
                    <a className="text-primary flex items-center hover:gap-2 transition-all" href="#">Read More <span className="material-symbols-outlined ml-1 text-sm">open_in_new</span></a>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="mt-16 flex justify-center">
              <button className="glass-card px-8 py-3 rounded-full text-on-surface font-semibold hover:border-primary transition-all">
                Load More Articles
              </button>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="max-w-4xl mx-auto">
            <div className="relative glass-card rounded-3xl p-6 md:p-card-padding text-center overflow-hidden">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary text-4xl md:text-5xl mb-6">rocket_launch</span>
                <h2 className="font-headline-lg text-3xl md:text-headline-lg text-on-surface mb-4 leading-tight">Subscribe for Growth Insights</h2>
                <p className="font-body-md text-sm md:text-body-md text-on-surface-variant mb-8 md:mb-10 max-w-xl mx-auto leading-relaxed">
                  Join 5,000+ founders and marketers. Get actionable strategies delivered straight to your inbox once a week. No spam, just pure growth.
                </p>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e: any) => e.preventDefault()}>
                  <input 
                    className="flex-grow bg-surface-container-low border border-white/10 rounded-full px-6 py-4 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline" 
                    placeholder="Enter your best email" 
                    type="email"
                  />
                  <button className="primary-gradient-btn px-8 py-4 rounded-full text-white font-bold whitespace-nowrap">
                    Join Inner Circle
                  </button>
                </form>
                <p className="text-sm text-outline-variant mt-6 font-label-mono">
                  Privacy first. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

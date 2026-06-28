"use client";

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import SectionObserver from '@/components/SectionObserver';
import Image from 'next/image';

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <Header />
      <SectionObserver />
      
      {/* Atmospheric Background Layers */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="blob absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full"></div>
        <div className="blob absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary-container rounded-full"></div>
        <div className="blob absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-tertiary-container rounded-full"></div>
      </div>

      <main className="pt-32 pb-section-gap">
        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-gutter text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 mb-6">
            <span className="material-symbols-outlined text-primary text-[18px]">payments</span>
            <span className="text-label-mono font-label-mono text-primary uppercase">Pricing Plans</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl mb-6 tracking-tight">
            Flexible Plans for <span className="text-primary italic">Every Business</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Choose the perfect plan that fits your business needs and budget. We help you scale with data-driven marketing strategies.
          </p>
        </section>

        {/* Pricing Cards Bento Grid */}
        <section className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-3 gap-8 mb-section-gap items-stretch">
          {/* Starter Plan */}
          <div className="glass-card p-card-padding rounded-xl flex flex-col">
            <div className="mb-8">
              <span className="font-label-mono text-label-mono text-on-surface-variant mb-2 block">01 / FOR INDIVIDUALS</span>
              <h3 className="font-headline-md text-headline-md mb-2">Starter</h3>
              <p className="text-on-surface-variant text-body-md mb-6">Perfect for small businesses starting their digital journey.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-headline-lg font-headline-lg">$299</span>
                <span className="text-on-surface-variant">/month</span>
              </div>
            </div>
            <div className="flex-grow space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Social Media Management</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Basic Campaign Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Landing Page (1 Page)</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Monthly Progress Report</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Email Support</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-lg border border-outline hover:border-primary hover:text-primary transition-all duration-300 font-bold">
              Get Started
            </button>
          </div>

          {/* Growth Plan (Featured) */}
          <div className="glass-card p-card-padding rounded-xl flex flex-col relative border border-[#2d5bff] shadow-[0_0_20px_rgba(45,91,255,0.2)] transform md:-translate-y-4 hover:border-primary/80">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-container text-white px-4 py-1 rounded-full text-label-mono font-label-mono text-[12px] whitespace-nowrap">
              MOST POPULAR
            </div>
            <div className="mb-8">
              <span className="font-label-mono text-label-mono text-primary mb-2 block">02 / BEST FOR GROWTH</span>
              <h3 className="font-headline-md text-headline-md mb-2">Growth</h3>
              <p className="text-on-surface-variant text-body-md mb-6">Ideal for growing businesses looking to dominate the market.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-headline-lg font-headline-lg text-primary">$599</span>
                <span className="text-on-surface-variant">/month</span>
              </div>
            </div>
            <div className="flex-grow space-y-4 mb-10">
              <div className="flex items-center gap-3 font-semibold">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Everything in Starter</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Advanced Ad Campaigns</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Full Sales Funnel Setup</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Conversion Rate Optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Weekly Analytics Dashboard</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Priority Slack Support</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-lg primary-gradient-bg text-white glow-button transition-all duration-300 font-bold shadow-lg">
              Get Started Now
            </button>
          </div>

          {/* Scale Plan */}
          <div className="glass-card p-card-padding rounded-xl flex flex-col">
            <div className="mb-8">
              <span className="font-label-mono text-label-mono text-on-surface-variant mb-2 block">03 / FOR ENTERPRISE</span>
              <h3 className="font-headline-md text-headline-md mb-2">Scale</h3>
              <p className="text-on-surface-variant text-body-md mb-6">High-performance solutions for rapidly scaling brands.</p>
              <div className="flex items-baseline gap-1">
                <span className="text-headline-lg font-headline-lg">$999</span>
                <span className="text-on-surface-variant">/month</span>
              </div>
            </div>
            <div className="flex-grow space-y-4 mb-10">
              <div className="flex items-center gap-3 font-semibold">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Everything in Growth</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Omni-channel Marketing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">Custom Web Development</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">CRM & API Integration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-body-md">1-on-1 Bi-weekly Strategy Call</span>
              </div>
            </div>
            <button className="w-full py-4 rounded-lg border border-outline hover:border-primary hover:text-primary transition-all duration-300 font-bold">
              Get Started
            </button>
          </div>
        </section>

        {/* Custom Enterprise Section */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-gap">
          <div className="glass-card p-10 md:p-16 rounded-3xl overflow-hidden relative border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-label-mono text-label-mono text-tertiary mb-4 block">CUSTOM SOLUTIONS</span>
                <h2 className="font-headline-lg text-headline-lg mb-6">Enterprise & Global Brands</h2>
                <p className="text-body-lg text-on-surface-variant mb-8">
                  Need something tailored specifically for a large-scale operation? We offer custom strategy, dedicated management, and white-label reporting for major brands.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">diamond</span>
                    <span className="text-body-md">Custom Strategy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">support_agent</span>
                    <span className="text-body-md">Dedicated Manager</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">bar_chart_4_bars</span>
                    <span className="text-body-md">Advanced Solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">verified_user</span>
                    <span className="text-body-md">24/7 Premium Support</span>
                  </li>
                </ul>
                <button className="px-8 py-4 bg-tertiary text-on-tertiary font-bold rounded-lg hover:brightness-110 transition-all flex items-center gap-3">
                  Request Custom Quote
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
              <div className="relative h-[300px] md:h-full min-h-[400px] rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  alt="Enterprise team meeting" 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-screen" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjPUY1DQrWogwtZMCLEXU2xFpmeXtvtI69PP8M6XFVyFDGMJxE7IWZlHg1jt1ZZ4KwdcgCq5grp4TDmHgRv3dbJr35byTPwLH8ZWShXao2IHchpAeX5uutk1vFjkl-IGSM9k8aoaxt1hdF_nvpF9bdH84y4cB8xiAA6HJ2u30Igf4uYaIm2rWNsTRd-ANMxfYfTy3jjRdmDeUXFrcL5bLpikzONvytub7Y4BP5PucyQ9zXmnnHYUIlnoyyQNyGDWr8WRKFj36iGug8"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-container-max mx-auto px-gutter mb-section-gap">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-headline-lg mb-4">Frequently Asked Questions</h2>
            <p className="text-body-md text-on-surface-variant">Everything you need to know about our process and plans.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            
            {/* FAQ Item 1 */}
            <div className={`accordion-item glass-card rounded-xl overflow-hidden ${activeFaq === 0 ? 'active' : ''}`}>
              <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => toggleFaq(0)}>
                <span className="font-headline-md text-body-lg">How long does it take to see results?</span>
                <span className={`material-symbols-outlined transition-transform ${activeFaq === 0 ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 text-on-surface-variant">
                  Digital marketing is a marathon, not a sprint. While initial traction can often be seen within the first 30 days, sustainable and meaningful scaling usually manifests between 3-6 months of consistent campaign optimization.
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className={`accordion-item glass-card rounded-xl overflow-hidden ${activeFaq === 1 ? 'active' : ''}`}>
              <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => toggleFaq(1)}>
                <span className="font-headline-md text-body-lg">Can I upgrade or downgrade my plan at any time?</span>
                <span className={`material-symbols-outlined transition-transform ${activeFaq === 1 ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 text-on-surface-variant">
                  Yes, absolutely. We offer month-to-month flexibility. If your business needs grow, you can upgrade to a higher tier instantly to leverage more features and higher campaign volume.
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className={`accordion-item glass-card rounded-xl overflow-hidden ${activeFaq === 2 ? 'active' : ''}`}>
              <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => toggleFaq(2)}>
                <span className="font-headline-md text-body-lg">Is ad spend included in the monthly price?</span>
                <span className={`material-symbols-outlined transition-transform ${activeFaq === 2 ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 text-on-surface-variant">
                  No, the prices listed are for our management and strategy services. Ad spend is paid directly to the platforms (Google, Meta, etc.) and is determined based on your specific growth goals and budget.
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className={`accordion-item glass-card rounded-xl overflow-hidden ${activeFaq === 3 ? 'active' : ''}`}>
              <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => toggleFaq(3)}>
                <span className="font-headline-md text-body-lg">Do you offer custom web development outside these plans?</span>
                <span className={`material-symbols-outlined transition-transform ${activeFaq === 3 ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              <div className="accordion-content">
                <div className="px-6 pb-6 text-on-surface-variant">
                  Yes, we do. While our 'Scale' plan includes ongoing development, we also take on standalone web development projects. Contact us for a custom project quote.
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}

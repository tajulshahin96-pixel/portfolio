'use client';
import { useState } from 'react';

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the typical project timeline?",
      answer: "Timelines vary by scope, but most strategy-led campaigns launch within 4-6 weeks. Full web builds typically take 8-12 weeks from discovery to go-live."
    },
    {
      question: "Do you work with startups?",
      answer: "Yes, we partner with seed-stage startups through to enterprise clients. We adapt our frameworks to fit the agility and scale of each organization."
    },
    {
      question: "How is performance measured?",
      answer: "We establish clear KPIs (Key Performance Indicators) during the strategy phase, typically focusing on ROAS, CAC, conversion rate, and revenue growth."
    }
  ];

  return (
    <section className="max-w-3xl mx-auto px-gutter mb-section-gap">
      <div className="text-center mb-12">
        <h2 className="font-headline-lg text-headline-lg mb-4">Common Questions</h2>
        <p className="text-on-surface-variant">Everything you need to know about starting your partnership with us.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div 
            key={idx}
            className={`accordion-item glass-card rounded-2xl p-6 cursor-pointer group ${openIndex === idx ? 'active' : ''}`} 
            onClick={() => toggleAccordion(idx)}
          >
            <div className="flex justify-between items-center">
              <h5 className="font-headline-md text-[18px]">{faq.question}</h5>
              <span className="material-symbols-outlined icon-rotate transition-transform">expand_more</span>
            </div>
            <div className="accordion-content pt-4">
              <p className="text-on-surface-variant">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

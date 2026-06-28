'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-11 h-11 rounded-full primary-gradient-bg text-white glow-button items-center justify-center z-[60] transition-all duration-300 shadow-2xl ${visible ? 'flex opacity-100' : 'hidden opacity-0'}`}
      id="backToTop"
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}

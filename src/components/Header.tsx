'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-white/5 shadow-2xl transition-all duration-300 ${scrolled ? 'bg-background/90 py-2' : 'bg-background/60 py-3'}`}>
        <div className="flex justify-between items-center w-full px-gutter py-3 max-w-container-max mx-auto">
          <Link href="/" className="text-body-lg font-bold text-on-surface tracking-tight relative z-50">
            TAJUL SHAHIN
          </Link>
          
          <nav className="hidden md:flex gap-7 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={pathname === link.href ? "text-primary font-bold border-b-2 border-primary pb-0.5 text-body-md" : "text-on-surface-variant hover:text-on-surface transition-colors duration-300 text-body-md"}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <button className="hidden md:block primary-gradient-bg text-white font-bold px-5 py-2 rounded-full glow-button transition-all duration-300 active:scale-95 text-body-md">
            Let&apos;s Work Together
          </button>

          {/* Hamburger Menu Button */}
          <button 
            className="md:hidden text-on-surface relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[280px] bg-surface-container-high border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex-1 overflow-y-auto py-28 px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className={pathname === link.href ? "text-primary font-bold text-body-lg" : "text-on-surface-variant hover:text-on-surface transition-colors duration-300 text-body-lg"}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="p-6 border-t border-white/10 pb-12">
          <button className="w-full primary-gradient-bg text-white font-bold px-5 py-4 rounded-full glow-button transition-all duration-300 active:scale-95 text-body-md">
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </>
  );
}

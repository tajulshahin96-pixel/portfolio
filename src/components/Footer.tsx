import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-lowest border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-gutter">
        <div className="md:col-span-1">
          <div className="text-xl font-black text-on-surface mb-5 tracking-tight">TAJUL SHAHIN</div>
          <p className="text-on-surface-variant text-[14px] leading-relaxed mb-6">Expert digital marketing and web solutions optimized for performance at scale.</p>
          <div className="flex gap-3">
            <Link href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors border-white/10">
              <span className="material-symbols-outlined text-[18px]">language</span>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors border-white/10">
              <span className="material-symbols-outlined text-[18px]">groups</span>
            </Link>
            <Link href="#" className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:text-primary transition-colors border-white/10">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-on-surface text-[16px] mb-5">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Home</Link></li>
            <li><Link href="/about" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">About</Link></li>
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Services</Link></li>
            <li><Link href="/case-studies" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Case Studies</Link></li>
            <li><Link href="/contact" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface text-[16px] mb-5">Services</h4>
          <ul className="space-y-3">
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Digital Marketing</Link></li>
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Web Development</Link></li>
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Landing Pages</Link></li>
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">Sales Funnel</Link></li>
            <li><Link href="/services" className="text-on-surface-variant hover:text-primary transition-colors duration-300 text-[14px] hover:translate-x-1 inline-block">SEO & Analytics</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-on-surface text-[16px] mb-5">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-on-surface-variant text-[14px]">
              <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
              <span>tajulshahin96@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant text-[14px]">
              <span className="material-symbols-outlined text-primary text-[18px]">call</span>
              <span>+8801629105607</span>
            </li>
            <li className="flex items-center gap-3 text-on-surface-variant text-[14px]">
              <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-gutter mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-[12px] uppercase tracking-widest font-medium">© {new Date().getFullYear()} Tajul Shahin. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-[12px] uppercase tracking-widest font-medium">Privacy Policy</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors text-[12px] uppercase tracking-widest font-medium">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

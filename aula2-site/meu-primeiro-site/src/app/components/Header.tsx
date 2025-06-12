'use client';

import Link from 'next/link';
// import VBLogo from '@/public/vb-logo.svg';  // quando fizer o logo vai estar aqui

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-[#C0C0C0]/30 bg-[#0F0F0F]/80 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-2">
        {/* quando tiver o logo */}
        <span className="font-semibold tracking-wide text-[#F2F2F2] hover:text-[#FFCF00]">VB</span>
      </Link>

      <nav className="flex gap-4 text-medium">
        <Link href="/portfolio" className="hover:text-[#FFCF00]">
          Portfolio
        </Link>
        <Link href="/store" className="hover:text-[#FFCF00]">
          Store
        </Link>
        <Link href="/contact" className="hover:text-[#FFCF00]">
          Contact
        </Link>
      </nav>
    </header>
  );
}

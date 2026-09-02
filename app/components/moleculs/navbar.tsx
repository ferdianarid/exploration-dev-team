'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu, Search, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#discover', label: 'Discover' },
  { href: '#stories', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="flex items-center justify-between border-b border-white/30 pb-5 text-[10px] font-semibold uppercase tracking-[.17em]">
        <Link href="#top" className="flex items-center gap-2 tracking-[.08em]">
          <p className="text-2xl font-bold text-white">Everest.</p>
        </Link>

        <div className="hidden items-center gap-8 text-white/80 md:flex">
          {NAV_LINKS.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Link
                href={link.href}
                className="group relative inline-flex items-center justify-center overflow-hidden py-1 text-base font-normal transition hover:text-white"
              >
                <span>{link.label}</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-px w-full origin-left bg-white"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileHover={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Search" className="hidden transition hover:scale-110 sm:block">
            <Search size={20} />
          </button>
          <button className="rounded-full border border-white/75 px-5 py-3 text-[12px] transition hover:bg-white hover:text-[#0c1114]">
            Explore now
          </button>
          <button
            aria-label="Open navigation"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full z-20 mt-4 rounded-2xl border border-white/20 bg-[#09171c]/95 p-5 shadow-2xl backdrop-blur md:hidden">
          <div className="flex flex-col gap-5 text-xs uppercase tracking-[.18em] text-white/80">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
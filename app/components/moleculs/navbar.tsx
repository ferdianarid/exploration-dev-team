'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, Search, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#about', label: 'About us' },
  { href: '#discover', label: 'Discover' },
  { href: '#stories', label: 'Stories' },
  { href: '#contact', label: 'Contact' },
];

const navLinkVariants = {
  rest: { transform: 'translateY(0%)' },
  active: { transform: 'translateY(100%)' },
};

const navLinkIncomingVariants = {
  rest: { transform: 'translateY(-100%)' },
  active: { transform: 'translateY(0%)' },
};

const navLinkTransition = {
  duration: 0.3,
  ease: [0.338, 0.015, 0.395, 0.959] as const,
};

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen || searchOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen, searchOpen]);

  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  return (
    <div className="relative">
      <nav className="relative z-50 flex items-center justify-between border-b border-white/30 pb-5 text-[10px] font-semibold uppercase tracking-[.17em]">
        <Link href="#top" className="flex items-center gap-2 tracking-[.08em]">
          <p className="text-2xl font-bold text-white">Uluwatu.</p>
        </Link>

        <div className="hidden items-center gap-8 text-white/80 md:flex">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="relative">
              <MotionLink
                href={link.href}
                initial="rest"
                whileHover="active"
                whileFocus="active"
                className="relative inline-flex items-center justify-center py-1 text-base font-normal transition hover:text-white focus-visible:text-white"
              >
                <span className="relative block overflow-hidden">
                  <motion.span
                    className="block whitespace-nowrap"
                    variants={navLinkVariants}
                    transition={navLinkTransition}
                  >
                    {link.label}
                  </motion.span>
                  <motion.span
                    className="absolute inset-0 block whitespace-nowrap"
                    variants={navLinkIncomingVariants}
                    transition={navLinkTransition}
                    aria-hidden="true"
                  >
                    {link.label}
                  </motion.span>
                </span>
              </MotionLink>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            aria-label="Open search"
            className="mr-3 transition hover:scale-110"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={20} />
          </button>
          <MotionLink
            href="#discover"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 420, damping: 24 }}
            className="group relative hidden md:flex w-fit items-center gap-2 overflow-hidden rounded-none border border-white pr-2 pl-3 py-1.5 text-[9px] font-bold uppercase tracking-[.16em]"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 text-base font-semibold tracking-normal transition-colors duration-300 group-hover:text-[#0c1114]">
              Get Started
            </span>
            <span className="relative z-10 grid h-8 w-8 place-items-center rounded-none bg-white text-[#0c1114] transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-4deg]">
              <ArrowRight size={14} />
            </span>
          </MotionLink>
          <button
            aria-label="Open navigation"
            className="md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-60 flex min-h-screen flex-col bg-[#09171c] px-6 pb-10 pt-8 text-white sm:px-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,rgba(217,142,142,0.18),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_48%)]" />
            <div className="relative flex items-center justify-between border-b border-white/20 pb-5">
              <p className="text-2xl font-bold">Uluwatu.</p>
              <button
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="transition hover:rotate-90 hover:scale-110"
              >
                <X size={22} />
              </button>
            </div>

            <motion.form
              role="search"
              onSubmit={(event) => event.preventDefault()}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center"
            >
              <label className="mb-5 text-[10px] font-semibold uppercase tracking-[.24em] text-white/45">
                Search private stays
              </label>
              <div className="flex items-center border-b border-white/50 pb-4">
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Where would you like to go?"
                  className="min-w-0 flex-1 bg-transparent text-[clamp(1.25rem,5vw,4.25rem)] font-medium tracking-tighter text-white outline-none placeholder:text-white/30"
                />
                <Search className="size-6 shrink-0 text-white/60 sm:size-12" />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[.16em] text-white/40">
                Try Bali, coastal villas, or private retreats
              </p>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex min-h-screen flex-col bg-[#09171c] px-6 pb-10 pt-32 text-white md:hidden sm:px-10"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,142,142,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)]" />
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { delayChildren: 0.2, staggerChildren: 0.08 } },
              }}
              className="relative flex flex-1 flex-col justify-between"
            >
              <div className="flex flex-col gap-5">
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/45">
                  Explore Uluwatu
                </p>
                <div className="flex flex-col items-start">
                  {NAV_LINKS.map((link) => (
                    <motion.div
                      key={link.href}
                      variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block py-2 text-[clamp(2.4rem,10vw,5rem)] font-medium leading-none tracking-[-0.06em] text-white transition-colors hover:text-[#e7a5a0]"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <MotionLink
                    href="#discover"
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                      type: 'spring',
                      stiffness: 420,
                      damping: 24,
                    }}
                    className="group relative mt-8 flex w-full items-center justify-between gap-2 overflow-hidden rounded-none border border-white px-4 py-3 text-[9px] font-bold uppercase tracking-[.16em]"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span className="relative z-10 text-base font-semibold tracking-normal transition-colors duration-300 group-hover:text-[#0c1114]">
                      Get Started
                    </span>
                    <span className="relative z-10 grid h-8 w-8 place-items-center rounded-none bg-white text-[#0c1114] transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-4deg]">
                      <ArrowRight size={14} />
                    </span>
                  </MotionLink>
                </div>
              </div>

              <motion.p
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                transition={{ duration: 0.5 }}
                className="text-xs uppercase tracking-[.16em] text-white/45"
              >
                Private stays · thoughtful journeys
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
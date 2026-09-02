'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Navbar from '../../moleculs/navbar';
import { heroMotion } from './hero.motion';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="hero-scene relative min-h-180 bg-[#17698c] text-white lg:min-h-[820px]">
      <motion.div
        className="hero-curtain hero-curtain-left"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: isOpen ? '-105%' : 0, opacity: isOpen ? 0.98 : 1 }}
        transition={heroMotion.curtain}
      />
      <motion.div
        className="hero-curtain hero-curtain-right"
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: isOpen ? '105%' : 0, opacity: isOpen ? 0.98 : 1 }}
        transition={heroMotion.curtain}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,38,52,.34),rgba(5,24,31,.08)_36%,rgba(5,18,22,.8))]" />
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1800')] bg-cover bg-center opacity-95" />
      <div className="absolute inset-0 bg-linear-to-b from-[#174f68]/40 via-transparent to-[#071316]" />

      <motion.div
        className="hero-content relative z-10 mx-auto flex min-h-180 max-w-7xl flex-col px-5 pb-14 pt-5 lg:min-h-205 lg:px-12 lg:pt-7"
        initial={{ opacity: 0, y: 26, filter: 'blur(12px)' }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 26, filter: isOpen ? 'blur(0px)' : 'blur(12px)' }}
        transition={heroMotion.content}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -12 }}
          transition={heroMotion.navbar}
        >
          <Navbar />
        </motion.div>

        <div className="mt-auto max-w-3xl pb-7 pt-40 lg:pb-10">
          <motion.p
            className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[.32em] text-white/75"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 18 }}
            transition={heroMotion.kicker}
          >
            <span className="h-px w-8 bg-white/60" /> Independent travel collective
          </motion.p>

          <motion.h1
            className="max-w-4xl text-[clamp(4.5rem,14vw,10.8rem)] font-black uppercase leading-[.78] tracking-[-.055em]"
            initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 24, filter: isOpen ? 'blur(0px)' : 'blur(10px)' }}
            transition={heroMotion.heading}
          >
            Everest.
          </motion.h1>

          <div className="mt-7 flex flex-col justify-between gap-8 border-t border-white/30 pt-6 sm:flex-row sm:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 22 }}
              transition={heroMotion.details}
            >
              <h2 className="max-w-lg text-2xl font-bold uppercase leading-none tracking-[-.04em] sm:text-4xl">
                Adventure awaits,
                <br />
                wherever you stay.
              </h2>
              <p className="mt-4 max-w-sm text-[12px] leading-5 text-white/65">
                We curate remarkable escapes for curious travelers who want the extraordinary
                without the ordinary itinerary.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 18 }}
              transition={heroMotion.cta}
            >
              <Link
                href="#discover"
                className="group flex items-center gap-3 rounded-full border border-white px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em]"
              >
                Start exploring
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0c1114] transition group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
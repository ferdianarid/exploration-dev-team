/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import Navbar from '../../moleculs/navbar';
import { heroMotion } from './hero.motion';
import { DiaTextReveal } from '@/components/ui/dia-text-reveal';
import { SpinningText } from '@/components/ui/spinning-text';

const MotionLink = motion.create(Link);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const headingX = useTransform(scrollYProgress, [0, 1], [0, -220]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={sectionRef} className="hero-scene relative min-h-170 bg-[#17698c] text-white sm:min-h-190 lg:min-h-205">
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
      <motion.video
        className="absolute inset-y-[-8%] inset-x-0 h-[116%] w-full object-cover object-center opacity-95"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        style={{ y: reducedMotion ? 0 : imageY }}
        initial={{ scale: reducedMotion ? 1 : 1.2 }}
        animate={{ scale: 1 }}
        transition={heroMotion.image}
      >
        <source src="/assets/videos/villas.mov" type="video/mp4" />
      </motion.video>
      <div className="absolute inset-0 bg-linear-to-b from-[#174f68]/40 via-transparent to-[#071316]" />

      <motion.div
        className="hero-content relative z-10 mx-auto flex min-h-170 max-w-7xl flex-col px-5 pb-10 pt-5 sm:min-h-190 sm:px-8 sm:pb-14 lg:min-h-205 lg:px-12 lg:pt-7"
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

        <div className="mt-auto max-w-3xl pb-5 pt-24 sm:pt-32 lg:pb-10 lg:pt-40">
          <motion.p
            className="mb-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[.22em] text-white/75 sm:text-sm sm:tracking-[.32em]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 18 }}
            transition={heroMotion.kicker}
          >
            <span className="h-px w-8 bg-white/60" /> Private villa escapes
          </motion.p>

          <DiaTextReveal className="text-[clamp(4.2rem,16vw,10.8rem)] font-bold uppercase leading-[.78] tracking-[-0.055em] text-white" text="Uluwatu." />

          <div className="mt-7 flex flex-col justify-between gap-6 border-t border-white/30 pt-5 sm:gap-8 sm:pt-6 lg:flex-row lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 22 }}
              transition={heroMotion.details}
            >
              <h2 className="max-w-lg text-[clamp(1.5rem,5vw,2.25rem)] font-bold uppercase leading-none tracking-[-.04em]">
                Stay somewhere
                <br />
                beautifully yours.
              </h2>
              <p className="mt-4 max-w-sm text-[11px] leading-5 text-white/65 sm:text-[12px]">
                Curated villas with warm design, breathtaking views, and effortless hospitality for
                slower, more memorable getaways.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 18 }}
              transition={heroMotion.cta}
            >
              <MotionLink
                href="#discover"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 24 }}
                className="group relative flex w-full items-center justify-between gap-3 overflow-hidden rounded-none border border-white py-2 pl-4 pr-2 text-[10px] font-bold uppercase tracking-[.18em] sm:w-fit sm:justify-start sm:pl-5"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative z-10 text-base font-semibold tracking-normal transition-colors duration-300 group-hover:text-[#0c1114] sm:text-xl">
                  Explore villas
                </span>
                <span className="relative z-10 grid h-10 w-10 place-items-center rounded-none bg-white text-[#0c1114] transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-4deg]">
                  <ArrowRight size={15} />
                </span>
              </MotionLink>
            </motion.div>

            
          </div>
        </div>

        <SpinningText className="absolute bottom-24 right-5 hidden sm:block lg:bottom-40 lg:right-28">learn more • earn more • grow more •</SpinningText>
      </motion.div>
    </section>
  );
}
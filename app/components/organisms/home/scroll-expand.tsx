"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import Image from "next/image";
import { registerScrollTrigger } from "@/lib/gsap";

registerScrollTrigger();

const MEDIA_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop";

export default function ScrollExpandHero() {
  return (
    <div>
      <Hero />
      <NextSection />
    </div>
  );
}

function Hero() {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: 0.6,
          pin: true,
        },
      });

      tl.to(labelRef.current, { opacity: 0, duration: 0.15 }, 0)
        .to(
          boxRef.current,
          {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            duration: 0.7,
            ease: "power2.inOut",
          },
          0
        )
        .to(
          textRef.current,
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
          0.55
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen items-center justify-center overflow-hidden bg-[#FAF9F6]"
    >
      <p
        ref={labelRef}
        className="absolute top-[12%] font-(family-name:--font-sans) text-[13px] uppercase tracking-[0.12em] text-white/80"
      >
        Scroll to explore
      </p>

      <div
        ref={boxRef}
        className="relative h-[20vh] w-[30vw] overflow-hidden rounded-[16px] shadow-[0_30px_60px_-20px_rgba(30,10,10,0.35)]"
      >
        <Image
          src={MEDIA_IMAGE}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,10,20,0.15),rgba(40,4,8,0.55))]" />

        <div
          ref={textRef}
          className="absolute bottom-[14%] left-[6%] max-w-200 translate-y-6 opacity-0"
        >
          <h1 className="m-0 font-(family-name:--font-sans) text-[clamp(32px,5vw,64px)] font-semibold uppercase leading-[1.2] tracking-tighter text-[#F7F1E8]">
            Luxury villas for
            <span className="block font-normal text-[#E7D7C5]">
              unforgettable stays
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export function NextSection() {
  const items = [
    {
      title: "Andalucía",
      copy: "Whitewashed villages, olive groves and coastline that turns gold at dusk.",
    },
    {
      title: "Costa Brava",
      copy: "Hidden coves and pine-lined cliffs along Catalonia's northern edge.",
    },
    {
      title: "Balearic Islands",
      copy: "Pine forests, limestone cliffs and turquoise water in every direction.",
    },
  ];

  return (
    <motion.section
      className="bg-white px-[8vw] py-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren: 0.1, staggerChildren: 0.14 },
        },
      }}
    >
      <motion.p
        className="mb-4 font-(family-name:--font-sans) text-[13px] uppercase tracking-[0.14em] text-[#6B6560]"
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        Where to go
      </motion.p>

      <motion.h2
        className="mb-14 max-w-160 font-(family-name:--font-sans) text-[clamp(28px,4vw,44px)] font-semibold leading-[1.08] tracking-[-0.04em] text-[#22201D]"
        variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        Refined villa escapes designed around the way you travel
      </motion.h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
        {items.map((item) => (
          <motion.div
            key={item.title}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 h-px bg-[#DEDAD2]" />
            <h3 className="mb-3 font-(family-name:--font-sans) text-[26px] font-semibold tracking-[-0.04em] text-[#3A1A1A]">
              {item.title}
            </h3>
            <p className="m-0 max-w-85 font-(family-name:--font-sans) text-[15px] leading-6 text-[#57524B]">
              {item.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
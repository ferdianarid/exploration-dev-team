"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plane, ArrowRight } from "lucide-react";
import Nav from "./navbar";
import SearchBar from "./search-bar";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const image = section.querySelector<HTMLElement>("[data-hero-image]");
      const content = section.querySelector<HTMLElement>("[data-hero-content]");
      const scrollIndicator = section.querySelector<HTMLElement>("[data-scroll-indicator]");

      // Parallax pada image — bergerak lebih lambat dari scroll
      if (image) {
        gsap.to(image, {
          yPercent: 28,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "70% top",
            scrub: 0.2,
          },
        });
      }

      // Content fade + slide down + sedikit scale saat discroll
      if (content) {
        gsap.to(content, {
          yPercent: 32,
          opacity: 0,
          scale: 0.96,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "70% top",
            scrub: 0.25,
          },
        });
      }

      // Scroll indicator fade out lebih cepat
      if (scrollIndicator) {
        gsap.to(scrollIndicator, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "15% top",
            scrub: true,
          },
        });
      }

      // Entrance animation saat halaman load (bukan scroll trigger)
      gsap.from(content?.children ?? [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section data-hero className="relative min-h-160 w-full overflow-hidden">
          <div className="absolute inset-0 hero-parallax">
            <Image
              src="/assets/images/bromo.jpg"
              layout="fill"
              objectFit="cover"
              alt="Sunrise over Mount Bromo with mist and volcanic peaks"
              className="h-[118%] w-full object-cover"
              data-hero-image
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/35 to-stone-950/80" />
    
          <Nav />
    
          <div className="relative mt-[150px] max-w-[1280px] mx-auto z-10 flex h-full flex-col justify-end px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">
            <div data-hero-content className="max-w-5xl text-stone-50">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-stone-100 backdrop-blur">
                <Plane className="h-3.5 w-3.5" /> East Java · Indonesia
              </span>
              <h1 className="font-display mt-6 text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl text-balance">
                Where the sun
                <br />
                meets the volcano
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-200 sm:text-lg">
                Curated journeys to Mount Bromo and beyond — sunrise treks, cultural
                encounters, and boutique stays crafted by people who live on the mountain.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#experiences"
                  className="group inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-600 hover:shadow-orange-900/40"
                >
                  Explore journeys
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#journals"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
                >
                  Read the journal
                </a>
              </div>
            </div>
    
            <SearchBar />
          </div>
    
          <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-300 lg:flex">
            <span>Scroll</span>
            <span className="h-10 w-px bg-gradient-to-b from-stone-300/80 to-transparent" />
          </div>
        </section>
  );
}
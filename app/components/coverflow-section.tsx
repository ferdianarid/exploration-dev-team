"use client"

import gsap from "gsap";
import Image from "next/image";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShineBorder } from "@/components/ui/shine-border";

gsap.registerPlugin(ScrollTrigger);

const SIGNATURE_ITEMS = [
  {
    name: "The Chef",
    role: "Innovative cuisine",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "The Artist",
    role: "Contemporary sculpture",
    img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "The Designer",
    role: "Couture atelier",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "The Vintner",
    role: "Rare vineyards",
    img: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "The Architect",
    role: "Living spaces",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900&auto=format&fit=crop",
  },
];

export default function CoverflowSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef(-1);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_W = 300;
  const GAP = 48;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;
      const track = trackRef.current;

      if (!track || !sectionRef.current) return;

      const getPaddingLeft = () =>
        Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;

      const getStartX = () =>
        window.innerWidth / 2 - getPaddingLeft() - CARD_W / 2;
      const getTravel = () =>
        Math.max(0, (cards.length - 1) * (CARD_W + GAP));

      const applyCoverflow = () => {
        const viewportCenter = window.innerWidth / 2;
        let closestIndex = 0;
        let closestDistance = Number.POSITIVE_INFINITY;

        cards.forEach((card) => {
          const index = cards.indexOf(card);
          if (!card) return;
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const distance = (cardCenter - viewportCenter) / (CARD_W + GAP);
          const abs = Math.min(Math.abs(distance), 2.2);

          if (Math.abs(distance) < closestDistance) {
            closestDistance = Math.abs(distance);
            closestIndex = index;
          }

          gsap.set(card, {
            scale: gsap.utils.clamp(0.72, 1, 1 - abs * 0.16),
            rotateY: gsap.utils.clamp(-40, 40, distance * -22),
            opacity: gsap.utils.clamp(0.35, 1, 1 - abs * 0.28),
            zIndex: Math.round(100 - abs * 10),
            filter: `grayscale(${gsap.utils.clamp(0, 1, abs * 0.6)})`,
          });
        });

        if (activeIndexRef.current !== closestIndex) {
          activeIndexRef.current = closestIndex;
          setActiveIndex(closestIndex);
        }
      };

      gsap.set(track, { x: getStartX() });

      gsap.to(track, {
        x: () => getStartX() - getTravel(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getTravel()}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onRefreshInit: () => {
            gsap.set(track, { x: getStartX() });
          },
          onUpdate: applyCoverflow,
          onRefresh: applyCoverflow,
        },
      });

      applyCoverflow();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        height: "100vh",
        background: "#0F0D0C",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{ padding: "0 8vw", marginBottom: 56 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { delayChildren: 0.1, staggerChildren: 0.12 },
          },
        }}
      >
        <motion.p
          style={{
            fontSize: 13,
            color: "#D98E8E",
            margin: "0 0 16px",
          }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          ELEVATED EXPERIENCES
        </motion.p>
        <motion.h2
          style={{
            margin: 0,
            fontWeight: 600,
            fontSize: "clamp(32px, 5vw, 56px)",
            lineHeight: 1.1,
            color: "#F7F1E8",
          }}
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Signature <span style={{ color: "#E7A5A0" }}>Vanity</span>
        </motion.h2>
        <motion.p
          className="mt-4 max-w-xl text-base leading-7 text-[#e3e7e8]"
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
                    Discover serene coastal hideaways, elevated countryside escapes, and private estates designed for your best days.
        </motion.p>
      </motion.div>

      <div
        style={{
          position: "relative",
          perspective: 1400,
          height: 420,
        }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: GAP,
            paddingLeft: "8vw",
            width: "max-content",
            transformStyle: "preserve-3d",
          }}
        >
          {SIGNATURE_ITEMS.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={{
                width: CARD_W,
                height: 420,
                flexShrink: 0,
                borderRadius: 0,
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 30px 50px -15px rgba(0,0,0,0.6)",
                transformOrigin: "center center",
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="300px"
                style={{
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
                }}
              />
              {activeIndex === i && (
                <ShineBorder
                  borderWidth={3}
                  duration={4}
                  shineColor={["#ffffff", "#e7a5a0", "#facc15"]}
                  style={{ zIndex: 3 }}
                />
              )}
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  bottom: 20,
                }}
              >
                <p
                  style={{
                    margin: "0 0 4px",
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 24,
                    color: "#F7F1E8",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.03em",
                    color: "#C9C2B8",
                  }}
                >
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, CalendarDays, User, Smile } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  { icon: Clock, label: "24/7 Villa Concierge" },
  { icon: CalendarDays, label: "Flexible Villa Reservations" },
  { icon: User, label: "Personalised Stay Planning" },
  { icon: Smile, label: "Every Detail Considered" },
];

export default function FourSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const leftElements = sectionRef.current?.querySelectorAll<HTMLElement>("[data-concierge-left]");
      const cardElements = sectionRef.current?.querySelectorAll<HTMLElement>("[data-concierge-card]");

      if (!leftElements || !cardElements) return;

      gsap.set(leftElements, { opacity: 0, y: 28 });
      gsap.set(cardElements, { opacity: 0, y: 28 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.to(leftElements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
      }).to(
        cardElements,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-1 items-center gap-12 bg-black px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-[8vw] lg:py-27.5"
      style={{
        background: "#000",
      }}
    >
      <div>
        <h2
          data-concierge-left
            className="mb-8 max-w-2xl text-[clamp(30px,7vw,46px)] leading-[1.15]"
            style={{
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 600,
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Your villa stay, beautifully taken care
        </h2>

        <p
          data-concierge-left
          style={{
            margin: "0 0 20px",
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: 16,
            lineHeight: 1.7,
            color: "#D7DEDD",
            maxWidth: 560,
          }}
        >
          From a quiet coastal hideaway to a private estate in the hills, every
          stay is chosen around the way you want to live, rest, and reconnect.
        </p>

        <p
          data-concierge-left
          style={{
            margin: "0 0 20px",
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: 16,
            lineHeight: 1.7,
            color: "#D7DEDD",
            maxWidth: 560,
          }}
        >
          Our villa concierge takes care of the details before you arrive and
          throughout your stay, from airport transfers and private chefs to
          thoughtful local experiences.
        </p>

        <p
          data-concierge-left
          style={{
            margin: "0 0 36px",
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: 16,
            lineHeight: 1.7,
            color: "#D7DEDD",
          }}
        >
          Arrive slowly. Stay beautifully. Leave with more to remember.
        </p>

        <div
          data-concierge-left
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3"
        >
          <button
            className="group relative w-full overflow-hidden rounded-none border border-white px-5 py-4 text-[10px] font-bold uppercase tracking-[.18em] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{
              background: "transparent",
              color: "#FFFFFF",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors text-base tracking-normal duration-300 group-hover:text-[#0E2C30]">
              DISCOVER VILLAS
            </span>
          </button>

          <button
            className="group relative w-full overflow-hidden rounded-none border border-white px-5 py-4 text-[10px] font-bold uppercase tracking-[.18em] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{
              background: "transparent",
              color: "#FFFFFF",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-500 ease-out group-hover:scale-x-100" />
            <span className="relative z-10 transition-colors text-base tracking-normal duration-300 group-hover:text-[#0E2C30]">
              PLAN YOUR STAY
            </span>
          </button>
        </div>

        <p
          data-concierge-left
          style={{
            margin: "18px 0 0",
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#D9A441",
          }}
        >
          Private villa stays from 250€/night
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
        style={{
        }}
      >
        {FEATURES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            data-concierge-card
            style={{
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: 4,
              padding: "24px 20px",
              minHeight: 180,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Icon size={30} color="#FFFFFF" strokeWidth={1.5} />
            <p
              style={{
                margin: 0,
                marginTop: 24,
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(17px, 2vw, 19px)",
                lineHeight: 1.3,
                color: "#FFFFFF",
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
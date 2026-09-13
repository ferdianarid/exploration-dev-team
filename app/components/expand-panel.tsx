"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

// Swap image/label/cta per panel — works with any number of panels (4 looks best).
const PANELS = [
  {
    label: "VIEW VILLAS",
    title: ["VILLA", "RENTALS"],
    img: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "VIEW YACHTS",
    title: ["YACHT", "CHARTER"],
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "VIEW SERVICES",
    title: ["LUXURY", "SERVICES"],
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    label: "VIEW EVENTS",
    title: ["EVENT", "MANAGEMENT"],
    img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ExpandingPanels() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      className="flex min-h-screen w-full flex-col gap-3 overflow-hidden bg-white p-3 sm:gap-4 sm:p-5 md:h-[88vh] md:min-h-0 md:flex-row md:gap-5"
    >
      {PANELS.map((panel, i) => {
        const isHovered = hovered === i;
        const isDimmed = hovered !== null && !isHovered;

        return (
          <div
            key={panel.title.join(" ")}
            className={`relative h-[45vh] min-h-70 w-full shrink-0 overflow-hidden border-t border-white/15 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] first:border-t-0 md:h-full md:min-h-0 md:w-auto md:shrink md:border-l md:border-t-0 md:first:border-l-0 ${isHovered ? "md:flex-[1.6]" : isDimmed ? "md:flex-[0.85]" : "md:flex-1"}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flexBasis: 0,
              cursor: "pointer",
            }}
          >
            <Image
              src={panel.img}
              alt={panel.title.join(" ")}
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              style={{
                objectFit: "cover",
                transform: isHovered ? "scale(1.06)" : "scale(1)",
                transition:
                  "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.8) 100%)",
              }}
            />

            <div
              className="absolute bottom-6 left-5 right-4 whitespace-normal transition-opacity duration-300 sm:bottom-8 sm:left-7 md:bottom-10 md:left-8 md:right-6 md:whitespace-nowrap"
              style={{ opacity: isDimmed ? 0.55 : 1 }}
            >
              {panel.title.map((line) => (
                <h3
                  key={line}
                  style={{
                    margin: 0,
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 5vw, 34px)",
                    lineHeight: 1.15,
                    color: "#FFFFFF",
                    letterSpacing: "0.01em",
                  }}
                >
                  {line}
                </h3>
              ))}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                    marginTop: 14,
                }}
              >
                <span
                  style={{
                    fontFamily:
                      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    color: "#FFFFFF",
                  }}
                >
                  {panel.label}
                </span>
                <ArrowRight
                  size={16}
                  color="#FFFFFF"
                  style={{
                    transform: isHovered
                      ? "translateX(4px)"
                      : "translateX(0)",
                    transition: "transform 0.35s ease",
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
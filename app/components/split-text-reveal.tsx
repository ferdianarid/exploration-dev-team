"use client"

import {
  useRef,
  useLayoutEffect,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { registerSplitTextAndScrollTrigger } from "@/lib/gsap";

registerSplitTextAndScrollTrigger();

type SplitTextRevealProps = {
  children: ReactNode;
  as?: ElementType;
  type?: string;
  stagger?: number;
  duration?: number;
  y?: number;
  delay?: number;
  start?: string;
  once?: boolean;
  markers?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * SplitTextReveal
 * Membungkus teks anak (children) dan mengganimasikan per-karakter
 * menggunakan GSAP SplitText, dipicu saat elemen masuk viewport (ScrollTrigger):
 *
 *   let split = SplitText.create(".split", { type: "words, chars" });
 *   gsap.from(split.chars, { y: 100, autoAlpha: 0, stagger: 0.05 });
 *
 * Props:
 * - as: tag elemen pembungkus (default "h1")
 * - type: "chars" | "words" | "lines" atau kombinasi "words, chars"
 * - stagger: jarak waktu antar elemen (detik)
 * - duration: durasi animasi tiap elemen
 * - y: offset animasi (px)
 * - delay: delay sebelum animasi mulai
 * - start: posisi trigger ScrollTrigger (default "top 80%")
 * - once: true = animasi hanya jalan sekali (default), false = replay tiap kali masuk/keluar viewport
 * - markers: tampilkan marker debug ScrollTrigger (dev only)
 */
export default function SplitTextReveal({
  children,
  as: Tag = "h1",
  type = "words, chars",
  stagger = 0.05,
  duration = 1,
  y = 100,
  delay = 0,
  start = "top 80%",
  once = true,
  markers = false,
  className = "",
  style = {},
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    
    const split = SplitText.create(el, { type });

    
    const targets = split.chars?.length
      ? split.chars
      : split.words?.length
      ? split.words
      : split.lines;

    
    gsap.set(targets, { y, autoAlpha: 0 });

    const tween = gsap.to(targets, {
      duration,
      y: 0,
      autoAlpha: 1,
      stagger,
      delay,
      ease: "power3.out",
      paused: true,
      scrollTrigger: {
        trigger: el,
        start,
        markers,
        toggleActions: once
          ? "play none none none"
          : "play reset play reset",
        once,
      },
    });

    
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, [children, type, stagger, duration, y, delay, start, once, markers]);

  return (
    <Tag ref={containerRef} className={className} style={style}>
      {children}
    </Tag>
  );
}
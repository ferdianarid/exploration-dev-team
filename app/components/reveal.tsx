'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { registerScrollTrigger } from '@/lib/gsap';

registerScrollTrigger();

export default function Reveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
        const items = gsap.utils.toArray<HTMLElement>(
          group.querySelectorAll('[data-stagger-item]')
        );
        if (items.length === 0) return;
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      const hero = document.querySelector<HTMLElement>('[data-hero-image]');
      const heroContent = document.querySelector<HTMLElement>('[data-hero-content]');
      if (hero) {
        gsap.to(hero, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: hero.closest('[data-hero]') ?? hero,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
      if (heroContent) {
        gsap.fromTo(
          heroContent.children,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.15 }
        );
      }

      const marquee = document.querySelector<HTMLElement>('[data-marquee]');
      if (marquee) {
        gsap.to(marquee, {
          xPercent: -50,
          repeat: -1,
          duration: 22,
          ease: 'linear',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}

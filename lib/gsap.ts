import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export function registerGsapPlugins(...plugins: Parameters<typeof gsap.registerPlugin>[0][]) {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(...plugins);
}

export function registerScrollTrigger() {
  registerGsapPlugins(ScrollTrigger);
}

export function registerSplitTextAndScrollTrigger() {
  registerGsapPlugins(SplitText, ScrollTrigger);
}

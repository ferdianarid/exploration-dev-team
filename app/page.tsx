import Hero from "./components/organisms/home/hero";
import TextScrollWordReveal from './components/motions/reveal-text';
import ScrollHorizontal from "./components/scroll-horizontal";
import ScrollExpandHero, { NextSection } from "./components/organisms/home/scroll-expand";
import CoverflowSection from "./components/coverflow-section";
import ExpandingPanels from "./components/expand-panel";
import FourSection from "./components/four-section";

export default function Travel() {
  return (
    <main className="overflow-x-clip bg-[#f5f7f6] text-[#0c1114]">
      <Hero />
      <TextScrollWordReveal />
      <ScrollHorizontal />
      <ScrollExpandHero />
      <CoverflowSection/>
      <NextSection />
      <ExpandingPanels />
      <FourSection />
    </main>
  );
}
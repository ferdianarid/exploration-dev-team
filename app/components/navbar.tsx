import { Menu, Mountain } from "lucide-react";

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
        <a href="#" className="flex items-center gap-2 text-stone-50">
          <Mountain className="h-6 w-6 text-orange-400" />
          <span className="font-display text-xl font-semibold tracking-tight">Bromo Voyages</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-stone-100 md:flex">
          <a href="#experiences" className="transition-colors hover:text-orange-300">Journeys</a>
          <a href="#stays" className="transition-colors hover:text-orange-300">Stays</a>
          <a href="#journals" className="transition-colors hover:text-orange-300">Journal</a>
          <a href="#footer" className="transition-colors hover:text-orange-300">Contact</a>
        </nav>
        <a
          href="#cta"
          className="hidden rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20 md:inline-flex"
        >
          Plan a trip
        </a>
        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-full border border-white/25 p-2 text-white md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
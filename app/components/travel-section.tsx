import Link from 'next/link'
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Compass,
  MoveUpRight,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const destinations = [
  {
    title: 'THE SWISS ALPS',
    location: 'Switzerland',
    image:
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'DUBAI SKYLINE',
    location: 'United Arab Emirates',
    image:
      'https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'SANTORINI SUNSET',
    location: 'Greece',
    image:
      'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

const diaryImages = [
  'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=900',
]

const TravelSection = () => {
  return (
    <>
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.24em] text-[#3182a1]">The journey starts here</p>
            <h2 className="max-w-xl text-4xl font-black uppercase leading-[.9] tracking-[-.06em] sm:text-6xl">We are a collective of passionate explorers.</h2>
          </div>
          <div className="max-w-md text-sm leading-7 text-[#637176]">
            <p>We pair thoughtful planning with the wildness of the world. Every journey is built around your sense of wonder, from hidden cabins to once-in-a-lifetime horizons.</p>
            <Link href="#discover" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#0b6a8c]">Read our story <ChevronRight size={14} /></Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-3 border-y border-[#d9e0df] py-8 sm:mt-24 sm:py-10">
          {[['97%', 'Guest satisfaction'], ['300+', 'Places recommended'], ['50+', 'Countries explored']].map(([number, label]) => (
            <div key={label} className="border-r border-[#d9e0df] px-3 last:border-0 sm:px-8">
              <div className="text-3xl font-black tracking-[-.06em] sm:text-5xl">{number}</div>
              <p className="mt-2 text-[8px] font-semibold uppercase tracking-[.16em] text-[#7b888c] sm:text-[9px]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0b0e0f] px-5 py-14 text-white lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            [Sparkles, 'Premium stays', 'A considered collection of places worth going out of your way for.'],
            [Compass, 'Curated experiences', 'The details, local knowledge and little surprises that stay with you.'],
            [ShieldCheck, 'Secure booking', 'Travel confidently with a team that is here before, during and after.'],
          ].map(([Icon, title, copy], index) => {
            const FeatureIcon = Icon as typeof Sparkles;
            return (
              <div key={title as string} className={`min-h-[230px] rounded-sm border border-white/15 p-7 transition hover:-translate-y-1 hover:border-white/40 ${index === 1 ? 'bg-[#f5f7f6] text-[#0b0e0f]' : 'bg-white/[.02]'}`}>
                <FeatureIcon size={18} strokeWidth={1.5} className={index === 1 ? 'text-[#177b9a]' : 'text-[#50a8c3]'} />
                <h3 className="mt-12 text-sm font-bold uppercase tracking-[.08em]">{title as string}</h3>
                <p className={`mt-3 max-w-[230px] text-[11px] leading-5 ${index === 1 ? 'text-[#69777b]' : 'text-white/50'}`}>{copy as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-5 py-20 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[.24em] text-[#3182a1]">Find your next horizon</p>
            <h2 className="text-5xl font-black uppercase leading-[.85] tracking-[-.07em] sm:text-7xl">Discover</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#69777b]">Destinations for every kind of curious. Start with a place, leave with a story.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-[1.15fr_.85fr]">
          <Link href="#contact" className="group relative min-h-[430px] overflow-hidden rounded-sm bg-slate-400 sm:min-h-[560px]">
            <img src={destinations[0].image} alt={destinations[0].title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
              <div><p className="text-[9px] uppercase tracking-[.2em] text-white/70">{destinations[0].location}</p><h3 className="mt-2 text-2xl font-bold uppercase tracking-[-.04em]">{destinations[0].title}</h3></div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#0b0e0f] transition group-hover:rotate-45"><MoveUpRight size={16} /></span>
            </div>
          </Link>
          <div className="grid gap-4 sm:grid-rows-2">
            {destinations.slice(1).map((destination) => (
              <Link href="#contact" key={destination.title} className="group relative min-h-[230px] overflow-hidden rounded-sm">
                <img src={destination.image} alt={destination.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white"><div><p className="text-[9px] uppercase tracking-[.2em] text-white/70">{destination.location}</p><h3 className="mt-1 text-lg font-bold uppercase tracking-[-.03em]">{destination.title}</h3></div><span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0b0e0f] transition group-hover:rotate-45"><MoveUpRight size={14} /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="bg-[#e9efed] px-5 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[.24em] text-[#3182a1]">From the field</p><h2 className="max-w-lg text-4xl font-black uppercase leading-[.9] tracking-[-.06em] sm:text-6xl">A visual diary of breathtaking destinations.</h2></div><button aria-label="Play film" className="hidden h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0b0e0f] text-white sm:grid"><Play size={17} fill="currentColor" /></button></div>
          <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-5">{diaryImages.map((image, index) => <div key={image} className={`overflow-hidden rounded-sm ${index === 1 ? 'mt-8' : ''}`}><img src={image} alt="Travel destination" className="h-[260px] w-full object-cover grayscale-[15%] transition duration-700 hover:scale-105 sm:h-[480px]" /></div>)}</div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0b0e0f] px-5 py-10 text-white lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-[10px] uppercase tracking-[.18em] sm:flex-row"><span>Everest travel studio</span><Link href="#top" className="flex items-center gap-2 text-white/60">Back to top <ChevronDown className="rotate-180" size={13} /></Link></div></footer></>
  )
}

export default TravelSection
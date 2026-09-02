import Field from '../components/field';
import Hero from '../components/hero-home';
import Reveal from '../components/reveal';
import {
  Search,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowRight,
  ArrowUpRight,
  Compass,
  Sunrise,
  Mountain,
  Camera,
  Heart,
  Menu,
  Plane,
  Clock,
  ShieldCheck,
} from 'lucide-react';

const destinations = [
  {
    name: 'Mount Bromo Sunrise',
    location: 'Probolinggo, East Java',
    img: 'https://images.pexels.com/photos/34390984/pexels-photo-34390984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    price: 'Rp 850.000',
    tag: 'Signature trek',
    duration: '2 days',
  },
  {
    name: 'Kawah Ijen Blue Fire',
    location: 'Banyuwangi, East Java',
    img: 'https://images.pexels.com/photos/28910380/pexels-photo-28910380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.8,
    price: 'Rp 1.200.000',
    tag: 'Night hike',
    duration: '2 days',
  },
  {
    name: 'Tumpak Sewu Waterfall',
    location: 'Lumajang, East Java',
    img: 'https://images.pexels.com/photos/39208063/pexels-photo-39208063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.7,
    price: 'Rp 650.000',
    tag: 'Hidden gem',
    duration: '1 day',
  },
  {
    name: 'Borobudur Dawn',
    location: 'Magelang, Central Java',
    img: 'https://images.pexels.com/photos/38687173/pexels-photo-38687173.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    rating: 4.9,
    price: 'Rp 950.000',
    tag: 'Heritage',
    duration: '1 day',
  },
];

const stays = [
  {
    name: 'Bromo Caldera Glamping',
    type: 'Glamping · Sea of Sand',
    img: 'https://images.pexels.com/photos/28386069/pexels-photo-28386069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 'Rp 1.450.000',
    perks: ['Sunrise deck', 'King bed', 'Private path'],
  },
  {
    name: 'Whispering Pines Lodge',
    type: 'Boutique · Tengger Highlands',
    img: 'https://images.pexels.com/photos/1820487/pexels-photo-1820487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 'Rp 980.000',
    perks: ['Forest views', 'Hearth lounge', 'Spa access'],
  },
  {
    name: 'Lunar Dunes Villas',
    type: 'Villa · Cemoro Lawang',
    img: 'https://images.pexels.com/photos/9348016/pexels-photo-9348016.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    price: 'Rp 1.780.000',
    perks: ['Rim-facing suite', 'Plunge pool', 'Stargazing roof'],
  },
];

const journals = [
  {
    title: 'A field guide to the Bromo sunrise',
    excerpt:
      'Everything you need to time the golden hour, read the mist, and find your angle on the King Kong Hill ridge.',
    img: 'https://images.pexels.com/photos/38262907/pexels-photo-38262907.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Field guide',
    read: '6 min',
  },
  {
    title: 'Living with a volcano: the Tenggerese',
    excerpt:
      'Inside the caldera calendar — how the Yadnya Kasada ceremony binds a people to a mountain they call sacred.',
    img: 'https://images.pexels.com/photos/37521089/pexels-photo-37521089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Culture',
    read: '9 min',
  },
  {
    title: 'Five frames that tell a story',
    excerpt:
      'A photographer’s notebook on light, scale, and patience across the Sea of Sand at first light.',
    img: 'https://images.pexels.com/photos/28910380/pexels-photo-28910380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    category: 'Photo journal',
    read: '5 min',
  },
];

const stats = [
  { value: '12K+', label: 'Travellers guided' },
  { value: '38', label: 'Curated routes' },
  { value: '4.9', label: 'Average rating' },
  { value: '24/7', label: 'On-trail support' },
];

const perks = [
  { icon: Sunrise, title: 'Sunrise specialists', text: 'Timed departures and ridge picks built on years of mist-reading.' },
  { icon: ShieldCheck, title: 'Guided & insured', text: 'Licensed local guides and full trip coverage on every itinerary.' },
  { icon: Compass, title: 'Off-the-grid routes', text: 'Beyond the viewpoints — caldera walks, villages, and quiet dunes.' },
  { icon: Camera, title: 'Photo-first planning', text: 'Stops and light windows chosen for the shot, not the crowd.' },
];

const heroImg =
  'https://images.pexels.com/photos/34390984/pexels-photo-34390984.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000';

export default function Bromo() {
  return (
    <Reveal>
      <main className="overflow-x-hidden">
        <Hero />
        <Marquee />
        <Stats />
        <Experiences />
        <Stays />
        <Banner />
        <Perks />
        <Journals />
        <CtaFooter />
      </main>
    </Reveal>
  );
}

/* ---------- Marquee ---------- */

function Marquee() {
  const items = ['Sunrise treks', 'Cultural encounters', 'Glamping stays', 'Photography guides', 'Caldera walks', 'Village visits'];
  return (
    <div className="border-y border-stone-200 bg-white py-5">
      <div className="flex overflow-hidden">
        <div data-marquee className="flex shrink-0 items-center gap-10 pr-10">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              <Star className="h-3.5 w-3.5 text-orange-500" /> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Stats ---------- */

function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <div data-reveal-stagger className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((s) => (
          <div data-stagger-item key={s.label} className="text-center sm:text-left">
            <div className="font-display text-4xl font-semibold text-stone-900 sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm text-stone-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Experiences ---------- */

function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <SectionHead
        eyebrow="Featured journeys"
        title="Routes worth waking early for"
        text="Hand-picked itineraries across East Java — each led by local guides who know the weather, the light, and the quiet hours."
      />
      <div data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((d) => (
          <article
            data-stagger-item
            key={d.name}
            className="group relative overflow-hidden rounded-2xl bg-stone-100 shadow-sm ring-1 ring-stone-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-300/50"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={d.img}
                alt={d.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-800">
                {d.tag}
              </span>
              <div className="absolute inset-x-4 bottom-4 text-white">
                <div className="flex items-center gap-1.5 text-xs text-stone-200">
                  <MapPin className="h-3.5 w-3.5" /> {d.location}
                </div>
                <h3 className="font-display mt-1 text-xl font-semibold leading-snug">{d.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold">{d.price}</div>
                    <div className="flex items-center gap-1 text-xs text-stone-300">
                      <Clock className="h-3 w-3" /> {d.duration}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium backdrop-blur">
                    <Star className="h-3 w-3 fill-orange-400 text-orange-400" /> {d.rating}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Stays ---------- */

function Stays() {
  return (
    <section id="stays" className="bg-stone-100/70 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHead
          eyebrow="Where you’ll sleep"
          title="Stays with a view of the caldera"
          text="From ridge-top glamping to highland villas — accommodation chosen for character, comfort, and that first-light horizon."
        />
        <div data-reveal-stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {stays.map((s) => (
            <article
              data-stagger-item
              key={s.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-200/70 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-stone-300/40"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute right-4 top-4 rounded-full bg-stone-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {s.price}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-orange-600">{s.type}</div>
                <h3 className="font-display mt-2 text-2xl font-semibold text-stone-900">{s.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.perks.map((p) => (
                    <li key={p} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-stone-900 transition-colors hover:text-orange-600"
                >
                  View stay <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Banner ---------- */

function Banner() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.pexels.com/photos/38262907/pexels-photo-38262907.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Mist drifting across the Bromo caldera at dawn"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/55 to-stone-950/20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div data-reveal className="max-w-xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-stone-100 backdrop-blur">
            <Sunrise className="h-3.5 w-3.5" /> Private journeys
          </span>
          <h2 className="font-display mt-6 text-4xl font-semibold leading-tight sm:text-5xl text-balance">
            Build your own sunrise, end to end
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-200 sm:text-lg">
            Tell us the pace, the people, and the frames you want to bring home. We’ll
            map the route, the guides, and the stays — you just show up before dawn.
          </p>
          <a
            href="#cta"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-600"
          >
            Start planning
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Perks ---------- */

function Perks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <SectionHead
        eyebrow="Why travel with us"
        title="Details that make the difference"
        text="We obsess over the small things so your only job is to be present."
      />
      <div data-reveal-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p) => (
          <div
            data-stagger-item
            key={p.title}
            className="rounded-2xl border border-stone-200 bg-white p-6 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md hover:shadow-orange-100/60"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-5 text-lg font-semibold text-stone-900">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Journals ---------- */

function Journals() {
  return (
    <section id="journals" className="bg-stone-100/70 py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="From the journal"
            title="Stories from the mountain"
            text="Field notes, culture, and photography — written by the people who guide you."
            as="div"
          />
          <a
            href="#"
            className="hidden items-center gap-1.5 text-sm font-semibold text-stone-900 transition-colors hover:text-orange-600 sm:inline-flex"
          >
            All stories <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div data-reveal-stagger className="mt-12 grid gap-8 lg:grid-cols-3">
          {journals.map((j) => (
            <article key={j.title} data-stagger-item className="group cursor-pointer">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={j.img}
                  alt={j.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-stone-800">
                  {j.category}
                </span>
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {j.read}</span>
                </div>
                <h3 className="font-display mt-2 text-xl font-semibold leading-snug text-stone-900 transition-colors group-hover:text-orange-600">
                  {j.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{j.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA + Footer ---------- */

function CtaFooter() {
  return (
    <footer id="footer" className="bg-stone-950 text-stone-300">
      <section id="cta" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/28910380/pexels-photo-28910380.jpeg?auto=compress&cs=tinysrgb&h=700&w=1400"
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:px-10 lg:py-32">
          <h2 data-reveal className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl text-balance">
            Your sunrise is one message away
          </h2>
          <p data-reveal className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Tell us your dates and the kind of trip you’re after. We’ll send a tailored
            plan within 24 hours.
          </p>
          <form data-reveal className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-white placeholder:text-stone-500 focus:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              <Heart className="h-4 w-4" /> Plan my trip
            </button>
          </form>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 text-white">
              <Mountain className="h-6 w-6 text-orange-400" />
              <span className="font-display text-xl font-semibold tracking-tight">Bromo Voyages</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-stone-400">
              Curated journeys to Mount Bromo and the wilds of East Java — built by local
              guides, photographers, and storytellers.
            </p>
            
          </div>
          <FooterCol
            title="Explore"
            links={['Journeys', 'Stays', 'Journal', 'Private trips']}
          />
          <FooterCol
            title="Company"
            links={['About us', 'Guides', 'Sustainability', 'Contact']}
          />
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-stone-500 sm:flex-row">
          <span>© 2026 Bromo Voyages. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-stone-300">Privacy</a>
            <a href="#" className="transition-colors hover:text-stone-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-stone-300 transition-colors hover:text-orange-400">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}


function SectionHead({
  eyebrow,
  title,
  text,
  as: Tag = 'div',
}: {
  eyebrow: string;
  title: string;
  text: string;
  as?: 'div' | 'header';
}) {
  return (
    <Tag data-reveal className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">{eyebrow}</span>
      <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-stone-900 sm:text-4xl text-balance">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-stone-500">{text}</p>
    </Tag>
  );
}

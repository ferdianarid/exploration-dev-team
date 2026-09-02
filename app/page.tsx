import Hero from "./components/organisms/home/hero";
import TextScrollWordReveal from './components/motions/reveal-text';
import ScrollHorizontal from "./components/scroll-horizontal";

const destinations = [
  {
    title: 'THE SWISS ALPS',
    location: 'Switzerland',
    image:
      'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1200',
    large: true,
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
];

const diaryImages = [
  'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=900',
  'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=900',
];

export default function Travel() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7f6] text-[#0c1114]">
      <Hero />
      <TextScrollWordReveal />
    </main>
  );
}
import { MouseEvent, useState } from 'react';

const popularPokies = [
  { position: 1, name: "Magic Apple Hold and Win", provider: "BNG", rating: 5.0, image: "/pokies/magic-apple.png", link: "/free-pokies/magic-apple-hold-and-win" },
  { position: 2, name: "Gates of Olympus", provider: "PRAGMATIC PLAY", rating: 4.9, image: "/pokies/gates-of-olympus.png", link: "/free-pokies/gates-of-olympus" },
  { position: 3, name: "Hot Chilli", provider: "JILI", rating: 4.8, image: "/pokies/hot-chilli.png", link: "/free-pokies/hot-chilli" },
  { position: 4, name: "Roman Arena", provider: "JOKER", rating: 4.8, image: "/pokies/roman-arena.png", link: "/free-pokies/roman-arena" },
  { position: 5, name: "Triple Supreme Olympus", provider: "VPOWER", rating: 5.0, image: "/pokies/triple-supreme-olympus.png", link: "/free-pokies/triple-supreme-olympus" }
];

const registerLinks = [
  "https://k9aus.net/RFAUSSIESPIN",
  "https://bybid9.net/RFAUSSIESPINAU",
  "https://bigpay77aus.com/RFAUSSIESPINN",
  "https://ipay9.co/RFAUSSIESPINAUD",
  "https://guccii9au.net/RFAUSSIESPIN33",
  "https://mrbean9au.com/RFAUSSIESPIN9",
  "https://me99office.co/RFAUSSIESPIN99",
  "https://pokemon9aus.co/RFAUSSIESPIN98",
  "https://micky13.asia/RFAUSSIESPIN97",
  "https://winnie777.vip/RFAUSSIESPIN96",
  "https://ace96au.net/RFAUSSIESPIN95",
  "https://queen13au.com/RFAUSSIESPIN94",
  "https://rolex9.net/RFAUSSIESPINJ",
];

const latestPokies = [
  { position: 1, name: "Thor Hammer", provider: "SLOTMANIA", rating: 4.9, image: "/pokies/latest/thor-hammer.png", link: "/free-pokies/thor-hammer" },
  { position: 2, name: "Coin Up Hot Fire 3x3", provider: "BOOONGO", rating: 4.8, image: "/pokies/latest/coin-up-hot-fire.png", link: "/free-pokies/coin-up-hot-fire-3x3" },
  { position: 3, name: "Sugar Rush 1000", provider: "PRAGMATIC PLAY", rating: 5.0, image: "/pokies/latest/sugar-rush-1000.png", link: "/free-pokies/sugar-rush-1000" },
  { position: 4, name: "Money Coming", provider: "JILI", rating: 4.7, image: "/pokies/latest/money-coming.png", link: "/free-pokies/money-coming" },
  { position: 5, name: "Sky Pearls Hold and Win", provider: "BOOONGO", rating: 4.8, image: "/pokies/latest/sky-pearls.png", link: "/free-pokies/sky-pearls-hold-and-win" }
];

const upcomingPokies = [
  { position: 1, name: "Party Party", provider: "ACE WIN", rating: 4.8, image: "/pokies/upcoming/party-party.png", link: "/free-pokies/party-party" },
  { position: 2, name: "Rave Jump", provider: "CQ9", rating: 4.7, image: "/pokies/upcoming/rave-jump.png", link: "/free-pokies/rave-jump" },
  { position: 3, name: "Caishen Baoxi", provider: "PEGASUS", rating: 4.8, image: "/pokies/upcoming/caishen-baoxi.png", link: "/free-pokies/caishen-baoxi" },
  { position: 4, name: "Sugar Crush", provider: "ADVANT PLAY", rating: 4.7, image: "/pokies/upcoming/sugar-crush.png", link: "/free-pokies/sugar-crush" },
  { position: 5, name: "Fortune Arrives", provider: "WF GAMING", rating: 4.9, image: "/pokies/upcoming/fortune-arrives.png", link: "/free-pokies/fortune-arrives" }
];

const tabs = [
  { key: 'popular', label: 'Popular', data: popularPokies, viewAllLink: '/free-pokies', viewAllLabel: 'View all popular pokies' },
  { key: 'latest', label: 'Latest', data: latestPokies, viewAllLink: '/free-pokies/latest', viewAllLabel: 'View all latest pokies' },
  { key: 'upcoming', label: 'Upcoming', data: upcomingPokies, viewAllLink: '/free-pokies/upcoming', viewAllLabel: 'View all upcoming pokies' },
];

function renderStars(rating: number) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => {
        if (i < full) return <i key={i} className="fa fa-star text-yellow-400 text-xs"></i>;
        if (i === full && half) return <i key={i} className="fa fa-star-half-o text-yellow-400 text-xs"></i>;
        return <i key={i} className="fa fa-star-o text-gray-300 text-xs"></i>;
      })}
      <span className="text-xs text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

function PokieCard({ pokie, onOpenRandomLink }: { pokie: typeof popularPokies[0]; onOpenRandomLink: (event: MouseEvent<HTMLAnchorElement>) => void; }) {
  return (
    <a
      href={pokie.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onOpenRandomLink}
      className="flex items-center gap-3 hover:bg-gray-50 rounded-lg p-2 transition-colors group"
    >
      <div className="w-6 text-center flex-shrink-0">
        <span className="text-sm font-bold text-gray-400">{pokie.position}</span>
      </div>
      <div className="w-16 h-12 flex-shrink-0 rounded overflow-hidden">
        <img src={pokie.image} alt={pokie.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-gray-800 group-hover:text-teal-600 truncate leading-tight">{pokie.name}</div>
        <div className="text-xs text-gray-500 mb-1">{pokie.provider}</div>
        {renderStars(pokie.rating)}
      </div>
    </a>
  );
}

export default function PokiesSection() {
  const [activeTab, setActiveTab] = useState('popular');
  const activeTabData = tabs.find(t => t.key === activeTab)!;

  const getRandomRegisterLink = () => {
    const randomIndex = Math.floor(Math.random() * registerLinks.length);
    return registerLinks[randomIndex];
  };

  const handleOpenRandomRegisterLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(getRandomRegisterLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="pokies-section" className="bg-white py-8 md:py-10 border-t border-gray-100">
      <div className="container mx-auto px-4">

        {/* ── DESKTOP: 3 columns ── */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {tabs.map((tab) => (
            <div key={tab.key}>
              <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                {tab.label} Pokies
              </h2>
              <div className="space-y-1">
                {tab.data.map((p) => <PokieCard key={p.position} pokie={p} onOpenRandomLink={handleOpenRandomRegisterLink} />)}
              </div>
              <div className="mt-4">
                <a
                  href={tab.viewAllLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={tab.key === 'popular' || tab.key === 'latest' || tab.key === 'upcoming' ? handleOpenRandomRegisterLink : undefined}
                  className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                >
                  {tab.viewAllLabel} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── MOBILE: Tabbed ── */}
        <div className="md:hidden">
          {/* Tab switcher */}
          <div className="flex bg-gray-100 rounded-full p-1 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-1 py-2 px-1 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-white text-teal-700 shadow-sm'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active tab content */}
          <div className="space-y-1">
            {activeTabData.data.map((p) => <PokieCard key={p.position} pokie={p} onOpenRandomLink={handleOpenRandomRegisterLink} />)}
          </div>
          <div className="mt-4">
            <a
              href={activeTabData.viewAllLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={activeTabData.key === 'popular' || activeTabData.key === 'latest' || activeTabData.key === 'upcoming' ? handleOpenRandomRegisterLink : undefined}
              className="text-teal-600 hover:text-teal-700 text-sm font-medium"
            >
              {activeTabData.viewAllLabel} &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

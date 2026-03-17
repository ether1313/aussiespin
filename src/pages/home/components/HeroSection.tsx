import { FormEvent, useState } from 'react';

interface HeroSectionProps {
  onSearch: (value: string) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query.trim());
    const listSection = document.getElementById('casino-list-section');
    listSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-wallpaper.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/92 via-gray-900/75 to-gray-900/40 pointer-events-none"></div>

      <div className="container mx-auto px-4 py-8 md:py-10 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
            AussieSpin: Top Australian Online Pokies &amp; Casino Reviewer
          </h1>
          <p className="text-xs md:text-sm text-gray-300 mb-5 leading-relaxed max-w-2xl">
            Aussie Spin invites Aussie visitors to explore hundreds of online pokies reviews prepared by our expert team. Test their demos and scroll through the lists of reliable online casinos from top providers. Educational guides, bonus analysis articles and free communication space Talks are waiting for you here!
          </p>

          {/* Quick access cards — 2 cols on mobile, 3 on sm, 5 on md+ */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap gap-2 mb-5">
            {[
              { icon: '/hero-icons/slot-machine.png', label: 'FREE POKIES', count: '1300+ games' },
              { icon: '/hero-icons/casino.png', label: 'ONLINE CASINOS', count: '500+ brands' },
              { icon: '/hero-icons/bonus.png', label: 'BONUSES', count: '1200+ promos' },
              { icon: '/hero-icons/providers.png', label: 'PROVIDERS', count: '150+ brands' },
            ].map((card) => (
              <a
                key={card.label}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2.5 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                  <img src={card.icon} alt={card.label} className="w-6 h-6 object-contain" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">{card.label}</div>
                  <div className="text-xs text-teal-300 leading-tight">{card.count}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Search bar */}
          <div className="w-full md:max-w-xl">
            <form className="relative" onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Search bonuses, casinos and pokies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-3 pr-24 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap">
                <i className="fa fa-search mr-1"></i>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

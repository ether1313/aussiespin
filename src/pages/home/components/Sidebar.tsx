import { useState } from 'react';
import { Link } from 'react-router-dom';

const topCasinos = [
  {
    name: "ACE96 AU",
    logo: "/casinos/ace96au.png",
    rating: 4.89,
    bonus: "150% up to A$1,500 + 180 FS",
    reviewLink: "/ace96-au",
    playLink: "https://auspokies.net/affiliates/4158946",
    tag: "New Launch",
  },
  {
    name: "iPay9",
    logo: "/casinos/ipay9.png",
    rating: 4.91,
    bonus: "Up to A$1,100 + 110 FS",
    reviewLink: "/ipay9",
    playLink: "https://auspokies.net/affiliates/4158946",
    tag: "Top Rated",
  },
  {
    name: "Kingbet9",
    logo: "/casinos/kingbet9.png",
    rating: 4.92,
    bonus: "125% up to A$950 + 95 FS",
    reviewLink: "/kingbet9",
    playLink: "https://auspokies.net/affiliates/4499886",
    tag: "Editor's Choice",
  },
  {
    name: "BigPay77",
    logo: "/casinos/bigpay77.png",
    rating: 4.90,
    bonus: "100% up to A$770 + 77 FS",
    reviewLink: "/bigpay77",
    playLink: "https://auspokies.net/affiliates/2392349",
    tag: "Most Popular",
  },
  {
    name: "me99",
    logo: "/casinos/me99.png",
    rating: 4.88,
    bonus: "120% up to A$1,200 + 120 FS",
    reviewLink: "/me99",
    playLink: "https://auspokies.net/affiliates/2392349",
    tag: "Player's Favorite",
  },
  {
    name: "Rolex9",
    logo: "/casinos/rolex9.png",
    rating: 4.94,
    bonus: "100% up to A$600 + 60 FS",
    reviewLink: "/rolex9",
    playLink: "https://auspokies.net/affiliates/1722773",
  },
  {
    name: "GUCCI9",
    logo: "/casinos/gucci9.png",
    rating: 4.87,
    bonus: "100% up to A$900 + 90 FS",
    reviewLink: "/gucci9",
    playLink: "https://auspokies.net/affiliates/2148247",
  },
  {
    name: "MrBean9",
    logo: "/casinos/mrbean9.png",
    rating: 4.72,
    bonus: "110% up to A$700 + 70 FS",
    reviewLink: "/mrbean9",
    playLink: "https://auspokies.net/affiliates/2392349",
  },
  {
    name: "PKM9",
    logo: "/casinos/pkm9.png",
    rating: 4.80,
    bonus: "130% up to A$1,300 + 130 FS",
    reviewLink: "/pkm9",
    playLink: "https://auspokies.net/affiliates/4499886",
  },
  {
    name: "Winnie777",
    logo: "/casinos/winnie777.png",
    rating: 4.93,
    bonus: "140% up to A$1,777 + 177 FS",
    reviewLink: "/winnie777",
    playLink: "https://auspokies.net/affiliates/2148247",
  },
  {
    name: "Micky9",
    logo: "/casinos/micky9.png",
    rating: 4.80,
    bonus: "Up to A$888 + 88 FS",
    reviewLink: "/micky9",
    playLink: "https://auspokies.net/affiliates/4158946",
  },
  {
    name: "BYBID9",
    logo: "/casinos/bybid9.png",
    rating: 4.96,
    bonus: "Up to A$999 + 99 FS",
    reviewLink: "/bybid9",
    playLink: "https://auspokies.net/affiliates/1722773",
  },
  {
    name: "Queen13",
    logo: "/casinos/queen13.png",
    rating: 4.75,
    bonus: "130% up to A$1,300 + 130 FS",
    reviewLink: "/queen13",
    playLink: "https://auspokies.net/affiliates/1722773",
  },
];

const latestBonuses = [
  {
    casino: "ACE96 AU",
    logo: "/casinos/ace96au.png",
    title: "Special Rebate Bonus AUD 50",
    code: "ACE50",
    link: "https://auspokies.net/affiliates/4595713",
  },
  {
    casino: "iPay9",
    logo: "/casinos/ipay9.png",
    title: "Welcome Bonus 50%",
    code: null,
    link: "https://auspokies.net/affiliates/5733817",
  },
  {
    casino: "Kingbet9",
    logo: "/casinos/kingbet9.png",
    title: "Slot Daily Bonus 39%",
    code: null,
    link: "https://auspokies.net/affiliates/7006427",
  },
  {
    casino: "BigPay77",
    logo: "/casinos/bigpay77.png",
    title: "Daily Easy Step Free 100",
    code: "BIG100",
    link: "https://auspokies.net/affiliates/4957624",
  },
  {
    casino: "me99",
    logo: "/casinos/me99.png",
    title: "Every Deposit Random Bonus",
    code: "ME-RANDOM",
    link: "https://auspokies.net/affiliates/4957624",
  },
  {
    casino: "Rolex9",
    logo: "/casinos/rolex9.png",
    title: "Free Credit AUD 99.99",
    code: null,
    link: "https://auspokies.net/affiliates/1722773",
  },
  {
    casino: "GUCCI9",
    logo: "/casinos/gucci9.png",
    title: "Slot Welcome Bonus 50%",
    code: null,
    link: "https://auspokies.net/affiliates/2148247",
  },
  {
    casino: "MrBean9",
    logo: "/casinos/mrbean9.png",
    title: "Daily Slot First Deposit 30%",
    code: null,
    link: "https://auspokies.net/affiliates/2392349",
  },
  {
    casino: "PKM9",
    logo: "/casinos/pkm9.png",
    title: "Slot Unlimited Bonus 50%",
    code: null,
    link: "https://auspokies.net/affiliates/4499886",
  },
  {
    casino: "Winnie777",
    logo: "/casinos/winnie777.png",
    title: "Free Credit AUD 103.33",
    code: "WIN103",
    link: "https://auspokies.net/affiliates/2148247",
  },
  {
    casino: "Micky9",
    logo: "/casinos/micky9.png",
    title: "Free Credit 103.33 AUD",
    code: null,
    link: "https://auspokies.net/affiliates/4158946",
  },
  {
    casino: "BYBID9",
    logo: "/casinos/bybid9.png",
    title: "Premium Jackpot 5999 AUD",
    code: null,
    link: "https://auspokies.net/affiliates/1722773",
  },
  {
    casino: "Queen13",
    logo: "/casinos/queen13.png",
    title: "New Member Free AUD 113",
    code: "Q13FREE113",
    link: "https://auspokies.net/affiliates/1722773",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <i
          key={s}
          className={`ri-star-${s <= Math.round(rating) ? 'fill' : 'line'} text-amber-400 text-xs`}
        ></i>
      ))}
      <span className="text-xs text-gray-500 ml-1">{rating}</span>
    </div>
  );
}

export default function Sidebar() {
  const initialCasinoCount = 5;
  const initialBonusCount = 4;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showAllCasinos, setShowAllCasinos] = useState(false);
  const [showAllBonuses, setShowAllBonuses] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const visibleCasinos = showAllCasinos ? topCasinos : topCasinos.slice(0, initialCasinoCount);
  const visibleBonuses = showAllBonuses ? latestBonuses : latestBonuses.slice(0, initialBonusCount);

  return (
    <aside className="space-y-6">

      {/* ── Top Casino Picks ── */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-teal-600 px-4 py-3 flex items-center gap-2">
          <i className="ri-trophy-line text-white text-base"></i>
          <h3 className="text-sm font-bold text-white">Top Casino Picks</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {visibleCasinos.map((casino, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
              {/* Rank */}
              <span className="text-xs font-bold text-gray-400 w-4 flex-shrink-0">{i + 1}</span>
              {/* Logo */}
              <div className="w-10 h-8 flex-shrink-0 flex items-center justify-center">
                <img src={casino.logo} alt={casino.name} className="max-w-full max-h-full object-contain" />
              </div>
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <Link to={casino.reviewLink} className="text-xs font-semibold text-gray-800 hover:text-teal-600 truncate">
                    {casino.name}
                  </Link>
                  {casino.tag && (
                    <span className="text-[10px] bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                      {casino.tag}
                    </span>
                  )}
                </div>
                <StarRating rating={casino.rating} />
                <div className="text-[11px] text-green-700 font-medium mt-0.5 truncate">{casino.bonus}</div>
              </div>
              {/* Play */}
              <a
                href={casino.playLink}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="flex-shrink-0 px-2.5 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded text-[11px] font-bold transition-colors whitespace-nowrap"
              >
                Play
              </a>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <button
            onClick={() => setShowAllCasinos(true)}
            disabled={showAllCasinos}
            className="text-xs text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-default"
          >
            View all casinos <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>

      {/* ── Latest Bonuses ── */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-amber-500 px-4 py-3 flex items-center gap-2">
          <i className="ri-gift-line text-white text-base"></i>
          <h3 className="text-sm font-bold text-white">Latest Bonuses</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {visibleBonuses.map((bonus, i) => (
            <div key={i} className="px-4 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-8 h-6 flex-shrink-0 flex items-center justify-center">
                  <img src={bonus.logo} alt={bonus.casino} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-xs font-semibold text-gray-700 truncate">{bonus.casino}</span>
              </div>
              <div className="text-xs text-green-700 font-bold mb-1.5">{bonus.title}</div>
              {bonus.code ? (
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={() => copyCode(bonus.code!)}
                    className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 border border-dashed border-gray-400 rounded px-2 py-0.5 text-[11px] font-mono font-semibold text-gray-700 cursor-pointer transition-colors"
                  >
                    {bonus.code}
                    <i className="fa fa-copy text-gray-400 text-[10px]"></i>
                  </button>
                  {copiedCode === bonus.code && (
                    <span className="text-[11px] text-green-600 font-medium">Copied!</span>
                  )}
                </div>
              ) : (
                <div className="mb-2" />
              )}
              <a
                href={bonus.link}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="block w-full py-1.5 bg-green-500 hover:bg-green-600 text-white rounded text-[11px] font-bold text-center transition-colors"
              >
                Claim Bonus
              </a>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
          <button
            onClick={() => setShowAllBonuses(true)}
            disabled={showAllBonuses}
            className="text-xs text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-default"
          >
            View all bonuses <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>
      </div>

      {/* ── Quick Guide ── */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
        <h3 className="text-sm font-bold text-teal-800 mb-3 flex items-center gap-2">
          <i className="ri-shield-check-line text-teal-600"></i>
          Quick Safety Guide
        </h3>
        <ul className="space-y-2">
          {[
            "Check for valid gaming licence",
            "Read bonus T&Cs carefully",
            "Use secure payment methods",
            "Set deposit limits before playing",
            "Play at licensed AUD casinos",
          ].map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-teal-700">
              <i className="ri-checkbox-circle-line text-teal-500 mt-0.5 flex-shrink-0"></i>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Responsible Gambling Banner ── */}
      <div className="bg-gray-800 rounded-lg p-4 text-center">
        <i className="ri-heart-pulse-line text-red-400 text-2xl mb-2 block"></i>
        <div className="text-white text-xs font-bold mb-1">Gamble Responsibly</div>
        <div className="text-gray-400 text-[11px] mb-3 leading-relaxed">
          18+ only. If gambling is affecting your life, seek help.
        </div>
        <a
          href="https://www.gamblinghelponline.org.au"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-[11px] font-bold text-center transition-colors"
        >
          Get Help Now
        </a>
      </div>

    </aside>
  );
}

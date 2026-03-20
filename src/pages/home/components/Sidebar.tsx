import { useState } from 'react';
import { Link } from 'react-router-dom';

const topCasinos = [
  {
    name: "Ace96au",
    logo: "/casinos/ace96au.png",
    rating: 4.98,
    bonus: "Weekly Rebate 5% + 50% Daily Bonus",
    reviewLink: "/ace96au",
    playLink: "https://ace96au.net/RFAUSSIESPIN95",
    tag: "New Launch",
  },
  {
    name: "MrBoom9",
    logo: "/casinos/mrboom9.png",
    rating: 4.97,
    bonus: "Register Instant Free $99.99",
    reviewLink: "/mrboom9",
    playLink: "https://mrboom9.com/RFAUSSIESPINNNN",
    tag: "Hot Bonus",
  },
  {
    name: "iPay9",
    logo: "/casinos/ipay9.png",
    rating: 4.96,
    bonus: "Up to $100 Free Credit",
    reviewLink: "/ipay9",
    playLink: "https://ipay9.co/RFAUSSIESPINAUD",
    tag: "Top Rated",
  },
  {
    name: "Kingbet9",
    logo: "/casinos/kingbet9.png",
    rating: 4.94,
    bonus: "Up to $212 Special Bonus",
    reviewLink: "/kingbet9",
    playLink: "https://k9aus.net/RFAUSSIESPIN",
    tag: "Editor's Choice",
  },
  {
    name: "Bigpay77",
    logo: "/casinos/bigpay77.png",
    rating: 4.92,
    bonus: "Up to 80% Slot Bonus",
    reviewLink: "/bigpay77",
    playLink: "https://bigpay77aus.com/RFAUSSIESPINN",
    tag: "Most Popular",
  },
  {
    name: "Me99",
    logo: "/casinos/me99.png",
    rating: 4.90,
    bonus: "Up to $200.99 Starter Pack",
    reviewLink: "/me99",
    playLink: "https://me99office.co/RFAUSSIESPIN99",
    tag: "Player's Favorite",
  },
  {
    name: "Rolex9",
    logo: "/casinos/rolex9.png",
    rating: 4.88,
    bonus: "Up to $129.99 Free Credit",
    reviewLink: "/rolex9",
    playLink: "https://rolex9.net/RFAUSSIESPINJ",
    tag: "High Roller Pick",
  },
  {
    name: "Gucci9",
    logo: "/casinos/gucci9.png",
    rating: 4.86,
    bonus: "Deposit $30 Get 1 Free Spin",
    reviewLink: "/gucci9",
    playLink: "https://guccii9au.net/RFAUSSIESPIN33",
    tag: "High Rebates",
  },
  {
    name: "MrBean9",
    logo: "/casinos/mrbean9.png",
    rating: 4.84,
    bonus: "Up to 200% Welcome Bonus",
    reviewLink: "/mrbean9",
    playLink: "https://mrbean9au.com/RFAUSSIESPIN9",
    tag: "Best for Pokies",
  },
  {
    name: "PKM9",
    logo: "/casinos/pkm9.png",
    rating: 4.82,
    bonus: "Download App Get $15 Free",
    reviewLink: "/pkm9",
    playLink: "https://pokepokemon9.com/RFAUSSIESPIN98",
    tag: "Fastest Payouts",
  },
  {
    name: "Winnie777",
    logo: "/casinos/winnie777.png",
    rating: 4.80,
    bonus: "Up to $151 Share Bonus",
    reviewLink: "/winnie777",
    playLink: "https://winnie777.vip/RFAUSSIESPIN96",
    tag: "Bonuses Packed",
  },
  {
    name: "Micky9",
    logo: "/casinos/micky9.png",
    rating: 4.78,
    bonus: "Up to $79.99 Weekly Depo 50 Time",
    reviewLink: "/micky9",
    playLink: "https://micky13.asia/RFAUSSIESPIN97",
    tag: "Mobile Friendly",
  },
  {
    name: "Bybid9",
    logo: "/casinos/bybid9.png",
    rating: 4.76,
    bonus: "Get $3999 For First Depo Ranking",
    reviewLink: "/bybid9",
    playLink: "https://bybid9.net/RFAUSSIESPINAU",
    tag: "Premium Jackpot",
  },
  {
    name: "Queen13",
    logo: "/casinos/queen13.png",
    rating: 4.75,
    bonus: "$113 New Member Free Bonus",
    reviewLink: "/queen13",
    playLink: "https://queen13au.com/RFAUSSIESPIN94",
    tag: "Best for Pokies",
  },
];

const latestBonuses = [
  {
    casino: "Ace96au Casino",
    logo: "/casinos/ace96au.png",
    title: "Special Rebate Bonus AUD 50",
    code: "RFAUSSIESPIN95",
    link: "https://ace96au.net/RFAUSSIESPIN95",
  },
  {
    casino: "MrBoom9 Casino",
    logo: "/casinos/mrboom9.png",
    title: "Register Instant Free $99.99",
    code: "RFAUSSIESPINNNN",
    link: "https://mrboom9.com/RFAUSSIESPINNNN",
  },
  {
    casino: "iPay9 Casino",
    logo: "/casinos/ipay9.png",
    title: "Welcome Bonus 50%",
    code: "RF29282A519",
    link: "https://ipay9.co/RFAUSSIESPINAUD",
  },
  {
    casino: "Kingbet9 Casino",
    logo: "/casinos/kingbet9.png",
    title: "Slot Daily Bonus 39%",
    code: "RFAUSSIESPIN",
    link: "https://k9aus.net/RFAUSSIESPIN",
  },
  {
    casino: "BigPay77 Casino",
    logo: "/casinos/bigpay77.png",
    title: "Daily Easy Step Free 100",
    code: "RFAUSSIESPINN",
    link: "https://bigpay77aus.com/RFAUSSIESPINN",
  },
  {
    casino: "Me99 Casino",
    logo: "/casinos/me99.png",
    title: "Every Deposit Random Bonus",
    code: "RFAUSSIESPIN99",
    link: "https://me99office.co/RFAUSSIESPIN99",
  },
  {
    casino: "Rolex9 Casino",
    logo: "/casinos/rolex9.png",
    title: "Free Credit AUD 99.99",
    code: "RFAUSSIESPINJ",
    link: "https://rolex9.net/RFAUSSIESPINJ",
  },
  {
    casino: "Gucci9 Casino",
    logo: "/casinos/gucci9.png",
    title: "Slot Welcome Bonus 50%",
    code: "RFAUSSIESPIN33",
    link: "https://guccii9au.net/RFAUSSIESPIN33",
  },
  {
    casino: "MrBean9 Casino",
    logo: "/casinos/mrbean9.png",
    title: "Daily Slot First Deposit 30%",
    code: "RFAUSSIESPIN9",
    link: "https://mrbean9au.com/RFAUSSIESPIN9",
  },
  {
    casino: "PKM9 Casino",
    logo: "/casinos/pkm9.png",
    title: "Slot Unlimited Bonus 50%",
    code: "RFAUSSIESPIN98",
    link: "https://pokepokemon9.com/RFAUSSIESPIN98",
  },
  {
    casino: "Winnie777 Casino",
    logo: "/casinos/winnie777.png",
    title: "Free Credit AUD 103.33",
    code: "RFAUSSIESPIN96",
    link: "https://winnie777.vip/RFAUSSIESPIN96",
  },
  {
    casino: "Micky9 Casino",
    logo: "/casinos/micky9.png",
    title: "Free Credit 103.33 AUD",
    code: "RFAUSSIESPIN97",
    link: "https://micky13.asia/RFAUSSIESPIN97",
  },
  {
    casino: "Bybid9 Casino",
    logo: "/casinos/bybid9.png",
    title: "Premium Jackpot 5999 AUD",
    code: "RFAUSSIESPINAU",
    link: "https://bybid9.net/RFAUSSIESPINAU",
  },
  {
    casino: "Queen13 Casino",
    logo: "/casinos/queen13.png",
    title: "New Member Free AUD 113",
    code: "RFAUSSIESPIN94",
    link: "https://queen13au.com/RFAUSSIESPIN94",
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
                <span className="text-sm font-semibold text-gray-700 truncate">{bonus.casino}</span>
              </div>
              <div className="text-sm text-green-700 font-bold mb-1.5">{bonus.title}</div>
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

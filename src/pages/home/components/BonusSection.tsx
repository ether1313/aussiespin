import { useState } from 'react';

const bonuses = [
  {
    id: 1,
    casino: "Ace96au",
    logo: "/casinos/ace96au.png",
    title: "Special Rebate Bonus AUD 50",
    description: "Limited to 1 claim per day. VIP rebate bonus AUD 50 with slot-game-only conditions and daily deposit requirement.",
    code: "RFAUSSIESPIN95",
    link: "https://ace96au.net/RFAUSSIESPIN95"
  },
  {
    id: 14,
    casino: "MrBoom9",
    logo: "/casinos/mrboom9.png",
    title: "Register Free Credit $99.99",
    description: "New registration bonus offer for MrBoom9 members with campaign terms, eligibility checks, and withdrawal conditions.",
    code: "RFAUSSIESPINNNN",
    link: "https://mrboom9.com/RFAUSSIESPINNNN"
  },
  {
    id: 2,
    casino: "iPay9",
    logo: "/casinos/ipay9.png",
    title: "Welcome Bonus 50%",
    description: "New member slot welcome bonus 50%. Deposit AUD 30+ to join, with standard rollover and product restrictions.",
    code: "RF29282A519",
    link: "https://ipay9.co/RFAUSSIESPINAUD"
  },
  {
    id: 3,
    casino: "Kingbet9",
    logo: "/casinos/kingbet9.png",
    title: "Slot Daily Bonus 39%",
    description: "Daily member bonus with minimum deposit AUD 50. Applies to slot products with rollover and withdrawal requirements.",
    code: "RFAUSSIESPIN",
    link: "https://k9aus.net/RFAUSSIESPIN"
  },
  {
    id: 4,
    casino: "Bigpay77",
    logo: "/casinos/bigpay77.png",
    title: "Daily Easy Step Free 100",
    description: "Daily free bonus flow for BigPay77 members. Follow customer-service steps and sharing requirements to qualify.",
    code: "RFAUSSIESPINN",
    link: "https://bigpay77aus.com/RFAUSSIESPINN"
  },
  {
    id: 5,
    casino: "Me99",
    logo: "/casinos/me99.png",
    title: "Every Deposit Random Bonus",
    description: "Random slot bonus on every qualifying deposit. Includes low minimum entry and clear turnover/withdrawal rules.",
    code: "RFAUSSIESPIN99",
    link: "https://me99office.co/RFAUSSIESPIN99"
  },
  {
    id: 6,
    casino: "Rolex9",
    logo: "/casinos/rolex9.png",
    title: "Free Credit AUD 99.99",
    description: "Free credit campaign with monthly claim limit. Complete guided steps to receive and unlock withdrawal conditions.",
    code: "RFAUSSIESPINJ",
    link: "https://rolex9.net/RFAUSSIESPINJ"
  },
  {
    id: 7,
    casino: "Gucci9",
    logo: "/casinos/gucci9.png",
    title: "Slot Welcome Bonus 50%",
    description: "New member one-time slot welcome bonus with AUD 50 minimum deposit and structured rollover requirements.",
    code: "RFAUSSIESPIN33",
    link: "https://guccii9au.net/RFAUSSIESPIN33"
  },
  {
    id: 8,
    casino: "MrBean9",
    logo: "/casinos/mrbean9.png",
    title: "Daily Slot First Deposit 30%",
    description: "Daily first-deposit bonus for MrBean9 members with small minimum deposit and product-specific conditions.",
    code: "RFAUSSIESPIN9",
    link: "https://mrbean9au.com/RFAUSSIESPIN9"
  },
  {
    id: 9,
    casino: "PKM9",
    logo: "/casinos/pkm9.png",
    title: "Slot Unlimited Bonus 50%",
    description: "One-time member slot bonus with AUD 50 minimum deposit, rollover conditions, and game eligibility limits.",
    code: "RFAUSSIESPIN98",
    link: "https://pokepokemon9.com/RFAUSSIESPIN98"
  },
  {
    id: 10,
    casino: "Winnie777",
    logo: "/casinos/winnie777.png",
    title: "Free Credit AUD 103.33",
    description: "Single-claim free credit campaign for members with product restrictions and fixed withdrawal caps.",
    code: "RFAUSSIESPIN96",
    link: "https://winnie777.vip/RFAUSSIESPIN96"
  },
  {
    id: 11,
    casino: "Micky9",
    logo: "/casinos/micky9.png",
    title: "Free Credit 103.33 AUD",
    description: "No-deposit free credit style bonus for members, with strict game eligibility and capped withdrawal amount.",
    code: "RFAUSSIESPIN97",
    link: "https://micky13.asia/RFAUSSIESPIN97"
  },
  {
    id: 12,
    casino: "Bybid9",
    logo: "/casinos/bybid9.png",
    title: "Premium Jackpot 5999 AUD",
    description: "Grand jackpot promotion with direct-cash style bonus mechanics, deposit requirement, and slot-only restrictions.",
    code: "RFAUSSIESPINAU",
    link: "https://bybid9.net/RFAUSSIESPINAU"
  },
  {
    id: 13,
    casino: "Queen13",
    logo: "/casinos/queen13.png",
    title: "New Member Free AUD 113",
    description: "New registration bonus for eligible Queen13 members, with app/event-game constraints and withdrawal rules.",
    code: "RFAUSSIESPIN94",
    link: "https://queen13au.com/RFAUSSIESPIN94"
  }
];

export default function BonusSection() {
  const initialVisibleCount = 5;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showAllBonuses, setShowAllBonuses] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const visibleBonuses = showAllBonuses
    ? bonuses
    : bonuses.slice(0, initialVisibleCount);

  return (
    <section id="exclusive-aussie-spin-promos" className="bg-gray-50 py-8 md:py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Exclusive AussieSpin Promos</h2>

        <div className="space-y-3">
          {visibleBonuses.map((bonus) => (
            <div key={bonus.id} className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">

              {/* ── DESKTOP ROW ── */}
              <div className="hidden sm:flex items-center">
                {/* Logo */}
                <div className="flex items-center justify-center w-28 px-4 py-4 flex-shrink-0 border-r border-gray-100">
                  <img src={bonus.logo} alt={bonus.casino} className="max-w-full max-h-12 object-contain" />
                </div>
                {/* Info */}
                <div className="flex-1 px-5 py-3 min-w-0">
                  <div className="font-bold text-gray-900 text-sm mb-1">{bonus.title}</div>
                  <div className="text-xs text-gray-500 line-clamp-2">{bonus.description}</div>
                  {bonus.code && (
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-gray-500">Bonus code:</span>
                      <button
                        onClick={() => copyCode(bonus.code!)}
                        className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 border border-dashed border-gray-400 rounded px-3 py-1 text-xs font-mono font-semibold text-gray-700 cursor-pointer transition-colors whitespace-nowrap"
                      >
                        {bonus.code}
                        <i className="fa fa-copy text-gray-500 text-xs"></i>
                      </button>
                      {copiedCode === bonus.code && (
                        <span className="text-xs text-green-600 font-medium">Copied!</span>
                      )}
                    </div>
                  )}
                </div>
                {/* CTA */}
                <div className="flex items-center justify-center px-4 py-3 flex-shrink-0 border-l border-gray-100">
                  <a
                    href={bonus.link}
                    target="_blank"
                    rel="nofollow noopener sponsored"
                    className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-bold text-center transition-colors whitespace-nowrap"
                  >
                    Claim
                  </a>
                </div>
              </div>

              {/* ── MOBILE CARD ── */}
              <div className="sm:hidden p-3">
                {/* Logo + Title row */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-10 flex-shrink-0">
                    <img src={bonus.logo} alt={bonus.casino} className="w-full h-full object-contain" />
                  </div>
                  <div className="font-bold text-gray-900 text-sm leading-tight flex-1">{bonus.title}</div>
                </div>
                {/* Description */}
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">{bonus.description}</p>
                {/* Bonus code */}
                {bonus.code && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">Code:</span>
                    <button
                      onClick={() => copyCode(bonus.code!)}
                      className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 border border-dashed border-gray-400 rounded px-2.5 py-1 text-xs font-mono font-semibold text-gray-700 cursor-pointer transition-colors"
                    >
                      {bonus.code}
                      <i className="fa fa-copy text-gray-500 text-xs"></i>
                    </button>
                    {copiedCode === bonus.code && (
                      <span className="text-xs text-green-600 font-medium">Copied!</span>
                    )}
                  </div>
                )}
                {/* CTA full width */}
                <a
                  href={bonus.link}
                  target="_blank"
                  rel="nofollow noopener sponsored"
                  className="block w-full py-2.5 bg-green-500 hover:bg-green-600 text-white rounded text-sm font-bold text-center transition-colors"
                >
                  Claim Bonus
                </a>
              </div>

            </div>
          ))}
        </div>

        {bonuses.length > initialVisibleCount && !showAllBonuses && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllBonuses(true)}
              className="inline-block px-8 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded font-medium text-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Show more bonuses
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

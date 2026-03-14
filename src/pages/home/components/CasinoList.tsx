import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Casino {
  id: number;
  rank: number;
  name: string;
  logo: string;
  rating: number;
  ratingCount: number;
  bonus: string;
  bonusLabel: string;
  payoutTime: string;
  withdrawLimit: string;
  games: string;
  os: string;
  rtp: string;
  currencies: string;
  languages: string;
  payments: string[];
  reviewLink: string;
  playLink: string;
  tag?: string;
}

const paymentMethodIcons = [
  { key: 'visa', label: 'Visa', src: '/payment-methods/visa.png' },
  { key: 'mastercard', label: 'Mastercard', src: '/payment-methods/mastercard.png' },
  { key: 'payid', label: 'PayID', src: '/payment-methods/payid.png' },
  { key: 'apple-pay', label: 'Apple Pay', src: '/payment-methods/apple.png' },
  { key: 'google-pay', label: 'Google Pay', src: '/payment-methods/google.png' },
  { key: 'osko', label: 'Osko', src: '/payment-methods/osko.png' },
  { key: 'amopay', label: 'AmoPay', src: '/payment-methods/amopay.png' },
  { key: 'speedpay', label: 'SpeedPay', src: '/payment-methods/speedpay.png' },
];

interface CasinoListProps {
  searchQuery: string;
}

export default function CasinoList({ searchQuery }: CasinoListProps) {
  const initialVisibleCount = 6;
  const [expandedCasino, setExpandedCasino] = useState<number | null>(null);
  const [showAllCasinos, setShowAllCasinos] = useState(false);

  const casinos: Casino[] = [
    {
      id: 1, rank: 1, name: "ACE96AU",
      logo: "/casinos/ace96au.png",
      rating: 4.85, ratingCount: 512,
      bonus: "100% VVIP Bonus", bonusLabel: "VIP Bonus",
      payoutTime: "Instant", withdrawLimit: "A$50,000 - A$100,000",
      games: "4000+", os: "Windows, Mac, iOS, Android", rtp: "96.4%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "payid", "osko", "googlepay", "applepay"],
      reviewLink: "/ace96au", playLink: "https://auspokies.net/affiliates/4158946",
      tag: "New Launch"
    },
    {
      id: 2, rank: 2, name: "iPay9",
      logo: "/casinos/ipay9.png",
      rating: 4.97, ratingCount: 188,
      bonus: "Weekly Commission 7%", bonusLabel: "Weekly Commission",
      payoutTime: "Instant - 2 hours", withdrawLimit: "A$300,000",
      games: "4500++", os: "Windows, Mac, Android, iOS", rtp: "95.8%",
      currencies: "AUD",
      languages: "English",
      payments: ["applepay", "googlepay", "visa", "mastercard", "btc"],
      reviewLink: "/ipay9", playLink: "https://auspokies.net/affiliates/4158946",
      tag: "Top Rated"
    },
    {
      id: 3, rank: 3, name: "Kingbet9",
      logo: "/casinos/kingbet9.png",
      rating: 4.72, ratingCount: 219,
      bonus: "Unlimited Random Bonus", bonusLabel: "Daily Bonus",
      payoutTime: "1-3 hours", withdrawLimit: "A$200,000",
      games: "4000+", os: "Android, iOS, Web", rtp: "95.9%",
      currencies: "AUD",
      languages: "English",
      payments: ["payid", "visa", "mastercard", "ripple", "usdt"],
      reviewLink: "/kingbet9", playLink: "https://auspokies.net/affiliates/4499886",
      tag: "Editor's Choice"
    },
    {
      id: 4, rank: 4, name: "Bigpay77",
      logo: "/casinos/bigpay77.png",
      rating: 4.83, ratingCount: 167,
      bonus: "Welcome Bonus 80%", bonusLabel: "Welcome Bonus",
      payoutTime: "1-6 hours", withdrawLimit: "A$200,000",
      games: "5500+", os: "Android, iOS, Web", rtp: "95.7%",
      currencies: "AUD",
      languages: "English",
      payments: ["payid", "osko", "speedpay", "amopay", "visa"],
      reviewLink: "/bigpay77", playLink: "https://auspokies.net/affiliates/2392349",
      tag: "Most Popular"
    },
    {
      id: 5, rank: 5, name: "Me99",
      logo: "/casinos/me99.png",
      rating: 4.72, ratingCount: 468,
      bonus: "5% Rebate Bonus", bonusLabel: "Daily Rebate",
      payoutTime: "1-3 hours", withdrawLimit: "A$100,000",
      games: "4500++", os: "Android, iOS, Web", rtp: "96.1%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "payid", "speedpay", "amopay"],
      reviewLink: "/me99", playLink: "https://auspokies.net/affiliates/2392349",
      tag: "Player's Favorite"
    },
    {
      id: 6, rank: 6, name: "Rolex9",
      logo: "/casinos/rolex9.png",
      rating: 4.86, ratingCount: 276,
      bonus: "Slot Welcome Bonus 50%", bonusLabel: "Welcome Bonus",
      payoutTime: "Instant - 1 hour", withdrawLimit: "A$100,000",
      games: "4500++", os: "Android, iOS", rtp: "95.6%",
      currencies: "AUD",
      languages: "English",
      payments: ["payid", "osko", "visa", "mastercard"],
      reviewLink: "/rolex9", playLink: "https://auspokies.net/affiliates/1722773",
      tag: "High Roller Pick"
    },
    {
      id: 7, rank: 7, name: "Gucci9",
      logo: "/casinos/gucci9.png",
      rating: 4.78, ratingCount: 399,
      bonus: "Every Deposit Random Bonus", bonusLabel: "Random Bonus",
      payoutTime: "15 minutes - 3 hours", withdrawLimit: "A$100,000",
      games: "4000+", os: "Android, iOS, Windows", rtp: "96.0%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "applepay", "googlepay", "speedpay"],
      reviewLink: "/gucci9", playLink: "https://auspokies.net/affiliates/2148247",
      tag: "High Rebates"
    },
    {
      id: 8, rank: 8, name: "MrBean9",
      logo: "/casinos/mrbean9.png",
      rating: 4.88, ratingCount: 301,
      bonus: "Daily First Deposit 30%", bonusLabel: "Daily Bonus",
      payoutTime: "1-6 hours", withdrawLimit: "A$50,000 - A$100,000",
      games: "4000+", os: "Windows, Mac, Android", rtp: "95.7%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "googlepay", "applepay", "osko"],
      reviewLink: "/mrbean9", playLink: "https://auspokies.net/affiliates/2392349",
      tag: "Best for Pokies"
    },
    {
      id: 9, rank: 9, name: "PKM9",
      logo: "/casinos/pkm9.png",
      rating: 4.90, ratingCount: 365,
      bonus: "Daily Slot Bonus 80%", bonusLabel: "Daily Bonus",
      payoutTime: "1-6 hours", withdrawLimit: "A$50,000 - A$100,000",
      games: "4500++", os: "Windows, Mac, Android, iOS", rtp: "96.2%",
      currencies: "AUD",
      languages: "English",
      payments: ["payid", "osko", "visa", "mastercard", "btc", "eth"],
      reviewLink: "/pkm9", playLink: "https://auspokies.net/affiliates/4499886",
      tag: "Fastest Payouts"
    },
    {
      id: 10, rank: 10, name: "Winnie777",
      logo: "/casinos/winnie777.png",
      rating: 4.72, ratingCount: 243,
      bonus: "Free Credit 365 Days", bonusLabel: "Free Credit",
      payoutTime: "15 minutes - 6 hours", withdrawLimit: "A$50,000 - A$100,000",
      games: "5500+", os: "Windows, Mac, Android, iOS", rtp: "96.0%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "payid", "speedpay", "googlepay"],
      reviewLink: "/winnie777", playLink: "https://auspokies.net/affiliates/2148247",
      tag: "Bonuses Packed"
    },
    {
      id: 11, rank: 11, name: "Micky9",
      logo: "/casinos/micky9.png",
      rating: 4.83, ratingCount: 332,
      bonus: "Weekly Commission 5%", bonusLabel: "Weekly Commission",
      payoutTime: "Instant", withdrawLimit: "A$50,000 - A$100,000",
      games: "5500+", os: "Android, iOS, Web", rtp: "95.8%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "payid", "amopay", "speedpay"],
      reviewLink: "/micky9", playLink: "https://auspokies.net/affiliates/4158946",
      tag: "Mobile Friendly"
    },
    {
      id: 12, rank: 12, name: "Bybid9",
      logo: "/casinos/bybid9.png",
      rating: 4.75, ratingCount: 421,
      bonus: "Daily Easy Step Free 100", bonusLabel: "Daily Bonus",
      payoutTime: "Instant - 2 hours", withdrawLimit: "A$20,000 per month",
      games: "5500+", os: "Windows, Mac, Android, iOS", rtp: "95.9%",
      currencies: "AUD",
      languages: "English",
      payments: ["payid", "osko", "visa", "mastercard", "ripple", "usdt"],
      reviewLink: "/bybid9", playLink: "https://auspokies.net/affiliates/1722773",
      tag: "Premium Jackpot"
    },
    {
      id: 13, rank: 13, name: "Queen13",
      logo: "/casinos/queen13.png",
      rating: 4.67, ratingCount: 149,
      bonus: "Slot Welcome Bonus 50%", bonusLabel: "Welcome Bonus",
      payoutTime: "15 minutes - 1 day", withdrawLimit: "A$50,000 - A$100,000",
      games: "4000+", os: "Windows, Android, iOS", rtp: "95.6%",
      currencies: "AUD",
      languages: "English",
      payments: ["visa", "mastercard", "payid", "googlepay", "applepay"],
      reviewLink: "/queen13", playLink: "https://auspokies.net/affiliates/1722773",
      tag: "Best for Pokies"
    }
  ];

  const filteredCasinos = casinos.filter((casino) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery) {
      const searchableText = [
        casino.name,
        casino.bonus,
        casino.bonusLabel,
        casino.payoutTime,
        casino.withdrawLimit,
        casino.tag ?? '',
        casino.payments.join(' '),
      ].join(' ').toLowerCase();

      if (!searchableText.includes(normalizedQuery)) {
        return false;
      }
    }

    return true;
  });

  useEffect(() => {
    setShowAllCasinos(false);
  }, [searchQuery]);

  const visibleCasinos = showAllCasinos
    ? filteredCasinos
    : filteredCasinos.slice(0, initialVisibleCount);

  const toggleDetails = (id: number) => {
    setExpandedCasino(expandedCasino === id ? null : id);
  };

  const renderRatingBar = (rating: number) => {
    const pct = (rating / 5) * 100;
    return (
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-gray-200 rounded-full h-1.5">
          <div className="bg-green-500 h-1.5 rounded-full" style={{ width: `${pct}%` }}></div>
        </div>
        <span className="text-xs font-bold text-gray-800 whitespace-nowrap">{rating} / 5.0</span>
      </div>
    );
  };

  return (
    <section id="casino-list-section" className="bg-white py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="bg-amber-50 border border-amber-200 rounded-md p-3 mb-5 text-xs text-amber-800">
          <i className="fa fa-exclamation-triangle mr-1 text-amber-500"></i>
          Operators listed on this page may be classified as providing interactive gambling services that are restricted under the Interactive Gambling Act (IGA).
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5">Top Australian Online Casino Sites</h2>

        {/* Results Count */}
        <div className="mb-4 text-sm text-gray-600">
          Showing <span className="font-bold text-gray-900">{filteredCasinos.length}</span> {filteredCasinos.length === 1 ? 'casino' : 'casinos'}
          {searchQuery.trim() && (
            <span className="ml-2 text-gray-500">
              for "<span className="font-medium">{searchQuery.trim()}</span>"
            </span>
          )}
        </div>

        {/* Casino List or Empty State */}
        {filteredCasinos.length > 0 ? (
          <div className="space-y-3">
            {visibleCasinos.map((casino) => (
              <div key={casino.id} className="border border-gray-200 rounded-lg bg-white hover:shadow-md transition-shadow overflow-hidden">

                {/* ── DESKTOP ROW ── */}
                <div className="hidden md:flex items-stretch min-h-[132px]">
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 bg-gray-50 border-r border-gray-200 flex-shrink-0">
                    <span className="text-lg font-bold text-gray-400">{casino.rank}</span>
                  </div>
                  {/* Logo */}
                  <div className="flex items-center justify-center w-32 px-3 py-4 flex-shrink-0 border-r border-gray-100">
                    <img src={casino.logo} alt={casino.name} className="max-w-full max-h-11 object-contain" />
                  </div>
                  {/* Main Info */}
                  <div className="flex-1 px-5 py-3.5 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Link to={casino.reviewLink} className="font-bold text-gray-900 hover:text-teal-600 text-sm">{casino.name}</Link>
                      {casino.tag && (
                        <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">{casino.tag}</span>
                      )}
                    </div>
                    <div className="mb-2.5">{renderRatingBar(casino.rating)}</div>
                    <div className="text-xs text-gray-500 mb-2.5">
                      <span className="font-semibold text-gray-700">{casino.bonusLabel}:</span>{' '}
                      <span className="text-green-700 font-medium">{casino.bonus}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-600 mb-2.5">
                      <span><span className="text-gray-400">Payout:</span> <strong>{casino.payoutTime}</strong></span>
                      <span><span className="text-gray-400">Limit:</span> <strong>{casino.withdrawLimit}</strong></span>
                    </div>
                    <button
                      onClick={() => toggleDetails(casino.id)}
                      className="text-teal-600 hover:text-teal-700 text-xs font-medium flex items-center gap-1 cursor-pointer"
                    >
                      {expandedCasino === casino.id ? 'Less Information' : 'More Information'}
                      <i className={`fa fa-angle-${expandedCasino === casino.id ? 'up' : 'down'} text-xs`}></i>
                    </button>
                  </div>
                  {/* Payment Icons */}
                  <div className="hidden lg:flex flex-col justify-center items-center px-3 py-3 w-40 flex-shrink-0 border-l border-gray-100">
                    <div className="text-xs text-gray-400 mb-2 self-start">Payment methods</div>
                    <div className="grid grid-cols-4 gap-1.5 place-items-center">
                      {paymentMethodIcons.map((payment) => (
                        <img
                          key={payment.key}
                          src={payment.src}
                          alt={payment.label}
                          title={payment.label}
                          className="h-6 w-6 rounded-full object-contain"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 justify-center items-center px-3 py-3 w-32 flex-shrink-0 border-l border-gray-100">
                    <Link to={casino.reviewLink} className="w-full px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs font-medium text-center transition-colors whitespace-nowrap">
                      Review
                    </Link>
                    <a href={casino.playLink} target="_blank" rel="nofollow noopener sponsored"
                      className="w-full px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-bold text-center transition-colors whitespace-nowrap">
                      PLAY NOW
                    </a>
                    <div className="text-xs text-gray-400 text-center">{casino.ratingCount} reviews</div>
                  </div>
                </div>

                {/* ── MOBILE CARD ── */}
                <div className="md:hidden">
                  {/* Top row: rank + logo + tag + rating */}
                  <div className="flex items-center gap-3 px-3 pt-3 pb-2">
                    <span className="text-base font-bold text-gray-400 w-5 flex-shrink-0">{casino.rank}</span>
                    <div className="w-16 h-10 flex-shrink-0">
                      <img src={casino.logo} alt={casino.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <Link to={casino.reviewLink} className="font-bold text-gray-900 text-sm leading-tight">{casino.name}</Link>
                        {casino.tag && (
                          <span className="text-xs bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">{casino.tag}</span>
                        )}
                      </div>
                      <div className="mt-1">{renderRatingBar(casino.rating)}</div>
                    </div>
                  </div>

                  {/* Bonus */}
                  <div className="px-3 pb-2 text-xs">
                    <span className="font-semibold text-gray-700">{casino.bonusLabel}: </span>
                    <span className="text-green-700 font-medium">{casino.bonus}</span>
                  </div>

                  {/* Payout + Limit */}
                  <div className="flex gap-4 px-3 pb-2 text-xs text-gray-600">
                    <span><span className="text-gray-400">Payout:</span> <strong>{casino.payoutTime}</strong></span>
                    <span><span className="text-gray-400">Limit:</span> <strong>{casino.withdrawLimit}</strong></span>
                  </div>

                  {/* More info toggle */}
                  <div className="px-3 pb-2">
                    <button
                      onClick={() => toggleDetails(casino.id)}
                      className="text-teal-600 text-xs font-medium flex items-center gap-1 cursor-pointer"
                    >
                      {expandedCasino === casino.id ? 'Less Information' : 'More Information'}
                      <i className={`fa fa-angle-${expandedCasino === casino.id ? 'up' : 'down'} text-xs`}></i>
                    </button>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-2 px-3 pb-3">
                    <Link to={casino.reviewLink}
                      className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-xs font-medium text-center transition-colors whitespace-nowrap">
                      Review
                    </Link>
                    <a href={casino.playLink} target="_blank" rel="nofollow noopener sponsored"
                      className="flex-1 py-2 bg-green-500 hover:bg-green-600 text-white rounded text-xs font-bold text-center transition-colors whitespace-nowrap">
                      PLAY NOW
                    </a>
                  </div>
                </div>

                {/* Expanded Details — shared */}
                {expandedCasino === casino.id && (
                  <div className="border-t border-gray-200 bg-gray-50 px-4 py-4 md:px-5">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 text-sm">
                      <div className="rounded-md bg-white border border-gray-200 px-3 py-2.5">
                        <div className="text-xs text-gray-500 mb-0.5">Number of games</div>
                        <div className="font-semibold text-gray-800 text-xs">{casino.games}</div>
                      </div>
                      <div className="rounded-md bg-white border border-gray-200 px-3 py-2.5">
                        <div className="text-xs text-gray-500 mb-0.5">Compatible OS</div>
                        <div className="font-semibold text-gray-800 text-xs">{casino.os}</div>
                      </div>
                      <div className="rounded-md bg-white border border-gray-200 px-3 py-2.5">
                        <div className="text-xs text-gray-500 mb-0.5">RTP</div>
                        <div className="font-semibold text-gray-800 text-xs">{casino.rtp}</div>
                      </div>
                      <div className="rounded-md bg-white border border-gray-200 px-3 py-2.5">
                        <div className="text-xs text-gray-500 mb-0.5">Languages</div>
                        <div className="font-semibold text-gray-800 text-xs">{casino.languages}</div>
                      </div>
                      <div className="col-span-2 md:col-span-1 rounded-md bg-white border border-gray-200 px-3 py-2.5">
                        <div className="text-xs text-gray-500 mb-0.5">Supported Currencies</div>
                        <div className="font-semibold text-gray-800 text-xs">{casino.currencies}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <i className="ri-search-line text-gray-300 text-5xl mb-4 block"></i>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No casinos found</h3>
            <p className="text-sm text-gray-600 mb-4">
              No casinos match your current search keyword. Try a different search term.
            </p>
          </div>
        )}

        {filteredCasinos.length > initialVisibleCount && !showAllCasinos && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAllCasinos(true)}
              className="inline-block px-8 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded font-medium text-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Show more casinos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
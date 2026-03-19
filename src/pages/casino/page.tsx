import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface BonusCard {
  title: string;
  description: string;
  bonusCode?: string;
  image?: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface Review {
  id: number;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  ratings: {
    cashout: number;
    bonuses: number;
    security: number;
    software: number;
    support: number;
  };
}

interface CasinoDetail {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  ratingCount: number;
  tag?: string;
  bonusLabel?: string;
  bonus: string;
  bonusDescription: string;
  payoutTime: string;
  withdrawLimit: string;
  games: string;
  rtp: string;
  os: string;
  currencies: string;
  languages: string;
  payments: string[];
  playLink: string;
  pros: string[];
  cons: string[];
  overview: string;
  gamesSection: string;
  bonusesSection: string;
  bonusCards: BonusCard[];
  paymentsSection: string;
  supportSection: string;
  hitsPercent: number;
  faqs: FaqItem[];
  reviews: Review[];
  // New enriched overview fields
  foundedYear: number;
  ownerCompany: string;
  headquartersLocation: string;
  licenses: { authority: string; jurisdiction: string; licenseNumber?: string }[];
  gameProviders: string[];
  monthlyPlayers: string;
  minDeposit: string;
  minWithdrawal: string;
  liveChat: boolean;
  emailSupport: boolean;
  phoneSupport: boolean;
  telegramSupport?: boolean;
  whatsappSupport?: boolean;
  trustpilotLink?: string;
}

interface HitsMissesSectionProps {
  hits: number;
  pros: string[];
  cons: string[];
}

function HitsMissesSection({ hits, pros, cons }: HitsMissesSectionProps) {
  const misses = 100 - hits;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
        <i className="ri-checkbox-circle-line text-gray-700 text-xl"></i>
        Hits &amp; Misses
      </h3>
      <div className="flex items-center gap-6 mb-6">
        <div className="flex-shrink-0 relative w-28 h-28 flex items-center justify-center">
          <div
            className="w-28 h-28 rounded-full"
            style={{ background: `conic-gradient(#7cb96e 0% ${hits}%, #c0392b ${hits}% 100%)` }}
          />
          <div className="absolute w-16 h-16 bg-white rounded-full" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-4 h-3 rounded-sm inline-block" style={{ background: '#7cb96e' }} />
              <span className="text-sm text-gray-600 font-medium">Hits</span>
            </div>
            <div className="text-3xl font-bold leading-none" style={{ color: '#7cb96e' }}>{hits}%</div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="w-4 h-3 rounded-sm inline-block" style={{ background: '#c0392b' }} />
              <span className="text-sm text-gray-600 font-medium">Misses</span>
            </div>
            <div className="text-3xl font-bold leading-none" style={{ color: '#c0392b' }}>{misses}%</div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-x-4 gap-y-1">
        <div>
          {pros.map((pro, i) => (
            <div key={i} className="flex items-start gap-1.5 mb-1.5">
              <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#7cb96e' }} />
              <span className="text-xs text-gray-700 leading-snug">{pro}</span>
            </div>
          ))}
        </div>
        <div>
          {cons.map((con, i) => (
            <div key={i} className="flex items-start gap-1.5 mb-1.5">
              <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#c0392b' }} />
              <span className="text-xs text-gray-700 leading-snug">{con}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface BonusSectionProps {
  casinoName: string;
  casinoLogo: string;
  bonusesSection: string;
  bonusCards: BonusCard[];
  playLink: string;
}

function BonusesContent({ casinoName, casinoLogo, bonusesSection, bonusCards, playLink }: BonusSectionProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (code: string, index: number) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div>
      <p className="text-gray-700 leading-relaxed mb-6">{bonusesSection}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {bonusCards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-gray-900 w-full aspect-[5/2] overflow-hidden">
              <img
                src={card.image ?? casinoLogo}
                alt={card.title}
                width={1000}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col flex-1 p-4">
              <h4 className="text-base font-bold text-gray-900 text-center mb-3 leading-snug">{card.title}</h4>
              <p className="text-xs text-gray-600 text-center leading-relaxed mb-4 flex-1">{card.description}</p>
              {card.bonusCode && (
                <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <i className="ri-coupon-line text-sm"></i>
                    <span>Code:</span>
                    <span className="font-bold text-gray-800 tracking-wide">{card.bonusCode}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(card.bonusCode!, idx)}
                    className="text-gray-400 hover:text-teal-600 transition-colors cursor-pointer ml-1"
                    title="Copy code"
                  >
                    {copiedIndex === idx
                      ? <i className="ri-check-line text-green-500 text-base"></i>
                      : <i className="ri-file-copy-line text-base"></i>}
                  </button>
                </div>
              )}
              <a
                href={playLink}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-checkbox-circle-line text-base"></i>
                CLAIM
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqSection({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span className="font-semibold text-gray-900 text-sm pr-4">{faq.question}</span>
            <i className={`ri-arrow-down-s-line text-xl text-gray-500 flex-shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}></i>
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-4 bg-white border-t border-gray-100">
              <p className="text-sm text-gray-600 leading-relaxed pt-3">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

interface ReviewsSectionProps {
  reviews: Review[];
  trustpilotLink: string;
}

function ReviewsSection({ reviews, trustpilotLink }: ReviewsSectionProps) {

  // Calculate average ratings
  const avgRatings = {
    overall: reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    cashout: reviews.reduce((sum, r) => sum + r.ratings.cashout, 0) / reviews.length,
    bonuses: reviews.reduce((sum, r) => sum + r.ratings.bonuses, 0) / reviews.length,
    security: reviews.reduce((sum, r) => sum + r.ratings.security, 0) / reviews.length,
    software: reviews.reduce((sum, r) => sum + r.ratings.software, 0) / reviews.length,
    support: reviews.reduce((sum, r) => sum + r.ratings.support, 0) / reviews.length,
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`${star <= rating ? 'fa fa-star' : 'far fa-star'} text-amber-400`}
          ></i>
        ))}
      </div>
    );
  };

  const renderRatingBar = (label: string, rating: number, count: number) => {
    const pct = (rating / 5) * 100;
    return (
      <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
        <div className="flex items-center justify-between sm:w-20 sm:flex-shrink-0">
          <span className="text-sm text-gray-700 font-medium">{label}</span>
          <span className="text-xs text-gray-500 sm:hidden">
            {rating.toFixed(1)} ({count})
          </span>
        </div>
        <div className="flex items-center gap-2 sm:flex-1">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-amber-400 h-2 rounded-full transition-all" style={{ width: `${pct}%` }}></div>
          </div>
          <span className="hidden sm:inline text-sm font-bold text-gray-800 w-12 text-right tabular-nums">{rating.toFixed(1)}</span>
          <span className="hidden sm:inline text-xs text-gray-500 w-16 text-right">({count})</span>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Rating Summary */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Overall Rating */}
          <div className="flex flex-col items-center justify-center md:w-48 flex-shrink-0">
            <div className="text-5xl font-bold text-gray-900 mb-2">{avgRatings.overall.toFixed(1)}</div>
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <i key={s} className={`${s <= Math.round(avgRatings.overall) ? 'fa fa-star' : 'far fa-star'} text-amber-400 text-xl`}></i>
              ))}
            </div>
            <div className="text-sm text-gray-600">Based on {reviews.length} reviews</div>
          </div>

          {/* Rating Breakdown */}
          <div className="flex-1 space-y-2">
            {renderRatingBar('Cashout', avgRatings.cashout, reviews.length)}
            {renderRatingBar('Bonuses', avgRatings.bonuses, reviews.length)}
            {renderRatingBar('Security', avgRatings.security, reviews.length)}
            {renderRatingBar('Software', avgRatings.software, reviews.length)}
            {renderRatingBar('Support', avgRatings.support, reviews.length)}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <a
          href={trustpilotLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg transition-colors inline-flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
        >
          <i className="ri-edit-line"></i>
          Write a Review
        </a>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                {review.userName.charAt(0).toUpperCase()}
              </div>

              {/* Review Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{review.userName}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                    <span className="text-sm font-bold text-gray-800">{review.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Detailed Ratings */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-xs text-gray-600">
                  <span>Cashout: <strong className="text-gray-800">{review.ratings.cashout.toFixed(1)}</strong></span>
                  <span>Bonuses: <strong className="text-gray-800">{review.ratings.bonuses.toFixed(1)}</strong></span>
                  <span>Security: <strong className="text-gray-800">{review.ratings.security.toFixed(1)}</strong></span>
                  <span>Software: <strong className="text-gray-800">{review.ratings.software.toFixed(1)}</strong></span>
                  <span>Support: <strong className="text-gray-800">{review.ratings.support.toFixed(1)}</strong></span>
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CasinoMiniCard {
  slug: string;
  name: string;
  logo: string;
  rating: number;
  playLink: string;
}

const allCasinosMini: CasinoMiniCard[] = [
  {
    slug: 'ipay9',
    name: 'iPay9',
    logo: '/casinos/ipay9.png',
    rating: 4.96,
    playLink: 'https://ipay9.co/RFAUSSIESPINAUD',
  },
  {
    slug: 'kingbet9',
    name: 'Kingbet9',
    logo: '/casinos/kingbet9.png',
    rating: 4.94,
    playLink: 'https://k9aus.net/RFAUSSIESPIN',
  },
  {
    slug: 'bigpay77',
    name: 'Bigpay77',
    logo: '/casinos/bigpay77.png',
    rating: 4.92,
    playLink: 'https://bigpay77aus.com/RFAUSSIESPINN',
  },
  {
    slug: 'me99',
    name: 'Me99',
    logo: '/casinos/me99.png',
    rating: 4.90,
    playLink: 'https://me99office.co/RFAUSSIESPIN99',
  },
  {
    slug: 'rolex9',
    name: 'Rolex9',
    logo: '/casinos/rolex9.png',
    rating: 4.88,
    playLink: 'https://rolex9.net/RFAUSSIESPINJ',
  },
  {
    slug: 'gucci9',
    name: 'Gucci9',
    logo: '/casinos/gucci9.png',
    rating: 4.86,
    playLink: 'https://guccii9au.net/RFAUSSIESPIN33',
  },
  {
    slug: 'bybid9',
    name: 'Bybid9',
    logo: '/casinos/bybid9.png',
    rating: 4.84,
    playLink: 'https://bybid9.net/RFAUSSIESPINAU',
  },
  {
    slug: 'mrbean9',
    name: 'MrBean9',
    logo: '/casinos/mrbean9.png',
    rating: 4.84,
    playLink: 'https://mrbean9au.com/RFAUSSIESPIN9',
  },
  {
    slug: 'pkm9',
    name: 'PKM9',
    logo: '/casinos/pkm9.png',
    rating: 4.82,
    playLink: 'https://pokepokemon9.com/RFAUSSIESPIN98',
  },
  {
    slug: 'ace96au',
    name: 'ACE96AU',
    logo: '/casinos/ace96au.png',
    rating: 4.98,
    playLink: 'https://ace96au.net/RFAUSSIESPIN95',
  },
  {
    slug: 'winnie777',
    name: 'Winnie777',
    logo: '/casinos/winnie777.png',
    rating: 4.80,
    playLink: 'https://winnie777.vip/RFAUSSIESPIN96',
  },
  {
    slug: 'micky9',
    name: 'Micky9',
    logo: '/casinos/micky9.png',
    rating: 4.78,
    playLink: 'https://micky13.asia/RFAUSSIESPIN97',
  },
  {
    slug: 'queen13',
    name: 'Queen13',
    logo: '/casinos/queen13.png',
    rating: 4.75,
    playLink: 'https://queen13au.com/RFAUSSIESPIN94',
  },
];

const latestBonusesSidebar = [
  {
    slug: 'ipay9',
    casino: 'iPay9 Casino',
    logo: '/casinos/ipay9.png',
    title: 'Weekly Commission 7%',
    code: null as string | null,
    link: 'https://ipay9.co/RFAUSSIESPINAUD',
  },
  {
    slug: 'kingbet9',
    casino: 'Kingbet9 Casino',
    logo: '/casinos/kingbet9.png',
    title: 'Unlimited Random Bonus',
    code: null as string | null,
    link: 'https://k9aus.net/RFAUSSIESPIN',
  },
  {
    slug: 'bigpay77',
    casino: 'Bigpay77 Casino',
    logo: '/casinos/bigpay77.png',
    title: 'Welcome Bonus 80%',
    code: null as string | null,
    link: 'https://bigpay77aus.com/RFAUSSIESPINN',
  },
  {
    slug: 'me99',
    casino: 'Me99 Casino',
    logo: '/casinos/me99.png',
    title: '5% Rebate Bonus',
    code: null as string | null,
    link: 'https://me99office.co/RFAUSSIESPIN99',
  },
  {
    slug: 'rolex9',
    casino: 'Rolex9 Casino',
    logo: '/casinos/rolex9.png',
    title: 'Slot Welcome Bonus 50%',
    code: null as string | null,
    link: 'https://rolex9.net/RFAUSSIESPINJ',
  },
  {
    slug: 'gucci9',
    casino: 'Gucci9 Casino',
    logo: '/casinos/gucci9.png',
    title: 'Every Deposit Random Bonus',
    code: null as string | null,
    link: 'https://guccii9au.net/RFAUSSIESPIN33',
  },
  {
    slug: 'bybid9',
    casino: 'Bybid9 Casino',
    logo: '/casinos/bybid9.png',
    title: 'Daily Easy Step Free 100',
    code: null as string | null,
    link: 'https://bybid9.net/RFAUSSIESPINAU',
  },
  {
    slug: 'mrbean9',
    casino: 'MrBean9 Casino',
    logo: '/casinos/mrbean9.png',
    title: 'Daily First Deposit 30%',
    code: null as string | null,
    link: 'https://mrbean9au.com/RFAUSSIESPIN9',
  },
  {
    slug: 'pkm9',
    casino: 'PKM9 Casino',
    logo: '/casinos/pkm9.png',
    title: 'Daily Slot Bonus 80%',
    code: null as string | null,
    link: 'https://pokepokemon9.com/RFAUSSIESPIN98',
  },
  {
    slug: 'ace96au',
    casino: 'Ace96au Casino',
    logo: '/casinos/ace96au.png',
    title: '100% VVIP Bonus',
    code: null as string | null,
    link: 'https://ace96au.net/RFAUSSIESPIN95',
  },
  {
    slug: 'winnie777',
    casino: 'Winnie777 Casino',
    logo: '/casinos/winnie777.png',
    title: 'Free Credit 365 Days',
    code: null as string | null,
    link: 'https://winnie777.vip/RFAUSSIESPIN96',
  },
  {
    slug: 'micky9',
    casino: 'Micky9 Casino',
    logo: '/casinos/micky9.png',
    title: 'Weekly Commission 5%',
    code: null as string | null,
    link: 'https://micky13.asia/RFAUSSIESPIN97',
  },
  {
    slug: 'queen13',
    casino: 'Queen13 Casino',
    logo: '/casinos/queen13.png',
    title: 'Slot Welcome Bonus 50%',
    code: null as string | null,
    link: 'https://queen13au.com/RFAUSSIESPIN94',
  },
];

const reviewPaymentMethodIcons = [
  { key: 'visa', label: 'Visa', src: '/payment-methods/visa.png' },
  { key: 'mastercard', label: 'Mastercard', src: '/payment-methods/mastercard.png' },
  { key: 'googlepay', label: 'G Pay', src: '/payment-methods/google.png' },
  { key: 'applepay', label: 'Apple Pay', src: '/payment-methods/apple.png' },
  { key: 'payid', label: 'PayID', src: '/payment-methods/payid.png' },
  { key: 'osko', label: 'Osko', src: '/payment-methods/osko.png' },
  { key: 'amopay', label: 'AmoPay', src: '/payment-methods/amopay.png' },
  { key: 'speedpay', label: 'SpeedPay', src: '/payment-methods/speedpay.png' },
];

const standardGameProviders = [
  'Jili',
  'Booongo',
  'Vpower',
  'Pragmatic Play',
  'Vplus',
  'WF Gaming',
  'Advant Play',
  'Joker',
  'Slotmania',
  'CQ9',
  'Pegasus',
  'Ace333',
  'Acewin',
];

function clampRating(value: number) {
  return Math.max(4.5, Math.min(4.98, Number(value.toFixed(1))));
}

function generateTemplateReviews(slugValue: string, casinoName: string, baseRating: number): Review[] {
  const seed = Array.from(slugValue).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const count = 2 + (seed % 6); // 2-7 reviews
  const reviews: Review[] = [];
  const firstNames = [
    'Ethan', 'Noah', 'Liam', 'Lucas', 'Mason', 'Aiden', 'Oliver', 'Henry', 'Leo', 'Max',
    'Ava', 'Mia', 'Lily', 'Chloe', 'Zoe', 'Ruby', 'Ella', 'Grace', 'Aria', 'Nora',
    'Harper', 'Scarlett', 'Hazel', 'Layla', 'Sienna', 'Isla', 'Amelia', 'Freya', 'Ivy', 'Stella',
  ];
  const lastInitials = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const openings = [
    `I have been playing on ${casinoName} for a few weeks now`,
    `After trying several brands, ${casinoName} surprised me`,
    `${casinoName} feels stable on both desktop and mobile`,
    `My experience on ${casinoName} has been mostly positive`,
    `I joined ${casinoName} recently and tested the key features`,
    `So far ${casinoName} has been one of the smoother sites I tested`,
  ];
  const middlePhrases = [
    'the lobby loads fast and game switching is smooth',
    'cashier flow is simple and I did not run into payment errors',
    'bonus activation is straightforward when terms are checked first',
    'support replies were helpful for account and promo questions',
    'withdrawal processing felt reasonable compared with similar sites',
    'the game list has enough variety for both quick sessions and longer play',
  ];
  const closings = [
    'I would keep using it for regular play.',
    'Overall I am satisfied with this casino.',
    'It is a good fit for players who value consistency.',
    'The platform performs well enough for daily use.',
    'I plan to continue playing here for now.',
    'This one is worth trying if you read the promo terms carefully.',
  ];
  const usedNames = new Set<string>();
  const usedComments = new Set<string>();

  for (let i = 0; i < count; i++) {
    const varSeed = (seed + i * 17) % 100;
    const rating = clampRating(baseRating - 0.25 + (varSeed % 20) * 0.02);
    let userName = '';
    let guard = 0;
    while (!userName || usedNames.has(userName)) {
      const firstName = firstNames[(seed + i * 11 + guard * 7) % firstNames.length];
      const initial = lastInitials[(seed + i * 5 + guard * 3) % lastInitials.length];
      userName = `${firstName} ${initial}.`;
      guard += 1;
    }
    usedNames.add(userName);

    let comment = '';
    guard = 0;
    while (!comment || usedComments.has(comment)) {
      const opening = openings[(seed + i * 3 + guard) % openings.length];
      const middle = middlePhrases[(seed + i * 5 + guard * 2) % middlePhrases.length];
      const closing = closings[(seed + i * 7 + guard * 3) % closings.length];
      comment = `${opening}, ${middle}. ${closing}`;
      guard += 1;
    }
    usedComments.add(comment);

    reviews.push({
      id: seed * 100 + i + 1,
      userName,
      rating,
      date: `${String(7 + (i * 3) % 20).padStart(2, '0')} Mar 2026`,
      comment,
      ratings: {
        cashout: clampRating(rating + 0.05),
        bonuses: clampRating(rating),
        security: clampRating(rating + 0.08),
        software: clampRating(rating + 0.1),
        support: clampRating(rating - 0.02),
      },
    });
  }

  return reviews;
}

function getTrustpilotLinkBySlug(slugValue: string) {
  const trustpilotBySlug: Record<string, string> = {
    ace96au: 'https://www.trustpilot.com/review/ace96au.com',
    ipay9: 'https://www.trustpilot.com/review/ipay9aud.com',
    kingbet9: 'https://www.trustpilot.com/review/kingbet9aus.com',
    bigpay77: 'https://www.trustpilot.com/review/bigpay77.net',
    me99: 'https://www.trustpilot.com/review/me99aud.com',
    rolex9: 'https://www.trustpilot.com/review/rolex9.net',
    gucci9: 'https://www.trustpilot.com/review/gucci9aud.vip',
    bybid9: 'https://www.trustpilot.com/review/bybid9.com',
    mrbean9: 'https://www.trustpilot.com/review/mrbean9.com',
    pkm9: 'https://www.trustpilot.com/review/pokemon9office.net',
    winnie777: 'https://www.trustpilot.com/review/winnie13.net',
    micky9: 'https://www.trustpilot.com/review/micky13.net',
    queen13: 'https://www.trustpilot.com/review/queen13au.com',
  };

  return trustpilotBySlug[slugValue] ?? `https://www.trustpilot.com/review/${slugValue}.com`;
}

function getHitsPercentBySlug(slugValue: string) {
  const seed = Array.from(slugValue).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return 85 + (seed % 12); // 85-96
}

function SidebarStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <i
          key={s}
          className={`ri-star-${s <= Math.round(rating) ? 'fill' : 'line'} text-amber-400 text-xs`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-1 tabular-nums">{rating}</span>
    </div>
  );
}

function ReviewSidebar({ currentSlug }: { currentSlug: string }) {
  const initialCasinoCount = 5;
  const initialBonusCount = 4;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [showAllCasinos, setShowAllCasinos] = useState(false);
  const [showAllBonuses, setShowAllBonuses] = useState(false);

  const topPickMetaBySlug: Record<string, { tag?: string; bonus: string }> = {
    ace96au: { tag: "New Launch", bonus: "100% VVIP Bonus" },
    ipay9: { tag: "Top Rated", bonus: "Weekly Commission 7%" },
    kingbet9: { tag: "Editor's Choice", bonus: "Unlimited Random Bonus" },
    bigpay77: { tag: "Most Popular", bonus: "Welcome Bonus 80%" },
    me99: { tag: "Player's Favorite", bonus: "5% Rebate Bonus" },
    rolex9: { tag: "High Roller Pick", bonus: "Slot Welcome Bonus 50%" },
    gucci9: { tag: "High Rebates", bonus: "Every Deposit Random Bonus" },
    bybid9: { tag: "Premium Jackpot", bonus: "Daily Easy Step Free 100" },
    mrbean9: { tag: "Best for Pokies", bonus: "Daily First Deposit 30%" },
    pkm9: { tag: "Fastest Payouts", bonus: "Daily Slot Bonus 80%" },
    winnie777: { tag: "Bonuses Packed", bonus: "Free Credit 365 Days" },
    micky9: { tag: "Mobile Friendly", bonus: "Weekly Commission 5%" },
    queen13: { tag: "Best for Pokies", bonus: "Slot Welcome Bonus 50%" },
  };

  const topPicks = allCasinosMini.filter((c) => c.slug !== currentSlug);
  const latestBonuses = latestBonusesSidebar.filter((bonus) => bonus.slug !== currentSlug);
  const visibleTopPicks = showAllCasinos ? topPicks : topPicks.slice(0, initialCasinoCount);
  const visibleBonuses = showAllBonuses ? latestBonuses : latestBonuses.slice(0, initialBonusCount);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* ── Top Casino Picks ── */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="bg-teal-600 px-4 py-3 flex items-center gap-2">
          <i className="ri-trophy-line text-white text-base"></i>
          <h3 className="text-sm font-bold text-white">Top Casino Picks</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {visibleTopPicks.map((casino, i) => {
            const meta = topPickMetaBySlug[casino.slug];
            return (
            <div key={casino.slug} className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors">
              <span className="text-xs font-bold text-gray-400 w-4 flex-shrink-0">{i + 1}</span>
              <div className="w-10 h-8 flex-shrink-0 flex items-center justify-center">
                <img src={casino.logo} alt={casino.name} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <Link
                    to={`/${casino.slug}`}
                    className="text-xs font-semibold text-gray-800 hover:text-teal-600 truncate"
                  >
                    {casino.name}
                  </Link>
                  {meta?.tag && (
                    <span className="text-[10px] bg-teal-100 text-teal-700 px-1.5 py-0.5 rounded-full font-medium whitespace-nowrap">
                      {meta.tag}
                    </span>
                  )}
                </div>
                <SidebarStars rating={casino.rating} />
                {meta?.bonus && <div className="text-[11px] text-green-700 font-medium mt-0.5 truncate">{meta.bonus}</div>}
              </div>
              <a
                href={casino.playLink}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="flex-shrink-0 px-2.5 py-1.5 bg-green-500 hover:bg-green-600 text-white rounded text-[11px] font-bold transition-colors whitespace-nowrap"
              >
                Play
              </a>
            </div>
          )})}
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

      {/* ── Responsible Gambling ── */}
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
    </div>
  );
}

function OverviewSection({ casino }: { casino: CasinoDetail }) {
  const [showAllProviders, setShowAllProviders] = useState(false);
  const visibleProviders = showAllProviders ? standardGameProviders : standardGameProviders.slice(0, 10);

  return (
    <div id="section-overview" className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <i className="ri-information-line text-teal-600"></i>
        Overview
      </h2>
      <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
      <p className="text-gray-700 leading-relaxed mb-8">{casino.overview}</p>

      {/* Quick Facts Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 flex items-center justify-center text-teal-600">
              <i className="ri-calendar-line text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Founded</span>
          </div>
          <div className="text-lg font-bold text-gray-900">{casino.foundedYear}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 flex items-center justify-center text-teal-600">
              <i className="ri-building-2-line text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Owner</span>
          </div>
          <div className="text-sm font-bold text-gray-900 leading-snug">{casino.ownerCompany}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 flex items-center justify-center text-teal-600">
              <i className="ri-map-pin-line text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Headquarters</span>
          </div>
          <div className="text-sm font-bold text-gray-900">{casino.headquartersLocation}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 flex items-center justify-center text-teal-600">
              <i className="ri-group-line text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Monthly Players</span>
          </div>
          <div className="text-base font-bold text-gray-900">{casino.monthlyPlayers}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 flex items-center justify-center text-teal-600">
              <i className="ri-arrow-down-circle-line text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Min Deposit</span>
          </div>
          <div className="text-lg font-bold text-gray-900">{casino.minDeposit}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 flex items-center justify-center text-teal-600">
              <i className="ri-arrow-up-circle-line text-lg"></i>
            </div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Min Withdrawal</span>
          </div>
          <div className="text-sm font-bold text-gray-900">{casino.minWithdrawal}</div>
        </div>
      </div>

      {/* Licenses */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-teal-600">
            <i className="ri-shield-check-line text-lg"></i>
          </div>
          Licences &amp; Regulation
        </h3>
        <div className="space-y-3">
          {casino.licenses.map((lic, i) => (
            <div key={i} className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3">
              <div className="w-5 h-5 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                <i className="ri-verified-badge-line text-base"></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{lic.authority}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">{lic.jurisdiction}</span>
                </div>
                {lic.licenseNumber && (
                  <div className="text-xs text-gray-500 mt-0.5">
                    Licence No: <span className="font-mono font-semibold text-gray-700">{lic.licenseNumber}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Channels */}
      <div className="mb-8">
        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-teal-600">
            <i className="ri-customer-service-2-line text-lg"></i>
          </div>
          Support Channels
        </h3>
        <div className="flex flex-wrap gap-3">
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${casino.liveChat ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`ri-chat-3-line text-sm ${casino.liveChat ? 'text-teal-600' : 'text-gray-400'}`}></i>
            </div>
            Live Chat {casino.liveChat ? '✓' : '✗'}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${casino.emailSupport ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`ri-mail-line text-sm ${casino.emailSupport ? 'text-teal-600' : 'text-gray-400'}`}></i>
            </div>
            Email {casino.emailSupport ? '✓' : '✗'}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${casino.telegramSupport ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`ri-telegram-line text-sm ${casino.telegramSupport ? 'text-teal-600' : 'text-gray-400'}`}></i>
            </div>
            Telegram {casino.telegramSupport ? '✓' : '✗'}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${casino.whatsappSupport ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`ri-whatsapp-line text-sm ${casino.whatsappSupport ? 'text-teal-600' : 'text-gray-400'}`}></i>
            </div>
            WhatsApp {casino.whatsappSupport ? '✓' : '✗'}
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${casino.phoneSupport ? 'bg-teal-50 border-teal-200 text-teal-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
            <div className="w-4 h-4 flex items-center justify-center">
              <i className={`ri-phone-line text-sm ${casino.phoneSupport ? 'text-teal-600' : 'text-gray-400'}`}></i>
            </div>
            Phone {casino.phoneSupport ? '✓' : '✗'}
          </div>
        </div>
      </div>

      {/* Game Providers */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-teal-600">
            <i className="ri-gamepad-line text-lg"></i>
          </div>
          Game Providers
          <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-semibold">{standardGameProviders.length} providers</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {visibleProviders.map((provider, i) => (
            <span
              key={i}
              className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 hover:border-teal-400 hover:text-teal-700 transition-colors cursor-default"
            >
              {provider}
            </span>
          ))}
        </div>
        {standardGameProviders.length > 10 && (
          <button
            onClick={() => setShowAllProviders(!showAllProviders)}
            className="mt-3 text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 cursor-pointer"
          >
            {showAllProviders ? 'Show less' : `Show all ${standardGameProviders.length} providers`}
            <i className={`ri-arrow-${showAllProviders ? 'up' : 'down'}-s-line`}></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default function CasinoReviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const casinoDetails: Record<string, CasinoDetail> = {};

  const comingSoonCasinoMap: Record<string, {
    name: string;
    logo: string;
    rating: number;
    ratingCount: number;
    tag?: string;
    bonusLabel?: string;
    bonus: string;
    payoutTime: string;
    withdrawLimit: string;
    games: string;
    rtp: string;
    os: string;
    currencies: string;
    languages: string;
    payments: string[];
    playLink: string;
    foundedYear: number;
    ownerCompany: string;
    headquartersLocation: string;
    monthlyPlayers: string;
    minDeposit: string;
    minWithdrawal: string;
  }> = {
    ace96au: { name: 'Ace96au', logo: '/casinos/ace96au.png', rating: 4.98, ratingCount: 512, tag: 'New Launch', bonusLabel: 'VIP Bonus', bonus: '100% VVIP Bonus', payoutTime: 'Instant', withdrawLimit: 'A$50,000 - A$100,000', games: '4000+', rtp: '96.4%', os: 'Windows, Mac, iOS, Android', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'payid', 'osko', 'googlepay', 'applepay'], playLink: 'https://ace96au.net/RFAUSSIESPIN95', foundedYear: 2020, ownerCompany: 'ACE96AU Entertainment Pty Ltd', headquartersLocation: 'Sydney, Australia', monthlyPlayers: '210,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$28)' },
    ipay9: { name: 'iPay9', logo: '/casinos/ipay9.png', rating: 4.96, ratingCount: 188, tag: 'Top Rated', bonusLabel: 'Weekly Commission', bonus: 'Weekly Commission 7%', payoutTime: 'Instant - 2 hours', withdrawLimit: 'A$300,000', games: '4500++', rtp: '95.8%', os: 'Windows, Mac, Android, iOS', currencies: 'AUD', languages: 'English', payments: ['applepay', 'googlepay', 'visa', 'mastercard', 'payid', 'osko', 'crypto'], playLink: 'https://ipay9.co/RFAUSSIESPINAUD', foundedYear: 2021, ownerCompany: 'iPay9 Entertainment Pty Ltd', headquartersLocation: 'Melbourne, Australia', monthlyPlayers: '245,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$50)' },
    kingbet9: { name: 'Kingbet9', logo: '/casinos/kingbet9.png', rating: 4.94, ratingCount: 219, tag: "Editor's Choice", bonusLabel: 'Daily Bonus', bonus: 'Unlimited Random Bonus', payoutTime: '1-3 hours', withdrawLimit: 'A$200,000', games: '4000+', rtp: '95.9%', os: 'Android, iOS, Web', currencies: 'AUD', languages: 'English', payments: ['payid', 'visa', 'mastercard', 'ripple', 'usdt'], playLink: 'https://k9aus.net/RFAUSSIESPIN', foundedYear: 2020, ownerCompany: 'Kingbet9 Gaming Pty Ltd', headquartersLocation: 'Brisbane, Australia', monthlyPlayers: '230,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$28)' },
    bigpay77: { name: 'Bigpay77', logo: '/casinos/bigpay77.png', rating: 4.92, ratingCount: 167, tag: 'Most Popular', bonusLabel: 'Welcome Bonus', bonus: 'Welcome Bonus 80%', payoutTime: '1-6 hours', withdrawLimit: 'A$200,000', games: '5500+', rtp: '95.7%', os: 'Android, iOS, Web', currencies: 'AUD', languages: 'English', payments: ['payid', 'osko', 'speedpay', 'amopay', 'visa'], playLink: 'https://bigpay77aus.com/RFAUSSIESPINN', foundedYear: 2019, ownerCompany: 'Bigpay77 Entertainment Pty Ltd', headquartersLocation: 'Perth, Australia', monthlyPlayers: '220,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$28)' },
    me99: { name: 'Me99', logo: '/casinos/me99.png', rating: 4.90, ratingCount: 468, tag: "Player's Favorite", bonusLabel: 'Daily Rebate', bonus: '5% Rebate Bonus', payoutTime: '1-3 hours', withdrawLimit: 'A$100,000', games: '4500++', rtp: '96.1%', os: 'Android, iOS, Web', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'payid', 'speedpay', 'amopay'], playLink: 'https://me99office.co/RFAUSSIESPIN99', foundedYear: 2022, ownerCompany: 'Me99 Interactive Pty Ltd', headquartersLocation: 'Sydney, Australia', monthlyPlayers: '240,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$50)' },
    rolex9: { name: 'Rolex9', logo: '/casinos/rolex9.png', rating: 4.88, ratingCount: 276, tag: 'High Roller Pick', bonusLabel: 'Welcome Bonus', bonus: 'Slot Welcome Bonus 50%', payoutTime: 'Instant - 1 hour', withdrawLimit: 'A$100,000', games: '4500++', rtp: '95.6%', os: 'Android, iOS', currencies: 'AUD', languages: 'English', payments: ['payid', 'osko', 'visa', 'mastercard'], playLink: 'https://rolex9.net/RFAUSSIESPINJ', foundedYear: 2019, ownerCompany: 'Rolex9 Digital Pty Ltd', headquartersLocation: 'Melbourne, Australia', monthlyPlayers: '180,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$29)' },
    gucci9: { name: 'Gucci9', logo: '/casinos/gucci9.png', rating: 4.86, ratingCount: 399, tag: 'High Rebates', bonusLabel: 'Random Bonus', bonus: 'Every Deposit Random Bonus', payoutTime: '15 minutes - 3 hours', withdrawLimit: 'A$100,000', games: '4000+', rtp: '96.0%', os: 'Android, iOS, Windows', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'applepay', 'googlepay', 'speedpay'], playLink: 'https://guccii9au.net/RFAUSSIESPIN33', foundedYear: 2021, ownerCompany: 'Gucci9 Interactive Pty Ltd', headquartersLocation: 'Brisbane, Australia', monthlyPlayers: '205,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$50)' },
    mrbean9: { name: 'MrBean9', logo: '/casinos/mrbean9.png', rating: 4.84, ratingCount: 301, tag: 'Best for Pokies', bonusLabel: 'Daily Bonus', bonus: 'Daily First Deposit 30%', payoutTime: '1-6 hours', withdrawLimit: 'A$50,000 - A$100,000', games: '4000+', rtp: '95.7%', os: 'Windows, Mac, Android', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'googlepay', 'applepay', 'osko'], playLink: 'https://mrbean9au.com/RFAUSSIESPIN9', foundedYear: 2020, ownerCompany: 'MrBean9 Gaming Pty Ltd', headquartersLocation: 'Adelaide, Australia', monthlyPlayers: '190,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$28)' },
    pkm9: { name: 'PKM9', logo: '/casinos/pkm9.png', rating: 4.82, ratingCount: 365, tag: 'Fastest Payouts', bonusLabel: 'Daily Bonus', bonus: 'Daily Slot Bonus 80%', payoutTime: '1-6 hours', withdrawLimit: 'A$50,000 - A$100,000', games: '4500++', rtp: '96.2%', os: 'Windows, Mac, Android, iOS', currencies: 'AUD', languages: 'English', payments: ['payid', 'osko', 'visa', 'mastercard', 'btc', 'eth'], playLink: 'https://pokepokemon9.com/RFAUSSIESPIN98', foundedYear: 2022, ownerCompany: 'PKM9 Interactive Pty Ltd', headquartersLocation: 'Perth, Australia', monthlyPlayers: '175,000+', minDeposit: 'A$8', minWithdrawal: 'No Limit (min. A$28)' },
    winnie777: { name: 'Winnie777', logo: '/casinos/winnie777.png', rating: 4.80, ratingCount: 243, tag: 'Bonuses Packed', bonusLabel: 'Free Credit', bonus: 'Free Credit 365 Days', payoutTime: '15 minutes - 6 hours', withdrawLimit: 'A$50,000 - A$100,000', games: '5500+', rtp: '96.0%', os: 'Windows, Mac, Android, iOS', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'payid', 'speedpay', 'googlepay'], playLink: 'https://winnie777.vip/RFAUSSIESPIN96', foundedYear: 2019, ownerCompany: 'Winnie777 Digital Pty Ltd', headquartersLocation: 'Sydney, Australia', monthlyPlayers: '165,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$18)' },
    micky9: { name: 'Micky9', logo: '/casinos/micky9.png', rating: 4.78, ratingCount: 332, tag: 'Mobile Friendly', bonusLabel: 'Weekly Commission', bonus: 'Weekly Commission 5%', payoutTime: 'Instant', withdrawLimit: 'A$50,000 - A$100,000', games: '5500+', rtp: '95.8%', os: 'Android, iOS, Web', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'payid', 'amopay', 'speedpay'], playLink: 'https://micky13.asia/RFAUSSIESPIN97', foundedYear: 2021, ownerCompany: 'Micky9 Entertainment Pty Ltd', headquartersLocation: 'Adelaide, Australia', monthlyPlayers: '150,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$30)' },
    bybid9: { name: 'Bybid9', logo: '/casinos/bybid9.png', rating: 4.76, ratingCount: 421, tag: 'Premium Jackpot', bonusLabel: 'Daily Bonus', bonus: 'Daily Easy Step Free 100', payoutTime: 'Instant - 2 hours', withdrawLimit: 'A$20,000 per month', games: '5500+', rtp: '95.9%', os: 'Windows, Mac, Android, iOS', currencies: 'AUD', languages: 'English', payments: ['payid', 'osko', 'visa', 'mastercard', 'ripple', 'usdt'], playLink: 'https://bybid9.net/RFAUSSIESPINAU', foundedYear: 2020, ownerCompany: 'Bybid9 Gaming Pty Ltd', headquartersLocation: 'Melbourne, Australia', monthlyPlayers: '185,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$50)' },
    queen13: { name: 'Queen13', logo: '/casinos/queen13.png', rating: 4.75, ratingCount: 149, tag: 'Best for Pokies', bonusLabel: 'Welcome Bonus', bonus: 'Slot Welcome Bonus 50%', payoutTime: '15 minutes - 1 day', withdrawLimit: 'A$50,000 - A$100,000', games: '4000+', rtp: '95.6%', os: 'Windows, Android, iOS', currencies: 'AUD', languages: 'English', payments: ['visa', 'mastercard', 'payid', 'googlepay', 'applepay'], playLink: 'https://queen13au.com/RFAUSSIESPIN94', foundedYear: 2022, ownerCompany: 'Queen13 Interactive Pty Ltd', headquartersLocation: 'Brisbane, Australia', monthlyPlayers: '170,000+', minDeposit: 'A$10', minWithdrawal: 'No Limit (min. A$50)' },
  };

  const buildMinWithdrawalText = (withdrawLimit: string, minWithdrawal: string) => {
    return minWithdrawal.replace(/^No Limit/i, withdrawLimit);
  };

  const buildFullTemplateCasino = (slugValue: string, source: (typeof comingSoonCasinoMap)[string]): CasinoDetail => ({
    slug: slugValue,
    name: source.name,
    logo: source.logo,
    rating: source.rating,
    ratingCount: source.ratingCount,
    tag: source.tag,
    bonusLabel: source.bonusLabel,
    bonus: source.bonus,
    bonusDescription: `New players at ${source.name} can claim this welcome offer after registration and a qualifying deposit.`,
    payoutTime: source.payoutTime,
    withdrawLimit: source.withdrawLimit,
    games: source.games,
    rtp: source.rtp,
    os: source.os,
    currencies: source.currencies,
    languages: source.languages,
    payments: source.payments,
    playLink: source.playLink,
    pros: [
      'Fast account setup for Australian players',
      'Competitive welcome package and regular promos',
      'Mobile-optimized interface and gameplay',
      'Multiple payment methods with quick processing',
      'Responsive customer support channels',
      'Good variety of pokies and table games',
    ],
    cons: [
      'Verification may be required before first withdrawal',
      'Wagering rules apply to most bonuses',
      'Some promotions are time-limited',
      'Certain payment methods vary by region',
      'Live support wait times can peak at busy hours',
      'Not all games contribute equally to wagering',
    ],
    overview: `${source.name} has built a strong reputation among Australian players with a balanced mix of game variety, mobile performance, and reliable banking options. The platform is designed for easy navigation while still offering enough depth for players who want advanced features and regular promotions.`,
    gamesSection: `${source.name} offers a broad game mix that includes pokies, live dealer titles, and classic casino games. Players can browse high-volatility and medium-volatility options, with regular additions to keep the catalogue fresh.`,
    bonusesSection: `${source.name} runs an active promotions calendar that includes welcome offers, reload deals, and recurring campaign rewards. Always check terms and wagering details before claiming any offer.`,
    bonusCards: slugValue === 'ipay9'
      ? [
          {
            title: 'Total Bet Daily Rebate 0.9%',
            description: '0.9% daily rebate based on net total bet turnover for eligible iPay9 members.',
            image: '/bonus-promos/ipay9/total-bet-rebate.png',
          },
          {
            title: 'Daily Easy Step Free $100',
            description: 'Complete daily steps to claim Free Credit 100 under the iPay9 app campaign.',
            image: '/bonus-promos/ipay9/free-credit-100.png',
          },
          {
            title: 'Deposit Progressive S$9-S$19',
            description: 'Daily quest promo with progressive reward tracking for qualifying deposit activity.',
            image: '/bonus-promos/ipay9/daily-quest.png',
          },
          {
            title: 'Slot Welcome Bonus 50%',
            description: 'New member slot welcome campaign with 50% bonus and standard wagering rules.',
            image: '/bonus-promos/ipay9/welcome-bonus-50.png',
          },
        ]
      : slugValue === 'kingbet9'
        ? [
            {
              title: 'Slot Welcome Bonus 100%',
              description: 'Welcome slot campaign with 100% bonus value for eligible first-time members.',
              image: '/bonus-promos/kingbet9/slot-welcome-bonus-100.png',
            },
            {
              title: 'Slot Daily Bonus 39%',
              description: 'Daily slot bonus campaign at 39% with standard claim and wagering conditions.',
              image: '/bonus-promos/kingbet9/slot-daily-bonus-39.png',
            },
            {
              title: 'Daily Rollover Rebate 0.9%',
              description: 'Daily 0.9% rollover rebate based on qualified turnover activity.',
              image: '/bonus-promos/kingbet9/daily-rollover-rebate-09.png',
            },
            {
              title: 'Daily Easy Step Free AUD100',
              description: 'Complete the daily step task flow to unlock Free AUD100 campaign rewards.',
              image: '/bonus-promos/kingbet9/daily-easy-step-free-100.png',
            },
          ]
        : slugValue === 'rolex9'
          ? [
              {
                title: 'Total Bet Daily Rebate 0.9%',
                description: 'Daily rebate campaign at 0.9% based on qualified total bet turnover activity.',
                image: '/bonus-promos/rolex9/total-bet-daily-rebate-09.png',
              },
              {
                title: 'Free Credit 99.99',
                description: 'Claim Free Credit 99.99 through the Rolex9 promotion flow and campaign requirements.',
                image: '/bonus-promos/rolex9/free-credit-9999.png',
              },
              {
                title: 'Slot Daily Bonus 20%',
                description: 'Recurring daily slot bonus at 20% for eligible members under promo terms.',
                image: '/bonus-promos/rolex9/slot-daily-bonus-20.png',
              },
              {
                title: 'Weekly Rebate 7%',
                description: 'Weekly rebate offer at 7% for qualified betting turnover during campaign windows.',
                image: '/bonus-promos/rolex9/weekly-rebate-7.png',
              },
            ]
        : slugValue === 'mrbean9'
          ? [
              {
                title: 'Join WhatsApp 69.99 Bonus',
                description: 'Join the WhatsApp campaign to claim the 69.99 bonus reward for eligible members.',
                image: '/bonus-promos/mrbean9/join-whatsapp-bonus-6999.png',
              },
              {
                title: 'Daily Easy Step Free Credit 100',
                description: 'Complete daily easy-step tasks to unlock free credit 100 under campaign conditions.',
                image: '/bonus-promos/mrbean9/daily-easy-step-free-100.png',
              },
              {
                title: 'Special Welcome Bonus 200%',
                description: 'New member special welcome package with up to 200% bonus on qualifying deposits.',
                image: '/bonus-promos/mrbean9/special-welcome-bonus-200.png',
              },
              {
                title: 'Monday Deposit Bonus 60%',
                description: 'Boost your Monday deposit with a 60% bonus for qualified deposits during promo hours.',
                image: '/bonus-promos/mrbean9/monday-deposit-bonus-60.png',
              },
            ]
        : slugValue === 'pkm9'
          ? [
              {
                title: 'Daily Easy Step Free Credit 100',
                description: 'Complete daily step tasks to claim Free Credit 100 under PKM9 campaign rules.',
                image: '/bonus-promos/pkm9/daily-easy-step-free-credit-100.png',
              },
              {
                title: 'Every Deposit AUD10 Get Random Bonus',
                description: 'Make qualifying deposits and receive random bonus rewards based on promo conditions.',
                image: '/bonus-promos/pkm9/every-deposit-aud10-random-bonus.png',
              },
              {
                title: 'Rollover Rebate 0.9%',
                description: 'Rollover rebate campaign at 0.9% for eligible turnover and settled play activity.',
                image: '/bonus-promos/pkm9/rollover-rebate-09.png',
              },
              {
                title: '5% Weekly Commission',
                description: 'Weekly commission payout at 5% for qualified member activity during the promo window.',
                image: '/bonus-promos/pkm9/weekly-commission-5.png',
              },
            ]
        : slugValue === 'winnie777'
          ? [
              {
                title: 'Free Credit AUD103.33',
                description: 'Claim the Free Credit AUD103.33 campaign reward for eligible Winnie777 members.',
                image: '/bonus-promos/winnie777/free-credit-aud10333.png',
              },
              {
                title: 'Daily Rollover Rebate 0.9%',
                description: 'Daily rollover rebate offer at 0.9% based on qualified turnover activity.',
                image: '/bonus-promos/winnie777/daily-rollover-rebate-09.png',
              },
              {
                title: 'Birthday Bonus',
                description: 'Special birthday campaign reward available during eligible birthday periods.',
                image: '/bonus-promos/winnie777/birthday-bonus.png',
              },
              {
                title: 'Weekly Rebate 7%',
                description: 'Weekly rebate campaign at 7% for members who meet promotion requirements.',
                image: '/bonus-promos/winnie777/weekly-rebate-7.png',
              },
            ]
        : slugValue === 'micky9'
          ? [
              {
                title: 'Weekly Commission 5%',
                description: 'Weekly commission campaign at 5% for qualified member turnover and settled activity.',
                image: '/bonus-promos/micky9/weekly-commission-5.png',
              },
              {
                title: 'Free Credit 103.33 AUD',
                description: 'Claim free credit 103.33 AUD through eligible campaign tasks and account criteria.',
                image: '/bonus-promos/micky9/free-credit-10333-aud.png',
              },
              {
                title: 'Slot Welcome Bonus 50%',
                description: 'New member slot welcome campaign with 50% bonus under standard wagering rules.',
                image: '/bonus-promos/micky9/slot-welcome-bonus-50.png',
              },
              {
                title: 'Daily Deposit Progressive Bonus $61-$100',
                description: 'Daily deposit progressive campaign with reward bands from $61 to $100 for eligible deposits.',
                image: '/bonus-promos/micky9/daily-deposit-progressive-bonus-61-100.png',
              },
            ]
        : slugValue === 'ace96au'
          ? [
              {
                title: 'Weekly Commission 6%',
                description: 'Weekly commission campaign at 6% for qualified ACE96AU member turnover.',
                image: '/bonus-promos/ace96au/weekly-commission-6.png',
              },
              {
                title: 'Weekly Rebate 5%',
                description: 'Weekly rebate offer at 5% for eligible players under promotion rules.',
                image: '/bonus-promos/ace96au/weekly-rebate-5.png',
              },
              {
                title: 'Welcome Bonus 50%',
                description: 'New member welcome bonus at 50% with standard claim conditions.',
                image: '/bonus-promos/ace96au/welcome-bonus-50.png',
              },
              {
                title: 'Daily Rollover Rebate 1%',
                description: 'Daily rollover rebate 1% promotion based on qualified betting activity.',
                image: '/bonus-promos/ace96au/daily-rollover-rebate-1.png',
              },
            ]
        : slugValue === 'bigpay77'
          ? [
              {
                title: 'Weekend Deposit 30%',
                description: 'Weekend deposit bonus campaign at 30% for qualifying Bigpay77 members.',
                image: '/bonus-promos/bigpay77/weekend-deposit-30.png',
              },
              {
                title: 'Daily Easy Step Free $100',
                description: 'Daily easy-step campaign reward with free 100 credit for eligible tasks.',
                image: '/bonus-promos/bigpay77/daily-easy-step-free-100.png',
              },
              {
                title: 'Weekly Commission 5%',
                description: 'Weekly commission promo with 5% payout under campaign requirements.',
                image: '/bonus-promos/bigpay77/weekly-commission-5.png',
              },
              {
                title: 'Daily Task Free up to S$17',
                description: 'Daily task progression reward with free claim values up to S$17.',
                image: '/bonus-promos/bigpay77/daily-task-17.png',
              },
            ]
        : slugValue === 'me99'
          ? [
              {
                title: 'Daily Easy Step Free 100',
                description: 'Daily easy-step campaign with free 100 reward for qualified Me99 members.',
                image: '/bonus-promos/me99/daily-easy-step-free-100.png',
              },
              {
                title: 'Slot Welcome Bonus 50%',
                description: 'New player slot welcome offer with 50% bonus under standard promotion rules.',
                image: '/bonus-promos/me99/slot-welcome-bonus-50.png',
              },
              {
                title: 'Join WhatsApp Bonus 39.99',
                description: 'Join campaign channel flow and claim the WhatsApp bonus offer of 39.99.',
                image: '/bonus-promos/me99/join-whatsapp-bonus-3999.png',
              },
              {
                title: '5% Weekly Commission',
                description: 'Weekly commission rebate at 5% for eligible member activity.',
                image: '/bonus-promos/me99/weekly-commission-5.png',
              },
            ]
        : slugValue === 'bybid9'
          ? [
              {
                title: 'Daily Total Bet 0.9%',
                description: 'Daily total-bet rebate campaign at 0.9% for eligible Bybid9 members.',
                image: '/bonus-promos/bybid9/daily-total-bet-09.png',
              },
              {
                title: 'Daily Easy Step Free 100',
                description: 'Daily task flow with free 100 reward for qualified members.',
                image: '/bonus-promos/bybid9/daily-easy-step-free-100.png',
              },
              {
                title: 'WhatsApp Welcome Reward AUD39.99',
                description: 'Join the WhatsApp campaign and claim reward value up to AUD39.99.',
                image: '/bonus-promos/bybid9/whatsapp-welcome-reward-3999.png',
              },
              {
                title: 'Premium Jackpot $5999',
                description: 'Premium jackpot campaign featuring prize value up to $5999.',
                image: '/bonus-promos/bybid9/premium-jackpot-5999.png',
              },
            ]
        : slugValue === 'gucci9'
          ? [
              {
                title: 'Weekly Commission 5%',
                description: 'Weekly commission campaign at 5% for eligible Gucci9 member activity.',
                image: '/bonus-promos/gucci9/weekly-commission-5.png',
              },
              {
                title: 'Daily Easy Step Free A$100',
                description: 'Daily easy-step reward campaign with free 100 bonus claim flow.',
                image: '/bonus-promos/gucci9/daily-easy-step-free-100.png',
              },
              {
                title: 'TPA Telegram Task Free AUD',
                description: 'Telegram task participation campaign with free TPA bonus rewards.',
                image: '/bonus-promos/gucci9/tpa-telegram-task-free.png',
              },
              {
                title: 'Daily Rollover Rebate 0.3%',
                description: 'Daily rollover rebate at 0.3% based on qualified turnover conditions.',
                image: '/bonus-promos/gucci9/daily-rollover-rebate-03.png',
              },
            ]
        : slugValue === 'queen13'
          ? [
              {
                title: 'Weekly Deposit 100 Times $163.13',
                description: 'Weekly deposit campaign reward with target value up to AUD163.13.',
                image: '/bonus-promos/queen13/weekly-deposit-16313.png',
              },
              {
                title: 'Daily Deposit Progressive Bonus $61-$100',
                description: 'Daily progressive bonus range from $61 to $100 for qualifying deposits.',
                image: '/bonus-promos/queen13/daily-deposit-progressive-61-100.png',
              },
              {
                title: 'New Member Free $113',
                description: 'New member campaign with free reward value up to AUD113.',
                image: '/bonus-promos/queen13/new-member-free-113.png',
              },
              {
                title: 'Easy Win Games',
                description: 'Featured Easy Win Games campaign with slots and mini-game activities.',
                image: '/bonus-promos/queen13/easy-win-games.png',
              },
            ]
        : [
          { title: `Welcome Package at ${source.name}`, description: 'Primary signup package with balanced wagering and practical claim conditions.' },
          { title: `Reload Offer`, description: 'Recurring reload promo for existing players on selected days.' },
          { title: `Weekend Boost`, description: 'Weekend-only reward campaign for qualifying deposits.' },
          { title: `VIP Reward Track`, description: 'Ongoing loyalty-oriented rewards for regular activity.' },
        ],
    paymentsSection: `${source.name} supports a modern set of payment channels for both deposits and withdrawals. Processing speed depends on the selected method, with instant methods generally providing the fastest turnaround.`,
    supportSection: `${source.name} provides customer support through live chat and email channels. Support quality is strongest for account, verification, and payment-related requests.`,
    hitsPercent: getHitsPercentBySlug(slugValue),
    faqs: [
      { question: `Is ${source.name} suitable for Australian players?`, answer: `${source.name} is commonly used by Australian players and supports AUD-focused workflows including popular local-friendly payment options.` },
      { question: `How fast are withdrawals at ${source.name}?`, answer: `Withdrawal speed at ${source.name} depends on method and verification status. E-wallet and instant banking options are usually the quickest.` },
      { question: `What is the welcome bonus at ${source.name}?`, answer: `The current welcome offer is: ${source.bonus}. Terms and wagering requirements apply.` },
      { question: `Does ${source.name} work well on mobile?`, answer: `Yes, ${source.name} is optimized for mobile browsers and offers responsive gameplay across most modern devices.` },
      { question: `Which payment methods are available at ${source.name}?`, answer: `${source.name} supports multiple methods including ${source.payments.join(', ')}.` },
      { question: `Can I use bonus codes at ${source.name}?`, answer: `Some campaigns at ${source.name} require a promo code while others are applied automatically at cashier.` },
      { question: `Is account verification mandatory at ${source.name}?`, answer: `Like most casinos, ${source.name} may request KYC verification before approving first withdrawals.` },
      { question: `How can I contact ${source.name} support?`, answer: `You can contact ${source.name} support via live chat and email for account or payment assistance.` },
    ],
    reviews: generateTemplateReviews(slugValue, source.name, source.rating),
    foundedYear: source.foundedYear,
    ownerCompany: source.ownerCompany,
    headquartersLocation: source.headquartersLocation,
    licenses: [
      { authority: 'Curacao Gaming Authority (CGA)', jurisdiction: 'Curaçao', licenseNumber: 'CGA/2026/023/117' },
      { authority: 'PAGCOR', jurisdiction: 'Pagcor', licenseNumber: 'OSP17-0001-3-A' },
    ],
    gameProviders: standardGameProviders,
    monthlyPlayers: source.monthlyPlayers,
    minDeposit: source.minDeposit,
    minWithdrawal: buildMinWithdrawalText(source.withdrawLimit, source.minWithdrawal),
    liveChat: true,
    emailSupport: true,
    phoneSupport: false,
    telegramSupport: true,
    whatsappSupport: true,
    trustpilotLink: getTrustpilotLinkBySlug(slugValue),
  });

  const casino = slug
    ? (casinoDetails[slug] ?? (comingSoonCasinoMap[slug] ? buildFullTemplateCasino(slug, comingSoonCasinoMap[slug]) : null))
    : null;

  const handleBackToCasinos = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate('/');
  };

  if (!casino) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Casino Not Found</h1>
          <Link to="/" className="text-teal-600 hover:text-teal-700 font-medium">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) stars.push(<i key={`full-${i}`} className="fa fa-star text-yellow-400"></i>);
    if (hasHalfStar) stars.push(<i key="half" className="fa fa-star-half-alt text-yellow-400"></i>);
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) stars.push(<i key={`empty-${i}`} className="far fa-star text-yellow-400"></i>);
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white py-6 md:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-5">
            <button
              type="button"
              onClick={handleBackToCasinos}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              <i className="fa fa-arrow-left"></i>
              Back to all casinos
            </button>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <div className="flex items-center justify-center flex-shrink-0 md:w-40 md:h-40 md:bg-white md:rounded-lg md:p-4 md:shadow-lg">
              <img
                src={casino.logo}
                alt={casino.name}
                className="h-14 w-auto object-contain md:w-full md:h-full md:max-w-full md:max-h-full"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3 mb-3">
                {casino.tag && (
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">{casino.tag}</span>
                )}
              </div>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
                <div className="flex gap-1">{renderStars(casino.rating)}</div>
                <span className="text-lg font-bold">{casino.rating}</span>
                <span className="text-teal-200">({casino.ratingCount} reviews)</span>
              </div>
              <a
                href={casino.playLink}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg transition-colors shadow-lg whitespace-nowrap"
              >
                PLAY NOW
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Key Info Bar */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-sm">
            <div><div className="text-gray-500 text-xs mb-1">Payout Time</div><div className="font-bold text-gray-900">{casino.payoutTime}</div></div>
            <div><div className="text-gray-500 text-xs mb-1">Withdraw Limit</div><div className="font-bold text-gray-900">{casino.withdrawLimit}</div></div>
            <div><div className="text-gray-500 text-xs mb-1">Games</div><div className="font-bold text-gray-900">{casino.games}</div></div>
            <div><div className="text-gray-500 text-xs mb-1">RTP</div><div className="font-bold text-gray-900">{casino.rtp}</div></div>
            <div><div className="text-gray-500 text-xs mb-1">Supported OS</div><div className="font-bold text-gray-900">{casino.os}</div></div>
            <div><div className="text-gray-500 text-xs mb-1">Currencies</div><div className="font-bold text-gray-900">{casino.currencies}</div></div>
            <div><div className="text-gray-500 text-xs mb-1">Languages</div><div className="font-bold text-gray-900">{casino.languages}</div></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            {/* Welcome Bonus */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">{casino.bonusLabel ?? 'Welcome Bonus'}</h3>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-500 rounded-lg p-4 mb-4">
                <div className="text-green-700 font-bold text-lg mb-2">{casino.bonus}</div>
              </div>
              <p className="text-sm text-gray-600 mb-4">{casino.bonusDescription}</p>
              <a
                href={casino.playLink}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="block w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold text-center rounded-lg transition-colors whitespace-nowrap"
              >
                CLAIM BONUS
              </a>
            </div>

            {/* Payment Methods */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Methods</h3>
              <div className="grid grid-cols-4 gap-4">
                {reviewPaymentMethodIcons.map((payment) => (
                  <img
                    key={payment.key}
                    src={payment.src}
                    alt={payment.label}
                    className="w-full h-12 object-contain"
                  />
                ))}
              </div>
            </div>

            {/* Hits & Misses */}
            <HitsMissesSection hits={casino.hitsPercent} pros={casino.pros} cons={casino.cons} />

            {/* Review Sidebar — Top Picks & Latest Bonuses */}
            <ReviewSidebar currentSlug={casino.slug} />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 space-y-6">

            {/* Overview — now uses the enriched OverviewSection component */}
            <OverviewSection casino={casino} />

            {/* Games */}
            <div id="section-games" className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-gamepad-line text-teal-600"></i>
                Games
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
              <p className="text-gray-700 leading-relaxed">{casino.gamesSection}</p>
            </div>

            {/* Bonuses */}
            <div id="section-bonuses" className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-gift-line text-teal-600"></i>
                Bonuses &amp; Promotions
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
              <BonusesContent
                casinoName={casino.name}
                casinoLogo={casino.logo}
                bonusesSection={casino.bonusesSection}
                bonusCards={casino.bonusCards}
                playLink={casino.playLink}
              />
            </div>

            {/* Payments */}
            <div id="section-payments" className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-bank-card-line text-teal-600"></i>
                Payment Methods
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
              <p className="text-gray-700 leading-relaxed mb-6">{casino.paymentsSection}</p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <i className="fa fa-exclamation-triangle text-amber-500 text-xl flex-shrink-0 mt-1"></i>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-2">Responsible Gambling</h4>
                    <p className="text-sm text-amber-800">
                      Please gamble responsibly. Only bet what you can afford to lose. Gambling should be entertaining, not a way to make money. If you feel you may have a gambling problem, seek help immediately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 leading-relaxed">
                <p className="mb-2"><strong>Affiliate Disclosure:</strong> This review contains affiliate links. If you sign up through our links, we may receive a commission at no extra cost to you.</p>
                <p><strong>Disclaimer:</strong> All information is accurate at the time of publication. Terms and conditions apply to all bonuses and promotions.</p>
              </div>
            </div>

            {/* Support */}
            <div id="section-support" className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-customer-service-2-line text-teal-600"></i>
                Customer Support
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
              <p className="text-gray-700 leading-relaxed">{casino.supportSection}</p>
            </div>

            {/* FAQ */}
            <div id="section-faq" className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-question-answer-line text-teal-600"></i>
                Frequently Asked Questions
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
              <FaqSection faqs={casino.faqs} />
            </div>

            {/* Reviews Section */}
            <div id="section-reviews" className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <i className="ri-star-line text-teal-600"></i>
                Player Reviews
              </h2>
              <div className="w-12 h-1 bg-teal-500 rounded mb-5"></div>
              <ReviewsSection
                reviews={casino.reviews}
                trustpilotLink={casino.trustpilotLink ?? getTrustpilotLinkBySlug(casino.slug)}
              />
            </div>

            {/* Back to Casinos */}
            <div className="text-center pb-4">
              <button
                type="button"
                onClick={handleBackToCasinos}
                className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium cursor-pointer"
              >
                <i className="fa fa-arrow-left"></i>
                Back to all casinos
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

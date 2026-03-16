import { MouseEvent } from 'react';
import Sidebar from './Sidebar';

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

export default function EditorialSection() {
  const getRandomRegisterLink = () => {
    const randomIndex = Math.floor(Math.random() * registerLinks.length);
    return registerLinks[randomIndex];
  };

  const handleRandomRegisterClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(getRandomRegisterLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-white py-8 md:py-10 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* ── Left: Main Article Content ── */}
          <div className="w-full flex-1 min-w-0">

            {/* Intro guides */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                { href: '/casino-guides/online-pokies', icon: 'ri-gamepad-line', label: 'Online Casino Bonus Worth Playing' },
                { href: '/casino-guides/free-pokies', icon: 'ri-gift-line', label: 'Free Pokies No Download Required' },
                { href: '/casino-guides/real-money', icon: 'ri-money-dollar-circle-line', label: 'Real Money Pokies for Australians' },
              ].map((guide) => (
                <a
                  key={guide.href}
                  href={guide.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleRandomRegisterClick}
                  className="flex w-full min-w-0 sm:flex-col items-center sm:text-center gap-3 sm:gap-0 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 flex items-center justify-center bg-teal-50 rounded-full flex-shrink-0 sm:mb-3">
                    <i className={`${guide.icon} text-teal-600 text-xl`}></i>
                  </div>
                  <div className="min-w-0 font-semibold text-gray-800 group-hover:text-teal-600 text-sm leading-snug break-words">
                    {guide.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Article content */}
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Instant Casino Ratings — Online Casinos Worth Playing</h2>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Our team of experts has reviewed hundreds of online casinos available to Australian players. We evaluate each casino based on a strict set of criteria including licensing, game variety, bonus fairness, payment speed, and customer support quality. Only the best-performing casinos make it onto our recommended list.
            </p>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              When choosing an online casino, Australian players should look for sites that hold valid gaming licences from reputable authorities such as PAGCOR, Curacao Gaming Authority (CGA), and the Trusted Pokies Australia (TPA). These licences ensure the casino operates fairly and transparently.
            </p>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">Best Online Casino Bonus — Online Casinos Worth Playing</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Casino bonuses are one of the most important factors for Australian players. A good welcome bonus can significantly boost your starting bankroll and give you more chances to win. However, it's crucial to read the terms and conditions carefully, paying particular attention to wagering requirements, game restrictions, and time limits.
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-2 list-none">
              {[
                { label: 'Welcome Bonuses', desc: 'Match bonuses on your first deposit, often combined with free spins' },
                { label: 'No Deposit Bonuses', desc: 'Free cash or spins awarded just for registering, no deposit needed' },
                { label: 'Free Spins', desc: 'Spins on selected pokies, great for trying new games risk-free' },
                { label: 'Reload Bonuses', desc: 'Ongoing deposit bonuses for existing players' },
                { label: 'Cashback Offers', desc: 'A percentage of your losses returned, reducing overall risk' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <i className="ri-checkbox-circle-line text-teal-500 mt-0.5 flex-shrink-0"></i>
                  <span><strong>{item.label}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">Real Online Pokies That Pay Real Money with Impressive Guide</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Online pokies (slot machines) are by far the most popular casino games among Australian players. Modern video pokies offer stunning graphics, immersive themes, and exciting bonus features like free spins rounds, multipliers, cascading reels, and progressive jackpots. The best online pokies come from top software providers such as BOOONGO, JILI, VPOWER, ADVANT PLAY, PRAGMATIC PLAY, SLOTMANIA, CQ9, IMPERIUM GAMES, PEGASUS, ACE333, and JOKER.
            </p>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              When selecting pokies to play for real money, pay attention to the Return to Player (RTP) percentage. Games with an RTP of 96% or higher are generally considered good value. Also consider the volatility — low volatility pokies pay out smaller amounts more frequently, while high volatility pokies offer larger but less frequent wins.
            </p>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">Real Online Pokies in 2026: What You Can Expect from Experts</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              The online pokies landscape in Australia continues to evolve rapidly. In 2026, players can expect even more innovative game mechanics, including Megaways engines with hundreds of thousands of ways to win, cluster pays systems, and buy-bonus features that let you jump straight into the action. Virtual reality pokies are also beginning to emerge, offering a truly immersive gaming experience.
            </p>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
              <h4 className="font-bold text-teal-800 mb-2 text-sm">
                <a href="/responsible-gambling" className="hover:underline">
                  <i className="ri-shield-check-line mr-1"></i>
                  RTP and Volatility: Safety and Fairness
                </a>
              </h4>
              <p className="text-xs text-teal-700 leading-relaxed">
                All reputable online casinos use certified Random Number Generators (RNGs) to ensure fair outcomes. Look for casinos audited by independent testing agencies like eCOGRA, iTech Labs, or GLI. These certifications guarantee that the games are truly random and the advertised RTPs are accurate.
              </p>
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">Secure Payment Methods for Pokies Online from Casino to Crypto</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Australian online casino players have access to a wide range of secure payment methods. Traditional options like Visa, Mastercard, and bank transfers remain popular, but e-wallets offer faster processing times and enhanced privacy. PayID has become increasingly popular in Australia for instant AUD deposits.
            </p>

            {/* Responsive table */}
            <div className="w-full max-w-full overflow-x-auto mb-6">
              <table className="w-full text-xs border-collapse min-w-[400px]">
                <thead>
                  <tr className="bg-gray-100">
                    {['Method', 'Deposit', 'Withdrawal', 'Speed', 'Fees'].map((h) => (
                      <th key={h} className="text-left px-3 py-2 font-semibold text-gray-700 border border-gray-200">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { method: "Visa", deposit: "✓", withdrawal: "✓", speed: "Instant - 1 day", fees: "Free" },
                    { method: "Mastercard", deposit: "✓", withdrawal: "✓", speed: "Instant - 1 day", fees: "Free" },
                    { method: "Google Pay", deposit: "✓", withdrawal: "✓", speed: "Instant", fees: "Free" },
                    { method: "Apple Pay", deposit: "✓", withdrawal: "✓", speed: "Instant", fees: "Free" },
                    { method: "Amopay", deposit: "✓", withdrawal: "✓", speed: "Instant", fees: "Free" },
                    { method: "Speedpay", deposit: "✓", withdrawal: "✓", speed: "Instant", fees: "Free" },
                    { method: "Osko", deposit: "✓", withdrawal: "✓", speed: "Instant", fees: "Free" },
                    { method: "PayID", deposit: "✓", withdrawal: "✓", speed: "Instant", fees: "Free" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-3 py-2 border border-gray-200 font-medium text-gray-800">{row.method}</td>
                      <td className="px-3 py-2 border border-gray-200 text-center">{row.deposit}</td>
                      <td className="px-3 py-2 border border-gray-200 text-center">{row.withdrawal}</td>
                      <td className="px-3 py-2 border border-gray-200">{row.speed}</td>
                      <td className="px-3 py-2 border border-gray-200">{row.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">Player's Guide to Choosing the Best Online Pokies Casino in Australia</h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              Choosing the right online casino can be overwhelming given the sheer number of options available. Our experts have compiled a comprehensive checklist to help Australian players make an informed decision:
            </p>
            <ul className="text-sm text-gray-600 mb-6 space-y-2 list-none">
              {[
                "Valid gaming licence from a reputable authority",
                "Wide selection of pokies from top software providers",
                "Generous and fair bonus offers with reasonable wagering requirements",
                "Fast and secure payment methods including AUD support",
                "Responsive 24/7 customer support via live chat and email",
                "Mobile-compatible platform for gaming on the go",
                "Responsible gambling tools including deposit limits and self-exclusion",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <i className="ri-arrow-right-s-line text-teal-500 mt-0.5 flex-shrink-0"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3">What Our Casino Reviews Demonstrate</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Every casino review on Aussie Spin is written by experienced gambling experts who have personally tested each platform. Our review process involves creating real accounts, making actual deposits, testing the games, claiming bonuses, and attempting withdrawals. We document every step of the process to give you an honest, unbiased assessment.
            </p>

            {/* FAQ */}
            <div className="space-y-3 mb-6">
              {[
                { q: "Is online gambling legal in Australia?", a: "Online gambling is regulated in Australia under the Interactive Gambling Act 2001. While offshore casinos are technically prohibited from offering services to Australians, many players access international sites. Always gamble responsibly and be aware of the legal landscape in your jurisdiction." },
                { q: "What is the best online casino for Australians?", a: "The best online casino depends on your personal preferences. Our top-rated casinos offer a combination of generous bonuses, a wide game selection, fast payouts, and excellent customer support. Check our full casino reviews for detailed comparisons." },
                { q: "Can I play pokies for free?", a: "Yes! Aussie Spin offers free demo versions of over 1,000 pokies. You can play without registering or depositing any money. This is a great way to try new games and develop strategies before playing for real money." },
                { q: "How do I claim a no deposit bonus?", a: "No deposit bonuses are usually awarded automatically upon registration, or you may need to enter a bonus code. Check the specific terms for each offer on our bonus pages. Remember to read the wagering requirements before claiming." },
              ].map((faq, i) => (
                <details key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                  <summary className="px-4 py-3 text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-50 flex items-center justify-between list-none">
                    <span className="pr-4">{faq.q}</span>
                    <i className="ri-arrow-down-s-line text-gray-400 flex-shrink-0"></i>
                  </summary>
                  <div className="px-4 py-3 text-sm text-gray-600 bg-gray-50 border-t border-gray-200 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

          </div>

          {/* ── Right: Sidebar ── */}
          <div className="w-full lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-4">
              <Sidebar />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

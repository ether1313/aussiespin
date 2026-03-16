import { MouseEvent } from 'react';
import { Link } from 'react-router-dom';

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

export default function Footer() {
  const handleRandomRegisterClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * registerLinks.length);
    window.open(registerLinks[randomIndex], '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-10 md:py-12">

        {/* Main link columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 border-b border-teal-500 pb-2">High Rated Sites</h3>
            <ul className="space-y-2">
              {[
                { label: "iPay9 Casino", href: "https://ipay9.co/RFAUSSIESPINAUD" },
                { label: "Kingbet9 Casino", href: "https://k9aus.net/RFAUSSIESPIN" },
                { label: "Bigpay77 Casino", href: "https://bigpay77aus.com/RFAUSSIESPINN" },
                { label: "Me99 Casino", href: "https://me99office.co/RFAUSSIESPIN99" },
                { label: "Rolex9 Casino", href: "https://rolex9.net/RFAUSSIESPINJ" },
                { label: "Gucci9 Casino", href: "https://guccii9au.net/RFAUSSIESPIN33" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal-400 transition-colors text-xs md:text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 border-b border-teal-500 pb-2">Best Pokies Choice</h3>
            <ul className="space-y-2">
              {["Magic Apple", "Gates of Olympus", "Hot Chilli", "Roman Arena", "Triple Supreme Olympus"].map((name) => (
                <li key={name}>
                  <a
                    href={registerLinks[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleRandomRegisterClick}
                    className="text-gray-300 hover:text-teal-400 transition-colors text-xs md:text-sm"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 border-b border-teal-500 pb-2">Bonus Offers</h3>
            <ul className="space-y-2">
              {[
                { label: "PKM9 Casino No Deposit", href: "https://pokemon9aus.co/RFAUSSIESPIN98" },
                { label: "MrBean9 Casino No Deposit", href: "https://mrbean9au.com/RFAUSSIESPIN9" },
                { label: "Winnie777 Casino No Deposit", href: "https://winnie777.vip/RFAUSSIESPIN96" },
                { label: "Micky9 Casino No Deposit", href: "https://micky13.asia/RFAUSSIESPIN97" },
                { label: "Bybid9 Casino Bonus Codes", href: "https://bybid9.net/RFAUSSIESPINAU" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal-400 transition-colors text-xs md:text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm md:text-base font-semibold mb-3 border-b border-teal-500 pb-2">Strategy Guides</h3>
            <ul className="space-y-2">
              {[
                { label: "Roulette Strategy", href: "/roulette-strategy" },
                { label: "Blackjack Strategy", href: "/blackjack-strategy" },
                { label: "Baccarat Strategy", href: "/baccarat-strategy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-teal-400 transition-colors text-xs md:text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-gray-400 mb-6 pt-6 border-t border-gray-700 leading-relaxed">
          Aussie Spin does not offer any gambling services itself. The site provides reviews and information on gambling services. Our website contains affiliate links. We may receive a commission at no extra cost to you. The affiliate income helps support the site and allows us to continue offering high-quality content. Our content is intended solely for individuals aged 18+. Please gamble responsibly.
        </div>

        {/* Logo + Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-6 border-t border-gray-700">

          <div className="flex flex-wrap items-center justify-center gap-4">
            <img src="https://auspokies.net/images/trust/18plus.svg" alt="18+" className="h-8 w-auto" />
            <img src="https://auspokies.net/images/trust/gamblinghelponline.svg" alt="Gambling Help Online" className="h-5 w-auto" />
            <img src="https://auspokies.net/images/trust/ecogra.svg" alt="Ecogra" className="h-5 w-auto" />
            <img src="https://auspokies.net/images/trust/gambleaware.svg" alt="GambleAware" className="h-7 w-auto" />
            <img src="https://auspokies.net/images/trust/gamcare.svg" alt="GamCare" className="h-7 w-auto" />
          </div>
        </div>

      </div>
    </footer>
  );
}

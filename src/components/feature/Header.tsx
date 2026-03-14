import { useState } from 'react';
import { Link } from 'react-router-dom';

const registerLinks = [
  "https://ipay9au.com/register/SMSRegister",
  "https://bigpay77au.com/register/SMSRegister",
  "https://king9aus.com/register/SMSRegister",
  "https://mrbean9.com/register/SMSRegister",
  "https://ace96auau.net/register",
  "https://me99aud.com/register/SMSRegister",
  "https://pokemon9office.net/register/SMSRegister",
  "https://gucci9aud.vip/register/SMSRegister",
  "https://bybid9.com/register/SMSRegister",
  "https://queen13au.com/register/SMSRegister",
  "https://rolex9au.com/register/SMSRegister",
  "https://micky9.vip/register/SMSRegister",
  "https://winnie777.net/register/SMSRegister",
];

const navItems = [
  { label: 'Free Pokies', href: '/#pokies-section' },
  { label: 'Online Casino', href: '/#casino-list-section' },
  { label: 'Bonus Promo', href: '/#exclusive-aussie-spin-promos' },
  { label: 'Free Spins', href: '/', randomRegister: true },
  { label: 'Providers', href: '/providers' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getRandomRegisterLink = () => {
    const randomIndex = Math.floor(Math.random() * registerLinks.length);
    return registerLinks[randomIndex];
  };

  const handleOpenRandomRegister = () => {
    window.open(getRandomRegisterLink(), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top responsible gambling bar */}
      <div className="bg-gray-900 text-gray-300 text-xs py-1 px-4 text-center">
        <span>18+ | Please gamble responsibly. </span>
        <a href="https://responsiblegambling.org/" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline whitespace-nowrap">Responsible Gambling</a>
        <span> | </span>
        <a href="https://www.gamblinghelponline.org.au" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline whitespace-nowrap">Gambling Help Online</a>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href='/' className="flex items-center flex-shrink-0 mr-4">
            <img
              src="/logo.png"
              alt="Aussie Spin"
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center flex-col overflow-x-auto">
            <ul className="flex items-center gap-0">
              {navItems.map((item) => (
                <li key={item.label} className="relative group">
                  {item.randomRegister ? (
                    <a
                      href={registerLinks[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-4 text-gray-700 hover:text-teal-600 text-sm font-medium whitespace-nowrap transition-colors"
                      onClick={(event) => {
                        event.preventDefault();
                        handleOpenRandomRegister();
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 px-3 py-4 text-gray-700 hover:text-teal-600 text-sm font-medium whitespace-nowrap transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={registerLinks[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold transition-colors whitespace-nowrap ml-3"
            onClick={(event) => {
              event.preventDefault();
              handleOpenRandomRegister();
            }}
          >
            ➜] Login
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-gray-900">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white p-1 cursor-pointer"
            aria-label="Close menu"
          >
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>

        {/* Responsible gambling strip */}
        <div className="bg-teal-700 text-white text-xs px-5 py-2 text-center">
          18+ | Gamble Responsibly
        </div>

        {/* Nav Links */}
        <ul className="py-2 overflow-y-auto">
          {navItems.map((item) => (
            <li key={item.label}>
              {item.randomRegister ? (
                <a
                  href={registerLinks[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium border-b border-gray-100 transition-colors"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsMenuOpen(false);
                    handleOpenRandomRegister();
                  }}
                >
                  <span>{item.label}</span>
                  <i className="fa fa-angle-right text-gray-400 text-xs"></i>
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="flex items-center justify-between px-5 py-3.5 text-sm text-gray-700 hover:text-teal-600 hover:bg-teal-50 font-medium border-b border-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <i className="fa fa-angle-right text-gray-400 text-xs"></i>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Bottom links */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center">
            <a
              href={registerLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center px-5 py-3 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-base font-bold transition-all duration-200 animate-pulse shadow-lg shadow-teal-200"
              onClick={(event) => {
                event.preventDefault();
                handleOpenRandomRegister();
              }}
            >
              ➜] Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

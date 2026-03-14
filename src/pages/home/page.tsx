import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import CasinoList from './components/CasinoList';
import BonusSection from './components/BonusSection';
import PokiesSection from './components/PokiesSection';
import EditorialSection from './components/EditorialSection';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection onSearch={setSearchQuery} />
        <CasinoList searchQuery={searchQuery} />
        <BonusSection />
        <PokiesSection />
        <EditorialSection />
      </main>
      <Footer />
    </div>
  );
}

import { useEffect, useState } from 'react';
import Hero from './Hero';
import MobileHero from './MobileHero';

const Home = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(max-width: 769px)');

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    // Initial check
    handleResize();

    // Event listener for media query changes
    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-l from-slate-50 via-gray-50 to-gray-100">
      {isMobile ? <MobileHero /> : <Hero />}
    </div>
  );
};

export default Home;

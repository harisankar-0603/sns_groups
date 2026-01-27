import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    // Update page title based on route
    const titles: { [key: string]: string } = {
      '/': 'SNS: Pioneering in Technology, Education, Innovation, Startups, Investments',
      '/about': 'About Us - SNS Groups',
    };
    
    document.title = titles[location.pathname] || 'SNS Groups';
  }, [location]);

  return null;
};

export default SEO;

import React from 'react';
import { CardModule } from './modules/cardModule/CardModule';
import HeroSection from './modules/heroSection/HeroSection';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CardModule />
    </div>
  );
};

export default LandingPage;

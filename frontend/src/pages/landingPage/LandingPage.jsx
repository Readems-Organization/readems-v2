import React from 'react';
import { CardModule } from './modules/cardModule/CardModule';
import HeroSection from './modules/heroSection/HeroSection';
import { PopularReads } from './modules/popularReads/PopularReads';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CardModule />
      <PopularReads />
    </div>
  );
};

export default LandingPage;

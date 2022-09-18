import React from 'react';
import { CardModule } from './modules/cardModule/CardModule';
import { Discover } from './modules/discoverModules/Discover';
import HeroSection from './modules/heroSection/HeroSection';
import { PopularReads } from './modules/popularReads/PopularReads';
import { Subscribe } from './modules/subscribeModule/Subscribe';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CardModule />
      <PopularReads />
      <Discover />
      <Subscribe />
    </div>
  );
};

export default LandingPage;

import React from 'react';
import { CardModule } from './modules/cardModule/CardModule';
// import { Discover } from './modules/discoverModules/Discover';
import HeroSection from './modules/heroSection/HeroSection';
import { PopularReads } from './modules/popularReads/PopularReads';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <CardModule />
      <PopularReads />
      {/** <Discover />*/}
    </div>
  );
};

export default LandingPage;

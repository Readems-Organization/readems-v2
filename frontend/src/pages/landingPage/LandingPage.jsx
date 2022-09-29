import React from 'react';
import Header from '../../components/header/mainHeader/Header';
import { CardModule } from './modules/cardModule/CardModule';
import { Discover } from './modules/discoverModules/Discover';
import { Footer } from './modules/footer/Footer';
import HeroSection from './modules/heroSection/HeroSection';
import { PopularReads } from './modules/popularReads/PopularReads';
import { Subscribe } from './modules/subscribeModule/Subscribe';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CardModule />
      <PopularReads />
      <Discover />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LandingPage;

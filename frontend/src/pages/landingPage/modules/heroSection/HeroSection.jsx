import React from 'react';
import {
  StyledHeroSectionContainer,
  StyledHeroSection,
  StyledHeroSectionLeft,
  StyledHeroSectionRight,
  StyledButtonWrapper,
  StyledDescription,
} from './styles/HeroSection';

const HeroSection = () => {
  return (
    <StyledHeroSectionContainer>
      <StyledHeroSection>
        <StyledHeroSectionLeft
          initial={{ x: '-100vw ' }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          <h2>Read, write, and earn</h2>
          <p>
            Write and discover books, stories, and articles based on your
            interests and get rewarded while at it.
          </p>
          <StyledButtonWrapper>
            <button data-text='Start reading'>Start reading</button>
            <button data-text='Start writing'>Start writing</button>
          </StyledButtonWrapper>
        </StyledHeroSectionLeft>
        <StyledHeroSectionRight
          initial={{ x: '100vw ' }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          <img src='/svgs/Group-pics.png' alt='' />
        </StyledHeroSectionRight>
      </StyledHeroSection>
      <StyledDescription>
        We are building a community where readers and writers can create and
        read valuable content. With Readems reading is fun and writing is
        profitable.
        <span>Let's hear your story...</span>
      </StyledDescription>
    </StyledHeroSectionContainer>
  );
};

export default HeroSection;

import React from 'react';
import { Button } from '../../../../components/buttons/Button';
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
        <StyledHeroSectionLeft>
          <h2>Read, write, and earn</h2>
          <p>
            Write and discover books, stories, and articles based on your
            interests and get rewarded while at it.
          </p>
          <StyledButtonWrapper>
            <Button primary>Start reading</Button>
            <Button primary>Start writing</Button>
          </StyledButtonWrapper>
        </StyledHeroSectionLeft>
        <StyledHeroSectionRight>
          <img src='/svgs/Group-pics.png' alt='' />
        </StyledHeroSectionRight>
      </StyledHeroSection>
      <StyledDescription>
        We are building a community where readers and writers can create and
        read valuable content. With Readems reading is fun and writing is
        profitable.
        <span>Let's your story...</span>
      </StyledDescription>
    </StyledHeroSectionContainer>
  );
};

export default HeroSection;

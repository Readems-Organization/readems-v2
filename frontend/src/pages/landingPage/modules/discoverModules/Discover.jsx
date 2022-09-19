import React from 'react';
import { Button } from '../../../../components/buttons/Button';
import { DiscoverTopics } from './DiscoverTopics';
import {
  StyledDiscoverContainer,
  StyledDiscoverContent,
  StyledDiscoverWriterContainer,
  StyledDiscoverWriterContent,
} from './style/Discover';

export const Discover = () => {
  return (
    <StyledDiscoverContainer>
      <h2>Topics for you</h2>
      <StyledDiscoverContent>
        <div>
          <h4>Read free and premium content with ease</h4>
          <Button library>Enjoy</Button>
        </div>
      </StyledDiscoverContent>
      <DiscoverTopics />
      <StyledDiscoverWriterContainer>
        <div>
          <img src='/images/writer.png' alt='' />
        </div>
        <StyledDiscoverWriterContent>
          <h2>Grow with Readems as a creative</h2>
          <p>
            Put your creativity into good use and earn by the side. Readems
            helps you unlock your full potentials as a Creative while building a
            reliable community where you can learn and share ideas.
          </p>
          <Button library>Become A Writer</Button>
        </StyledDiscoverWriterContent>
      </StyledDiscoverWriterContainer>
    </StyledDiscoverContainer>
  );
};

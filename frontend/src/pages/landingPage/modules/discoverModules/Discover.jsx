import React from 'react';
import { Button } from '../../../../components/buttons/Button';
import {
  StyledDiscoverContainer,
  StyledDiscoverContent,
} from './style/Discover';

export const Discover = () => {
  return (
    <StyledDiscoverContainer>
      <h2>Discover</h2>
      <StyledDiscoverContent>
        <div>
          <h4>Read free and premium content with ease</h4>
          <Button>Enjoy</Button>
        </div>
      </StyledDiscoverContent>
    </StyledDiscoverContainer>
  );
};

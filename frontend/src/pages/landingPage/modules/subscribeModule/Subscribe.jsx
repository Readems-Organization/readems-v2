import React from 'react';
import { Button } from '../../../../components/buttons/Button';
import { StyledSubscribeContainer } from './style/Subscribe';

export const Subscribe = () => {
  return (
    <StyledSubscribeContainer>
      <h2>Subscribe to our newsletter</h2>

      <form>
        <input type='text' placeholder='reademsscholar@gmail.com' />
        <Button library>Subscribe</Button>
      </form>
    </StyledSubscribeContainer>
  );
};

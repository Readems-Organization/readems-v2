import React from 'react';
import { Button } from '../../../../components/buttons/Button';
import * as Style from './style/Subscribe';

export const Subscribe = () => {
  return (
    <Style.StyledSubscribeContainer>
      <Style.StyledJoinReademsContainer>
        <h2>Bring your story to life with Readems</h2>
        <Button library>Join Readems</Button>
      </Style.StyledJoinReademsContainer>
      <Style.StyledNewsLetterContainer>
        <h2>Subscribe to our newsletter</h2>
        <form>
          <input type='text' placeholder='reademsscholar@gmail.com' />
          <Button library>Subscribe</Button>
        </form>
      </Style.StyledNewsLetterContainer>
    </Style.StyledSubscribeContainer>
  );
};

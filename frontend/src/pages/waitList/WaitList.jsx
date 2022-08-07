import React from 'react';
import {
  StyledWaitListContainer,
  StyledWaitlistImg,
  StyledWaitlistHeader,
  StyledWaitlistWrapper,
  StyledWaitlistButton,
} from './style/WaitList';
import { coming1, coming2, coming3 } from '../../components/images';

const WaitList = () => {
  return (
    <div>
      <StyledWaitListContainer>
        <StyledWaitlistImg first src={coming3} alt='waitlist-pic' />
        <StyledWaitlistImg second src={coming2} alt='waitlist-pic' />
        <StyledWaitlistImg third src={coming1} alt='waitlist-pic' />
        <StyledWaitlistWrapper>
          <StyledWaitlistHeader>
            <h1>
              The Platform For Great <br /> Writers and Readers{' '}
            </h1>
            <p>Discover books, stories and article from writers</p>
          </StyledWaitlistHeader>
          <StyledWaitlistButton>Join Our Waitlists</StyledWaitlistButton>
        </StyledWaitlistWrapper>
      </StyledWaitListContainer>
    </div>
  );
};

export default WaitList;

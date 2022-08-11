import React from 'react';
import { coming1, coming2, coming3 } from '../../components/images';
import {
  StyledWaitlistImg,
  StyledWaitlistsContainer,
  StyledWaitlistsContentHeader,
  StyledWaitlistsContentSubHeader,
  StyledWaitlistsContentWrapper,
  StyledWaitlistBtn,
} from './style/Waitlists';
const Waitlists = () => {
  return (
    <StyledWaitlistsContainer>
      <StyledWaitlistImg first src={coming3} alt='waitlist-pic' />
      <StyledWaitlistImg second src={coming2} alt='waitlist-pic' />
      <StyledWaitlistImg third src={coming1} alt='waitlist-pic' />
      <StyledWaitlistsContentWrapper>
        <StyledWaitlistsContentHeader
          initial={{ x: -1550 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 20 }}
        >
          The Platform For Great <br /> Writers and Readers
        </StyledWaitlistsContentHeader>

        <StyledWaitlistsContentSubHeader
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 20 }}
        >
          Discover books, stories and article from writers
        </StyledWaitlistsContentSubHeader>

        <StyledWaitlistBtn
          initial={{ y: 550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Join our waitlists
        </StyledWaitlistBtn>
      </StyledWaitlistsContentWrapper>
    </StyledWaitlistsContainer>
  );
};

export default Waitlists;

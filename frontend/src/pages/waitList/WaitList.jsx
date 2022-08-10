import React from 'react';
import {
  StyledWaitListContainer,
  StyledWaitlistImg,
  StyledWaitlistHeaderContainer,
  StyledWaitlistWrapper,
  StyledWaitlistButton,
  StyledWaitlistHeader,
  StyledWaitlistSubHeader,
} from './style/WaitList';
import { coming1, coming2, coming3 } from '../../components/images';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      // type: 'tween',
      delay: 0.4,
      stiffness: 30,
    },
  },
  exit: {
    x: 1000,
    transition: { type: 'spring', delay: 0.8 },
  },
};

const WaitList = () => {
  return (
    <div>
      <StyledWaitListContainer>
        <StyledWaitlistImg first src={coming3} alt='waitlist-pic' />
        <StyledWaitlistImg second src={coming2} alt='waitlist-pic' />
        <StyledWaitlistImg third src={coming1} alt='waitlist-pic' />
        <StyledWaitlistWrapper>
          <StyledWaitlistHeaderContainer>
            <StyledWaitlistHeader
              initial={{ x: -1550 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 20 }}
            >
              The Platform For Great <br /> Writers and Readers{' '}
            </StyledWaitlistHeader>
            <StyledWaitlistSubHeader
              initial={{ x: 1550 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 20 }}
            >
              Discover books, stories and article from writers
            </StyledWaitlistSubHeader>
          </StyledWaitlistHeaderContainer>
          <StyledWaitlistButton
            initial={{ y: 550 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          >
            Join Our Waitlists
          </StyledWaitlistButton>
        </StyledWaitlistWrapper>
      </StyledWaitListContainer>
    </div>
  );
};

export default WaitList;

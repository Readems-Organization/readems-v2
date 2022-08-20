import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WaitlistsForm from '../../components/forms/waitlists/WaitlistsForm';
import { coming1, coming2, coming3 } from '../../components/images';
import {
  StyledWaitlistImg,
  StyledWaitlistsContainer,
  StyledWaitlistsContentHeader,
  StyledWaitlistsContentSubHeader,
  StyledWaitlistsContentWrapper,
  StyledWaitlistBtn,
} from './style/Waitlists';
import { WaitlistHeader } from '../../components/header/waitlistHeader/WaitlistHeader';

const Waitlists = () => {
  const [openWaitlistForm, setOpenWaitlistForm] = useState(false);

  return (
    <>
      <WaitlistHeader setOpenWaitlistForm={setOpenWaitlistForm} />

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
            onClick={() => setOpenWaitlistForm(true)}
          >
            Join our waitlists
          </StyledWaitlistBtn>
        </StyledWaitlistsContentWrapper>
      </StyledWaitlistsContainer>
      {openWaitlistForm && (
        <AnimatePresence>
          <WaitlistsForm setOpenWaitlistForm={setOpenWaitlistForm} />
        </AnimatePresence>
      )}
    </>
  );
};

export default Waitlists;

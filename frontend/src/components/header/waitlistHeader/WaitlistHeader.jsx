import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoSmall,
  StyledHeaderNav,
  StyledHeaderBtn,
  StyledHeaderLeftWrapper,
} from './styles/Header';
// import Sidebar from '../sidebar/Sidebar';
import AppIcon from '../../Icons/AppIcon';
import { logo, logo2 } from '../../images';
import Sidebar from '../../sidebar/SidebarSecond';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    // transition: {
    //   type: 'tween',
    //   delay: 0.5,
    // },
  },
  exit: {
    x: 1000,
    transition: { type: 'spring', delay: 0.2 },
  },
};

export const WaitlistHeader = ({ setOpenWaitlistForm }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <StyledHeaderContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <StyledHeaderLeftWrapper>
          <AppIcon.Menu onClick={() => setIsOpen(true)} />
          <StyledLogo
            src={logo}
            alt='logo'
            initial={{ y: -550 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          />
          <StyledLogoSmall src={logo2} alt='logo' />
        </StyledHeaderLeftWrapper>

        <StyledHeaderNav>
          <li>
            <Link to='/'>Explore</Link>
          </li>
          <li>
            <Link to='/'>Pricing</Link>
          </li>
          <li>
            <Link to='/'>Writers</Link>
          </li>
          <li>
            <Link to='/'>Readers</Link>
          </li>
        </StyledHeaderNav>

        <StyledHeaderBtn
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          onClick={() => setOpenWaitlistForm(true)}
        >
          Join our waitlists
        </StyledHeaderBtn>
      </StyledHeaderContainer>
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};

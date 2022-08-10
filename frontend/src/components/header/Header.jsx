import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledHeaderContainer,
  StyledLogo,
  StyledHeaderNav,
  StyledHeaderBtn,
  StyledHeaderLeftWrapper,
  StyledHeaderRightWrapper,
} from './styles/Header';
// import HomePageNav from '../nav/Nav';
import { AnimatePresence } from 'framer-motion';
// import Sidebar from '../sidebar/Sidebar';
import AppIcon from '../Icons/AppIcon';
import { logo } from '../images';

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

const Header = () => {
  return (
    <StyledHeaderContainer
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <StyledHeaderLeftWrapper>
        <AppIcon.Menu />
        <StyledLogo
          src={logo}
          alt='logo'
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        />
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
      >
        Join our waitlists
      </StyledHeaderBtn>
    </StyledHeaderContainer>
  );
};

export default Header;

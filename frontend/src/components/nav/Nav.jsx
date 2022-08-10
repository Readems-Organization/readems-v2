import React from 'react';
import AppIcon from '../Icons/AppIcon';
import { Link } from 'react-router-dom';
import { logo } from '../images';
import {
  StyledNavContainer,
  StyledNavLeft,
  StyledNavRight,
  StyledNavButton,
  StyledNavLists,
  StyledNavListsItem,
  StyledNavInputBox,
  StyledMenu,
  StyledLogo,
} from './styles/HomePageNav';

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

const HomePageNav = ({ toggleSidebar }) => {
  return (
    <StyledNavContainer
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <StyledNavLeft>
        <StyledMenu onClick={toggleSidebar}>
          <AppIcon.Menu />
        </StyledMenu>
        <StyledLogo
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </StyledLogo>

        <StyledNavLists>
          <StyledNavListsItem>
            <span>Explore</span>
          </StyledNavListsItem>
          <StyledNavListsItem>
            <span>Pricing</span>
          </StyledNavListsItem>
          <StyledNavListsItem>
            <span>Writers</span>
          </StyledNavListsItem>
          <StyledNavListsItem>
            <span>Readers</span>
          </StyledNavListsItem>
        </StyledNavLists>
      </StyledNavLeft>
      <StyledNavRight>
        <StyledNavButton
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          Join Our Waitlists
        </StyledNavButton>
      </StyledNavRight>
    </StyledNavContainer>
  );
};

export default HomePageNav;

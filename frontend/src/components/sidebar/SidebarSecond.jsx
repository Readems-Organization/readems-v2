import React from 'react';
import { NavLink } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  StyledSidebarContainer,
  StyledSidebarBtnWrapper,
  StyledSearchBox,
  StyledListItems,
  StyledSidebarHeader,
} from './styles/secondSidebar';
import AppIcon from '../Icons/AppIcon';
// import { SVG } from '../Icons';
import { Writers, Readers, Pricing, Explore, Search } from '../Icons';

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
    y: 1800,
    transition: { type: 'spring', delay: 0.2 },
  },
};

const Sidebar = ({ setIsOpen }) => (
  <StyledSidebarContainer
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    <StyledSidebarHeader>
      <StyledSidebarBtnWrapper>
        <button type='button' onClick={() => setIsOpen(false)}>
          <AppIcon.Close />
        </button>
      </StyledSidebarBtnWrapper>

      <StyledSearchBox>
        <Search height='25' width='25' />
        <input type='text' placeholder='Search for writers or publications' />
      </StyledSearchBox>
    </StyledSidebarHeader>

    <label htmlFor='theme'>click</label>

    <StyledListItems>
      <li>
        <NavLink to='/' onClick={() => setIsOpen(false)}>
          <Explore height='30' width='30' />
          <span>Explore</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={() => setIsOpen(false)}>
          <Pricing height='30' width='30' />
          <span>Pricing</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={() => setIsOpen(false)}>
          <Writers height='30' width='30' />
          <span>Writers</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/' onClick={() => setIsOpen(false)}>
          <Readers height='30' width='30' />
          <span>Readers</span>
        </NavLink>
      </li>
    </StyledListItems>
  </StyledSidebarContainer>
);

export default Sidebar;

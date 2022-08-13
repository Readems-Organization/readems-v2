import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledSidebarContainer,
  StyledSidebarWrapper,
  StyledSearchBox,
  StyledSidebarMenu,
  StyledSidebarHeader,
} from './styles/sidebar';
import AppIcon from '../Icons/AppIcon';

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
    x: 1800,
    transition: { type: 'spring', delay: 0.2 },
  },
};

const Sidebar = ({ setIsOpen }) => (
  <StyledSidebarWrapper
    variants={containerVariants}
    initial='hidden'
    animate='visible'
    exit='exit'
  >
    <StyledSidebarContainer>
      <StyledSidebarHeader
        initial={{ y: -550 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
      >
        <button type='button' onClick={() => setIsOpen(false)}>
          <AppIcon.Close />
        </button>
        <StyledSearchBox>
          <AppIcon.Search />
          <input type='text' placeholder='Search for writers or publications' />
        </StyledSearchBox>
      </StyledSidebarHeader>

      <label htmlFor='theme'>click</label>

      <StyledSidebarMenu>
        <li>
          <h4>Readers</h4>
        </li>
        <li>
          <NavLink to='/discover' onClick={() => setIsOpen(false)}>
            Discover
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Get the app
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Featured
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Readems Reader
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in culture
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top podcasts
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in food & drink
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in finance
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in sports
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in politics
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in technology
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in faith
          </NavLink>
        </li>
        <li>
          <NavLink to='/' onClick={() => setIsOpen(false)}>
            Top in business
          </NavLink>
        </li>

        <li>
          <h4>Writers</h4>
        </li>
        <li>
          <NavLink to='/'>Switch to Readems</NavLink>
        </li>
        <li>
          <NavLink to='/paid'>Go Paid</NavLink>
        </li>
        <li>
          <NavLink to='/podcasts'>For podcasts</NavLink>
        </li>
        <li>
          <NavLink to='/bloggers'>For bloggers</NavLink>
        </li>
        <li>
          <NavLink to='/finance-writers'>For finance writers</NavLink>
        </li>
        <li>
          <NavLink to='/comic-creators'>For comic creators</NavLink>
        </li>
        <li>
          <NavLink to='/food-writers'>For food writers</NavLink>
        </li>
        <li>
          <NavLink to='/local-news'>For local news</NavLink>
        </li>
        <li>
          <h4>Resources</h4>
        </li>
        <li>
          <NavLink to='/paid-guide'>Going paid guide</NavLink>
        </li>
        <li>
          <NavLink to='/resource-center'>Resource center</NavLink>
        </li>
        <li>
          <NavLink to='/community-programs'>Community&programs</NavLink>
        </li>
        <li>
          <NavLink to='/help-center'>Help center</NavLink>
        </li>
      </StyledSidebarMenu>
    </StyledSidebarContainer>
  </StyledSidebarWrapper>
);

export default Sidebar;

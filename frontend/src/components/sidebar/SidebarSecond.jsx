import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import {
  StyledSidebarContainer,
  StyledSidebarBtnWrapper,
  StyledSearchBox,
  StyledListItems,
  StyledSidebarHeader,
  StyledNightDayWrapper,
} from './styles/secondSidebar';
import AppIcon from '../Icons/AppIcon';
import { Writers, Readers, Pricing, Explore, Search } from '../Icons';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
    },
  },
  exit: {
    x: '-100vw',
    transition: { type: 'spring' },
  },
};

const Sidebar = ({ setIsOpen }) => {
  const [night, setNight] = useState(false);

  const handleNightDay = () => {
    setNight(!night);
    setIsOpen(false);

    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      setNight(true);
    } else {
      setNight(false);
    }
  }, []);

  return (
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

      <li onClick={handleNightDay} style={{ cursor: 'pointer' }}>
        {!night ? (
          <StyledNightDayWrapper>
            <FaSun />
            <span>Light Mode</span>
          </StyledNightDayWrapper>
        ) : (
          <StyledNightDayWrapper>
            <FaMoon />
            <span>Night Mode</span>
          </StyledNightDayWrapper>
        )}
      </li>

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
};

export default Sidebar;

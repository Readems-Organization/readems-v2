import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoMenu,
  StyledHeaderNav,
  StyledButtonWrapper,
} from './styles/Header';

import { Button } from '../../buttons/Button';
import { AnimatePresence } from 'framer-motion';
import Sidebar from '../../sidebar/SidebarSecond';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <StyledHeaderContainer>
        <div>
          <StyledLogo
            src='/svgs/Logo.svg'
            alt=''
            initial={{ y: -550 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          />
        </div>

        <StyledHeaderNav>
          <li>
            <NavLink to='/writers'>Writers</NavLink>
          </li>
          <li>
            <NavLink to='/Readers'>Readers</NavLink>
          </li>
          <li>
            <NavLink to='/resources'>Resources</NavLink>
          </li>
        </StyledHeaderNav>

        <StyledButtonWrapper>
          <Button secondary>Login</Button>
          <Button>Sign up for free</Button>
        </StyledButtonWrapper>
        <StyledLogoMenu
          src='/svgs/menu.svg'
          alt=''
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          onClick={() => setIsOpen(true)}
        />
      </StyledHeaderContainer>
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;

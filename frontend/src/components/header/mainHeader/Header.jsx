import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import * as Styles from './styles/Header';

import { AnimatePresence } from 'framer-motion';
import Sidebar from '../../sidebar/SidebarSecond';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Styles.StyledHeaderContainer>
        <div>
          <Styles.StyledLogo
            src='/svgs/Logo-3.svg'
            alt=''
            initial={{ y: -550 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          />

          <Styles.StyledLogoSmall
            src='/svgs/Logo-Sm.svg'
            alt=''
            initial={{ y: -550 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
          />
        </div>

        <Styles.StyledHeaderNav>
          <li>
            <NavLink to='/explore'>Explore</NavLink>
          </li>
          <li>
            <NavLink to='/pricing'>Pricing</NavLink>
          </li>
          <li>
            <NavLink to='/writers'>Writers</NavLink>
          </li>
          <li>
            <NavLink to='/readers'>Readers</NavLink>
          </li>
        </Styles.StyledHeaderNav>

        <Styles.StyledButtonWrapper
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          <Link to='/users/signin' data-text='Login'>
            Login
          </Link>

          <Link to='/users/signup' data-text='Sign up for free'>
            Sign up for free
          </Link>
        </Styles.StyledButtonWrapper>
        <Styles.StyledLogoMenu
          src='/svgs/menu-white.svg'
          alt=''
          initial={{ y: -550 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
          onClick={() => setIsOpen(true)}
        />
      </Styles.StyledHeaderContainer>
      <AnimatePresence>
        {isOpen && <Sidebar setIsOpen={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;

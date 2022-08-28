import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoMenu,
  StyledHeaderNav,
  StyledButtonWrapper,
} from './styles/Header';

import { Button } from '../../buttons/Button';

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogo src='/svgs/Logo.svg' alt='' />

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
      <StyledLogoMenu src='/svgs/menu.svg' alt='' />
    </StyledHeaderContainer>
  );
};

export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoMenu,
  StyledHeaderNav,
  StyledButtonWrapper,
  StyledButton,
} from './styles/Header';

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
        <StyledButton secondary>Login</StyledButton>
        <StyledButton>Sign up for free</StyledButton>
      </StyledButtonWrapper>
      <StyledLogoMenu src='/svgs/menu.svg' alt='' />
    </StyledHeaderContainer>
  );
};

export default Header;

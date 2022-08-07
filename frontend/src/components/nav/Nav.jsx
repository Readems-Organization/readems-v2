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
} from './styles/HomePageNav';

const HomePageNav = ({ toggleSidebar }) => {
  return (
    <StyledNavContainer>
      <StyledNavLeft>
        <StyledMenu onClick={toggleSidebar}>
          <AppIcon.Menu />
        </StyledMenu>
        <div>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>

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
        <StyledNavButton>Join Our Waitlists</StyledNavButton>
      </StyledNavRight>
    </StyledNavContainer>
  );
};

export default HomePageNav;

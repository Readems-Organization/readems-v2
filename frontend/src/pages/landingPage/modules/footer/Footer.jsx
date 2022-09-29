import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../../../../components/Icons/AppIcon';
import * as Styles from './style/Footer';

export const Footer = () => {
  return (
    <Styles.StyledFooterContainerWrapper>
      <Styles.StyledFooterContainer>
        <Styles.StyledFooterLogo>
          <img src='/svgs/Logos.svg' alt='' />
          <span>Read.Connect.Grow</span>
        </Styles.StyledFooterLogo>

        <Styles.StyledFooterListsContainer>
          <li>Explore</li>
          <li>Become a writer</li>
          <li>Pricing</li>
          <li>Terms and condition</li>
          <li>Writers</li>
          <li>Privacy</li>
          <li>Readers</li>
          <li>Contact</li>
        </Styles.StyledFooterListsContainer>

        <Styles.StyledFooterLogoContainer>
          <div>
            <Link to='https://www.facebook.com/ReademsHQ' target='_blank'>
              <AppIcon.Facebook />
            </Link>
          </div>
          <div>
            <Link to='https://www.twitter.com/Readems_HQ' target='_blank'>
              <AppIcon.Twitter />
            </Link>
          </div>
          <div>
            <Link to='https://www.instagram.com/Readems_hq' target='_blank'>
              <AppIcon.Instagram />
            </Link>
          </div>
          <div>
            <Link to='https://www.facebook.com/ReademsHQ' target='_blank'>
              <AppIcon.Linkedin />
            </Link>
          </div>
        </Styles.StyledFooterLogoContainer>
      </Styles.StyledFooterContainer>
      <Styles.StyledFooterDate>&copy; 2022 Readems</Styles.StyledFooterDate>
    </Styles.StyledFooterContainerWrapper>
  );
};

import React from 'react';
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
            <img src='/svgs/facebook.svg' alt='' />
          </div>
          <div>
            <img src='/svgs/twitter.svg' alt='' />
          </div>
          <div>
            <img src='/svgs/instagram.svg' alt='' />
          </div>
          <div>
            <img src='/svgs/linkedin.svg' alt='' />
          </div>
        </Styles.StyledFooterLogoContainer>
      </Styles.StyledFooterContainer>
      <Styles.StyledFooterDate>&copy; 2022 Readems</Styles.StyledFooterDate>
    </Styles.StyledFooterContainerWrapper>
  );
};

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeaderContainer = styled(motion.header)`
  /* max-width: 1339px; */
  width: 100%;
  height: 85px;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 20px; */
  position: sticky;
  top: 0;
  left: 0;
  margin: 0 auto;
  background: var(--bg-black-900);
  z-index: 99;
  margin-bottom: 50px;
`;

export const StyledHeaderLeftWrapper = styled(motion.div)``;
export const StyledHeaderRightWrapper = styled(motion.div)``;

export const StyledLogo = styled(motion.img)`
  width: 180px;
  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    /* width: initial; */
  }
`;

export const StyledLogoMenu = styled(motion.img)`
  display: none;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    width: initial;
    display: block;
  }
`;

export const StyledLogoSmall = styled(motion.img)``;

export const StyledHeaderNav = styled(motion.ul)`
  width: 300px;
  display: flex;
  align-items: center;
  /* border: 2px solid red; */
  justify-content: space-between;

  li a {
    display: flex;
    align-items: center;
    color: #060508;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    display: none;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledButton = styled(motion.button)`
  width: 177px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  background-color: #0042ff;
  color: #fff;

  ${(props) =>
    props.secondary &&
    css`
      border: 2px solid #0042ff;
      background-color: transparent;
      color: #0042ff;
    `}

   @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    width: 150px;
    height: 38px;
    font-size: 16px;
  }

   @media (max-width: ${({ theme }) => theme.mobile.size768}) {
          display: none;
         }
`;

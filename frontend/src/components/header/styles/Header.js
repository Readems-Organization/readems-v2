import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeaderContainer = styled(motion.header)`
  width: 100%;
  height: 70px;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background: var(--bg-black-900);
  z-index: 99;
`;

export const StyledHeaderLeftWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  /* margin-right: 20px; */

  svg {
    display: none;
    cursor: pointer;
    margin-right: 15px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    svg {
      display: block;
    }
  }
`;
export const StyledHeaderRightWrapper = styled(motion.div)``;

export const StyledLogo = styled(motion.img)`
  width: 120px;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    width: 90px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    width: 110px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    display: none;
  }
`;

export const StyledLogoSmall = styled(motion.img)`
  width: 35px;
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    display: block;
  }
`;

export const StyledHeaderNav = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 40px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 03s ease;

    a {
      font-size: 20px;
      transition: 02s ease all;

      :hover {
        color: #0042ff;
        font-size: 18px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    gap: 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    display: none;
  }
`;

export const StyledHeaderBtn = styled(motion.button)`
  background: #0042ff;
  color: #fff;
  font-size: 14px;
  padding: 10px 10px;
  border-radius: 5px;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    font-size: 12px;
    font-weight: bolder;
    padding: 10px 5px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size520}) {
    font-size: 14px;
    font-weight: normal;
    padding: 10px 10px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    font-size: 12px;
    font-weight: bolder;
    padding: 10px 5px;
  }
`;

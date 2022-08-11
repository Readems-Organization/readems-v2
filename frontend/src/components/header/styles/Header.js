import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeaderContainer = styled(motion.header)`
  width: 100%;
  height: 70px;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
`;

export const StyledHeaderLeftWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-right: 20px;
  img {
    margin-left: 30px;
  }

  svg {
    display: none;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    img {
      width: 90px;
      margin-left: 7px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    img {
      width: 110px;
      margin-left: 30px;
    }

    svg {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    img {
      width: 90px;
      margin-left: 30px;
    }
  }
`;
export const StyledHeaderRightWrapper = styled(motion.div)``;

export const StyledLogo = styled(motion.img)`
  width: 120px;
`;

export const StyledHeaderNav = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 40px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
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

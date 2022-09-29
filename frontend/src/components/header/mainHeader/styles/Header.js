import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeaderContainer = styled(motion.header)`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background: var(--bg-black-900);
  z-index: 1000;
  padding: 0 20px;
  /* border: 2px solid red; */

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    height: 120px;
  }
`;

export const StyledHeaderLeftWrapper = styled(motion.div)``;
export const StyledHeaderRightWrapper = styled(motion.div)``;

export const StyledLogo = styled(motion.img)`
  width: 180px;

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    width: 120px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    display: none;
  }
`;

export const StyledLogoMenu = styled(motion.img)`
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    width: initial;
    display: block;
  }
`;

export const StyledLogoSmall = styled(motion.img)`
  display: none;
  width: 30px;
  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    display: block;
  }
`;

export const StyledHeaderNav = styled(motion.ul)`
  width: 300px;
  display: flex;
  align-items: center;
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

  @media (max-width: ${({ theme }) => theme.mobile.size920}) {
    display: none;
  }
`;

export const StyledButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 20px;

  a:last-child {
    color: #0042ff;
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 177px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: inherit;

    ::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      background-color: #0042ff;
      height: 100%;
      width: 100%;
      color: #fff;
      padding: 12px 20px;
      box-sizing: border-box;
      transition: transform 0.5s ease;
      transform-origin: bottom;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
    :hover::before {
      transform: rotateX(20deg);
    }
  }

  a:first-child {
    color: #0042ff;
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 177px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 700;
    transition: color 0.8s ease;
    z-index: 999;
    background-color: var(--bg-black-900);

    ::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      background-color: var(--bg-black-900);
      border: 2px solid #0042ff;
      height: 100%;
      width: 100%;
      color: #0042ff;
      padding: 12px 20px;
      box-sizing: border-box;
      transition: transform 0.5s ease;
      transform-origin: bottom;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }

    :hover::before {
      transform: rotateX(20deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    margin: 0 5px;
    a:last-child,
    a:first-child {
      width: 90px;
      height: 40px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    gap: 10px;
    a:last-child,
    a:first-child {
      font-size: 1.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size320}) {
    a:last-child,
    a:first-child {
      width: 70px;
      height: 40px;
      font-size: 1.5rem;
    }
  }
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

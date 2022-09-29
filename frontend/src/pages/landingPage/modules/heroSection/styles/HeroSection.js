import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeroSectionContainer = styled(motion.div)`
  margin-top: 150px;
`;

export const StyledHeroSection = styled(motion.div)`
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    flex-direction: column-reverse;
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const StyledHeroSectionLeft = styled(motion.div)`
  width: 670px;

  h2 {
    color: var(--text-black-900);
    font-size: 6.9rem;
    font-weight: 700;
    line-height: 8.3rem;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    color: var(--text-black-900);
    font-size: 4rem;
    font-weight: 400;
    line-height: 4.8rem;
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    flex-direction: column-reverse;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
export const StyledHeroSectionRight = styled(motion.div)`
  img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  gap: 40px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    justify-content: center;
    display: flex;
  }

  button:first-child {
    color: #0042ff;
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 177px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
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
      transition: transform 1s ease;
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

  button:last-child {
    color: #0042ff;
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 177px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    transition: color 0.8s ease;
    z-index: 999;
    background-color: #fff;

    ::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      background-color: #fff;
      border: 2px solid #0042ff;
      height: 100%;
      width: 100%;
      color: #0042ff;
      padding: 12px 20px;
      box-sizing: border-box;
      transition: transform 1s ease;
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
`;

export const StyledDescription = styled(motion.p)`
  max-width: 1005px;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  font-weight: 400;
  font-size: 4rem;
  line-height: 4.8rem;
  text-align: center;

  span {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    font-weight: 500;
    margin-top: 20px;
  }
`;

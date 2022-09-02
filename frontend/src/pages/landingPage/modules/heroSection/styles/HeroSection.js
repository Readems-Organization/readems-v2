import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledHeroSectionContainer = styled(motion.div)``;

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
  /* border: 2px solid red; */
  h2 {
    /* color: #1d1a27; */
    color: var(--text-black-900);
    font-size: 69px;
    font-weight: 700;
    line-height: 83px;
    margin-bottom: 10px;
    /* opacity: 0.9; */
  }

  p {
    /* color: #1d1a27; */
    color: var(--text-black-900);
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    margin-bottom: 20px;
    /* opacity: 0.9; */
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    flex-direction: column-reverse;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    margin-top: 30px;
    /* border: 2px solid green; */

    h2 {
      font-size: 52px;
      line-height: 53px;
    }

    p {
      font-size: 30px;
      line-height: 35px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    h2 {
      font-size: 40px;
      line-height: 38px;
    }

    p {
      font-size: 20px;
      line-height: 25px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    h2 {
      font-size: 35px;
      line-height: 33px;
    }

    p {
      font-size: 20px;
      line-height: 25px;
    }
  }
`;
export const StyledHeroSectionRight = styled(motion.div)`
  img {
    /* width: 320px; */
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
  }
`;

export const StyledDescription = styled.p`
  max-width: 1005px;
  width: 100%;
  margin: auto;
  margin-top: 80px;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  text-align: center;

  span {
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    font-size: 30px;
    line-height: 38px;
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    font-size: 22px;
    line-height: 30px;
    font-weight: 500;
    margin-top: 20px;
  }
`;

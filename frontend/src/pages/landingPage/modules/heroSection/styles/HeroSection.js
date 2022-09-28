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

  h2 {
    color: var(--text-black-900);
    font-size: 6.9rem;
    font-weight: 700;
    line-height: 8.3rem;
    margin-bottom: 10px;
    text-align: center;
  }

  p {
    /* color: #1d1a27; */
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
`;

export const StyledDescription = styled.p`
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

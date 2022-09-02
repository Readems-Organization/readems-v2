import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledPopularReadsContainer = styled(motion.div)`
  /* border: 2px solid blue; */
  max-width: 1300px;
  margin: auto;
  margin-top: 50px;

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* color: #0c0b11; */
    color: var(--text-black-900);
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    h2 {
      text-align: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    h2 {
      font-size: 38px;
    }
  }
`;

export const StyledPopularReadsCardWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  gap: 30px;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    justify-content: center;
  }
`;

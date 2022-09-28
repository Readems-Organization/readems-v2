import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledPopularReadsContainer = styled(motion.div)`
  max-width: 1300px;
  margin: auto;
  margin-top: 50px;

  h2 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.8rem;
    /* color: #0c0b11; */
    color: var(--text-black-900);
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    h2 {
      text-align: center;
    }
  }
`;

export const StyledPopularReadsCardWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    justify-content: center;
  }
`;

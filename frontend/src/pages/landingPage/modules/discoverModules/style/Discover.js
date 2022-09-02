import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDiscoverContainer = styled(motion.div)`
  max-width: 1300px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  border: 2px solid green;
  border-radius: 5px;

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    /* color: #0c0b11; */
    /* color: var(--text-black-900); */
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

export const StyledDiscoverContent = styled(motion.div)`
  width: 100%;
  height: 280px;
  background-image: url('/svgs/background-img.svg');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 30px;
  margin-top: 30px;

  div {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  border: 2px solid red;

  h4 {
    width: 380px;
    font-size: 25px;
    font-weight: 700;
    /* color: #fff; */
    color: var(--text-black-900);
  }
`;

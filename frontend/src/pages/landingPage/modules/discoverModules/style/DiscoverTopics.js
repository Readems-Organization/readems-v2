import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDiscoverTopicsContainer = styled(motion.ul)`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 50px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.8rem;
    padding: 15px 25px;
    border: 1px solid var(--text-black-900);
    margin: 0 15px 15px;
    color: var(--text-black-900);
    font-size: 3.2rem;
    font-weight: 500;
    position: relative;
    z-index: 999;
    cursor: pointer;

    ::before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: #0042ff;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 0;
      transition: all 0.8s ease;
      z-index: -1;
    }

    :hover::before {
      width: 100%;
      left: 0;
      right: auto;
    }

    :hover {
      color: #fff;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    /* flex-direction: column; */
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

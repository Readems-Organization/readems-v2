import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDiscoverTopicsContainer = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
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
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    flex-direction: column;
  }
`;

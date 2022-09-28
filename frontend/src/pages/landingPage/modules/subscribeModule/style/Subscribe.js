import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSubscribeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  margin-top: 80px;
  h2 {
    text-align: center;
    font-size: 3.3rem;
    font-weight: 500;
    line-height: 4.8rem;
    color: var(--text-black-900);
  }

  form {
    display: flex;
    align-items: center;

    input {
      border: 2px solid #c6c6c7;
      height: 68px;
      max-width: 900px;
      width: 100%;
      padding: 19px 27px;
      border-radius: 5px;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 3.8rem;
      color: #c6c6c7;
      ::placeholder {
        font-size: 2.2rem;
        font-weight: 500;
        line-height: 3.8rem;
        color: #c6c6c7;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    form {
      button {
        height: 68px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    form {
      gap: 10px;
      flex-direction: column;
      button {
        width: 100%;
      }
    }
  }
`;

export const StyledJoinReademsContainer = styled(motion.div)`
  margin: 40px 0;
  margin-bottom: 50px;
  h2 {
    margin-bottom: 20px;
    font-size: 6.4rem;
    line-height: 7.7rem;
  }
  button {
    margin: 0 auto;
  }
`;

export const StyledNewsLetterContainer = styled(motion.div)`
  margin-top: 100px;
  h2 {
    margin-bottom: 20px;
  }
`;

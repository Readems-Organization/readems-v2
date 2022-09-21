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
    font-size: 33px;
    font-weight: 500;
    line-height: 48px;
    color: var(--text-black-900);
  }

  form {
    display: flex;
    align-items: center;

    input {
      border: 2px solid #c6c6c7;
      height: 68px;
      max-width: 900px;
      /* width: 799px; */
      width: 100%;
      padding: 19px 27px;
      border-radius: 5px;
      font-size: 32px;
      font-weight: 500;
      line-height: 38px;
      color: #c6c6c7;
      ::placeholder {
        font-size: 32px;
        font-weight: 500;
        line-height: 38px;
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

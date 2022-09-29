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
  text-align: center;
  h2 {
    margin-bottom: 20px;
    font-size: 6.4rem;
    line-height: 7.7rem;
  }
  button a {
    width: 177px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    background-color: #0042ff;
    color: #fff;
    position: relative;
    /* padding: 10px; */

    :hover {
      animation: ripple 1s linear infinite;
    }

    @keyframes ripple {
      0% {
        width: 150px;
        height: 54px;
        opacity: 0.5px;
      }
      100% {
        width: 220px;
        height: 69px;
        opacity: 0.2;
      }
    }
  }
`;

export const StyledNewsLetterContainer = styled(motion.div)`
  margin-top: 100px;
  h2 {
    margin-bottom: 20px;
  }

  button {
    /* background-color: transparent; */
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 252px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: 700;
    transition: color 0.8s ease;
    z-index: 999;
    background-color: #0042ff;
    border: 1px solid #fff;
    color: #fff;

    ::before {
      /* content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      background-color: #0042ff;
      border: 1px solid #fff;
      height: 100%;
      width: 100%;
      color: #fff;
      padding: 12px 20px;
      box-sizing: border-box;
      transition: transform 0.5s ease;
      transform-origin: bottom;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px; */
    }

    :hover {
      /* transform: rotateY(20deg); */
      transform: scale(1.1);
      box-shadow: 0 0 5px #00000080;
      text-shadow: 0 0 5px #0042ff;
    }
  }
`;

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
  /* background-position: center; */
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
    font-size: 26px;
    font-weight: 700;
    color: #fff;
    /* color: var(--text-black-900); */
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    div {
      flex-direction: column;
    }

    h4 {
      width: 100%;
      font-size: 26px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
`;

export const StyledDiscoverWriterContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  img {
    width: 400px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    img {
      width: 100%;
    }
  }
`;

export const StyledDiscoverWriterContent = styled(motion.div)`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    width: 450px;
    font-size: 25px;
    margin: 30px 0;
  }
  button {
    margin: auto;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    div {
      flex-direction: column;
    }

    h2 {
      font-size: 30px;
      line-height: normal;
    }

    p {
      width: 350px;
      font-size: 20px;
      margin: 20px 0;
    }

    button {
      width: 200px;
      font-size: 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    p {
      width: 100%;
      font-size: 20px;
      margin: 20px 0;
    }
  }
`;

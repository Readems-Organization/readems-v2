import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledDiscoverContainer = styled(motion.div)`
  max-width: 1300px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  border-radius: 5px;

  h2 {
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 5.8rem;
    color: var(--text-black-900);
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    h2 {
      text-align: center;
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
  display: flex;
  flex-direction: column;

  div {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
  }

  h4 {
    width: 380px;
    font-size: 2.6rem;
    font-weight: 700;
    color: #fff;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    height: 200px;
    div {
      flex-direction: column;
    }

    h4 {
      width: 100%;
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
    font-size: 2.5rem;
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
      font-size: 3rem;
      line-height: normal;
    }

    p {
      /* width: 350px; */
      /* font-size: 20px; */
      margin: 20px 0;
    }

    button {
      width: 200px;
      font-size: 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    width: 100%;

    h2 {
      margin-top: 20px;
    }

    p {
      width: 100%;
    }
  }
`;

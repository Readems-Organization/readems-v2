import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledReadCardContainer = styled(motion.div)`
  width: 402px;
  height: 551px;
  border: 1px solid #a2a2a4;
  padding: 19px 18px;
  border-radius: 5px;

  h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: var(--text-black-900);
    text-transform: capitalize;
  }

  small {
    display: inline-block;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.7rem;
    color: var(--text-gray-0);
    margin-top: 5px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    width: 350px;
    height: 450px;

    h3 {
      font-size: 2.4rem;
    }

    small {
      font-size: 1.8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size320}) {
    height: 380px;
  }
`;

export const StyledCardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  span {
    display: flex;
    width: 23px;
    height: 23px;
    border-radius: 100%;
    background: #d9d9d9;
  }

  p {
    margin-left: 5px;
    font-size: 1.6rem;
    line-height: 1.7rem;
    color: var(--text-black-0);
    text-transform: capitalize;
    font-weight: 900;
  }
`;

export const StyledCardPic = styled(motion.div)`
  margin-bottom: 10px;
  img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const StyledCardIcon = styled(motion.div)`
  img {
    width: 30px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    img {
      width: 20px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    img {
      width: 18px;
    }
  }
`;

export const StyledCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;

  span:first-child {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: var(--text-black-900);
  }

  > span {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: var(--text-black-900);
  }

  button {
    width: 123px;
    height: 31px;
    padding: 8px 17px;
    background-color: #7280ff;
    border-radius: 35px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    button {
      width: 100px;
      height: 31px;
      padding: 8px 10px;
      font-size: 1.3rem;
      font-weight: bolder;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    button {
      width: 90px;
      height: 27px;
      padding: 8px;
      font-size: 10px;
      font-weight: bolder;
    }
  }
`;

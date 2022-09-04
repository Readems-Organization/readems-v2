import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledReadCardContainer = styled(motion.div)`
  /* max-width: 388px;
         width: 100%; */
  width: 402px;
  height: 551px;
  border: 1px solid #a2a2a4;
  padding: 19px 18px;
  border-radius: 5px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    /* color: #000; */
    color: var(--text-black-900);
    text-transform: capitalize;
  }

  small {
    display: inline-block;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* color: #c6c6c7; */
    color: var(--text-gray-0);
    margin-top: 5px;
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
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    /* color: #191722; */
    color: var(--text-black-0);
    text-transform: capitalize;
  }
`;

export const StyledCardPic = styled(motion.div)`
  margin-bottom: 10px;
  img {
    /* width: 320px; */
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
    font-size: 14px;
    line-height: 17px;
    color: var(--text-black-900);
  }

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
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
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    span:first-child {
      font-size: 12px;
      line-height: 17px;
    }

    > span {
      font-size: 12px;
      line-height: 17px;
    }

    button {
      width: 100px;
      height: 31px;
      padding: 8px 10px;
      font-size: 10px;
      font-weight: bolder;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    span:first-child {
      font-size: 10px;
      line-height: 15px;
    }

    > span {
      font-size: 10px;
      line-height: 15px;
    }

    button {
      width: 90px;
      height: 27px;
      padding: 8px;
      font-size: 10px;
      font-weight: bolder;
    }
  }
`;

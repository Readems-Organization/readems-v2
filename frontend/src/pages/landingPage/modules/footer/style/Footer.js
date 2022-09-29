import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledFooterContainerWrapper = styled(motion.footer)`
  margin-top: 200px;
`;

export const StyledFooterContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const StyledFooterLogo = styled(motion.div)`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
  }

  span {
    font-size: 24px;
    line-height: 29px;
    color: #7280ff;
    font-style: bold;
    font-weight: bold;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
    margin-bottom: 50px;

    img {
      width: 120px;
    }

    span {
      font-size: 15px;
      line-height: 20px;
    }
  }
`;

export const StyledFooterListsContainer = styled(motion.ul)`
  width: 550px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  li {
    width: 250px;
    margin: 10px 0;
    font-size: 23px;
    line-height: 28px;
    color: #0042ff;
    font-style: medium;
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;

    li {
      width: 100%;
      margin-bottom: 20px;
      font-size: 18px;
    }
  }
`;

export const StyledFooterLogoContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-size: 3rem;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 63px;
    background-color: var(--bg-text-900);
    border-radius: 50%;
    color: #0072ff;
    transition: 0.5s;
    margin: 0 10px;

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--bg-text-900);
      transition: 0.5s;
      transform: scale(0.9);
      z-index: -1;
    }

    :hover::before {
      transform: scale(1.1);
      /* box-shadow: 2px 2px 2px #0072ff, 10px 1px 12px #0072ff,
        2px 2px 10px #0072ff, 2px 2px 3px #0072ff, inset 2px 2px 10px #0072ff,
        inset 2px 2px 10px #0072ff, inset 2px 2px 10px #0072ff,
        inset 2px 2px 10px #0072ff; */
    }

    :hover {
      box-shadow: 0 0 5px #0072ff;
      text-shadow: 0 0 5px #0072ff;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    margin-top: 50px;
    margin: auto;

    div a {
      margin: 0 15px;
    }
  }
`;

export const StyledFooterDate = styled(motion.small)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px auto 30px;
  font-size: 24px;
  line-height: 29px;
  color: #0042ff;
  font-style: medium;
`;

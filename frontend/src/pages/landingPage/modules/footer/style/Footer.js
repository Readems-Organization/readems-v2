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

  div {
    width: 25px;
    margin: 0 15px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    margin-top: 50px;
    width: 150px;
    margin: auto;

    div {
      width: 20px;
      margin: 0 5px;
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

import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledButton = styled(motion.button)`
  width: 177px;
  height: 48px;
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
  :hover{
    opacity: 0.7;
  }

   ${(props) =>
     props.primary &&
     css`
       height: 69px;
     `}


  ${(props) =>
    props.secondary &&
    css`
      border: 2px solid #0042ff;
      background-color: transparent;
      color: #0042ff;
    `}

   @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    width: 150px;
    height: 38px;
    font-size: 16px;
  }

   @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    display: none;

    ${(props) =>
      props.primary &&
      css`
        width: 177px;
        display: flex;
        height: 50px;
      `}
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    display: none;

    ${(props) =>
      props.primary &&
      css`
        width: 177px;
        font-size: 16px;
        display: flex;
        padding: 12px 10px;
      `}
  }
`;

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

    ${(props) =>
      props.library &&
      css`
        width: 252px;
        height: 69px;
        border: 1px solid #e4e5ff;
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

      ${(props) =>
        props.library &&
        css`
          display: flex;
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

        ${(props) =>
          props.library &&
          css`
            display: flex;
          `}

  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  gap: 40px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    justify-content: center;
    display: flex;
  }

  button:first-child {
    color: #0042ff;
    /* border: 2px solid #0042ff; */
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 177px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    background-color: inherit;

    ::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      background-color: #0042ff;
      height: 100%;
      width: 100%;
      color: #fff;
      padding: 12px 20px;
      box-sizing: border-box;
      transition: transform 1s ease;
      transform-origin: bottom;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
    :hover::before {
      transform: rotateX(20deg);
    }
  }

  button:last-child {
    color: #0042ff;
    /* border: 2px solid #0042ff; */
    text-decoration: none;
    display: inline-block;
    position: relative;
    perspective: 50px;
    width: 177px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    transition: color 0.8s ease;
    z-index: 999;
    background-color: #fff;

    ::before {
      /* content: '';
      position: absolute;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #0042ff;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 0;
      width: 100%;
      transition: all 0.8s ease;
      z-index: -1; */

      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      background-color: #fff;
      border: 2px solid #0042ff;
      height: 100%;
      width: 100%;
      color: #0042ff;
      padding: 12px 20px;
      box-sizing: border-box;
      transition: transform 1s ease;
      transform-origin: bottom;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }

    :hover::before {
      /* height: 100%;
      top: 0;
      bottom: auto;
      color: red; */

      transform: rotateX(20deg);
    }

    /* :hover {
      color: #fff;
    } */
  }
`;

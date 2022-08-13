import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWaitlistsContainer = styled(motion.div)`
  position: relative;
  height: 90vh;
  padding-top: 30px;
  /* background: var(--bg-black-900); */
`;

export const StyledWaitlistImg = styled.img`
  width: 350px;
  opacity: 0.5;

  ${(props) =>
    props.first &&
    css`
      position: absolute;
      top: 50px;
      left: 10px;
    `}

  ${(props) =>
    props.second &&
    css`
      position: absolute;
      bottom: 0px;
      left: 20px;
    `}

    ${(props) =>
      props.third &&
      css`
        position: absolute;
        bottom: 170px;
        right: 20px;
      `}

 @media (max-width: ${({ theme }) => theme.mobile.size1600}) {
     ${(props) =>
       props.third &&
       css`
         bottom: 180px;
         right: 40px;
       `}
  }

  @media (max-width: ${({ theme }) => theme.mobile.size1100}) {
     ${(props) =>
       props.third &&
       css`
         bottom: 150px;
         right: 20px;
       `}
  }
  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
     ${(props) =>
       props.third &&
       css`
         bottom: 390px;
         right: 10px;
       `}
  }


  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
     ${(props) =>
       props.third &&
       css`
         bottom: 320px;
         right: 20px;
       `}
  }

   @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    width: 200px;

  ${(props) =>
    props.second &&
    css`
      bottom: 10px;
      left: 20px;
    `}
    ${(props) =>
      props.third &&
      css`
        bottom: 270px;
        right: 10px;
      `}

  }

   @media (max-width: ${({ theme }) => theme.mobile.size420}) {
     width: 250px;
    ${(props) =>
      props.third &&
      css`
        bottom: 300px;
      `}

  }


   @media (max-width: ${({ theme }) => theme.mobile.size375}) {
      width: 200px;
    ${(props) =>
      props.first &&
      css`
        top: 20px;
        left: 10px;
      `}

  ${(props) =>
    props.second &&
    css`
      bottom: 10px;
    `}
    ${(props) =>
      props.third &&
      css`
        bottom: 240px;
      `}

  }

  @media (max-width: ${({ theme }) => theme.mobile.size320}) {
     width: 140px;
       ${(props) =>
         props.first &&
         css`
           top: 10px;
         `}

  ${(props) =>
    props.second &&
    css`
      bottom: 10px;
    `}
    ${(props) =>
      props.third &&
      css`
        bottom: 200px;
      `}

  }

   @media (max-width: ${({ theme }) => theme.mobile.size285}) {
    ${(props) =>
      props.third &&
      css`
        bottom: 290px;
      `}

        ${(props) =>
          props.second &&
          css`
            bottom: 40px;
          `}

  }

`;

export const StyledWaitlistsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
  position: absolute;
  top: 40%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 95%;
  text-align: center;
`;

export const StyledWaitlistsContentHeader = styled(motion.h1)`
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 99;
  font-size: 100px;
  line-height: 140px;
  color: var(--text-black-900);

  @media (max-width: ${({ theme }) => theme.mobile.size1100}) {
    font-size: 90px;
    line-height: 100px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    font-size: 70px;
    line-height: 85px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    font-size: 60px;
    line-height: 70px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    font-size: 35px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    font-size: 30px;
    line-height: 40px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.size285}) {
    font-size: 25px;
    line-height: 30px;
  }
`;

export const StyledWaitlistsContentSubHeader = styled(motion.p)`
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 199;
  color: #777;
  font-size: 40px;
  margin-top: 20px;

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    font-size: 35px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size540}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.size285}) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const StyledWaitlistBtn = styled(motion.button)`
  background: #0042ff;
  color: #fff;
  font-size: 22px;
  padding: 10px 10px;
  border-radius: 5px;
  text-transform: capitalize;
  margin-top: 70px;
  z-index: 99;

  @media (max-width: ${({ theme }) => theme.mobile.size375}) {
    font-size: 18px;
  }
`;

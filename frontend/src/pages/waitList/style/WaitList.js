import styled, { css } from 'styled-components';

export const StyledWaitListContainer = styled.div`
  position: relative;
  /* border: 2px solid green; */
  height: 90vh;
  width: 95%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    height: 70vh;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size520}) {
    height: 60vh;
  }
`;

export const StyledWaitlistWrapper = styled.div`
  position: relative;
  /* border: 2px solid green; */
  height: inherit;
  width: 90%;
  margin: 0 auto;
`;
export const StyledWaitlistImg = styled.img`
  width: 350px;
  opacity: 0.5;

  ${(props) =>
    props.first &&
    css`
      position: absolute;
      top: 20px;
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

      @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    ${(props) =>
      props.third &&
      css`
        bottom: 140px;
        right: 20px;
      `}

    ${(props) =>
      props.second &&
      css`
        bottom: 50px;
        left: 0px;
        right: 20px;
        display: none;
      `}
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    width: 250px;
    ${(props) =>
      props.third &&
      css`
        bottom: 40px;
        right: 20px;
      `}
  }
  @media (max-width: ${({ theme }) => theme.mobile.size520}) {
    width: 220px;
    ${(props) =>
      props.third &&
      css`
        bottom: 20px;
        right: 20px;
      `}
  }
`;

export const StyledWaitlistHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* border: 2px solid blue; */
  height: 62vh;
  font-family: 'Lato';
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 95px;
    letter-spacing: 2px;
    line-height: 120px;
    z-index: 999;
    font-weight: 500;
  }

  p {
    color: #777;
    font-size: 40px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size1100}) {
    h1 {
      font-size: 75px;
      line-height: 80px;
    }
    p {
      font-size: 30px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size900}) {
    h1 {
      font-size: 55px;
    }
    p {
      font-size: 20px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    height: 40vh;
    h1 {
      font-size: 45px;
      line-height: 60px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.size520}) {
    height: 50vh;
    h1 {
      font-size: 35px;
      line-height: 50px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    height: 50vh;
    h1 {
      font-size: 25px;
      line-height: 40px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const StyledWaitlistButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #0042ff;
  color: #fff;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 auto;
  font-size: 20px;
`;

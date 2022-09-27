import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  position: relative;

  & > form {
    max-width: 494px;
    margin: auto;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;

  & > h1 {
    font-size: 40px;
  }

  & > p {
    font-size: 20px;
    color: #747477;
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    & > h1 {
      font-size: 27px;
    }
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    & label {
      font-weight: 500;
      font-size: 20px;
    }

    &[id="extended"] {
      width: 600px;

      @media (max-width: ${({ theme }) => theme.mobile.size900}) {
        width: 550px;
      }
      
      @media (max-width: ${({ theme }) => theme.mobile.size768}) {
        width: 100%;
      }
    }

    & small {
      font-size: 18px;
      color: #777;
      line-height: 27.3px;
    }
  }

  & > div > div {
    position: relative;

    & > input, select {
      font-size: 20px;
      padding: 12px 30px 12px 12px;
      width: 100%;
      box-sizing: border-box;
      border-radius: 5px;
      border: 1px solid #C5C9FF;
      color: #444;

      &::placeholder {
        color: #D9D9D9;
      }

      @media (max-width: ${({ theme }) => theme.mobile.size420}) {
        font-size: 17px;
      }
    }

    & > svg {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #D9D9D9;

      &[id="clickable"] {
        font-size: 25px;
        cursor: pointer;
      }
    }
  }
`;

export const Footer = styled.div`
  text-align: center;
  margin-bottom: 50px;

  & > button {
    height: 48px;
    margin-top: 30px;
    width: 100%;
  }

  & > p {
    margin: 10px 0;
    font-size: 19px;
    font-weight: 700;
    color: #0C0B11;

    & > span {
      color: #0042ff;
    }
  }
`;

// Progress Bar Styles
export const ProgressBarStl = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5px;
  background: ${({ pageTwo, done }) => pageTwo | done ? "#003BE4" : "#7280FF"};
  margin: 20px 0;
  color: #fff;
  font-size: 16px;
  font-weight: 700;

  & > div {
    display: grid;
    place-items: center;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #7280FF;

    &:nth-child(1) {
      background: ${({ pageTwo, done }) => pageTwo | done ? '#003BE4' : '#7280FF'};
    }

    &:nth-child(2) {
      background: ${({ pageTwo, done }) => pageTwo | done ? '#003BE4' : '#7280FF'};
    }

    &:last-child {
      background: ${({ done }) => done ? '#003BE4' : '#7280FF'};
    }
  }
`;

// Sign Up Done
export const SignUpDoneStl = styled.div`
  max-width: 500px;
  margin: auto;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 151px;
  }

  & > h3 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }

  & > button {
    width: 100%;
    height: 48px;
  }
`;
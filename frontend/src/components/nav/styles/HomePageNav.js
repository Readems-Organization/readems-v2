import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const StyledNavContainer = styled(motion.div)`
  /* height: 70px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0; */
  background: inherit;
  padding: 10px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 80px; */
  /* border: 2px solid red; */
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile.size1100}) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    flex-direction: row;
  }
`;

export const StyledNavLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  /* gap: 20px; */

  a {
    display: flex;
    align-items: center;
    background: white;
    color: #000;
    /* padding: 0 10px; */
    border-radius: 10px;
    font-family: cursive;

    img {
      width: 120px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    a h2 {
      display: none;
    }
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    flex: 0;
    a {
      padding: 0 5px;
      img {
        width: 30px;
      }
    }
  }
`;

export const StyledLogo = styled(motion.div)``;

export const StyledMenu = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.white}; */
  padding: 5px;
  border-radius: 5px;
  position: absolute;
  left: 0;
  svg {
    display: flex;
    align-items: center;
    font-size: 30px;
    /* display: flex; */
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    svg {
      display: flex;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    svg {
      font-size: 25px;
    }
  }
`;

export const StyledNavLists = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 50px;
  margin-left: 80px;

  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    display: none;
  }
`;
export const StyledNavListsItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;

  svg {
    font-size: 25px;
  }
`;

export const StyledNavInputBox = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;

  input {
    width: 100%;
    background: inherit;
    padding: 10px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    display: none;
  }
`;

export const StyledNavRight = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.mobile.size1100}) {
    margin: 50px 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size768}) {
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    /* gap: 10px; */
    flex: 0;
    /* width: 340px; */
    justify-content: space-between;
  }
`;

export const StyledNavButton = styled(motion.button)`
  /* background: #ff7800; */
  /* background: #f36b07de; */
  background: #0042ff;
  color: #fff;
  font-size: 14px;
  padding: 10px 10px;
  border-radius: 5px;

  ${(props) =>
    props.primary &&
    css`
      background: inherit;
      border: 1px solid ${({ theme }) => theme.colors.white};
      padding: 8px 10px;
    `}

  @media (max-width: ${({ theme }) => theme.mobile.size420}) {
    font-size: 12px;
    padding: 10px 5px;
    font-weight: 700;
    /* width: 100px; */

    ${(props) =>
      props.primary &&
      css`
        padding: 7px 10px;
      `}
  }
`;

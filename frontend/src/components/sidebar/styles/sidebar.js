import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebarWrapper = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 500px;
  background: #fff; */

  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  background-color: #fff;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 0px 0px 20px #d4d4d4;
  transition: 03s ease;

  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  /* box-shadow: 0px 0px 5px gray; */
  z-index: 1990;

  :hover {
    width: 250px;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    /* display: none; */
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #fff;
    border-radius: 10px;
  }
`;

export const StyledSidebarContainer = styled(motion.div)`
  width: 100%;
  padding: 0 20px;
`;

export const StyledSidebarHeader = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    position: absolute;
    right: 0;
    background: inherit;
    font-size: 30px;
  }
`;

export const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.greyishNavy};
  border-radius: 5px;
  padding: 0 5px;
  margin: 20px 0;
  margin-top: 50px;

  input {
    width: 100%;
    padding: 10px 5px;
  }

  svg {
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;

export const StyledSidebarMenu = styled.ul`
  li {
    padding: 10px 0;
    :hover {
      background-color: #d6d6d6;
      cursor: pointer;
    }
  }

  li h4 {
    border-bottom: none;
    font-size: 18px;
    margin-top: 20px;
  }

  li a {
    display: flex;
    align-items: center;
    padding: 5px 0;
    border-bottom: 2px solid gray;

    :last-child {
      border-bottom: none;
    }
  }
`;

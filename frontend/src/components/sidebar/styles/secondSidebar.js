import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  width: 250px;
  height: 100vh;
  /* border: 2px solid green; */
  background: var(--bg-black-900);
  overflow: hidden;
  white-space: nowrap;
  z-index: 6000;
  transition: 01s ease;
  padding: 10px;
  box-shadow: 0px 0px 3px var(--text-black-900);
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;

  :hover {
    width: 250px;
  }
`;

export const StyledSidebarHeader = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  /* background: ${({ theme }) => theme.colors.white}; */
  /* background: var(--bg-black-900); */
  display: flex;
  flex-direction: column;
`;

export const StyledSidebarBtnWrapper = styled.div`
  margin-left: 35px;
  position: relative;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    position: absolute;
    right: 0;
    background: inherit;
    color: var(--text-black-900);
    font-size: 30px;
  }
`;

export const StyledSearchBox = styled.div`
  position: relative;
  /* border: 2px solid ${({ theme }) => theme.colors.greyishNavy}; */
  border: 2px solid var(--text-black-900);
  border-radius: 5px;
  margin: 20px 0;
  margin-top: 50px;
  box-sizing: border-box;
  height: 40px;
  padding: 0px 10px;

  input {
    width: 82%;
    background: inherit;
    margin-bottom: 10px;
    position: absolute;
    top: 2px;
    left: 38px;
    padding: 10px 0;
  }

  svg {
    position: absolute;
    top: 5px;
    left: 0px;
    fill: var(--text-black-900);
  }
`;

export const StyledListItems = styled(motion.ul)`
  li {
    margin: 20px 0;
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: var(--text-black-900);
    }

    a svg {
      margin-right: 10px;
      display: flex;
      fill: var(--text-black-900);
    }
  }
`;

export const StyledNightDayWrapper = styled.div`
  /* display: flex;
  align-items: center; */
  font-size: 18px;
  color: var(--text-black-900);
  svg {
    margin-right: 10px;
    /* display: flex; */
    fill: var(--text-black-900);
    /* display: block; */
    font-size: 30px;
  }

  span {
    display: block;
    margin-top: -30px;
    margin-left: 39px;
  }
`;

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSigninContainer = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

export const StyledSigninLogoContainer = styled(motion.div)`
  width: 200px;
  display: flex;
  /* border: 2px solid red; */
  position: relative;

  svg {
    display: flex;
    align-items: center;
    /* font-size: 200px; */
    width: 300px;
    /* border: 2px solid yellow; */
  }
`;

export const StyledSigninLogo = styled(motion.div)`
  width: 40px;
  /* border: 2px solid green; */
  position: absolute;
  top: 0;
  left: 20px;

  img {
    width: 100%;
  }
`;

export const StyledFormContainer = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  /* border: 2px solid red; */

  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    color: #555;
  }

  small {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-top: 20px;

    a {
      color: blue;
      margin-left: 5px;
    }
  }
`;

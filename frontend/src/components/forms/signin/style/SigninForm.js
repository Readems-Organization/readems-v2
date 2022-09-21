import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledFormWrapper = styled(motion.form)`
  margin-top: 20px;
  width: 100%;

  div {
    margin-bottom: 15px;
    position: relative;
  }

  label {
    display: inline-block;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    border: 1px solid #555;
    height: 50px;
    padding: 0 15px;

    border-radius: 5px;
  }

  button {
    height: 50px;
    width: 100%;
    background-color: blue;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
    margin-top: 40px;
  }

  h4 {
    color: blue;
    cursor: pointer;
  }

  svg {
    position: absolute;
    right: 15px;
    top: 45px;
    cursor: pointer;
  }
`;

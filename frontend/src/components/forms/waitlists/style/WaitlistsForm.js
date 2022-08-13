import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledWaitlistFormContainer = styled(motion.div)`
  max-width: 500px;
  width: 100%;
  border: 2px solid inherit;
  background: var(--bg-black-900);
  z-index: 5000;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border-radius: 10px;
  box-shadow: 0 0 10px gray;
`;

export const StyledWaitlistFormWrapper = styled.div`
  padding: 10px;
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    font-size: 25px;
    cursor: pointer;
  }
  img {
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 50px;
  }
`;
export const StyledWaitlistForm = styled.form`
  margin-top: 40px;
  label {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 16px;
  }

  input,
  textarea {
    width: 100%;
    border: 1px solid gray;
    margin-bottom: 20px;
    padding: 15px 10px;
    border-radius: 10px;
    background: inherit;
  }

  textarea {
    height: 150px;
  }

  button {
    background: #0042ff;
    color: #fff;
    font-size: 18px;
    padding: 10px 10px;
    border-radius: 5px;
    text-transform: capitalize;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

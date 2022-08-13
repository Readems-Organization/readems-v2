import React from 'react';
import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  opacity: 0.7;
  z-index: 3000;
  transition: 03s ease all;
`;

const Backdrop = ({ close }) => (
  <StyledBackdrop onClick={() => close()}></StyledBackdrop>
);

export default Backdrop;

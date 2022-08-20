import React from 'react';
import { StyledButton } from './styles/Button';

export const Button = ({ children, primary, secondary }) => {
  return (
    <StyledButton primary={primary} secondary={secondary}>
      {children}
    </StyledButton>
  );
};

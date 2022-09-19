import React from 'react';
import { StyledButton } from './styles/Button';

export const Button = ({ children, primary, secondary, library }) => {
  return (
    <StyledButton primary={primary} secondary={secondary} library={library}>
      {children}
    </StyledButton>
  );
};

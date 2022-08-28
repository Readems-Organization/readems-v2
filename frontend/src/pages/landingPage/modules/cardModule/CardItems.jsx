import React from 'react';
import { StyledCardItemsContainer } from './style/CardItems';
export const CardItems = ({
  icon,
  header,
  description,
  firstCard,
  secondCard,
  thirdCard,
}) => {
  return (
    <StyledCardItemsContainer
      firstCard={firstCard}
      secondCard={secondCard}
      thirdCard={thirdCard}
    >
      {icon}
      <h4>{header}</h4>
      <p>{description}</p>
    </StyledCardItemsContainer>
  );
};

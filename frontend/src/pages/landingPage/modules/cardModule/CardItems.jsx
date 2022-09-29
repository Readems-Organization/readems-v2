import React from 'react';
import { StyledCardItemsContainer } from './style/CardItems';

export const FirstCard = ({
  icon,
  header,
  description,
  animation,
  firstCard,
}) => {
  return (
    <div>
      <StyledCardItemsContainer animate={animation} firstCard={firstCard}>
        {icon}
        <h4>{header}</h4>
        <p>{description}</p>
      </StyledCardItemsContainer>
    </div>
  );
};

export const SecondCard = ({
  icon,
  header,
  description,
  animation,
  secondCard,
}) => {
  return (
    <div>
      <StyledCardItemsContainer animate={animation} secondCard={secondCard}>
        {icon}
        <h4>{header}</h4>
        <p>{description}</p>
      </StyledCardItemsContainer>
    </div>
  );
};

export const ThirdCard = ({
  icon,
  header,
  description,
  animation,
  thirdCard,
}) => {
  return (
    <div>
      <StyledCardItemsContainer thirdCard={thirdCard} animate={animation}>
        {icon}
        <h4>{header}</h4>
        <p>{description}</p>
      </StyledCardItemsContainer>
    </div>
  );
};

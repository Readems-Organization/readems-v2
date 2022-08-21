import React from 'react';
import {
  StyledCardIcon,
  StyledCardPic,
  StyledReadCardContainer,
  StyledCardTitle,
  StyledCardInfo,
} from './style/PopularReadCard';

export const PopularReadCard = ({
  title,
  pic,
  header,
  description,
  date,
  time,
}) => {
  return (
    <StyledReadCardContainer>
      <StyledCardTitle>
        <span /> <p>{title}</p>
      </StyledCardTitle>
      <StyledCardPic>{pic}</StyledCardPic>
      <h3>{header}</h3>
      <small>{description}</small>
      <StyledCardInfo>
        <span>{date}</span>
        <span>{time}</span>
        <button>Tech Education</button>
        <StyledCardIcon>
          <img src='/svgs/star.svg' alt='' />
        </StyledCardIcon>
      </StyledCardInfo>
    </StyledReadCardContainer>
  );
};

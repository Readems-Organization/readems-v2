import React from 'react';
import * as Styled from './style/PopularReadCard';

export const PopularReadCard = ({
  title,
  pic,
  header,
  description,
  date,
  time,
  animation,
}) => {
  return (
    <Styled.StyledReadCardContainer animate={animation}>
      <Styled.StyledCardTitle>
        <span /> <p>{title}</p>
      </Styled.StyledCardTitle>
      <Styled.StyledCardPic>{pic}</Styled.StyledCardPic>
      <h3>{header}</h3>
      <small>{description}</small>
      <Styled.StyledCardInfo>
        <span>{date}</span>
        <span>{time}</span>
        <button>Tech Education</button>
        <Styled.StyledCardIcon>
          <img src='/svgs/star.svg' alt='' />
        </Styled.StyledCardIcon>
      </Styled.StyledCardInfo>
    </Styled.StyledReadCardContainer>
  );
};

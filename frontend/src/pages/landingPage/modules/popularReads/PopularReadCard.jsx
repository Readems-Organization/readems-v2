import React, { useEffect } from 'react';
import {
  StyledCardIcon,
  StyledCardPic,
  StyledReadCardContainer,
  StyledCardTitle,
  StyledCardInfo,
} from './style/PopularReadCard';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const PopularReadCard = ({
  title,
  pic,
  header,
  description,
  date,
  time,
  animation,
}) => {
  // const { ref, inView } = useInView({
  //   threshold: 0.2,
  // });
  // const animation = useAnimation();

  // useEffect(() => {
  //   console.log('Use effect view = ', inView);
  //   if (inView) {
  //     animation.start({
  //       y: 0,
  //       transition: {
  //         type: 'spring',
  //         duration: 1,
  //         bounce: 0.3,
  //       },
  //     });

  //     if (!inView) {
  //       animation.start({
  //         y: '-100vh',
  //       });
  //     }
  //   }
  // }, [inView]);
  return (
    <StyledReadCardContainer
      animate={animation}
      // initial={{ y: -550 }}
      // animate={{ y: 0 }}
      // transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    >
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

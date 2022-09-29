import React, { useEffect } from 'react';
import { StyledCardItemsContainer } from './style/CardItems';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const FirstCard = ({ icon, header, description, firstCard }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: '100vw',
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <StyledCardItemsContainer animate={animation} firstCard={firstCard}>
        {icon}
        <h4>{header}</h4>
        <p>{description}</p>
      </StyledCardItemsContainer>
    </div>
  );
};

export const SecondCard = ({ icon, header, description, secondCard }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <StyledCardItemsContainer animate={animation} secondCard={secondCard}>
        {icon}
        <h4>{header}</h4>
        <p>{description}</p>
      </StyledCardItemsContainer>
    </div>
  );
};

export const ThirdCard = ({ icon, header, description, thirdCard }) => {
  return (
    <div>
      <StyledCardItemsContainer thirdCard={thirdCard}>
        {icon}
        <h4>{header}</h4>
        <p>{description}</p>
      </StyledCardItemsContainer>
    </div>
  );
};

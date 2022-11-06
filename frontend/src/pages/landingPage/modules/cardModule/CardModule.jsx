import React, { useEffect } from 'react';
import { FirstCard, SecondCard, ThirdCard } from './CardItems';
import { StyledCardModuleContainer } from './style/CardModule';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const FirstCards = () => {
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
      <FirstCard
        icon={<img src='/svgs/coin-2.svg' alt='Logo' />}
        header='Monetize and share amazing content'
        description='We offer a platform where you can share amazing content and improve your creativity while getting paid.'
        firstCard
        animation={animation}
      />
    </div>
  );
};

export const SecondCards = () => {
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
      <SecondCard
        icon={<img src='/svgs/team-2.svg' alt='Logo' />}
        header='Build a community with like minds'
        description='Meet and interact with people who share the same interests as you through our online community. You can join for free.'
        secondCard
        animation={animation}
      />
    </div>
  );
};

export const ThirdCards = () => {
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
      <ThirdCard
        icon={<img src='/svgs/Frame-2.svg' alt='Logo' />}
        header='Get rewarded for reading'
        description='Track your reading habits in real-time with leaderboards, receive reward tokens and personalized scorecards for achievements and milestones.'
        thirdCard
        animation={animation}
      />
    </div>
  );
};

export const CardModule = () => {
  return (
    <StyledCardModuleContainer>
      <FirstCards />
      <SecondCards />
      <ThirdCards />
    </StyledCardModuleContainer>
  );
};

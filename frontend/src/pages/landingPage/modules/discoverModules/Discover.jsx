import React, { useEffect } from 'react';
import { DiscoverTopics } from './DiscoverTopics';
import {
  StyledDiscoverContainer,
  StyledDiscoverContent,
  StyledDiscoverWriterContainer,
  StyledDiscoverWriterContent,
} from './style/Discover';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const DiscoverTopicsContents = () => {
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
      <h2>Topics for you</h2>
      <StyledDiscoverContent animate={animation}>
        <div>
          <h4>Find Content You Love Based On Your Interests</h4>
          <button data-text='Start reading'>Start reading</button>
        </div>
      </StyledDiscoverContent>
    </div>
  );
};

export const DiscoverTopicsLists = () => {
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
      <DiscoverTopics animation={animation} />
    </div>
  );
};

export const DiscoverWriterContents = () => {
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
      <StyledDiscoverWriterContainer animate={animation}>
        <motion.div
          initial={{ x: '100vw ' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          <img src='/images/writer.png' alt='' />
        </motion.div>
        <StyledDiscoverWriterContent
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          <h2>Grow with Readems as a creative</h2>
          <p>
            Put your creativity into good use and earn by the side. Readems
            helps you unlock your full potentials as a Creative while building a
            reliable community where you can learn and share ideas.
          </p>
          <button data-text='Become A Writer'>Become A Writer</button>
        </StyledDiscoverWriterContent>
      </StyledDiscoverWriterContainer>
    </div>
  );
};

export const Discover = () => {
  return (
    <StyledDiscoverContainer>
      <DiscoverTopicsContents />
      <DiscoverTopicsLists />
      <DiscoverWriterContents />
    </StyledDiscoverContainer>
  );
};

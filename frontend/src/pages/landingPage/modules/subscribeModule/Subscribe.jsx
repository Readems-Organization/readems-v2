import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../../../../components/buttons/Button';
import * as Style from './style/Subscribe';

export const JoinReadems = () => {
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
      <Style.StyledJoinReademsContainer animate={animation}>
        <h2>Bring your story to life with Readems</h2>
        <button>
          <Link to='/users/signup'>Join Readems</Link>
        </button>
      </Style.StyledJoinReademsContainer>
    </div>
  );
};

export const NewsLetters = () => {
  const { ref, inView } = useInView({
    threshold: 1,
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
      <Style.StyledNewsLetterContainer animate={animation}>
        <h2>Subscribe to our newsletter</h2>
        <form>
          <input type='text' placeholder='reademsscholar@gmail.com' />
          <button data-text='Subscribe'>Subscribe</button>
        </form>
      </Style.StyledNewsLetterContainer>
    </div>
  );
};

export const Subscribe = () => {
  return (
    <Style.StyledSubscribeContainer>
      <JoinReadems />
      <NewsLetters />
    </Style.StyledSubscribeContainer>
  );
};

import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Styled from './styles/HeroSection';

export const Description = () => {
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
      <Styled.StyledDescription animate={animation}>
        We are building a community where readers and writers can create and
        read valuable content. With Readems reading is fun and writing is
        profitable.
        <span>Let's hear your story...</span>
      </Styled.StyledDescription>
    </div>
  );
};

const HeroSection = () => {
  return (
    <Styled.StyledHeroSectionContainer>
      <Styled.StyledHeroSection>
        <Styled.StyledHeroSectionLeft
          initial={{ x: '-100vw ' }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          <h2>Read, write, and earn</h2>
          <p>
            Write and discover books, stories, and articles based on your
            interests and get rewarded while at it.
          </p>
          <Styled.StyledButtonWrapper>
            <button data-text='Start reading'>Start reading</button>
            <button data-text='Start writing'>Start writing</button>
          </Styled.StyledButtonWrapper>
        </Styled.StyledHeroSectionLeft>
        <Styled.StyledHeroSectionRight
          initial={{ x: '100vw ' }}
          animate={{ x: 0 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          <img src='/svgs/Group-pics.png' alt='' />
        </Styled.StyledHeroSectionRight>
      </Styled.StyledHeroSection>
      <Description />
    </Styled.StyledHeroSectionContainer>
  );
};

export default HeroSection;

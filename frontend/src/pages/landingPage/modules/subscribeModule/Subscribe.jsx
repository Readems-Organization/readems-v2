import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Style from './style/Subscribe';
import { registerSubscribesEmail } from '../../../../redux/actions/subscribesActions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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
  const [emailData, setEmailData] = useState({ email: '' });
  const dispatch = useDispatch();
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

  const handleChangeInput = (e) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleNewsLettersSubmit = (e) => {
    e.preventDefault();
    console.log(emailData);
    dispatch(registerSubscribesEmail(emailData));
    setEmailData({ email: '' });
  };

  return (
    <div ref={ref}>
      <Style.StyledNewsLetterContainer animate={animation}>
        <h2>Subscribe to our newsletter</h2>
        <form onSubmit={handleNewsLettersSubmit}>
          <input
            type='email'
            placeholder='reademsscholar@gmail.com'
            id='email'
            name='email'
            value={emailData.email}
            onChange={handleChangeInput}
          />
          <button type='submit' data-text='Subscribe'>
            Subscribe
          </button>
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

import React, { useState } from 'react';
import Backdrop from '../../Backdrop';
import { logo } from '../../images';
import AppIcons from '../../Icons/AppIcon';
import { useDispatch } from 'react-redux';
import { registerWaitlistUser } from '../../../redux/actions/waitlistActions';

import {
  StyledWaitlistFormContainer,
  StyledWaitlistFormWrapper,
  StyledWaitlistForm,
} from './style/WaitlistsForm';

const containerVariants = {
  hidden: {
    opacity: 0,
    y: '50%',
  },
  visible: {
    opacity: 1,
    y: '-50%',
    x: '50%',
    // transition: {
    //   type: 'tween',
    //   delay: 0.5,
    // },
  },
  exit: {
    // x: '-1070vw',
    y: '2000%',
    x: '1000%',
    transition: { type: 'spring', delay: 0.2 },
  },
};

const WaitlistsForm = ({ setOpenWaitlistForm }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    fullname: '',
    email: '',
    message: '',
  });

  const handleInputs = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerWaitlistUser(data));
    console.log(data);
  };
  return (
    <>
      <Backdrop close={() => setOpenWaitlistForm(false)} />
      <StyledWaitlistFormContainer
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
        <StyledWaitlistFormWrapper>
          <AppIcons.Close onClick={() => setOpenWaitlistForm(false)} />
          <img src={logo} alt='' />
          <StyledWaitlistForm onSubmit={handleSubmit}>
            <label htmlFor='fullname'>Fullname</label>
            <input
              type='text'
              placeholder='Enter fullname'
              name='fullname'
              value={data.fullname}
              onChange={handleInputs}
            />
            <label htmlFor='Email'>Email</label>
            <input
              type='text'
              placeholder='Enter email'
              name='email'
              value={data.email}
              onChange={handleInputs}
            />
            <label htmlFor='Message'>Message</label>
            <textarea
              placeholder='Enter your message'
              name='message'
              value={data.message}
              onChange={handleInputs}
            />
            <button>Send</button>
          </StyledWaitlistForm>
        </StyledWaitlistFormWrapper>
      </StyledWaitlistFormContainer>
    </>
  );
};

export default WaitlistsForm;

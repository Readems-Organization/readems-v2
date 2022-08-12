import React, { useState } from 'react';
import Backdrop from '../../Backdrop';
import { logo } from '../../images';
import AppIcons from '../../Icons/AppIcon';
import {
  StyledWaitlistFormContainer,
  StyledWaitlistFormWrapper,
  StyledWaitlistForm,
} from './style/WaitlistsForm';

const WaitlistsForm = ({ setOpenWaitlistForm }) => {
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
    console.log(data);
  };
  return (
    <>
      <Backdrop close={() => setOpenWaitlistForm(false)} />
      <StyledWaitlistFormContainer>
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

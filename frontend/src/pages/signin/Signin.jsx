import React from 'react';
import { Link } from 'react-router-dom';
import { SigninForm } from '../../components/forms/signin/SigninForm';
import * as Styled from './style/Signin';
import { Readems } from '../../components/Icons';

const Signin = () => {
  return (
    <>
      <Styled.StyledSigninLogoContainer>
        <Styled.StyledSigninLogo>
          <img src='/svgs/Logo-1.svg' alt='' />
        </Styled.StyledSigninLogo>
        <Readems />
      </Styled.StyledSigninLogoContainer>
      <Styled.StyledSigninContainer>
        <Styled.StyledFormContainer>
          <h2>Login</h2>
          <p>Hi, welcome back</p>
          <SigninForm />
          <small>
            Not a member? <Link to='/users/signup'>Become a member</Link>
          </small>
        </Styled.StyledFormContainer>
      </Styled.StyledSigninContainer>
    </>
  );
};

export default Signin;

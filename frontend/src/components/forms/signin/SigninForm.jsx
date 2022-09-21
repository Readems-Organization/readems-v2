import React from 'react';
import { useState } from 'react';
import AppIcon from '../../Icons/AppIcon';
import * as Style from './style/SigninForm';

export const SigninForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Style.StyledFormWrapper>
      <div>
        <label htmlFor='email'>Email or username</label>
        <input type='email' placeholder='Email or username' id='email' />
        <AppIcon.User />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder='Password'
          id='password'
        />
        {showPassword ? (
          <AppIcon.EyeClose onClick={() => setShowPassword(false)} />
        ) : (
          <AppIcon.Eye onClick={() => setShowPassword(true)} />
        )}

        <h4>Forgot Password?</h4>
      </div>

      <button>Login</button>
    </Style.StyledFormWrapper>
  );
};

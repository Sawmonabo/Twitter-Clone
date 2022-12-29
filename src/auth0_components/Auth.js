import React from 'react';
import LoginButton from './LoginButton';
import './Auth.css';

function Auth () {
  return (
    <div className='Auth-form-container'>
      <div className='Auth-form'>
        <div className='Auth-form-content'>
          <h1 className='Auth-form-title'>Twitter-Clone</h1>
          <h4 className='Auth-form-sub-title'>Sign-in w/Auth0</h4>
          <div className='button-container'>
            <LoginButton/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Auth;

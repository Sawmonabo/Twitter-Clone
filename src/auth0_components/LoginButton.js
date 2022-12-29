import React from 'react';
import { useAuth } from '../lib/wundergraph';
import { Button } from '@mui/material';
import './LoginButton.css';

const LoginButton = () => {
  const { login } = useAuth();

  return (
    <Button className='login-button-container' onClick={() => { login('auth0'); }}>
        Continue
    </Button>
  );
};

export default LoginButton;

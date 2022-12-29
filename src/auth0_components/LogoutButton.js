import React from 'react';
import { useAuth } from '../lib/wundergraph';
import { Button } from '@mui/material';
import './LogoutButton.css';

const LogoutButton = () => {
  const { logout } = useAuth();

  return (
      <Button onClick={ () => { logout({ logoutOpenidConnectProvider: true }); }} variant='contained' className='logout_button' fullWidth>
          Sign Out
      </Button>
  );
};

export default LogoutButton;

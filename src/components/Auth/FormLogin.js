import { Box } from '@mui/material';
import React from 'react';
import './auth.css';

export default function FormLogin() {
  return (
    <Box
      width='100%'
      sx={{ display: 'flex', flexDirection: 'column ', paddingLeft: '100px' }}>
      <div className='p-title'>
        <div>Vous n’avez pas un compte ? </div>
        <div className='title'>Demander votre compte</div>
      </div>
      <div className='tit-auth'>
        <div className='auth-title'>Authentification</div>
        <div className='login-title'>
          Entrez login et mot de passe ci-dessous
        </div>
      </div>
      <div>
        <form className='form-login'>
          <input className='email' type='email' placeholder='Login' />
          <input
            className='password'
            type='password'
            placeholder='Mot de passe'
          />
          <button>Se connecter</button>
        </form>
      </div>
    </Box>
  );
}

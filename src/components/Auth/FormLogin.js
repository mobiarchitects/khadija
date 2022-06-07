import { Box } from '@mui/material';
import React, { useState } from 'react';
import './auth.css';

export default function FormLogin() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleData = (e) => {
    e.preventDefault();
    if (login.length === 0 || password.length === 0) {
      setError(true);
    }
    console.log({ login, password });
  };

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
        <form className='form-login' onSubmit={handleData}>
          <input
            className='email'
            type='email'
            placeholder='Login'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          {error && login.length <= 0 ? (
            <label>Login can't be Empty</label>
          ) : (
            ''
          )}
          <input
            className='password'
            type='password'
            placeholder='Mot de passe'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && password.length <= 0 ? (
            <label>Password can't be Empty</label>
          ) : (
            ''
          )}
          <button type='submit'>Se connecter</button>
        </form>
      </div>
    </Box>
  );
}

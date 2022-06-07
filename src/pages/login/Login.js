import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postConnection } from '../../redux/authSlice';

import './login.css';

export default function Login() {
  const dispatch = useDispatch();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const handleData = (e) => {
      e.preventDefault();
      if (login.length === 0 || password.length === 0) {
        setError(true);
      }
      if (login && password) {
        dispatch(postConnection({ login, password }));
      }
    };
  return (
    <div className='login'>
      <div
        className='img-login'
        style={{ backgroundImage: 'url(/assets/imgLogin.png)' }}>
        <img
          style={{ width: '40%', paddingTop: '57px' }}
          src='/assets/logoMobi.svg'
          alt='mo'
        />
        <p className='para'>
          Comment booster l’expérience <span>collaborateur</span> dans votre
          entreprise ?
        </p>
        <span className='cola'>Collaborateurs</span>
        <p className='text'>
          Quel lien peut-il bien y avoir entre le secteur du Développement et la
          fonction RH ? Le premier a opéré un virage il y a déjà quelques
          années, passant de prestataire de services à pourvoyeur d’expériences
        </p>
      </div>
      <div className='form-login'>
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
      </div>
    </div>
  );
}

import { Box } from '@mui/material';
import React, { useState } from 'react';
import './login.css';
import { loginFail, loginPending } from '../../redux/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { userLogin } from '../../api/userApi';

export default function Login() {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleData = async (e) => {
    e.preventDefault();

    let action;
    action = userLogin({
      userName: email,
      password: password,
    });
    dispatch(loginPending());
    try {
      await dispatch(action).then(() => {});
    } catch (err) {
      dispatch(loginFail());
      console.log('errrrrr', err.error);
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
          sx={{
            display: 'flex',
            flexDirection: 'column ',
            paddingLeft: '100px',
          }}>
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
              {/* {login.isAuth === false && (
                <Alert
                  variant='filled'
                  sx={{ padding: '5px', marginBottom: '5px' }}
                  severity='error'>
                  {login.error}
                </Alert>
              )} */}
              <input
                className='email'
                type='email'
                placeholder='Login'
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                className='password'
                type='password'
                placeholder='Mot de passe'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />

              <span>
                <button className='button1' type='submit'>
                  Se connecter
                </button>
                {login.isLoading && (
                  <Spinner variant='primary' animation='border' />
                )}
              </span>
            </form>
          </div>
        </Box>
      </div>
    </div>
  );
}

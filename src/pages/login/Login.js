import React from 'react';
import FormLogin from '../../components/Auth/FormLogin';
import './login.css';

export default function Login() {
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
        <FormLogin />
      </div>
    </div>
  );
}

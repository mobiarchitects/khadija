import React from 'react';
import '../profile/profile.css';

export default function Profile() {
  return (
    <div className='profile'>
      <div className='user'>
        <p className='user-name'>Elfaour Youssef</p>
        <p className='user-desc'>
          Votre liste des rendez-vous pour aujourd’hui est vide
        </p>
        <button className='button-btn'>Programmer une réunion</button>
      </div>
      <div>
        <img src='/assets/Mar-Business_9.svg' alt='mar-business-9' />
      </div>
    </div>
  );
}

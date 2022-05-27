import React from 'react';
import '../styles/navBar.css';

export default function IconsNav() {
  return (
    <div className='icons-nav'>
      <img className='panier' src='/assets/panier.svg' alt='panier' />
      <img className='notif' src='/assets/notification.svg' alt='notification' />
      <img className='avatar' src='/assets/ysf.jpg' alt='avatar' />
    </div>
  );
}

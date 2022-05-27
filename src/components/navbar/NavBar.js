import React from 'react';
import '../styles/navBar.css';
import InputNav from './InputNav';
import IconsNav from './IconsNav';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='title'>HR MobiArchitects</div>
      <div className='input'>
        <InputNav />
      </div>
      <div className='icons'>
        <IconsNav />
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import '../styles/navBar.css';
import InputNav from './InputNav';
import IconsNav from './IconsNav';
import { Menu, MenuItem } from '@mui/material';

export default function NavBar() {

  return (
    <div className='navbar'>
      <div className='title-nav'>HR MobiArchitects</div>
      <div className='input'>
        <InputNav />
      </div>
      <div className='icons'>
        <IconsNav />
 
      </div>
    </div>
  );
}

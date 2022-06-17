import { Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import '../styles/navBar.css';

export default function IconsNav() {
  const login = useSelector((state) => state.login);

  const [open, setOpen] = useState(false);
  return (
    <div className='icons-nav'>
      {/* <img className='panier' src='/assets/panier.svg' alt='panier' /> */}
      <img
        className='notif'
        src='/assets/notification.svg'
        alt='notification'
      />
      <img
        className='avatar'
        src={login.user.pictureUrl}
        alt='avatar'
        onClick={(e) => setOpen(true)}
      />
      {/* <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
    </div>
  );
}

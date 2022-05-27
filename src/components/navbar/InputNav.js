import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
import '../styles/navBar.css';

export default function InputNav() {
  return (
    <div>
      <span>
        <input
          className='input-recherche'
          type='text'
          placeholder=' Recherche'
        />
       
      </span>
    </div>
  );
}

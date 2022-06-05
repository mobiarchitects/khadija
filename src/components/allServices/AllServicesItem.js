import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/allServices.css';
export default function AllServicesItem({ item }) {
  return (
    
      <Box sx={{ width: { xs: '50%', md: '25%' } }}>
        <div className='all-ser-item'>
          <Link to={item.lien} className='link' >
            <div className='icon-ser'>{item.icon}</div>
            <div className='icon-tit'>{item.title}</div>
          </Link>
        </div>
      </Box>
   
  );
}

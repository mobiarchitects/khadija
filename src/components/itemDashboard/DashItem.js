import { Box } from '@mui/material';
import React from 'react';
import '../styles/dash.css';

export default function DashItem({ item, lengthArray, idx }) {
  console.log(lengthArray);
  console.log(idx);
  return (
    <>
      <Box
        sx={{
          width: { xs: '50%', md: '25%' },
          marginRight: lengthArray === idx + 1 ? '0px' : '15px',
        }}>
        <div className='dash-group'>
          <div className='icon'>{item.icon}</div>
          <div className='title-dash-item'>{item.title}</div>
          <div className='number'>{item.counter}</div>
        </div>
      </Box>
    </>
  );
}

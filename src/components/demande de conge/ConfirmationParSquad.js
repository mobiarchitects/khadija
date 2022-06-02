import { Stack } from '@mui/material';
import React from 'react';
import './formConge.css';

export default function ConfirmationParSquad() {
  return (
    <>
      <Stack
        width='288px'
        marginTop='40px'
        // paddingLeft='0px !important'
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <input className='in-squad' type='checkbox' />
        <label>Confirmation congé par squad</label>
      </Stack>
    </>
  );
}

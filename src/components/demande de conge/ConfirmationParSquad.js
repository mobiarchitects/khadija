import { Stack } from '@mui/material';
import React from 'react';
import './formConge.css';

export default function ConfirmationParSquad() {
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <input type='checkbox' />
        <label>Confirmation congé par squad</label>
      </Stack>
    </>
  );
}

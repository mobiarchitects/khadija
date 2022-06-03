import { Stack } from '@mui/material';
import React from 'react';

export default function DateDebutConge() {
  return (
    <>
      <Stack  sx={{ display: 'flex', flexDirection: 'column' }}>
        <label className='label-conge'>Date début</label>
        <input className='select-conge' type='date' />
      </Stack>
    </>
  );
}

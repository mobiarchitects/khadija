import { Stack } from '@mui/material';
import React from 'react';

export default function DateFinConge() {
  return (
    <>
      <Stack  sx={{ display: 'flex', flexDirection: 'column' }}>
        <label className='label-conge'>Date fin</label>
        <input className='select-conge' type='date' />
      </Stack>
    </>
  );
}

import { Stack } from '@mui/material';
import React, { useState } from 'react';

export default function ConfirmationParSquad({onClickConfirmation , value}) {
  
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '15px' }}>
      <input
        type='checkbox'
        value={value}
        onClick={(e) => onClickConfirmation(e.target.checked)}
      />
      <label>Confirmation congé par squad</label>
    </Stack>
  );
}

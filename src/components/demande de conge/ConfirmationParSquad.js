import { Stack } from '@mui/material';
import React, { useState } from 'react';

export default function ConfirmationParSquad() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  console.log(isConfirmed);
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'row', paddingLeft: '15px' }}>
      <input
        type='checkbox'
        value={isConfirmed}
        onClick={(e) => setIsConfirmed(e.target.checked)}
      />
      <label>Confirmation congé par squad</label>
    </Stack>
  );
}

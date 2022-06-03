import { Stack, TextField } from '@mui/material';
import React from 'react';

export default function DateFinConge({ onChangeDateFin, value }) {
  return (
    <Stack sx={{ paddingLeft: '15px' }}>
      <TextField
        label='Date Fin'
        type='date'
        value={value}
        onChange={(_event, newDateF) => onChangeDateFin(newDateF)}
      />
    </Stack>
  );
}

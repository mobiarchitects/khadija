import { Stack, TextField } from '@mui/material';
import React from 'react';

export default function DateDebutConge({ onChangeDateDebut, value }) {
  return (
    <Stack sx={{ paddingLeft: '15px' }}>
      <TextField
        label='Date Début'
        type='date'
        onChange={(e) => {
          onChangeDateDebut(e.target.value);
        }}
        value={value}
      />
    </Stack>
  );
}

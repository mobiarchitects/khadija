import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function TypeCongesSelect({ onChangeInput,value }) {
  const typeConges = useSelector((state) => state.typeConges.data);
  const listTypeConges = typeConges.map((item) => {
    return item.label;
  });

  return (
    <Stack sx={{ paddingLeft: '15px' }}>
      <Autocomplete
        disablePortal
        id='Type d’absence'
        options={listTypeConges}
        value={value}
        renderInput={(params) => <TextField {...params} label='type conges' />}
        onChange={(_event, newConge) => {
          onChangeInput(newConge);
        }}
      />
    </Stack>
  );
}

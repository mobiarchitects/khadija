import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function TypeSituationsSelect({onChangeSituation , value}) {
  
  const situationsProjects = useSelector(
    (state) => state.situationsProjects.data,
  );
  const listTypeSituation = situationsProjects.map((item) => {
    return item.label;
  });

  return (
    <Stack sx={{ paddingLeft: '15px' }}>
      <Autocomplete
        disablePortal
        id='Votre situation '
        options={listTypeSituation}
        renderInput={(params) => (
          <TextField {...params} label='Votre situation sur le projet' />
        )}
        value={value}
        onChange={(_event, newSituation) => onChangeSituation(newSituation)}
      />
    </Stack>
  );
}

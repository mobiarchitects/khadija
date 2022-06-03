import { Autocomplete, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function TypeSituationsSelect() {
  const [typeSituation, setTypeSituation] = useState(null);
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
        value={typeSituation}
        onChange={(_event, newSituation) => setTypeSituation(newSituation)}
      />
    </Stack>
  );
}

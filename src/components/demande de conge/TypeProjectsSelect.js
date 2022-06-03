import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function TypeProjectsSelect({ onChangeProject, value }) {
  const projects = useSelector((state) => state.projects.data);
  const listTypeProjects = projects.map((item) => {
    return item.name;
  });

  return (
    <Stack sx={{ paddingLeft: '15px' }}>
      <Autocomplete
        disablePortal
        id='Projet'
        options={listTypeProjects}
        renderInput={(params) => <TextField {...params} label='Projet' />}
        value={value}
        onChange={(_event, newProject) => {
          onChangeProject(newProject);
        }}
      />
    </Stack>
  );
}

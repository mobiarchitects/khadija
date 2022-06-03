import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '../../redux/projectsSlice';

export default function TypeProjectsSelect() {
  const projects = useSelector((state) => state.projects.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  useEffect(() => {
    console.log('projects : ', projects);
  }, [projects]);

  return (
    <>
      <Stack  sx={{ display: 'flex', flexDirection: 'column' }}>
        <label>Type de projet</label>
        <select >
          {projects.map((item) => (
            <option key={item.id}>{item.name}</option>
          ))}
        </select>
      </Stack>
    </>
  );
}

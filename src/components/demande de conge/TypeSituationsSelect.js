import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSituationsProjects } from '../../redux/situationsProjectsSlice';

export default function TypeSituationsSelect() {
  const situationsProjects = useSelector(
    (state) => state.situationsProjects.data,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSituationsProjects());
  }, [dispatch]);
  useEffect(() => {
    console.log('situations projects :', situationsProjects);
  }, [situationsProjects]);

  return (
    <>
      <Stack spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        <label className='label-conge'>Votre situation sur le projet</label>
        <select className='select-conge'>
          {situationsProjects.map((item) => (
            <option key={item.id}>{item.label}</option>
          ))}
        </select>
      </Stack>
    </>
  );
}

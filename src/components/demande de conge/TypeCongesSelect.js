import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypeConges } from '../../redux/typeCongesSlice';
import './formConge.css';

export default function TypeCongesSelect() {
  const typeConges = useSelector((state) => state.typeConges.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypeConges());
  }, [dispatch]);
  useEffect(() => {
    console.log('type conges :', typeConges);
  }, [typeConges]);

  return (
    <>
      <Stack
        spacing={2}
        marginBottom='10px'
        sx={{ display: 'flex', flexDirection: 'column' }}>
        <label className='label-conge'>Type d’absence</label>
        <select className='select-conge'>
          {typeConges.map((item) => (
            <option key={item.id}>{item.label}</option>
          ))}
        </select>
      </Stack>
    </>
  );
}

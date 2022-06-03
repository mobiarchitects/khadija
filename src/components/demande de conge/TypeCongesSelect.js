import { Autocomplete, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTypeConges } from '../../redux/typeCongesSlice';

export default function TypeCongesSelect() {
  const [typeConge, setTypeConge] = useState('Annuel');
  const typeConges = useSelector((state) => state.typeConges.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypeConges());
  }, [dispatch]);
  useEffect(() => {
    console.log('type conges :', typeConges);
  }, [typeConges]);

  const listTypeConges = typeConges.map((item) => {
    return item.label;
  });
  console.log(listTypeConges);
  return (
    <Stack>
      <Autocomplete
        disablePortal
        id='Type d’absence'
        options={listTypeConges}
        renderInput={(params) => <TextField {...params} label='type conges' />}
      />
    </Stack>
  );
}

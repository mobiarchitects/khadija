import styled from '@emotion/styled';
import { Grid, Stack } from '@mui/material';
import React from 'react';
import ConfirmationParSquad from './ConfirmationParSquad';
import DateDebutConge from './DateDebutConge';
import DateFinConge from './DateFinConge';
import TypeCongesSelect from './TypeCongesSelect';
import TypeProjectsSelect from './TypeProjectsSelect';
import TypeSituationsSelect from './TypeSituationsSelect';

export default function FormConge() {
  const Item = styled(Stack)(() => ({
    textAlign: 'center',
  }));
  return (
    <Grid container spacing={3} width='100%'>
      <Grid item xs={12} md={6}>
        <Item width='60%' sx={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Informations congé</h3>
          <DateDebutConge />
          <DateFinConge />
          <TypeCongesSelect />
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item width='60%' sx={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Informations Interne</h3>
          <TypeProjectsSelect />
          <TypeSituationsSelect />
          <ConfirmationParSquad />
        </Item>
      </Grid>
    </Grid>
  );
}

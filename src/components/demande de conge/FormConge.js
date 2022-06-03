import styled from '@emotion/styled';
import { Button, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import ConfirmationParSquad from './ConfirmationParSquad';
import DateDebutConge from './DateDebutConge';
import DateFinConge from './DateFinConge';
import TypeCongesSelect from './TypeCongesSelect';
import TypeProjectsSelect from './TypeProjectsSelect';
import TypeSituationsSelect from './TypeSituationsSelect';
import moment from 'moment';

export default function FormConge() {
  const [typeConge, setTypeConge] = useState(null);
  const [typeProject, setTypeProject] = useState(null);
  const [dateDebut, setDateDebut] = useState('22/02/2022');
  const [dateFin, setDateFin] = useState(moment().format('DD/MM/YYYY'));
  const Item = styled(Stack)(() => ({
    textAlign: 'center',
  }));
  const handleData = () => {
    console.log(' data :', typeConge, typeProject);
  };
  const onChangeProject = (project) => {
    console.log('myTypeProject :', project);
    setTypeProject(project);
  };
  const onChangeInput = (item) => {
    console.log('myTypeCongé :', item);
    setTypeConge(item);
  };
  const onChangeDateDebut = (dateD) => {
    console.log(dateD);
    setDateDebut(dateD);
  };
  const onChangeDateFin = (dateF) => {
    console.log(dateF);
    setDateFin(dateF);
  };

  return (
    <Grid container spacing={3} width='100%'>
      <Grid item xs={12} md={6}>
        <Item
          spacing={3}
          width='60%'
          sx={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Informations congé</h3>
          <DateDebutConge
            onChangeDateDebut={onChangeDateDebut}
            value={dateDebut}
          />
          <DateFinConge onChangeDateFin={onChangeDateFin} value={dateFin} />
          <TypeCongesSelect onChangeInput={onChangeInput} value={typeConge} />
        </Item>
      </Grid>
      <Grid item xs={12} md={6}>
        <Item
          spacing={3}
          width='60%'
          sx={{ display: 'flex', flexDirection: 'column' }}>
          <h3>Informations Interne</h3>
          <TypeProjectsSelect
            onChangeProject={onChangeProject}
            value={typeProject}
          />
          <TypeSituationsSelect />
          <ConfirmationParSquad />
        </Item>
      </Grid>
      <Grid item xs={4} md={3}>
        <Item sx={{ paddingLeft: '15px' }}>
          <Button
            sx={{ padding: '10px' }}
            variant='contained'
            onSubmit={handleData}>
            Envoyer la demande
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
}

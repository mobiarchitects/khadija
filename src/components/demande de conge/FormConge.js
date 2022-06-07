import styled from '@emotion/styled';
import { Button, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import ConfirmationParSquad from './ConfirmationParSquad';
import DateDebutConge from './DateDebutConge';
import DateFinConge from './DateFinConge';
import TypeCongesSelect from './TypeCongesSelect';
import TypeProjectsSelect from './TypeProjectsSelect';
import TypeSituationsSelect from './TypeSituationsSelect';


export default function FormConge() {

  const [typeConge, setTypeConge] = useState(null);
  const [typeProject, setTypeProject] = useState(null);
  const [dateDebut, setDateDebut] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const [dateFin, setDateFin] = useState(new Date().toISOString().slice(0, 10));
  const [typeSituation, setTypeSituation] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  console.log(
    typeConge,
    typeProject,
    typeSituation,
    isConfirmed,
    dateDebut,
    dateFin,
  );
  const Item = styled(Stack)(() => ({
    textAlign: 'center',
  }));
  const handleData = () => {
    console.log(' data :', onChangeDateDebut);
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
  const onChangeSituation = (typeS) => {
    console.log(typeS);
    setTypeSituation(typeS);
  };
  const onClickConfirmation = (isConf) => {
    setIsConfirmed(isConf);
  };
  return (
    <Grid container spacing={3} width='100%'>
      <Grid item xs={12} md={6}>
        <Item
          spacing={3}
          width='60%'
          sx={{ display: 'flex', flexDirection: 'column' }}>
          <h5 style={{ paddingTop: '25px' }}>Informations congé</h5>
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
          <h5 style={{ paddingTop: '25px' }}>Informations Interne</h5>
          <TypeProjectsSelect
            onChangeProject={onChangeProject}
            value={typeProject}
          />
          <TypeSituationsSelect
            onChangeSituation={onChangeSituation}
            value={typeSituation}
          />
          <ConfirmationParSquad
            onClickConfirmation={onClickConfirmation}
            value={isConfirmed}
          />
        </Item>
      </Grid>
      <Grid item xs={4} md={3}>
        <Item sx={{ paddingLeft: '15px' }}>
          <Button
            sx={{
              
              textTransform: 'capitalize',
              width: 'fit-content',
              padding:'10px 30px',
            }}
            variant='contained'
            onSubmit={handleData}>
            Envoyer
          </Button>
        </Item>
      </Grid>
    </Grid>
  );
}

import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormConge from '../../components/demande de conge/FormConge';
import { fetchProjects } from '../../redux/projectsSlice';
import { fetchSituationsProjects } from '../../redux/situationsProjectsSlice';
import { fetchTypeConges } from '../../redux/typeCongesSlice';

export default function DemandeConge() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchSituationsProjects());
    dispatch(fetchTypeConges());
  }, [dispatch]);

  return (
    <Grid
      container
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Grid sx={{ paddingBottom: '20px' }}>
        <a
          style={{ textDecoration: 'none', color: '#81869A', fontSize: '14px' }}
          href='/Administratif'>
          Services&nbsp;&gt;&nbsp;
        </a>
        <a
          style={{ textDecoration: 'none', color: '#81869A', fontSize: '14px' }}
          href='/demandeAbsence'>
          Demandes d'absences
        </a>
      </Grid>
      <Grid
        sx={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '12px',
          borderRadius: '4px',
        }}>
        <FormConge />
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}

import { Grid } from '@mui/material';
import React from 'react';
import FormConge from '../../components/demande de conge/FormConge';

export default function DemandeConge() {
  return (
    <Grid
      container
      sx={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Grid>
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
          // alignItems: 'center',
          borderRadius: '4px',
        }}>
        <FormConge />
      </Grid>
      <Grid></Grid>
    </Grid>
  );
}

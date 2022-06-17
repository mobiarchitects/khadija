import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FormConge from '../../components/demande de conge/FormConge';
import TableConge from '../../components/demande de conge/TableConge';
import { fetchCongePaginations } from '../../redux/congePaginationSlice';
import { fetchConges } from '../../redux/congesSlice';
import { fetchProjects } from '../../redux/projectsSlice';
import { fetchSituationsProjects } from '../../redux/situationsProjectsSlice';
import { fetchTypeConges } from '../../redux/typeCongesSlice';
import { Link } from 'react-router-dom';

export default function DemandeConge() {
  const dispatch = useDispatch();

  const handlePaginationClick = (data) => {
    console.log('my data', data);
    dispatch(fetchCongePaginations(data.selected + 1));
  };

  useEffect(() => {
    dispatch(fetchConges());
    dispatch(fetchCongePaginations(1));
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
        <Link
          to='/Administratif'
          style={{
            textDecoration: 'none',
            color: '#81869A',
            fontSize: '14px',
          }}>
          Services&nbsp;&gt;&nbsp;
        </Link>
        <Link
          to='/demandeAbsence'
          style={{
            textDecoration: 'none',
            color: '#81869A',
            fontSize: '14px',
          }}>
          Demandes d'absences
        </Link>
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
      <Grid
        sx={{
          paddingTop: '30px',
          paddingBottom: '33px',
          color: '#101F53',
          fontSize: '18px',
          fontWeight: 'bold',
        }}>
        Mes demandes
      </Grid>
      <Grid>
        <TableConge handlePaginationClick={handlePaginationClick} />
      </Grid>
    </Grid>
  );
}

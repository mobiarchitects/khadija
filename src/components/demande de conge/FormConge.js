import { Box, Button } from '@mui/material';
import React from 'react';
import ConfirmationParSquad from './ConfirmationParSquad';
import DateDebutConge from './DateDebutConge';
import DateFinConge from './DateFinConge';
import TypeCongesSelect from './TypeCongesSelect';
import TypeProjectsSelect from './TypeProjectsSelect';
import TypeSituationsSelect from './TypeSituationsSelect';

export default function FormConge() {
  return (
    <Box
      bgcolor='white'
      width='95%'
      paddingLeft='30px'
      paddingTop='30px'
      sx={{
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      <TypeCongesSelect />
      <DateDebutConge />
      <DateFinConge />
      <TypeProjectsSelect />
      <TypeSituationsSelect />
      <ConfirmationParSquad />
      {/* <Button variant="contained">Envoyer la demande</Button> */}
    </Box>
  );
}

import { Box, Button } from '@mui/material';
import { display } from '@mui/system';
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
      width='100%'
      paddingLeft='30px'
      paddingTop='30px'
      sx={{
        borderRadius: '4px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: '30px',
        paddingRight: '25px',
      }}>
      <TypeCongesSelect />
      <DateDebutConge />
      <DateFinConge />
      <TypeProjectsSelect />
      <TypeSituationsSelect />
      <ConfirmationParSquad />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Button
          variant='contained'
          size='medium'
          sx={{ marginTop: '20px', width: '288px' }}>
          Envoyer la demande
        </Button>
      </div>
    </Box>
  );
}

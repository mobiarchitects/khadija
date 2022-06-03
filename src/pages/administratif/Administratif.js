import React from 'react';
import AdministratifSer from '../../components/servicesAdministratif/AdministratifSer';
import Profile from '../../components/profile/Profile';
import News from '../../components/actualites/News';
import ListServAdmin from '../../components/servicesAdministratif/ListServAdmin';
import { Box } from '@mui/material';

export default function Administratif() {
  return (
    <Box sx={{ padding: '20px' }}>
      <p style={{ color: ' #101F53', fontWeight: 'bold', fontSize: '18px' }}>
        Services
      </p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column' }}>
          <AdministratifSer />
          <ListServAdmin />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div style={{ paddingBottom: '20px' }}>
            <Profile />
          </div>
          <div>
            <News />
          </div>
        </div>
      </div>
    </Box>
  );
}

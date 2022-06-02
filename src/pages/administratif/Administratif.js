import React from 'react';
import AdministratifSer from '../../components/servicesAdministratif/AdministratifSer';
import Profile from '../../components/profile/Profile';
import News from '../../components/actualites/News';
import ListServAdmin from '../../components/servicesAdministratif/ListServAdmin';

export default function Administratif() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <AdministratifSer />
        <ListServAdmin />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '68px' }}>
        <div>
          <Profile />
        </div>
        <div style={{ marginTop: '20px' }}>
          <News />
        </div>
      </div>
    </div>
  );
}

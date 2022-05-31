import React from 'react';
import AllServices from '../../components/allServices/AllServices';
import Dash from '../../components/itemDashboard/Dash';
import Profile from '../../components/profile/Profile';
import News from '../../components/actualites/News';

export default function Dashboard() {
  return (
    <div>
      <Dash />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AllServices />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '66px',
             marginRight:'6px'
          }}>
          <Profile />
          <div style={{marginTop:'20px'}}><News /></div>
        </div>
      </div>
    </div>
  );
}

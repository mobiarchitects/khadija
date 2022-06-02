import React from 'react';
import AllServices from '../../components/allServices/AllServices';
import Dash from '../../components/itemDashboard/Dash';
import Profile from '../../components/profile/Profile';
import News from '../../components/actualites/News';

export default function Dashboard() {
  return (
    <div>
      <Dash />
      <p
        style={{
          paddingLeft: '20px',
          color: ' #101F53',
          fontWeight: 'bold',
          fontSize: '18px',
        }}>
        Services
      </p>
      <div
        style={{ display: 'flex', flexDirection: 'row', padding: '0px 20px' }}>
        <AllServices />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <Profile />
          <div style={{ marginTop: '20px' }}>
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import AllServices from '../../components/allServices/AllServices';
import Dash from '../../components/itemDashboard/Dash';

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Dash />
      <div>
        <AllServices />
      </div>
    </div>
  );
}

import React from 'react';
import SocialSer from '../../components/servicesSocial/SocialSer';
import Profile from '../../components/profile/Profile';
import News from '../../components/actualites/News';
import ListServSocial from '../../components/servicesSocial/ListServSocial';
import { Box } from '@mui/material';



export default function Social() {
  return ( <Box sx={{ padding: '20px' }}>
      <p style={{ color: ' #101F53', fontWeight: 'bold', fontSize: '18px' }}>
        Services
      </p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column' }}>
          <SocialSer />
          <ListServSocial />
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

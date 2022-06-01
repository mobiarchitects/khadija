import React from 'react';
import SocialSer from '../../components/servicesSocial/SocialSer';
import Profile from '../../components/profile/Profile';
import News from '../../components/actualites/News';
import ListServSocial from '../../components/servicesSocial/ListServSocial';



export default function Social() {
  return (  <div style={{display:'flex' , flexDirection:'row'}}>
      <div style={{display:'flex', flexDirection:'column'}}>
        <SocialSer />
        <ListServSocial />
        </div>
      <div style={{display:'flex' , flexDirection:'column' , marginTop:'68px' , marginRight:'6px'}}>
        <div><Profile /></div>
        <div style={{marginTop:"20px"}}>
          <News />
        </div>
      </div>
    </div>);
}

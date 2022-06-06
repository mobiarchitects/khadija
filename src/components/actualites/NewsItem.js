import { Box } from '@mui/material';
import React from 'react';
import './news.css';
import moment from 'moment';

export default function NewsItem({ item }) {
  return (
    <Box sx={{ padding: '10px' }}>
      <div className='news-item'>
        <div style={{ paddingRight: '10px' }}>
          <img style={{ width: '60px', height: '60px' }} src={item.docUrl} />
        </div>
        <div className='title-date'>
          <div className='title'>{item.title}</div>
          <div className='date'>
            {moment(item.createdOn).format('DD/MM/YYYY')}
          </div>
        </div>
      </div>
    </Box>
  );
}

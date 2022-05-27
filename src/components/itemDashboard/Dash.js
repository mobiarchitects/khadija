import React from 'react';
import '../styles/dash.css';
import DashItem from './DashItem';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const listDashboard = [
  {
    id: 1,
    title: 'Document administratif',
    counter: 0,
    icon: <WorkOutlineOutlinedIcon sx={{ color: '413F42' }} />,
  },
  {
    id: 2,
    title: 'Demande Social',
    counter: 2,
    icon: <ConfirmationNumberOutlinedIcon sx={{ color: '413F42' }} />,
  },
  {
    id: 3,
    title: 'Demande Medical',
    counter: 3,
    icon: <LanguageOutlinedIcon sx={{ color: '413F42' }} />,
  },
  {
    id: 4,
    title: 'Demande Day to Day',
    counter: 8,
    icon: <StoreMallDirectoryOutlinedIcon sx={{ color: '413F42' }} />,
  },
];
const displayDashboard = () => {
  return listDashboard.map((item) => <DashItem key={item.id} item={item} />);
};

export default function Dash() {
  return (
    <div className='dash'>
      <div className='dash-title'>Dashboard</div>
      <div className='dash-item'>{displayDashboard()}</div>
    </div>
  );
}

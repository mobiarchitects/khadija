import React from 'react';
import '../styles/sideBar.css';
import LogoSideBar from './LogoSideBar';
import NavigationSideBar from './NavigationSideBar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';


const listNavigation = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <HomeOutlinedIcon sx={{ color: '#fff' }} />,
    lien: '/Dashboard',
  },
  {
    id: 2,
    title: 'Administratif',
    icon: <WorkOutlineOutlinedIcon sx={{ color: '#fff' }} />,
    lien: '/Administratif',
  },
  {
    id: 3,
    title: 'Social',
    icon: <ConfirmationNumberOutlinedIcon sx={{ color: '#fff' }} />,
    lien: '/Social',
  },
  {
    id: 4,
    title: 'Medical',
    icon: <LanguageOutlinedIcon sx={{ color: '#fff' }} />,
    lien: '/Medical',
  },
  {
    id: 5,
    title: 'Day to Day',
    icon: <StoreMallDirectoryOutlinedIcon sx={{ color: '#fff' }} />,
    lien: '/Day-to-Day',
  },
];
const displayItemNavigation = () => {
  return listNavigation.map((item) => (
    <NavigationSideBar key={item.id} item={item} />
  ));
};

export default function SideBar() {
  return (
    <div className='sidebar'>
      <LogoSideBar />
      <div className='nav-sidebar'>{displayItemNavigation()}</div>
    </div>
  );
}

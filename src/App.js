import './App.css';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Social from './pages/social/Social';
import Medical from './pages/medical/Medical';
import DayToDay from './pages/day to day/DayToDay';
import Administratif from './pages/administratif/Administratif';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <div>
        <NavBar />
        <Routes>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/Social' element={<Social />} />
          <Route path='/Administratif' element={<Administratif />} />
          <Route path='/Medical' element={<Medical />} />
          <Route path='//Day-to-Day' element={<DayToDay />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Social from './pages/social/Social';
import Medical from './pages/medical/Medical';
import DayToDay from './pages/day to day/DayToDay';
import Administratif from './pages/administratif/Administratif';

import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import DemandeConge from './pages/administratif/DemandeConge';
import Login from './pages/login/Login';
import { useSelector } from 'react-redux';
import { getJwToken } from './utils/getJwToken';

function App() {
  const isAuth = useSelector((state) => state.login.isAuth);
 
  return (
    <div>
      {isAuth ? (
        <div className='App'>
          <SideBar />
          <div style={{ flex: 10 }}>
            <NavBar />
            <Routes>
              <Route path='/Dashboard' element={<Dashboard />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='/Social' element={<Social />} />
              <Route path='/Administratif' element={<Administratif />} />
              <Route path='/Medical' element={<Medical />} />
              <Route path='/Day-to-Day' element={<DayToDay />} />
              <Route path='/demandeAbsence' element={<DemandeConge />} />
            </Routes>
          </div>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
}

export default App;

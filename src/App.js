import './App.css';
import AllServices from './components/allServices/AllServices';
import Dashboard from './components/dashboard/Dashboard';
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';
import Profile from './components/profile/Profile';
import News from './components/actualites/News';

function App() {
  return (
    <div className='App'>
      <SideBar />
      <div className='layout'>
        <NavBar />
        <Dashboard />
        <div className='services'>
          <AllServices />
          <div className='news'>
            <Profile />
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

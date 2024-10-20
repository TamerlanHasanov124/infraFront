import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Profile from './pages/Profile/Profile';
import Settings from './pages/Settings/Settings';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Route>
    </Routes>
  );
}

export default App;

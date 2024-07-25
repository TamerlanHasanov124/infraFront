import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <Content/>
      <SideBar/>
    </div>
  );
}

export default App;

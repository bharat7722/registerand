import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Weather from './pages/Weather';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Weather/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

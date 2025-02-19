import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherContext from './componentes/WeatherContext ';
import NavBar from './componentes/NavBar';
import WeatherProvider from './componentes/WeatherProvider';

function App() {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<WeatherContext />} />
          <Route path="/detalle" element={<WeatherProvider />} />
        </Routes>
  </Router>
  );
}

export default App;

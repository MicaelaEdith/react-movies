import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TarjetaDetalle from './components/TarjetaDetalle';
import Buscador from './components/Buscador';

const App = () => {
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  return (
    <Router>
      <Buscador onBuscar={setResultadosBusqueda} />
      <Routes>
        <Route path="/" element={<Home resultadosBusqueda={resultadosBusqueda} />} />
        <Route path="/detalle/:id" element={<TarjetaDetalle />} />
      </Routes>
    </Router>
  );
};

export default App;

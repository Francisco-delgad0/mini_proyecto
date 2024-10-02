import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./componenetes/Footer"; 
import Navbar from "./componenetes/Navbar";
import Homepage from "./paginas/Homepage";
import Cartelera from "./paginas/cartelera"
import Cines from "./paginas/cines";
import Confiteria from "./paginas/confiteria";
import DetallesPelicula from "./paginas/DetallesPelicula";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Cartelera" element={<Cartelera />} />
          <Route path="/Cines" element={<Cines />} />
          <Route path="/Confiteria" element={<Confiteria />} />
          <Route path="/DetallesPelicula/:id" element={<DetallesPelicula />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;

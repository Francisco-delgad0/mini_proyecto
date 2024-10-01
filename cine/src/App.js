import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./componenetes/Footer"; 
import Navbar from "./componenetes/Navbar";
import Homepage from "./paginas/Homepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;

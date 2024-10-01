
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function Navbar(){
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div class="container-fluid">        
        <NavLink to="/Homepage" className="navbar-brand text-white" activeclassname="is-active" exact="true">CineApp</NavLink>
        <NavLink to="/Cartelera" className="nav-link text-white" activeClassName="is-active">Cartelera</NavLink>
        <NavLink to="/Localidades" className="nav-link text-danger" activeClassName="isactive">Cines</NavLink>
        <NavLink to="/Confiteria" className="nav-item" activeClassName="is-active">Confitería</NavLink>
        <NavLink to="/Login" className="nav-button">Iniciar Sesión</NavLink>
        <span className="nav-indicador"></span>
      </div>
    </nav>
  );
}

export default Navbar;

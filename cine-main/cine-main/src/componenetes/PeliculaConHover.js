import '../App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const PeliculaConHover = ({ pelicula, imagePath }) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 mb-4 movie-card"> 
            <div className="overlay">
                <NavLink to={`/DetallesPelicula/${pelicula.id}`} className="nav-link">
                    <img 
                        src={`${imagePath}/${pelicula.poster_path}`} 
                        className="card-img-top movie-poster img-fluid movie-card-image"  
                        alt={pelicula.title} 
                    /> 
                </NavLink>
            </div>
        </div>
    );
};

export default PeliculaConHover;

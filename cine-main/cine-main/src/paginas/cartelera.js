import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';
import PeliculaConHover from '../componenetes/PeliculaConHover';

const Cartelera = () => {
  const [cartelera, setCartelera] = useState([]);
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "66b7a456851fd240629f9890c2795696";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetchCartelera();
  }, []);

  const fetchCartelera = async () => {
    try {
      const { data: { results } } = await axios.get(`${API_URL}/movie/now_playing`, {
        params: {
          api_key: API_KEY,
        },
      });

      const slicedCartelera = results.slice(0, 6);
      setCartelera(slicedCartelera);
    } catch (error) {
      console.error('Error fetching cartelera:', error);
    }
  };

  return (
    <div>
      <div className="container mb-2">
        <h1 className="text-white text-center mt-4 mb-3">Cartelera</h1>
        <div className="row">
          {cartelera.map((pelicula) => (
            <PeliculaConHover key={pelicula.id} pelicula={pelicula} imagePath={IMAGE_PATH} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cartelera;

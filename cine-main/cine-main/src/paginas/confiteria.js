import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Confiteria = () => {
  const menuItems = [
    {
      id: 1,
      nombre: 'Combo 1: Popcorn grande + Bebida grande',
      precio: '$5.500',
      imagen: 'https://via.placeholder.com/300x200?text=Combo+1',
    },
    {
      id: 2,
      nombre: 'Combo 2: Hot dog + Bebida mediana',
      precio: '$4.000',
      imagen: 'https://via.placeholder.com/300x200?text=Combo+2',
    },
    {
      id: 3,
      nombre: 'Combo 3: Nachos + Bebida grande',
      precio: '$6.000',
      imagen: 'https://via.placeholder.com/300x200?text=Combo+3',
    },
    {
      id: 4,
      nombre: 'Palomitas medianas',
      precio: '$3.000',
      imagen: 'https://via.placeholder.com/300x200?text=Palomitas',
    },
    {
      id: 5,
      nombre: 'Bebida grande',
      precio: '$2.500',
      imagen: 'https://via.placeholder.com/300x200?text=Bebida+Grande',
    },
    {
      id: 6,
      nombre: 'Chocolates',
      precio: '$2.000',
      imagen: 'https://via.placeholder.com/300x200?text=Chocolates',
    },
  ];

  return (
    <div className="container mb-2">
      <h1 className="text-white text-center mt-4 mb-3">Menú de Confitería</h1>
      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card bg-dark text-white">
              <img src={item.imagen} className="card-img-top" alt={item.nombre} />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.precio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Confiteria;

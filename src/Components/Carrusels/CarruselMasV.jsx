import publi01 from '../imagenes/detalleB01.png';
import publi02 from '../imagenes/detalleB02.png';
import publi03 from '../imagenes/detalleB03.png';
import publi04 from '../imagenes/detalleB04.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';


import '../CSS/Carrusel.css'
import '../Productos/Productos.css'
import '../CSS/Home.css'
import Cards from '../Card';

export default function CarruselMasV(){

  const allZapas = useSelector((state) => state.zapas);
  const [currentPage, setCurrentPage] = useState(1);
  const [zapasPerPage, setZapasPerPage] = useState(1);
  const indexOfLastZapa = currentPage * zapasPerPage;
  const indexOfFirstZapa = indexOfLastZapa - zapasPerPage;
  const currentZapas = allZapas.slice(indexOfFirstZapa, indexOfLastZapa);

  return(
<div>
  <div>
    <h1 className='palabras'>Mas Vendidos</h1>
  </div>
      <Carousel variant="dark">
      <Carousel.Item>
      
      {currentZapas.map((e, i) => {
          return (
            <div className="cartas" key={i}>
              <Link to={"/zapatillas/" + e._id} className="cardLink">
                <Cards
                  marca={e.marca}
                  image={e.imagenes && e.imagenes[0]}
                  modelo={e.modelo}
                  precio={e.precio}
                />
              </Link>
            </div>
          );
        })}
      <img
      className="propa"
      src={publi01}
      alt="First slide"
      />
      
      
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/zapatillas/63c59f1b822019881ceef8d8'>
<img
className="propa"
src={publi02}
alt="Second slide"
/>
</Link>

</Carousel.Item>
<Carousel.Item>
<Link to='/zapatillas/63c59f1b822019881ceef8cd'>
<img
className="propa"
src={publi03}
alt="Third slide"
/>
</Link>

</Carousel.Item>

<Carousel.Item>
<Link to='/zapatillas/63c59f1b822019881ceef8f6'>
<img
className="propa"
src={publi04}
alt="Forth slide"
/>
    </Link>
    
    </Carousel.Item>
    </Carousel>
</div>
    )  
}
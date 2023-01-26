import Carousel from 'react-bootstrap/Carousel';
import card01 from '../imagenes/B01.png'
import card02 from '../imagenes/B02.png'
import card03 from '../imagenes/B03.png'
import card04 from '../imagenes/B04.png'

import '../CSS/Carrusel.css'
import '../CSS/Home.css'
import { Link } from 'react-router-dom';

export default function Carrusel() {
  return (
    
    <Carousel variant="dark">
      <Carousel.Item >
      <Link to='/zapatillas/63d19e5bc0f2a5fa2cb35b02'>
        <img
          className="carru"
          src={card01}
          alt="First slide"
        />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item>
        <Link to='/zapatillas/63d19e5bc0f2a5fa2cb35b0f'>
        <img
          className="carru"
          src={card02}
          alt="Second slide"
          />
          </Link>
        
      </Carousel.Item>
      <Carousel.Item>
      <Link to='/zapatillas/63d19e5bc0f2a5fa2cb35b1c'>
        <img
          className="carru"
          src={card03}
          alt="Third slide"
        />
        </Link>
        
      </Carousel.Item>

      <Carousel.Item>
      <Link to='/zapatillas/63d19e5bc0f2a5fa2cb35b2f'>
        <img
          className="carru"
          src={card04}
          alt="Forth slide"
          />
          </Link>
        
      </Carousel.Item>
    </Carousel>
    
  );
}

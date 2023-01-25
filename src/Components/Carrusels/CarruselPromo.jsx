import publi01 from '../imagenes/detalleB01.png';
import publi02 from '../imagenes/detalleB02.png';
import publi03 from '../imagenes/detalleB03.png';
import publi04 from '../imagenes/detalleB04.png';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import '../CSS/Carrusel.css'

export default function CarruselPromo(){

  return(
<div>

      <Carousel variant="dark">
      <Carousel.Item>
      <a href='/zapatillas/63c59f1b822019881ceef8f0'>
      <img
      className="propa"
      src={publi01}
      alt="First slide"
      />
      </a>
      
      </Carousel.Item>
      <Carousel.Item>
      <a href='/zapatillas/63c59f1b822019881ceef8d8'>
<img
className="propa"
src={publi02}
alt="Second slide"
/>
</a>


</Carousel.Item>
<Carousel.Item>
<a href='/zapatillas/63c59f1b822019881ceef8cd'>
<img
className="propa"
src={publi03}
alt="Third slide"
/>
</a>

</Carousel.Item>

<Carousel.Item>
<a href='/zapatillas/63c59f1b822019881ceef8f6'>
<img
className="propa"
src={publi04}
alt="Forth slide"
/>
    </a>
    
    </Carousel.Item>
    </Carousel>
</div>
    )  
}
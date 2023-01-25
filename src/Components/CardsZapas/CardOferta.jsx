import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardOferta.css'

export default function CardOferta({id, marca, image, modelo, precio}){
   
       return(
        <div>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{marca}</Card.Title>
            <Card.Text>
              {modelo}
            </Card.Text>
            <Card.Title className='precioprev'>Precio: ${precio}</Card.Title>
            <Card.Title>OFERTA: ${precio /2}</Card.Title>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
          
        </div>
          );
       }


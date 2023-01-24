import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards({id, marca, image, modelo, precio}){
   
       return(
        <div>
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{marca}</Card.Title>
            <Card.Text>
              {modelo}
            </Card.Text>
            <Card.Title>${precio}</Card.Title>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
        
          <div>
             <h3>{marca}</h3>
             <img src={image} alt="imgcard" width='300px' height='200px' />
             <h4>{modelo}</h4>
             <div>
                <h5>{precio}</h5>
             </div>           
          </div>
        </div>
          );
       }
// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import './CardOferta.css'

// const CardOferta = React.forwardRef(({id, marca, image, modelo, precio}, ref) => {
//   const cardsBody = (
    
//        <Card.Body>
//          <Card.Title>{marca}</Card.Title>
//          <Card.Text>
//            {modelo}
//          </Card.Text>
//          <Card.Title className='precioprev'>${precio}</Card.Title>
//          <Card.Title>${precio /2}</Card.Title>
//          <Button variant="primary">Comprar</Button>
//        </Card.Body>
     
//   )

//   const content = ref ? (
//     <Card ref={ref} style={{ width: "15rem" }}>
//       <Card.Img variant="top" src={image} />
//       {cardsBody}
//     </Card>
//   ) : (
//     <Card style={{ width: "15rem" }}>
//       <Card.Img variant="top" src={image} />
//       {cardsBody}
//     </Card>
//   );

//   return content;
// })

// export default CardOferta;


import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardOferta.css'

export default function CardOferta({id, marca, image, modelo, precio}){
   
       return(
        <div>
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{marca}</Card.Title>
            <Card.Text>
              {modelo}
            </Card.Text>
            <Card.Title className='precioprev'>${precio}</Card.Title>
            <Card.Title>${precio /2}</Card.Title>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
          {/* <div>
             <h3>{marca}</h3>
             <img src={image} alt="imgcard" width='300px' height='200px' />
             <h4>{modelo}</h4>
             <div>
                <h5>{precio}</h5>
             </div>           
          </div> */}
        </div>
          );
       }


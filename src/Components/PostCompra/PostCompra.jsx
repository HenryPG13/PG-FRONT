import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


export default function PostCompra () {

    return(
    <>
        <h1>Su compra se realizo con exito!</h1>
    
     <Link to="/Home"><Button className='btnCart' variant="primary">Volver</Button></Link>
     <Link to="/perfilusuario"><Button className='btnCart' variant="primary">Ver Perfil</Button></Link>
    
    </>
     

    )
}

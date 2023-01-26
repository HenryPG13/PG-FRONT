import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import corredoras from '../imagenes/imagenLanding.png'

import './LandingPage.css'
// import fondo from '../imagenes/quimeyPesado.jpg'
export default function LandingPage(){
    return(
        

        <div 
        className='landing'
    
        >
            
            
            <p className="Ltitulo"> Bienvenidos...
            En FootShop usted encontrara esa zapatilla exclusiva que tanto quiso</p>
            <Link  to = '/home'>
            <button className='acceso'><span>Ingresar </span></button>
            </Link>
            <img 
            className='zapasLanding'
            src={corredoras}
            alt='zapa' />
            </div>
       
    )
}
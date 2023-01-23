import React from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.css'
import fondo from '../imagenes/quimeyPesado.jpg'
export default function LandingPage(){
    return(
        

        <div 
        className='landing'
    
        >
            
            
            <h1 className="Ltitulo"> Bienvenidos veamos que zapato precisa Cenicienta</h1>
            <Link to = '/home'>
            <button className='acceso' >Ingresar</button>
            </Link>
            </div>
       
    )
}
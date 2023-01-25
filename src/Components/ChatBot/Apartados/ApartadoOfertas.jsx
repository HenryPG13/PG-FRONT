import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListadoOfertas extends Component {
 
    

    render() {
        return (
            <div>
                <p>Aca tenes el Listado de Ofertas: </p>
                <Link to={'/zapatillas/ofertas'} target="_blank">Listado de Ofertas</Link>                
            </div>
        )
    }

    

}
export default ListadoOfertas;
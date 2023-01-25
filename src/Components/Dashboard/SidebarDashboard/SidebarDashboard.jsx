import React from 'react';
import style from './SidebarDashboard.module.css';
import NavDashboard from '../NavDashboard/NavDashboard.jsx'
import { Link } from 'react-router-dom';
import './SidebarDashboard.css'

export default function SidebarDashboard (){
    return (
        <div >
            {/* <NavDashboard/> */}
            <Link className='listadoLink' to={'/tablerousuarios'}><p>Usuarios</p></Link>
            <Link className='listadoLink' to={'/tableroproductos'}><p>Productos</p></Link>
            <Link to={'/tablerordenes'}><p>Ordenes</p></Link>
            <Link to={'/tablerorevisiones'}><p>Revisiones</p></Link>
        </div>
    )
}
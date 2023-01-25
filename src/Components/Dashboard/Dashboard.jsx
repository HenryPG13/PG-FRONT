import React from "react";
import { Link } from "react-router-dom";
import SidebarDashboard from './SidebarDashboard/SidebarDashboard.jsx'
import './Dashboard.css'
import NavDashboard from "./NavDashboard/NavDashboard.jsx";

export default function Dashboard () {
    
    return (
        <div>
            <h1 className="DashTitulo"> Dashboard de Administrador</h1>
            
            {/* <NavDashboard/> */}
            <div className='listadoLink'>

            <Link to={'/tablerousuarios'}><p>Usuarios</p></Link>
            <Link to={'/tableroproductos'}><p>Productos</p></Link>
            <Link to={'/tablerordenes'}><p>Ordenes</p></Link>
            <Link to={'/tablerorevisiones'}><p>Revisiones</p></Link>
            </div>
        
            {/* <SidebarDashboard/> */}
        </div>
    )
}
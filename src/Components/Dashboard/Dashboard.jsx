import React from "react";
import { Link } from "react-router-dom";
import './Dashboard.css'


export default function Dashboard () {
    
    return (
        <div className="DashTitulo">
            <div className="From">

            

            <div className="listadoAdmnLink">
            <h1 > Dashboard Administrador</h1>

            <Link to={'/tablerousuarios'}>
            <input type="btnPerfAdm" value="Usuarios" />
            </Link>
            <Link to={'/tableroproductos'}>
            <input type="btnPerfAdm" value="Productos" />
            </Link>
            <Link to={'/tablerordenes'}>
            <input type="btnPerfAdm" value="Ordenes" />
            </Link>
            <Link to={'/tablerorevisiones'}>
            <input type="btnPerfAdm" value="Revisiones" />
            </Link>
            <Link to={'/sendNotification'}>
            <input type="btnPerfAdm" value="Notificaciones" />
                </Link>
            </div>
            </div>
        

        </div>
    )
}
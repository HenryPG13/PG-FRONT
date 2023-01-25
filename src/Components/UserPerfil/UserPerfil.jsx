import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleUser } from '../../Actions';


import './CSS/UserPerfil.css'

export const UserPerfil = () => {
    
    const userLog = useSelector(state => state.userLog);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(singleUser(userLog.userInfo._id))
    }, [])

    const user = useSelector(state => state.user)
    //favoritos, ordenes compra (filtrar por ID usuario), modificar info

    return (
        <div>
            <div className='estrcPerfilUsuario'>
            <h1 className='userprofTitulo'>Bienvenido {user.nombre}</h1>
                <h4>Informacion de usuario:</h4>
                <p>Nombre: {user.nombre}</p>
                <p>apellido: {user.apellido}</p>
                <p>E-mail: {user.email}</p>
                <p>Ciudad: {user.ciudad}</p>
                <p>Pais: {user.pais}</p>
                <p>Direccion: {user.direccion}</p>
                {/* <p>Tarjeta: {user.tarjeta}</p> */}
            </div>
            <div className='listadoOpcionesUsuario'>
            {
                user.admin &&
                <Link className='quepasa' to={"/perfiladmin"}>
                    <Button>Perfil admin</Button>
                </Link>
            }
                        <Link className='quepasa' to={`/perfilusuario/${user._id}/favoritos`}>
                <Button >favoritos</Button>
            </Link>
            <Link className='quepasa' to={`/perfilusuario/${user._id}/ordenesdecompra`}>
                <Button>Historial ordenes de compra</Button>
            </Link>
            <Link className='quepasa' to={`/perfilusuario/${user._id}/modificarinfo`}>
                <Button>Cambiar datos de usuario</Button>
            </Link>
            </div>
            <h5 className='detalleUsuarioPerfil'>*No es requerido agregar los datos de Ciudad, Pais y Direccion. Pero son necesarios para realizar el pedido*</h5>
        </div>
    )
};

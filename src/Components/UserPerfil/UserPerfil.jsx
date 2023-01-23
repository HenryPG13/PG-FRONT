import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { singleUser } from '../../Actions';

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
            <h1>Bienvenido {user.nombre}</h1>
            <div>
                <h3>Informacion de usuario:</h3>
                <p>Nombre: {user.nombre}</p>
                <p>apellido: {user.apellido}</p>
                <p>E-mail: {user.email}</p>
                <p>Cumpleaños: {user.cumpleaños}</p>
                <p>Ciudad: {user.ciudad}</p>
                <p>Pais: {user.pais}</p>
                <p>Direccion: {user.direccion}</p>
                <p>Tarjeta: {user.tarjeta}</p>
            </div>
            {
                user.admin &&
                <Link to={"/perfiladmin"}>
                    <button>Perfil admin</button>
                </Link>
            }
            <Link to={`/home`}>
                <button>a comprar!</button>
            </Link>
            <Link to={`/perfilusuario/${user._id}/favoritos`}>
                <button>favoritos</button>
            </Link>
            <Link to={`/perfilusuario/${user._id}/ordenesdecompra`}>
                <button>Historial ordenes de compra</button>
            </Link>
            <Link to={`/perfilusuario/${user._id}/modificarinfo`}>
                <button>Cambiar datos de usuario</button>
            </Link>
            <h1>Esta logeado</h1>
        </div>
    )
};

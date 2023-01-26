import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './CSS/UpdateUser.css';

export const UpdateUser = () => {

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const INITIAL_STATE = {
        nombre: user.nombre ? user.nombre : "",
        apellido: user.apellido ? user.apellido : "",
        email: user.email ? user.email : "",
        ciudad: user.ciudad ? user.ciudad : "",
        pais: user.pais ? user.pais : "",
        direccion: user.direccion ? user.direccion : "",
        contraseña: user.contraseña ? user.contraseña : "",
    };

    const [data, setData] = useState(INITIAL_STATE);


    const handleChange = (evt) => {
        const { name, value } = evt.currentTarget;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handleSubmitRegister = (evt) => {
        evt.preventDefault();
        const _id = user._id
        dispatch(updateUser({ _id, data }));
        setData(INITIAL_STATE);
        navigate("/home")
    };

    return (
        <div className='fondoCambioUsuario' >
            <div className='centro'>
            <h3>Datos de usuario</h3>
            <form onSubmit={handleSubmitRegister}>
                <div className='recuadroInfo'>
                    <p>Nombre</p>
                    <input
                        placeholder="Nombre"
                        value={data.nombre}
                        name="nombre"
                        onChange={handleChange}
                        type="text"
                       
                    />
                </div>

                <div className='recuadroInfo'>
                    <input
                        placeholder="apellido"
                        value={data.apellido}
                        name="apellido"
                        onChange={handleChange}
                        type="text"
                        
                        />
                        <span></span>
                    <label>Apellido</label>
                </div>

                <div className='recuadroInfo'>
                    <p>E-mail</p>
                    <input
                        placeholder="email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                    
                    />
                </div>

                <div className='recuadroInfo'>
                    <input
                        placeholder="ciudad"
                        value={data.ciudad}
                        name="ciudad"
                        onChange={handleChange}
                        type="text"
                        />
                        <span></span>
                        <label>Ciudad</label>
                </div>

                <div className='recuadroInfo'>
                    <input
                        placeholder="pais"
                        value={data.pais}
                        name="pais"
                        onChange={handleChange}
                        type="text"
                        />
                    <span></span>
                    <label>Pais</label>
                </div>

                <div className='recuadroInfo'>
                    <input
                        placeholder="direccion"
                        value={data.direccion}
                        name="direccion"
                        onChange={handleChange}
                        type="text"
                        />
                        <span></span>
                        <label>Direccion</label>
                </div>

                <div className='recuadroInfo'>
                    <input
                        placeholder="Contraseña"
                        value={data.contraseña}
                        name="contraseña"
                        onChange={handleChange}
                        type="password"
                        
                        />
                        <span></span>
                        <label>Contraseña</label>
                </div>

                <div >
                <input type="submit" value="Guardar Cambios" />
                    {/* <button className='bttnGuardar'>Guardar cambios</button> */}
                </div>
            </form>
            </div>
        </div>

    );
};

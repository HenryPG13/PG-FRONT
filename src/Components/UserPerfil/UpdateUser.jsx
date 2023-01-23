import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        <div >
            <h3 >Datos de usuario.</h3>
            <form onSubmit={handleSubmitRegister}>
                <div>
                    <p >Nombre</p>
                    <input
                        placeholder="Nombre"
                        value={data.nombre}
                        name="nombre"
                        onChange={handleChange}
                        type="text"
                    />
                </div>

                <div>
                    <p>Apellido</p>
                    <input
                        placeholder="apellido"
                        value={data.apellido}
                        name="apellido"
                        onChange={handleChange}
                        type="text"
                    />
                </div>

                <div>
                    <p>E-mail</p>
                    <input
                        placeholder="email"
                        value={data.email}
                        name="email"
                        onChange={handleChange}
                        type="email"
                    />
                </div>

                <div>
                    <p>Ciudad</p>
                    <input
                        placeholder="ciudad"
                        value={data.ciudad}
                        name="ciudad"
                        onChange={handleChange}
                        type="text"
                    />
                </div>

                <div>
                    <p>Pais</p>
                    <input
                        placeholder="pais"
                        value={data.pais}
                        name="pais"
                        onChange={handleChange}
                        type="text"
                    />
                </div>

                <div>
                    <p>Direccion</p>
                    <input
                        placeholder="direccion"
                        value={data.direccion}
                        name="direccion"
                        onChange={handleChange}
                        type="text"
                    />
                </div>

                <div>
                    <p>Contraseña</p>
                    <input
                        placeholder="Contraseña"
                        value={data.contraseña}
                        name="contraseña"
                        onChange={handleChange}
                        type="password"
                    />
                </div>

                <div >
                    <button >Guardar cambios</button>
                </div>
            </form>
        </div>

    );
};

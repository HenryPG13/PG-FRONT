import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logUser } from '../../Actions';

export const LoginGeneral = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");

    const user = useSelector(state => state.userLog)

    const { error, userInfo } = user


    useEffect(() => {
        if (userInfo) {
            return navigate("/perfilusuario")
        }
    }, [userInfo]);

    const handleLog = (e) => {
        e.preventDefault();
        dispatch(logUser(email, contraseña));
        setContraseña('');
        setEmail("");
    }

    return (
        <div>
            {error && <p>Usuario y/o contraseña errados</p>}
            <form onSubmit={handleLog}>
                <div>
                    <p>Email</p>
                    <input
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                    />
                </div>
                <div>
                    <p>Contraseña</p>
                    <input
                        name='contraseña'
                        value={contraseña}
                        onChange={(e) => setContraseña(e.target.value)}
                        type="text"
                    />
                </div>
                <button type='submit'>Ingresar</button>
            </form>
            <Link to={"/crearusuario"}>
                <button>Crear cuenta</button>
            </Link>
            <Link to={"/login/google"}>
                <button>Ingresa con tu cuenta de Google</button>
            </Link>
        </div>
    )
};
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logUser } from "../../Actions";
import { Button, Form } from "react-bootstrap";

import "./CSS/LoginGeneral.css";

import { useLocalStorage } from '../../Hooks/useLocalStorage'


export const LoginGeneral = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useLocalStorage( 'email', '');
  const [contraseña, setContraseña] = useLocalStorage('contraseña','');

  const user = useSelector((state) => state.userLog);

  const { error, userInfo } = user;

  useEffect(() => {
    if (userInfo) {
      return navigate("/home");
    }
  }, [userInfo]);

  const handleLog = (e) => {
    e.preventDefault();
    dispatch(logUser(email, contraseña));
    setContraseña("");
    setEmail("");
  };

  return (
    <div className="fondito">
      <div className="centro">
        {error && <p>Usuario y/o contraseña errados</p>}
        <h1>Login</h1>
        <form onSubmit={handleLog}>
          <div className="txtField">
            <input
              className="recuadroEmail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txtField">
            <input
              name="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              type="password"
              required
            />
            <span></span>
            <label>Contraseña</label>
          </div>
          <input type="submit" value="Ingresar" />
        </form>
        <Link to={"/crearusuario"}>
          <div className="signup_link">
            <a href="#">Crear Cuenta</a>
          </div>
        </Link>
        <Link to={"/login/google"}>
          <div className="signup_link">
            <a href="#">Ingresa con tu cuenta de Google</a>
          </div>
        </Link>
      </div>
    </div>
  );
};

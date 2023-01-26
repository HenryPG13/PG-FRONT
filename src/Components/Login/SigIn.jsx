import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Actions";
import { useNavigate } from "react-router-dom";

import './CSS/SingIn.css'

const INITIAL_STATE = {
  nombre: "",
  email: "",
  contraseña: "",
};

const CreateUserForm = () => {
  const [register, setRegister] = useState(INITIAL_STATE);
 
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmitRegister = async (evt) => {
    evt.preventDefault();
    dispatch(createUser(register));
    setRegister(INITIAL_STATE);
    navigate("/home")
  };

  return (
    <div className="fondoSingIn" >
      <div className="centro">

      <h3 >Registrate</h3>
      <form onSubmit={handleSubmitRegister}>
        <div className="txtField">
          <input
            placeholder="Nombre"
            value={register.nombre}
            name="nombre"
            onChange={handleChange}
            type="text"
            required
            />
            <span></span>
          <label>Nombre</label>
        </div>

        <div className="txtField">
          <input
            placeholder="Correo Electronico"
            value={register.email}
            name="email"
            onChange={handleChange}
            type="email"
            required
            />
            <span></span>
            <label>Correo Electronico</label>
        </div>

        <div className="txtField">
          <input
            placeholder="Contraseña"
            value={register.contraseña}
            name="contraseña"
            onChange={handleChange}
            type="password"
            required/>
            <span></span>
            <label>Contraseña</label>
        </div>

        <input type="submit" value="Ingresar" />
        
      </form>
            </div>
    </div>

  );
};

export default CreateUserForm;
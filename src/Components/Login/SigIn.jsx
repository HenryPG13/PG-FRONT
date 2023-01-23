import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../Actions";


const INITIAL_STATE = {
  nombre: "",
  email: "",
  contraseña: "",
};

const CreateUserForm = () => {
  const [register, setRegister] = useState(INITIAL_STATE);
 
  const dispatch = useDispatch();

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
  };

  return (
    <div >
      <h3 >Registrate.</h3>
      <form onSubmit={handleSubmitRegister}>
        <div>
          <p >Nombre</p>
          <input
            placeholder="Nombre"
            value={register.nombre}
            name="nombre"
            onChange={handleChange}
            type="text"
          />
        </div>

        <div>
          <p>Correo Electronico</p>
          <input
            placeholder="Correo Electronico"
            value={register.email}
            name="email"
            onChange={handleChange}
            type="email"
          />
        </div>

        <div>
          <p>Contraseña</p>
          <input
            placeholder="Contraseña"
            value={register.contraseña}
            name="contraseña"
            onChange={handleChange}
            type="password"
          />
        </div>

        <div >
          <button >Confirma registro</button>
        </div>
      </form>
    </div>

  );
};

export default CreateUserForm;
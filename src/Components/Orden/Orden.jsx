import React, { useEffect, useState} from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AgregarOrden } from "../../Actions";
import { Link } from "react-router-dom";
import { clearCart } from "../../Actions";
import swal from 'sweetalert';

export const Order = (prop) => {
    const { props } = prop;
    const [history, total] = props;

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    // const emailUser = useSelector((state) => state.user.email)
    const user = useSelector((state) => state.user)

    const [userId, setUserId] = useState("")
    const [mostrar, setMostrar] = useState(false)
    // const [userData, setUserData] = useState()
    const userData = useSelector((state) => state.user)

    const { register, formState: { errors }, handleSubmit, setValue } = useForm();

    // useEffect(() => {
    //     const getUser = async () => {
    //         const { data } = await axios.get(`http://localhost:3001/usuarios/${user._id}`);
    //         setUserData(data)
    //     }
    //     // getUser()
    // }, [userData])

    console.log("SOY USERDATA ", userData);

    useEffect(() => {

            setValue("nombre", `${userData?.nombre}`)
            setValue("apellido", `${userData?.apellido}`)
            setValue("telefono", `${userData?.telefono}`)  //capaz no va o capaz es del formulario de mercadopago
            setValue("email", `${userData?.email}`)
            setValue("calle", `${userData?.domicilio?.calle}`)  //capaz no va o capaz es del formulario de mercadopago
            setValue("numero", `${userData?.domicilio?.numero}`)  //capaz no va o capaz es del formulario de mercadopago
            setValue("cp", `${userData?.domicilio?.cp}`)  //capaz no va o capaz es del formulario de mercadopago
            setValue("localidad", `${userData?.ciudad}`)
            setValue("provincia", `${userData?.domicilio?.provincia}`)  //capaz no va o capaz es del formulario de mercadopago
            setUserId(userData?._id)

        
    }, [userData, setValue])

    const onSubmit = async () => {

        const items = cart.map(c => {
            return {
                marca: c.marca,
                nombreArticulo: c.modelo,
                precioVenta: c.precio,
                qty: c.qty,
                inventario: c.inventario,
                producto: c._id
            }
        })
        const order = {
            items: items,
            user: userId,
            direccion:"test2", //esto esta hardcodeado
            pais:"test",
            ciudad:"test1",
            total: total,
        }
        console.log(order)
        const respuesta = await dispatch(AgregarOrden(order))
        console.log("ESTA ES MI RESPUESTA ", respuesta);
        // dispatch(clearCart())
        swal({
            icon: "success",
            title: 'Felicidades, orden aprobada, dirijase a Checkout para completar el pago'
          });
        //console.log(respuesta)
        // history.replace({ pathname: "/Checkout", state: { preferenceId: `${respuesta}` } })
        // (<Link to="/zapatillas">Pagar</Link>)
    }

    return (
      <>
        <div className="p-2 align-items-center rounded-3 border confirm shadow-lg">
          <div className="card-header h6 text-center mb-3">
            <button
              className="btn btn-sm"
              onClick={() => {
                setMostrar(!mostrar);
              }}
            >
              <span className="h5 me-2 text-muted">
                Verificar dirección de envio
              </span>
              <i className="bi bi-eye text-primary" style={{ fontSize: 25 }} />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {mostrar === true && (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre"
                        name="nombre"
                        // readOnly
                        {...register("nombre")}
                      />
                    </div>
                    <span className="text-danger text-small d-block m-1">
                      {errors.nombre && errors.nombre.message}
                    </span>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apellido"
                        name="apellido"
                        // readOnly
                        {...register("apellido")}
                      />
                    </div>
                    <span className="text-danger text-small d-block m-1">
                      {errors.apellido && errors.apellido.message}
                    </span>
                  </div>
                </div>

                <div className="col">
                  <div className="input-group m-1 ">
                    <span className="input-group-text">Telef</span>
                    <input
                      type="number"
                      className="form-control text-center"
                      placeholder="Telefono"
                      name="telefono"
                      // readOnly
                      {...register("telefono")}
                    />
                  </div>
                  <span className="text-danger text-small d-block m-1">
                    {errors.telefono && errors.telefono.message}
                  </span>
                </div>

                <div className="col">
                  <div className="input-group m-1">
                    <span className="input-group-text">Email</span>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      // readOnly
                      {...register("email")}
                    />
                  </div>
                  <span className="text-danger text-small d-block m-1">
                    {errors.email && errors.email.message}
                  </span>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group m-1">
                      <span className="input-group-text">Calle</span>
                      <input
                        type="text"
                        className="form-control"
                        name="calle"
                        // readOnly
                        {...register("calle")}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.calle && errors.calle.message}
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group m-1">
                      <span className="input-group-text">N°</span>
                      <input
                        type="text"
                        className="form-control"
                        name="numero"
                        min="0"
                        // readOnly
                        {...register("numero")}
                      />
                    </div>
                    <span className="text-danger text-small d-block m-1">
                      {errors.numero && errors.numero.message}
                    </span>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="col">
                      <div className="input-group m-1">
                        <span className="input-group-text">Localidad</span>
                        <input
                          type="text"
                          className="form-control"
                          name="localidad"
                          // readOnly
                          {...register("localidad")}
                        />
                      </div>
                    </div>

                    <span className="text-danger text-small d-block mb-2 text-center">
                      {errors.localidad && errors.localidad.message}
                    </span>
                  </div>

                  <div className="col-md-6">
                    <div className="input-group m-1">
                      <span className="input-group-text">CP</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Codigo Postal"
                        name="cp"
                        // readOnly
                        {...register("cp")}
                      />
                    </div>

                    <span className="text-danger text-small d-block mb-2 text-center">
                      {errors.cp && errors.cp.message}
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="input-group m-1 ">
                    <span className="input-group-text">Provincia</span>
                    <input
                      type="text"
                      className="form-control text-center"
                      placeholder="Provincia"
                      name="provincia"
                      // readOnly
                      {...register("provincia")}
                    />
                  </div>
                  <span className="text-danger text-small d-block m-1">
                    {errors.provincia && errors.provincia.message}
                  </span>
                </div>
              </>
            )}
            <div className="d-grid">
              <div className="text-center gap-2 mt-3">
                {cart.length !== 0 &&
                                <button className="btn btn-sm me-2 text-success" style={{ fontSize: 25 }} type="submit">
                                    <i className="bi bi-check-circle" />
                                    <h6>Confirmar</h6>
                                </button>
                            }
                {/* <Link to="/Checkout" type="submit">Pagar</Link> */}

                {/* {mostrar === true &&
                                <Link to="/user" className="btn btn-sm text-warning" style={{ fontSize: 20 }}>
                                    <i className="bi bi-pencil-fill" />
                                    <h6>Cambiar dirección</h6>
                                </Link>
                            } */}
              </div>
            </div>
          </form>
        </div>
      </>
    );
}
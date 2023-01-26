import React, { useEffect, useState} from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AgregarOrden } from "../../Actions";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../../Actions";
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';

export const Order = (prop) => {
    const { props } = prop;
    const total = props;
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    // const emailUser = useSelector((state) => state.user.email)
    const user = useSelector((state) => state.user)

    const [userId, setUserId] = useState("");
    const [mostrar, setMostrar] = useState(false);
    const [linkMP, setLinkMP] = useState("");
    const [ordenFin, setOrdenFin] = useState(false);
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
            setValue("direccion", `${userData?.direccion}`)  //capaz no va o capaz es del formulario de mercadopago
            // setValue("numero", `${userData?.domicilio?.numero}`)  //capaz no va o capaz es del formulario de mercadopago
            setValue("cp", `${""}`)  //capaz no va o capaz es del formulario de mercadopago
            setValue("localidad", `${userData?.ciudad}`)
            setValue("pais", `${userData?.pais}`)  //capaz no va o capaz es del formulario de mercadopago
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
            direccion: userData.direccion?.length !== 0 ? userData.direccion : "No ingreso direccion", //esto esta hardcodeado
            pais: userData.pais?.length !== 0 ? userData.pais : "No ingreso pais",
            ciudad: userData.ciudad?.length !== 0 ? userData.ciudad : "No ingreso ciudad",
            total: total,
        }
        if (typeof order.direccion === 'undefined') {
          swal({
            icon: "warning",
            title: 'No has seleccionado una direccion para la orden de compra',
          });
        } else if (typeof order.pais === 'undefined') {
          swal({
            icon: "warning",
            title: 'No has seleccionado un pais para la orden de compra',
          });
        } else if (typeof order.ciudad === 'undefined') {
          swal({
            icon: "warning",
            title: 'No has seleccionado una ciudad para la orden de compra',
          });
        } else {
          const respuesta = await dispatch(AgregarOrden(order))
          // dispatch(AgregarOrden(order))
          // dispatch(AgregarOrden(order))
          // console.log("ESTA ES MI RESPUESTA ", respuesta);
          // dispatch(clearCart())
          setLinkMP(respuesta)
          setOrdenFin(true)
          swal({
            icon: "success",
            title: 'Felicidades, orden aprobada, proceda al boton de pagar para completar la orden',
          });
        }
        // console.log(order)
        // if (respuesta.estado === "ok") {
        // } else if (respuesta.estado === "fail") {
        //   swal({
        //     icon: "success",
        //     title: respuesta.msg,
        //   });
        // }
        
        // navigate(respuesta)
        //console.log(respuesta)
        // history.replace({ pathname: "/Checkout", state: { preferenceId: `${respuesta}` } })
        // (<Link to="/zapatillas">Pagar</Link>)
    }

    return (
      <>
        <div>
          <div className="card-header h6 text-center mb-3">
            <Link to={`/perfilusuario/${user._id}/modificarinfo`}>
            <button
              className="btn btn-sm"
              // onClick={() => {
              //   setMostrar(!mostrar);
              // }}
            >
              <span className="h5 me-2 text-muted">
                Cambiar datos para el envio
              </span>
              <i className="bi bi-eye text-primary" style={{ fontSize: 25 }} />
            </button>
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            {mostrar === true && (
              <>
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group m-1">
                    <span className="input-group-text">Nombre</span>
                      <input
                        type="text"
                        className="form-control"
                        
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
                    <span className="input-group-text">Apellido</span>
                      <input
                        type="text"
                        className="form-control"
                        
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

                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group m-1 ">
                      <span className="input-group-text">Telef</span>
                      <input
                        type="number"
                        className="form-control text-center"
                        
                        name="telefono"
                        // readOnly
                        {...register("telefono")}
                      />
                    </div>
                    <span className="text-danger text-small d-block m-1">
                      {errors.telefono && errors.telefono.message}
                    </span>
                  </div>

                  <div className="col-md-6">
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
                </div>


                <div className="row">
                  <div className="col-md-6">
                    <div className="input-group m-1">
                      <span className="input-group-text">Direccion</span>
                      <input
                        type="text"
                        className="form-control"
                        name="direccion"
                        // readOnly
                        {...register("direccion")}
                      />
                      <span className="text-danger text-small d-block mb-2">
                        {errors.direccion && errors.direccion.message}
                      </span>
                    </div>
                  </div>

                  {/* <div className="col-md-6">
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
                  </div> */}
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
                        <span className="text-danger text-small d-block mb-2 text-center">
                          {errors.localidad && errors.localidad.message}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* <div className="row">
                  </div> */}

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
                      <span className="text-danger text-small d-block mb-2 text-center">
                        {errors.cp && errors.cp.message}
                      </span>
                    </div>
                  </div>


                  <div className="col-md-6">
                    <div className="input-group m-1 ">
                      <span className="input-group-text">Pais</span>
                      <input
                        type="text"
                        className="form-control text-center"
                        placeholder="Pais"
                        name="pais"
                        // readOnly
                        {...register("pais")}
                      />
                    </div>
                    <span className="text-danger text-small d-block m-1">
                      {errors.provincia && errors.provincia.message}
                    </span>
                  </div>
                </div>
              </>
            )}
            
            
            <div className="d-grid">
              <div className="text-center gap-5 mb-2 mt-0">
                {cart.length !== 0 && (
                  <Button
                    variant='primary'
                    className="btn btn-sm me-2 text-white text-success"
                    style={{ fontSize: 25 }}
                    type="submit"
                  >
                    <i className="bi bi-check-circle" />
                    <h6>Comenzar proceso de pago</h6>
                  </Button>
                )}
                
                {ordenFin ? (
                  <div className="mt-3">
                    <Button 
                      variant="primary"
                      className="btn btn-sm me-2 text-white">
                      <a
                        href={linkMP}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        IR A PAGAR
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="mt-3">
                    <Button
                      variant='secondary'
                      className="border-0 text-white"
                      disabled
                    >
                      IR A PAGAR
                    </Button>
                  </div>
                )}
                {/* <Link to="/Checkout" type="submit">Pagar</Link> */}
                {/* <Link to="/checkout">
            <button className="bg-transparent border-0 text-white">
              Checkout
            </button>
          </Link> */}
                {/* {mostrar === true && (
                  <Link
                    to="/user"
                    className="btn btn-sm text-warning"
                    style={{ fontSize: 20 }}
                  >
                    <i className="bi bi-pencil-fill" />
                    <h6>Cambiar dirección</h6>
                  </Link>
                )} */}
              </div>
            </div>
          </form>
        </div>
      </>
    );
}
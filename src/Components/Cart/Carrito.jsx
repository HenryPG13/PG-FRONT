import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajustarCantidad, removerDelCarrito } from "../../Actions";
import NavBar from "../NavBar/NavBar";

export default function Carrito({history}){
    const dispatch = useDispatch();
    const carrito = useSelector(state => state.carrito);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [itemsTotal, setItemsTotal] = useState(0);

    useEffect(() => {
        let items = 0;
        let precio = 0;

        carrito.forEach((item) => {
            items += item.qty;
            precio += item.qty * item.precio;
        });

        setItemsTotal(items);
        setPrecioTotal(precio);
    }, [carrito, precioTotal, itemsTotal, setPrecioTotal, setItemsTotal])

    const handleInputChange = (event, id) => {
        dispatch(ajustarCantidad(id, event.target.value));
    }

    const borrarDeCarrito = (id) => {
        console.log("ESTOY REMOVIENDO ", id);
        
        dispatch(removerDelCarrito(id));
    }

    console.log("ESTE ES EL carrito ", carrito);

    return (
        <>
            <NavBar />
            <div className="b-example-divider"></div>

            <div className="container my-5">
                <div className="row">
                    {carrito.length === 0 ? 
                        (
                            <>
                                <div>
                                    <span> Tus carrito está vacío </span>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <ul>
                                    {(carrito.map((item, index) => (
                                        <li key={index}>
                                            <div className="row">
                                                {/* <div>
                                                    <img src={item.imagenes[0]} alt=".." />
                                                </div> */}

                                                <div>
                                                    <h3>{item.modelo}</h3>
                                                    <br />
                                                    <span>
                                                        ${item.qty && (item.precio * item.qty)}
                                                    </span>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col">
                                                            <span>Precio unitario: </span>
                                                            <span>${item.precio}</span>
                                                        </div>
                                                        <div className="col">
                                                            <span>{item.inventario}</span>
                                                            <span> disponibles.</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <input type="number"
                                                            className="form-control"
                                                            min="1"
                                                            name="qty"
                                                            value={item.qty}
                                                            onChange={(e) => handleInputChange(e, item._id)} 
                                                            />
                                                        </div>

                                                        <div className="col">
                                                            <button className="btn btn-danger" onClick={() => borrarDeCarrito(item._id)}>
                                                                Quitar item
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))
                                    )
                                    }
                                </ul>
                            </>)
                    }

                    <div className="col-5">
                        <div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <span>
                                        Cantidad de articulos:
                                    </span> {itemsTotal}
                                </div>
                                <div className="col-6">
                                    <span>
                                        Total:
                                    </span> $ {precioTotal}
                                </div>
                            </div>
                        </div>
                        {/* Aqui iria la Orden */}
                    </div>

                </div>
            </div>
        </>
    )
}

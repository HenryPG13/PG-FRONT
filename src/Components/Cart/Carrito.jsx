import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ajustarCantidad, removerDelCarrito } from "../../Actions";

import { useLocalStorage } from '../../Hooks/useLocalStorage'



export default function Carrito({history}){
   
    const dispatch = useDispatch();
    const carro = useSelector(state => state.cart);
    const [precioTotal, setPrecioTotal] = useLocalStorage('precioTotal','');
    const [itemsTotal, setItemsTotal] = useLocalStorage('itemTotal','');

let carrito = JSON.parse(localStorage.getItem('carrito')) || carro
    ////

// const saveLoca = () => {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//     }


//     //////////
//     const [update, setUpdate] = useState(false)
//   const navigate = useNavigate();

//   function handelClear() {
//     let boolean = window.confirm("Desea vaciar todo el carrito?")
//     if (boolean) {
//       localStorage.setItem("products", JSON.stringify([]))
//       setUpdate(!update)
//     }
//   }

//   function handelBuy() {
//     let productsStorage = JSON.parse(localStorage.getItem("itemsTotal"))
//     if (productsStorage.length) {
//       setUpdate(!update)
//       navigate("/compras")
//     } else {
//       alert("Para continuar con la compra, primero debes agregar productos a tu carrito.")
//     }
//   }
//   const elementsCart = JSON.parse(localStorage.getItem("itemsTotal"))

//   let total = elementsCart?.map(e => parseInt(e.price))

//   total = total.length > 1 ? total.reduce((a, b) => a + b, 0) : total

// ///////



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
                                                            // onClick={() => handelBuy()}
                                                            ///
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

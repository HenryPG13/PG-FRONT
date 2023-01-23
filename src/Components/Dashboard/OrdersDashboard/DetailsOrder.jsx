import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleOrder } from '../../../Actions';

export const DetailsOrder = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    const order = useSelector(state => state.order);

    useEffect(() => {
        console.log(id)
        dispatch(getSingleOrder(id))
    }, [dispatch]);


    return (
        <div>
            <h1>Detalle de la orden: </h1> 
            <p>Id orden: {order._id}</p>
            <p>Id usuario: {order.usuario}</p>
            <h3>Productos asociados a la orden de compra</h3>
            {order.orderItems?.map(e => {
                return (
                    <div>
                        <p>marca: {e.marca}</p>
                        <p>modelo: {e.modelo}</p>
                        <p>cantidad: {e.cantidad}</p>
                        <p>precio: {e.precio}</p>
                        <p>Id producto: {e.producto}</p>
                    </div>
                )
            })};
            <h3>Informacion de envio</h3>
            <p>Direccion: {order.direccionEntrega?.direccion}</p>
            <p>Ciudad: {order.direccionEntrega?.ciudad}</p>
            <p>Codigo postal: {order.direccionEntrega?.codigoPostal}</p>
            <p>Pais: {order.direccionEntrega?.pais}</p>
            <hr/>
            <h3>Precio total: {order.precioTotal}</h3>
        </div>
    )
};


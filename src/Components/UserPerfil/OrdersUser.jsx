import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getOrders } from '../../Actions';

export const OrdersUser = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrders())
    }, []);

    const orders = useSelector(state => state.orders);

    const ordersUser = orders.filter(e => e.usuario == id)

    //console.log(ordersUser)
    return (
        <div>
            <h1>Ordenes de compra</h1>
            {ordersUser?.map(e => {
                return (
                    <div>
                        <h2>Oden de compra No: {e._id}</h2>
                        <h3>Detalles de envio:</h3>
                        <p>Direccion: {e.direccionEntrega.direccion}</p>
                        <p>Ciudad: {e.direccionEntrega.ciudad}</p>
                        <p>Codigo postal: {e.direccionEntrega.codigoPostal}</p>
                        <p>Pais: {e.direccionEntrega.pais}</p>
                        <h3>Productos asociados</h3>
                        {e.orderItems?.map(p => {
                            return (
                                <div>
                                    <p>Marca: {p.marca}</p>
                                    <p>Modelo: {p.modelo}</p>
                                    <p>Precio: {p.precio}</p>
                                    <p>Cantidad: {p.cantidad}</p>
                                </div>
                            )
                        })}
                        <p>Precio total: {e.precioTotal}</p>
                        <p>Precio de envio: {e.precioEnvio}</p>
                        <p>Estado de entrega: {e.estadoEntrega ? <p>tu pedido ya fue entregado</p> : <p>Estamos trabajando para entregar tu pedido</p>}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

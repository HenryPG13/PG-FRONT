import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getOrders } from "../../Actions";
import Button from 'react-bootstrap/Button';
// import mercadopago from "mercadopago";
// import { useLocation } from "react-router-dom";
import { useMercadopago } from "react-sdk-mercadopago/lib";
import NavBar from "../NavBar/NavBar";

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allOrders = useSelector((state) => state.orders);
  const userData = useSelector((state) => state.user);
  // const { state } = useLocation();
  console.log("ESTA ES MI allOrders ", allOrders);
  // const { preferenceId } = state;

  const orden = allOrders.find((ord) => ord.usuario === userData._id);
  console.log("ESTA ES MI ORDEN ", orden);
  const preference_init = orden.preferenceId;

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  // const mp = useMercadopago.v2('APP_USR-8269958548313683-111714-28a6ab1ef3f707b232e68d8587f5b162-1239620323', { locale: 'es-AR' });

  // const mp = new MercadoPago('APP_USR-8269958548313683-111714-28a6ab1ef3f707b232e68d8587f5b162-1239620323', { locale: 'es-AR' });

  // useEffect(() => {
  //     if (mp) {
  //         mp.checkout({
  //             preference: {
  //                 id: preferenceId
  //             },
  //             render: {
  //                 container: '.cho-container',
  //                 label: 'Pagar con Mercado Pago',
  //             }
  //         })
  //     }
  // }, [mp, preferenceId])

  // document.getElementById("checkout-btn").addEventListener("click", function() {
  //   $for('#checkout-btn').attr("disabled", true);

  //   createCheckOutButton(order.preferenceId);

  // })

  // function createCheckOutButton(preferenceId) {
  //   mp.checkout({
  //     preference: {
  //       id: preferenceId
  //     },
  //     render: {
  //       container: '#button-checkout',
  //       label: 'Pay',
  //     }
  //   });
  // }

  const handleMercadoPago = (e) => {
    e.preventDefault();
    navigate(preference_init);
  };

  return (
    <>
      <NavBar />
      <div className="b-example-divider"></div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-7 p-3 align-items-center rounded-3 border border-info shadow-lg mb-3">
            <div className="card-header h5 text-center">
              <span className="">Orden de Pago</span>
            </div>
            <br />
            <div className="table-responsive">
              <table className="table table-info table-striped text-center">
                <thead>
                  <tr>
                    <th scope="col">Articulo</th>
                    <th scope="col">Precio Unitario</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Subtotal</th>
                  </tr>
                </thead>

                {/* {!order?.items ? (
                    <tbody>
                      <td colSpan={4} className="table-active">
                        Loading
                      </td>
                    </tbody>
                  ) : ( */}
                <tbody>
                  {orden?.orderItems.map((oi, index) => (
                    <tr key={index}>
                      <td style={{ textTransform: "capitalize" }}>
                        {oi.modelo}
                      </td>
                      <td>${oi.precio}</td>
                      {oi.cantidad > 1 ? (
                        <td>{oi.cantidad} unidades</td>
                      ) : (
                        <td>{oi.cantidad} unidad</td>
                      )}
                      <td>${oi.cantidad * oi.precio}</td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total:</td>
                    <td>${orden?.precioTotal}</td>
                  </tr>
                </tbody>
                {/* )} */}
              </table>
            </div>
          </div>
          <br />

          <Button className="productos" onClick={handleMercadoPago}>
            Proceder a pagar con mercadopago
          </Button>
        </div>
      </div>
    </>
  );
};
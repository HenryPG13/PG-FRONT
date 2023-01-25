import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useMercadopago } from "react-sdk-mercadopago/lib";

export const Checkout = () => {
   
    const order = useSelector(state => state.order);
    const { state } = useLocation();
    // const { preferenceId } = state;
    
    // const orden = order.find((ord) => ord.preferenceId === preferenceId);

    // const mercadopago = useMercadopago.v2('APP_USR-8269958548313683-111714-28a6ab1ef3f707b232e68d8587f5b162-1239620323', { locale: 'es-AR' });

    // useEffect(() => {
    //     if (mercadopago) {
    //         mercadopago.checkout({
    //             preference: {
    //                 id: preferenceId
    //             },
    //             render: {
    //                 container: '.cho-container',
    //                 label: 'Pagar con Mercado Pago',
    //             }
    //         })
    //     }
    // }, [mercadopago, preferenceId])

    return (
      <>
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

                  {!order?.items ? (
                    <tbody>
                      <td colSpan={4} className="table-active">
                        Loading
                      </td>
                    </tbody>
                  ) : (
                    <tbody>
                      {order?.items.map((oi, index) => (
                        <tr key={index}>
                          <td style={{ textTransform: "capitalize" }}>
                            {oi.modelo}
                          </td>
                          <td>${oi.precio}</td>
                          <td>{oi.cantidad} un</td>
                          <td>${oi.cantidad * oi.precio}</td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>${order?.precioTotal}</td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
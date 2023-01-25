import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShopCart.css'
import Button from 'react-bootstrap/Button';
import { Order } from '../Orden/Orden';



export const ShopCart = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [articulosTotales, setArticulosTotales] = useState(0);

  // let precioTotal = 0;
  // let articulosTotales = 0;

  const handlePay = () => {
    console.log("ESTO TIENE DETAIL ", cart);
    // dispatch(payOneZapa(zapa))
    axios
      .post("http://localhost:3001/payment", cart)
      .then(
        (res) => (window.location.href = res.data.response.body.init_point)
      );
  };

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      if(item.oferta){
        price += item.qty * (item.precio/2); //este valor de oferta esta hardcodeado
      }else{
        price += item.qty * item.precio;
      }

    });

    setArticulosTotales(items);
    setPrecioTotal(price);
  }, [cart, precioTotal, articulosTotales, setPrecioTotal, setArticulosTotales]);

  // cart.forEach((element) => {
  //   precioTotal = element.precio + precioTotal;
  //   articulosTotales = element.qty + articulosTotales;
  // });

  return (
    <div>
      <h3>Carrito de compras</h3>
      {cart.length === 0 ? (
        <div>
          <p>El carrito esta vacio </p>

          <Link to={"/home"}>Regresar</Link>
        </div>
      ) : (
        cart.map((e) => <CartItem item={e} />)
      )}
      <br />
      <div className="row mb-3">
        <div className="col-6">
          <span className="text-muted">Cant. articulos:</span>{" "}
          {articulosTotales}
        </div>
        <div className="col-6">
          <span className="text-muted">Total:</span> ${" "}
          {precioTotal}
        </div>
      </div>
      {/* <div class="action">
        <Button variant="primary" onClick={handlePay}>
          Comprar
        </Button>
      </div> */}
      <Order props={[history, precioTotal]} />
    </div>
  );
};

export default ShopCart;

import React from 'react'
import axios from 'axios';
import { CartItem } from './CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './ShopCart.css'
import Button from 'react-bootstrap/Button';



export const ShopCart = () => {

  const cart = useSelector(state => state.cart);

  const handlePay = () => {
    console.log("ESTO TIENE DETAIL ", cart);
    // dispatch(payOneZapa(zapa))
    axios.post('http://localhost:3001/payment', cart).then((res) => window.location.href = res.data.response.body.init_point)
 }

  return (
    <div>
      <NavBar />

      <h3>Carrito de compras</h3>
      {cart.length === 0 ? (
        <div>
          <p>El carrito esta vacio </p>

          <Link to={"/home"}>Regresar</Link>
        </div>
      ) : (
        cart.map((e) => <CartItem item={e} />)
      )}
      <div class="action">
        <Button variant="primary" onClick={handlePay}>
          Comprar
        </Button>
      </div>
    </div>
  );
}

export default ShopCart;

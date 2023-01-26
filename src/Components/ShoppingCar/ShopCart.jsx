import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { CartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ShopCart.css'
import { Order } from '../Orden/Orden';
import { Button } from 'react-bootstrap';



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

  const handleArticulosTotales = () => {
    let items = 0;
    cart.forEach((item) => {
      items += item.qty;
    })
    setArticulosTotales(items);
  }

  return (
    <div>
      <h3>Carrito de compras</h3>
      
      <div className="cartCont">
        <div className="cartCard">
          {cart.length === 0 ? (
            <div className='emptyCart'>
              <p className='emptyCartText'>El carrito esta vacio </p>

              <Link className='emptyCartBtn' to={"/home"}>
                <Button>Regresar</Button>
              </Link>
            </div>
          ) : (
            cart.map((e) => <CartItem articulosTotales={handleArticulosTotales} item={e} />)
          )}
        </div>
        
        
        
        
        
        
        
        <div className="cardPay">
       
        <div>
          <Order props={precioTotal} />
        </div>
        
        <div >
          <div >
            <span className="text-dark">Cant. articulos:</span>{" "}
            {articulosTotales}
          </div>
          <div className="col-4">
            <span className="text-dark">Total:</span> $ {precioTotal}
          </div>
        </div>
        
        </div>
          
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      
    </div>
  );
};

export default ShopCart;

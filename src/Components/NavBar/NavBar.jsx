import SearchBar from "../SearchBar/SearchBar";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";
import notificacion from "../../img/bell.png";
import Button from "react-bootstrap/Button";

import logo from "../imagenes/footshopb.png";
import { io } from "socket.io-client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../CSS/Home.css";

export default function NavBar() {
  const [socket, setSocket] = useState(null);
  const [notificaciones, setNotificaciones] = useState([]);
  const [open, setOpen] = useState(false);
  const [haySocket, setHaySocket] = useState(false);

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
    setHaySocket(true);
  }, []);
  useEffect(() => {
    if (haySocket) {
      socket.on("notificacion", (msg) => {
        setNotificaciones((prev) => [...prev, msg]);
      });
    }
  }, [socket]);

  const handleRead = () => {
    setNotificaciones([]);
    setOpen(false);
  };

  console.log(notificaciones);

  return (
    <Navbar className="bg-primary bg-gradient">
      
      <Link to="/Home">
        <img
          src={logo}
          width="125"
          height="100"
          className="logo"
          alt="React Bootstrap logo"
        />
      </Link>
      <Link className="btnTitle" to="/home">
          <Button className="bg-transparent border-0">
            FootShop
          </Button>
      </Link>
      
      <Container>
       
        <Nav className="me-auto">
        
          
          <div className="btnCont">
          

          <Link className="btnProductos" to="/zapatillas">
            <Button className="bg-transparent border-0">
              Productos
            </Button>
          </Link>

          <Link className="btnOfertas"  to='/zapatillas/ofertas'>
            <Button className="bg-transparent border-0">Ofertas</Button>
          </Link>
          </div>
          </Nav>

          <div className="navbar">
          <div className="icon" onClick={() => setOpen(!open)}>
            <Button className="bg-transparent border-dark"><img src={notificacion} className="iconImg"></img></Button>
            {notificaciones.length > 0 && (
              <div className="counter">{notificaciones.length}</div>
            )}
            {open && (
              <div className="notifications">
                {notificaciones.map((n) => (
                  <span>{n}</span>
                ))}
                <button className="nButton" onClick={handleRead}>
                  Marcar como leido
                </button>
              </div>
            )}
          </div>
        </div>


        <Link className="btnCart" to={"/compras"}>
          <Button className="bg-transparent border-dark">🛒</Button>
        </Link>
          
        <Link className="btnFav" to={"/favoritos"}>
          <Button className="bg-transparent border-dark ">❤️</Button>
        </Link>
        
        

        {/* <SearchBar /> */}

        <Link className="btnLogin" to="/login">
          <Button className="bg-transparent border-dark ">Ingresar</Button>
        </Link>
      </Container>
      
    </Navbar>

  );
}

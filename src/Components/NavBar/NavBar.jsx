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
      <Container>
       
        <Nav className="me-auto">
        <div className="navbar">
          <div className="icon" onClick={() => setOpen(!open)}>
            <img src={notificacion} className="iconImg"></img>
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
          <Link to="/home">
            <Button className="productos">
            FootShop
            </Button>
          </Link>

          <Link to="/zapatillas">
            <Button className="productos">
              Productos
            </Button>
          </Link>

          <Nav.Link href="#pricing">Pricing</Nav.Link>

          <Link to='/zapatillas/ofertas'>
            <Button className="productos" >Ofertas</Button>
          </Link>
          </Nav>


        <Link className="btnCart" to={"/compras"}>
          <Button variant="light">🛒</Button>
          <Link className="btnFav" to={"/favoritos"}>
            <Button variant="light">❤️</Button>
          </Link>
        </Link>
        

        {/* <SearchBar /> */}

        <Link className="btnLogin" to="/login">
          <Button variant="light">Ingresar</Button>
        </Link>
      </Container>
    </Navbar>
  );
}

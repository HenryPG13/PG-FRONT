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
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector } from "react-redux";
import './NavBar.css'
import "../CSS/Home.css";

export default function NavBar() {

  const logUser = useSelector(state => state.user);
  const { isAuthenticated, logout, user } = useAuth0();
  const handleLogOut = () => {
    logout({ returnTo: window.location.origin });
  }
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

            <Link className="btnOfertas" to='/zapatillas/ofertas'>
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
                  <div className="n">
                    <span className="notification">{n}</span>
                  </div>
                ))}
                {notificaciones.length === 0 && <span className="notification">No hay notificaciones sin leer</span>}
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
        
        <div className="btnFav">
        {Object.entries(logUser).length > 0 ?
          <Link  to={`/perfilusuario/${logUser._id}/favoritos`}>
            <Button className="bg-transparent border-dark ">❤️</Button>
          </Link> : <Button className="bg-transparent border-dark " disabled>❤️</Button>
        }
        </div>
        
        <div className="adminBtn">
        {Object.entries(logUser).length !== 0 || user ? <Link to='/perfilusuario'>
          <Button variant='outline-info' className="text-white" >Mi perfil</Button>
        </Link> : null}
        </div>

        {Object.entries(logUser).admin ? <Link to='/perfiladmin'>
          <Button className="productos" >Admin</Button>
        </Link> : null}
        {/* <SearchBar /> */}
        {Object.entries(logUser).length !== 0 || user ?
          <Button onClick={handleLogOut} variant="secondary">Logout</Button>
          : <Link className="btnLogin" to="/login">
            <Button variant="light">Ingresar</Button>
          </Link>}
          



        {/* <SearchBar /> */}

      </Container>

    </Navbar>

  );
}

import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button';

import logo from "../imagenes/footshopb.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import '../CSS/Home.css'


export default function NavBar() {
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
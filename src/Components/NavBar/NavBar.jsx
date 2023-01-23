import SearchBar from "../SearchBar/SearchBar";
import { Link } from 'react-router-dom';

import './NavBar.css'

import Button from 'react-bootstrap/Button';

import logo from "../imagenes/footshopb.png"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../CSS/Home.css'


export default function NavBar() {
  return (
    //     <div>

    //         <h1  className='titulo'>Zapatero a tus servicios</h1>

    //         <SearchBar/>

    //         <Link  className='create' to='/Home'><img className='lhome' src={logo} alt='a'/></Link>

    //         <div className='contenidoselects'>
    //             <select >
    //             <option defaultValue='all'>Orden Alfabetico</option>
    //                 <option value='asc'>A - Z</option>
    //                 <option value='desc'>Z - A</option>
    //             </select>

    //             <select >
    //             <option value="all">Orden Por Precio</option>
    //                 <option value="asc">Ascendente</option>
    //                 <option value="des">Descendente</option>
    //             </select>

    //             {/* <select  >
    //               <option defaultValue='All'>Marcas</option>
    //             { allZapas.map((e,i)=>{
    //                 return (
    //                     <option key={i}>{e}</option>
    //                     )}
    //                     )
    //                 }
    //         </select> */}

    //         </div>
    // </div>

    <Navbar className="bg-primary bg-gradient">
      <Link to="/Home">
        <img
          src={logo}
          width="100"
          height="80"
          className="logo"
          alt="React Bootstrap logo"
        />
      </Link>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          FootShop
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/home">
            <button className=" bg-transparent border-0 text-white">
              Home
            </button>
          </Link>

          <Link to="/zapatillas">
            <button className="bg-transparent border-0 text-white">
              Productos
            </button>
          </Link>

          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>

        <Link className="btnCart" to={"/compras"}>
          <Button variant="light">🛒</Button>
          <Link className="btnFav" to={"/favoritos"}>
            <Button variant="light">❤️</Button>
          </Link>
        </Link>

        <SearchBar />

        <Link className="btnLogin" to="/login">
          <Button variant="light">Ingresar</Button>
        </Link>
      </Container>
    </Navbar>
  );
}
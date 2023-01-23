import { Link } from 'react-router-dom';
import '../../NavBar/NavBar.css'
import logo from '../../imagenes/footshopb.png'
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

  return (
    <Navbar bg="primary" variant="dark">
      <Link to='/Home'>
        <img
          src={logo}
          width="100"
          height="80"
          className="logo"
          alt="React Bootstrap logo"
        />
      </Link>
    </Navbar>

  )
}


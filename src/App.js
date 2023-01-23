import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Details from './Components/Detail';
import Formulario from './Components/Formulario/Formulario'
import LoginGoogle from './Components/Login/LoginGoogle';
import { LoginGeneral } from './Components/Login/LoginGeneral';
import Productos from './Components/Productos/Productos';
import Favorito from './Components/Favoritos/Favoritos';
import UploadImg from "./Components/Admin/uploadImg";
import ShopCart from './Components/ShoppingCar/ShopCart';
import Contenido from './Components/ChatBot/ChatBot';
import Ofertas from './Components/Ofertas/Ofertas';
import CreateUserForm from './Components/Login/SigIn';
import { UserPerfil } from './Components/UserPerfil/UserPerfil';
import UserDashboard from './Components/Dashboard/UsersDashboard/UsersDashboard';
import ProductDashboard from './Components/Dashboard/ProductsDashboard/ProductDashboard';
import ReviewsDashboard from './Components/Dashboard/ReviewsDashboard/ReviewsDashboard';
import OrderDashboard from './Components/Dashboard/OrdersDashboard/OrderDashboard';
import { DetailsOrder } from './Components/Dashboard/OrdersDashboard/DetailsOrder';
import Dashboard from './Components/Dashboard/Dashboard';
import { Favoritos } from './Components/UserPerfil/Favoritos';
import { OrdersUser } from './Components/UserPerfil/OrdersUser';
import { UpdateUser } from './Components/UserPerfil/UpdateUser';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path='/detalleorden/:id' element={<DetailsOrder />} ></Route>
          <Route exact path='/tablerordenes' element={<OrderDashboard />} ></Route>
          <Route exact path='/tablerorevisiones' element={<ReviewsDashboard />} ></Route>
          <Route exact path='/tableroproductos' element={<ProductDashboard />} ></Route>
          <Route exact path='/tablerousuarios' element={<UserDashboard />} ></Route>
          <Route exact path='/perfiladmin' element={<Dashboard />}></Route>
          <Route exact path='/perfilusuario/:id/favoritos' element={<Favoritos />}></Route>
          <Route exact path='/perfilusuario/:id/modificarinfo' element={<UpdateUser />}></Route>
          <Route exact path='/perfilusuario/:id/ordenesdecompra' element={<OrdersUser />}></Route>
          <Route exact path='/perfilusuario' element={<UserPerfil />}></Route>
          <Route exact path='/login' element={<LoginGeneral />}></Route>
          <Route exact path='/crearusuario' element={<CreateUserForm />}></Route>
          <Route Route exact path='/favoritos' element={<Favorito />}></Route>
          <Route Route exact path='/compras' element={<ShopCart />}></Route>
          <Route exact path='/login/google' element={<LoginGoogle />} />
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/uploadImg' element={<UploadImg />} />
          <Route path='/Home' element={<Home />} />
          <Route exact path='/crear' element={<Formulario />} />
          <Route exact path='/zapatillas/:id' element={<Details />} />
          <Route path='/zapatillas' element={<Productos />} />
          <Route path='/zapatillas/ofertas' element={<Ofertas />} />
        </Routes>
        <Contenido />
      </div>
    </BrowserRouter>
  );
}

export default App;

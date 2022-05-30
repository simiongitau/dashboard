import './App.css';
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/admin/Home/Home';
import Cart from './component/Cart/Cart';
import Nav from './component/Navbar/Nav';
import Product from './component/products/Product';
import Login from './component/login/Login';
import {Route,Routes} from 'react-router-dom'
import Detail from './component/detail/Detail';
import Loginn from './component/admin/Login';
import Products from './component/admin/Product/Products';
import Orders from './component/admin/orders/Orders';
import Customer from './component/admin/Customer/Customer';
function App() {
  return (
    <>
    <div className='nav'>
    <Nav/>
    </div>
     <Routes>
       <Route path='/' element={<Product/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/detail' element={<Detail/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/logina' element={<Loginn/>}/>
       <Route path="/product" element={<Products/>}/>
       <Route path='/order' element={<Orders/>}/>
       <Route path='/customer' element={<Customer/>}/>
       </Routes>                                                                                               
    </>                      
  );
}

export default App;

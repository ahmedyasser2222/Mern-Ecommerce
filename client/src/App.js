import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header/Header';
import Login from './components/User/Login';
import { Container } from '@mui/material';
import Register from './components/User/Register';
import VerifyEmail from './components/User/VerifyEmail';
import NotFound from './components/layout/Not Found/NotFound';
import ForgetPassword from './components/User/ForgetPassword';
import ResetPassword from './components/User/ResetPassword';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
         <Header />
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/verify/email/:emailToken' element={<VerifyEmail/>} />
               <Route path='/password/forget' element={<ForgetPassword />} />
               <Route path='/password/reset/:emailToken' element={<ResetPassword/>} />

               <Route path='/products'  >
                  <Route index  element={<Products />} />
                  <Route path=':id'  element={<Product />}/>
               </Route>

               <Route path="/cart" element={<Cart/>} />


               <Route path='*' element={<NotFound />} />
          </Routes>
    </div>
  );
}

export default App;

import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen';
import MenuScreen from './Screens/MenuScreen';
import AboutUsScreen from './Screens/AboutUsScreen';
import ContactUsScreen from './Screens/ContactUsScreen';
import Footer from './components/Footer';
import SignUp from './Screens/SIgnUp';
import CartScreen from './Screens/CartScreen';
import LoginModal from './Screens/LoginScreenModal';

import './app.css'
import ProductScreen from './Screens/ProductScreenModal';

import PaymentDeliveryScreen from './Screens/PaymentDeliveryScreen';

import AddressScreen from './Screens/AddressScreen';

import OrderDeliveryScreen from './Screens/OrderDeliveryScreen';

import PlaceOrderDelivery from './Screens/PlaceOrderDelivery';

import ProfileScreen from './Screens/ProfileScreen';

import OrderListScreen from './Screens/OrderListScreen';
import ProductListScreen from './Screens/ProductListScreen';
import UserListScreen from './Screens/UserListScreen';
import ProductEditScreen from './Screens/ProductEditScreen';
import UserEditScreen from './Screens/UserEditScreen';



function App() {
  return (
    <BrowserRouter>
      <main className="py-3">
        <Container>
          <Routes>
             <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginModal />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/menu" element={<MenuScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/about" element={<AboutUsScreen />} />
            <Route path="/contact" element={<ContactUsScreen />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart/:id?" element={<CartScreen />} />
           
            <Route path="/paymentDelivery" element={<PaymentDeliveryScreen />} />
            <Route path="/address" element={<AddressScreen />} />

            <Route path="/orderDelivery/:id" element={<OrderDeliveryScreen/>} />

            <Route path="/placeorderDelivery" element={<PlaceOrderDelivery />} />

            <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
            <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />



          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

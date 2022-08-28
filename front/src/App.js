import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Header from './components/common/Header';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import OrderHistPage from './pages/orderhist/OrderHistPage';
import ItemHistPage from './pages/itemhist/ItemHistPage';
import CartPage from './pages/cart/CartPage';
import ItemPage from './pages/item/ItemPage';
import ProfilePage from './pages/profile/ProfilePage';
import AdminItemPage from './pages/admin/AdminItemPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="orderhist" element={<OrderHistPage />} />
        <Route path="itemhist" element={<ItemHistPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="adminitem" element={<AdminItemPage />} />
        <Route path="item" element={<ItemPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

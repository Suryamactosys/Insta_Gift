import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage/Loginpage';
import Registrationpage from '../Pages/LoginPage/Registrationpage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Main from '../Components/Sidebar/Main';
import Order from '../Components/Sidebar/Order';
import Wallet from '../Components/Sidebar/Wallet';
import BookingDetails from '../Components/Sidebar/BookingDetails';
import Profile from '../Components/Sidebar/Profile';
import ContactUs from '../Components/ContactUs/ContactUs';
import ShopPage from '../Pages/ShopPage';
import SpecialPage from '../Pages/SpecialPage';
import RequireAuth from '../Components/RequireAuth/RequireAuth';
import Editor from '../Pages/Editor';
import Admin from '../Pages/Admin';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/shoppage' element={<ShopPage />} />
        <Route exact path='/specialpage' element={<SpecialPage />} />
        <Route exact path='/contactus' element={<ContactUs />} />
        <Route exact path='/loginpage' element={<LoginPage />} />
        <Route exact path='/registrationpage' element={<Registrationpage />} />
        <Route exact path='/dashboard' element={<Dashboard />} >
          <Route path='main' element={<Main />} />
          <Route path='order' element={<Order />} />
          <Route path='wallet' element={<Wallet />} />
          <Route path='bookingdetails' element={<BookingDetails />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default PageRoutes;
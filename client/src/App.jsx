import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;
import Home from './pages/Home';
import UserRegister from './pages/user/RegisterUser';
import UserLogin from "./pages/user/LoginUser";
import PartnerRegister from './/pages/partner/RegisterPartner';
import PartnerLogin from './pages/partner/LoginPartner'
import PartnerHome from './pages/partner/PatnerHome';
import UserHome from './pages/user/UserHome';
import React from 'react'

const App =  () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* User routes */}
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path='/user/home' element={<UserHome />} />

        {/* Partner routes */}
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path='/partner/home' element={<PartnerHome />} />
      </Routes>
  
  );
}

export default App

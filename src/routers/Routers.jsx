import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountSetting from '../pages/account-settings';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import LazyLoad from './LazyLoad';
const Loader = LazyLoad(import('../components/Loader.jsx'));
const Home = LazyLoad(import('../pages/Home.jsx'));
const SignUp = LazyLoad(import('../pages/SignUp.jsx'));

const Routers = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='sign-in' element={<SignIn />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='account-settings' element={<AccountSetting />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default Routers;

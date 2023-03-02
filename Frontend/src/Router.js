import React from 'react';
import {
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Login from './components/login/Login';
import Products from './Products'
const Router = createBrowserRouter([
  {
    element: <>
      <Header />
      <Outlet />
      <Footer />
    </>,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "products",
        element: <Products />,
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
  }
]);
export default Router
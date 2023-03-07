import React from 'react';
import {
  createBrowserRouter,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Login from './components/login/Login';
import Products from './Products' 
import ProductDetail from './ProductDetail' 
import CustomerRegistration from './components/Register/Customers/CustomerRegistration';
import Register from './components/Register/Register'; 
import SuccessRegistration from './components/Register/Customers/SuccessRegistrationCustomer';
import GuardedRoute from './components/GuardedRoute';
import OwnerRegistration from './components/Register/Owners/OwnerRegistration';
import SuccessRegistrationCustomer from './components/Register/Customers/SuccessRegistrationCustomer';
import SuccessRegistrationOwner from './components/Register/Owners/SuccessRegistartionOwner';
import OwnerDashboard from './components/Register/Owners/OwnerDashboard';
import CustomerDashboard from './components/Register/Customers/CustomerDashboard';
import RoleConst from './RoleConst';


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
      },
      {
        path: "productDetail",
        element: <ProductDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/customer-registration",
        element: <CustomerRegistration/>
      },
      {
        path: "/owner-registration",
        element: <OwnerRegistration/>
      },
      {
        path: "/owner-dashboard",
        element: <GuardedRoute component={<OwnerDashboard/>} routeRedirect={"/login"} roleConst={RoleConst.owner} />
      }
      ,
      {
        path: "/customer-dashboard",
        element: <GuardedRoute component={<CustomerDashboard/>} routeRedirect={"/login"} roleConst={RoleConst.customer} />
      }
    ]
  },
  {
    path: "/activate/customer/:id",
    element: <SuccessRegistrationCustomer />
  },
  {
    path: "/activate/owner/:id",
    element: <SuccessRegistrationOwner />
  }
 

   
]);
export default Router
import React from 'react';
import { Route, redirect, Routes, BrowserRouter, Outlet, useLocation, Navigate } from "react-router-dom";
import CustomerDashboard from './components/Register/Customers/CustomerDashboard';

const GuardedRoute = ({routeRedirect}) => {
    const location = useLocation();
    let token = localStorage.getItem('token');

    return token!=null
        ? <CustomerDashboard name="Marko" />
        : <Navigate to = {routeRedirect} replace state = {{from: location}} />

};

export default GuardedRoute
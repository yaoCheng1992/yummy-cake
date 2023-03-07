import React from 'react';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import { Route, redirect, Routes, BrowserRouter, Outlet, useLocation, Navigate } from "react-router-dom";
import OwnerDashboard from './Register/Owners/OwnerDashboard';
import RoleConst from '../RoleConst';
import CustomerDashboard from './Register/Customers/CustomerDashboard';



const GuardedRoute = ({routeRedirect,component:Component,roleConst} ) => {
    const location = useLocation();
    let token = localStorage.getItem('token');
    if (token !== null){
        const decoded = jwt_decode(token);
        const role = decoded.authorities[0];
        return role===roleConst ? Component  : <Navigate to = {routeRedirect} replace state = {{from: location}} />
    }
    return <Navigate to = {routeRedirect} replace state = {{from: location}} />
    
};

export default GuardedRoute
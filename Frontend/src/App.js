import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login'; 
import CustomerRegistration from './components/Register/Customers/CustomerRegistration';
import Register from './components/Register/Register';
import Main from './Main'; 
function App(props) {
  return(
    <Router>
    <Routes>  
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/customer-registration" element={<CustomerRegistration/>} />
      <Route exact path="/" caseSensitive={false} element={<Main />} />
    </Routes>
  </Router>
  )
}
export default App;
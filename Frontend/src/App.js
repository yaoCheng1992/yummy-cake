import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import render from 'dom-serializer';
function App(props) {
  return(
    <Router>
    <Routes>  
      <Route path="/login" element={<Login />} />
      <Route exact path="/" caseSensitive={false} element={<Main />} />
    </Routes>
  </Router>
  )
}
export default App;
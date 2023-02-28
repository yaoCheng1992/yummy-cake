import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login/Login'; 
import Main from './Main'; 
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
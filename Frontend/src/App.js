import React from 'react'; 
import { 
  RouterProvider,
} from "react-router-dom";
import GuardedRoute from './GuardedRoute';
import Router from "./Router"
function App(props) {

  let token = localStorage.getItem('token');
  console.log(token);

  return (
      <RouterProvider router={Router} />
  )
}
export default App;
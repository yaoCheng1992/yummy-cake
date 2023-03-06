import React from 'react'; 
import { 
  RouterProvider,
} from "react-router-dom";
import Router from "./Router"
function App(props) {

  return (
      <RouterProvider router={Router} />
  )
}
export default App;
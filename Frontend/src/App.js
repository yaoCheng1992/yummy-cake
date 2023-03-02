import React from 'react'; 
import { 
  RouterProvider,
} from "react-router-dom";
import Router from "./Router"
function App(props) {

  return (
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  )
}
export default App;
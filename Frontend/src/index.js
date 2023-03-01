import React from 'react'  
import {createRoot} from 'react-dom/client'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { library } from '@fortawesome/fontawesome-svg-core' 
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import App from './App'
import './style.css'
const root =  createRoot(
    document.getElementById('app')
  ); 
root.render( <App/>)
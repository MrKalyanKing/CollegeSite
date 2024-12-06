import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainApp from '../MainApp.jsx'
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ErrorBoundary from './components/Errorboundary/ErrorBoundary.jsx'

//import './styles/tailwind.css';
createRoot(document.getElementById('root')).render(
      <BrowserRouter>
      <ErrorBoundary>
      <MainApp/>
      </ErrorBoundary>
      <ToastContainer/>
      </BrowserRouter>
     
  
   
  
)

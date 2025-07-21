import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="custom-scrollbar" />
    {/* <Toaster position="top-right" reverseOrder={false} /> */}
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>,
)

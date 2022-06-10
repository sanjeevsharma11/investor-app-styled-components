import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toaster = () => {
  return <ToastContainer style={{ zIndex: 999999 }} position='top-right' />;
}

export default Toaster
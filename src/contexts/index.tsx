"use client"
import React from 'react';

// import { Container } from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contexts: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>
        <ToastContainer />
    {children}
    </>
}

export default Contexts;
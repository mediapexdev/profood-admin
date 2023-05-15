import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { OrdersPage } from './pages/orders/Index';

const App:React.FC=()=> {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrdersPage />} />
          
        </Routes>
      </BrowserRouter></>
  );
}

export default App;

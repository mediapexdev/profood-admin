import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { OrdersPage } from './pages/orders/Index';
import { ContentBody } from './pages/orderDetail/ContentBody';
import { OrderDetailPage } from './pages/orderDetail/Index';

const App:React.FC=()=> {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<OrdersPage />} />
          <Route path="/order-detail/:id" element={<OrderDetailPage />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;

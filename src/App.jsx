import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Shared/Navbar';
import LoginPage from './pages/LoginPage';
import ClientsPage from './pages/ClientsPage';
import MessengersPage from './pages/MessengersPage';
import OrdersPage from './pages/OrdersPage';
import ReportsPage from './pages/ReportsPage';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Dashboard/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/clients" element={<ClientsPage/>} />
                <Route path="/messengers" element={<MessengersPage/>} />
                <Route path="/orders" element={<OrdersPage/>} />
                <Route path="/reports" element={<ReportsPage/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

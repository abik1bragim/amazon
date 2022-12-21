import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nav2 from './components/Nav2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Nav2 />
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);


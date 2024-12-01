import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/loginRegister/login'
import Home from './homepage'
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
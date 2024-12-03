import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/loginRegister/login'
import Home from './homepage'
import AI from './AI/App'
import './App.css';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<RegisterForm />} />
        <Route path="/catalyst" element={<AI />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
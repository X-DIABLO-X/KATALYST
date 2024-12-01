import React from 'react';

import { Footer, Blog, Possibility, Features, Catalyst, Header } from './containers';
import Login from './components/loginRegister/login'
import { CTA, Brand, Navbar } from './components';

import './App.css';

const Home = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <Catalyst />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
        {/* <Login /> */}
    </div>
);

export default Home;

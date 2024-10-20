import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Pets from './components/Pets';
import Card from './components/Card';
import Products from './components/Products';
import Selles from './components/selles';
import AdoptionCard from './components/AdoptionCard';
import Knowledge from './components/Knowledge';
import Footer from './components/Footer';
import Dog from './components/Category';

import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Pets />
              <Card />
              <Products />
              <Selles />
              <AdoptionCard />
              <Knowledge />
            </>
          } />
          <Route path="/category" element={<Dog />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;

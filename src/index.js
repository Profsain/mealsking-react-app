import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import MealExplore from './components/MealExplore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/meal-explore" element={ <MealExplore name="Profsain" /> } />
    </Routes>
  </BrowserRouter>
);

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from './components/standalone/MyNavbar';
import BG from './components/standalone/MatrixRain';
import RouteContainer from './routes/RouteContainer';
import "./stylesheets/index.css"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Header />
      <RouteContainer />
      <BG />
    </BrowserRouter>
  </React.StrictMode>,
);

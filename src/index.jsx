import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import './index.scss';

import Home from './pages/Home';
import Header from './containers/Header';
import Footer from './containers/Footer';
import CreateEmployee from './pages/CreateEmployee';
import ViewEmployee from './pages/ViewEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="" element={<Home />} exact />
          <Route path="creation" element={<CreateEmployee />} exact />
          <Route path="view" element={<ViewEmployee />} exact />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


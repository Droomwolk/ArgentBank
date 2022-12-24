/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home.jsx';
import LoginPage from '../pages/login/Login.jsx';
import ErrorPage from '../pages/error/ErrorPage.jsx';
import UserProfile from '../pages/UserProfile';
import './App.scss';
import ProtectedRoute from '../routing/ProtectedRoute';
import Header from '../components/header/header';
import '../styles/pages/main.css';
import Footer from '../components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

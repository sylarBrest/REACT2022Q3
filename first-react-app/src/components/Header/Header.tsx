import React from 'react';
import AboutUs from 'pages/about-us';
import MainPage from 'pages/main';
import NotFound from 'pages/not-found';
import { Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import './header.css';

function Header() {
  return (
    <>
      <header className="header">
        <Menu />
      </header>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default Header;

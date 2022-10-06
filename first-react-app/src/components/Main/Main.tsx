import AboutUs from 'pages/about-us';
import HomePage from 'pages/home';
import NotFound from 'pages/not-found';
import { Routes, Route } from 'react-router-dom';

import './Main.css';

const Main = () => {
  return (
    <main className="main" data-testid="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;

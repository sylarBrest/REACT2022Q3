import AboutUs from 'pages/about-us';
import MainPage from 'pages/main';
import NotFound from 'pages/not-found';
import { Routes, Route } from 'react-router-dom';

import './Main.css';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;

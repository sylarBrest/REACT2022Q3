import { AboutUs, Forms, Home, NotFound } from 'pages';
import { Routes, Route } from 'react-router-dom';

import './Main.css';

const Main = () => {
  return (
    <main className="main" data-testid="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Main;

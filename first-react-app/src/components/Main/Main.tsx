import { Routes, Route } from 'react-router-dom';
import { AboutUsPage, FormsPage, HomePage, NotFoundPage } from 'pages';

import './Main.css';

export const Main = () => {
  return (
    <main className="main" data-testid="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

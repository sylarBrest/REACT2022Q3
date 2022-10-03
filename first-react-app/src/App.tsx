import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;

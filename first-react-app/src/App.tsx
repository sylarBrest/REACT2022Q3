import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/sylarbrest-REACT2022Q3">
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;

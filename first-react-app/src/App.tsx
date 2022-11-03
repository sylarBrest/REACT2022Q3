import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { AppProvider } from 'context/globalContext';
import './App.css';

export default () => {
  return (
    <>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </>
  );
};

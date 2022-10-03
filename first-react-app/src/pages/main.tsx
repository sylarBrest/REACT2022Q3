import Title from 'components/Main/Title';
import SearchBar from 'components/Main/SearchBar';
import Cards from 'components/Main/Cards/Cards';

const MainPage = () => {
  return (
    <div className="container">
      <Title pageTitle="Main page" />
      <SearchBar placeholder="Search..." />
      <Cards />
    </div>
  );
};

export default MainPage;

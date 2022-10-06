import SearchBar from 'components/Main/SearchBar';
import Cards from 'components/Main/Cards/Cards';

const Home = () => {
  return (
    <div className="container" data-testid="home-page">
      <h1 className="title">Home page</h1>
      <SearchBar placeholder="Search..." />
      <Cards />
    </div>
  );
};

export default Home;

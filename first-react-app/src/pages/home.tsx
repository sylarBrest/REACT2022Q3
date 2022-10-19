import SearchBar from 'components/Main/SearchBar';
import CardsContainer from 'components/Main/Cards/CardsContainer';

const Home = () => {
  return (
    <section className="section home-section" data-testid="home-page">
      <h1 className="title">Home page</h1>
      <SearchBar placeholder="Search..." />
      <CardsContainer />
    </section>
  );
};

export default Home;

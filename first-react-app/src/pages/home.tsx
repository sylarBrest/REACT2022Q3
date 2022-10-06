import SearchBar from 'components/Main/SearchBar';
import Cards from 'components/Main/Cards/Cards';

const Home = () => {
  return (
    <section className="section home-section" data-testid="home-page">
      <h1 className="title">Home page</h1>
      <SearchBar placeholder="Search..." />
      <Cards />
    </section>
  );
};

export default Home;

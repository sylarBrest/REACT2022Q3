import SearchWrapper from 'components/Main/SearchWrapper';

const Home = () => {
  return (
    <section className="section home-section" data-testid="home-page">
      <h1 className="title">Home page</h1>
      <SearchWrapper />
    </section>
  );
};

export default Home;

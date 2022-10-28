import { SearchWrapper } from 'components/Main/SearchWrapper';

export const HomePage = () => {
  return (
    <section className="section home-section" data-testid="home-page">
      <h1 className="title">Home page</h1>
      <SearchWrapper />
    </section>
  );
};

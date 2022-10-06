import Title from 'components/Main/Title';

const NotFound = () => {
  return (
    <div className="container" data-testid="not-found-page">
      <Title pageTitle="404. Not found" />
      <p>Oops!.. Something went wrong...</p>
    </div>
  );
};

export default NotFound;

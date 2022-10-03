import Card from './Card';

const Cards = () => {
  return (
    <div className="cards">
      <Card
        id={1}
        title="The Shawshank Redemption"
        imagePath={require('assets/img/shawshank.jpg')}
        description={
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
        }
        director={'Frank Darabont'}
        genres={['Drama']}
        rating={9.3}
        voices={2646288}
        year={1994}
      />
    </div>
  );
};

export default Cards;

import Card from './Card';

const Cards = () => {
  return (
    <div className="cards" data-testid="cards-container">
      <Card
        id={0}
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
      <Card
        id={1}
        title="The Godfather"
        imagePath={require('assets/img/godfather.jpg')}
        description={
          'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.'
        }
        director={'Francis Ford Coppola'}
        genres={['Crime', 'Drama']}
        rating={9.2}
        voices={1834354}
        year={1972}
      />
      <Card
        id={2}
        title="The Dark Knight"
        imagePath={require('assets/img/dark-knight.jpg')}
        description={
          'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
        }
        director={'Christopher Nolan'}
        genres={['Action', 'Crime', 'Drama']}
        rating={9.0}
        voices={2618206}
        year={2008}
      />
      <Card
        id={3}
        title="Forrest Gump"
        imagePath={require('assets/img/forrest-gump.jpg')}
        description={
          'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.'
        }
        director={'Robert Zemeckis'}
        genres={['Drama', 'Romance']}
        rating={8.8}
        voices={2048955}
        year={1994}
      />
      <Card
        id={4}
        title="Fight Club"
        imagePath={require('assets/img/fight-club.jpg')}
        description={
          'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.'
        }
        director={'David Fincher'}
        genres={['Drama']}
        rating={8.8}
        voices={2091023}
        year={1999}
      />
      <Card
        id={5}
        title="Interstellar"
        imagePath={require('assets/img/interstellar.jpg')}
        description={
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
        }
        director={'Christopher Nolan'}
        genres={['Adventure', 'Drama', 'Sci-Fi']}
        rating={8.6}
        voices={1789974}
        year={2014}
      />
      <Card
        id={6}
        title="Back to the Future"
        imagePath={require('assets/img/back-to-the-future.jpg')}
        description={
          'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.'
        }
        director={'Robert Zemeckis'}
        genres={['Adventure', 'Family', 'Sci-Fi']}
        rating={8.5}
        voices={1188379}
        year={1985}
      />
      <Card
        id={7}
        title="Avengers: Infinity War"
        imagePath={require('assets/img/avengers-infinity-war.jpg')}
        description={
          'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'
        }
        director={'Anthony Russo, Joe Russo'}
        genres={['Action', 'Adventure', 'Sci-Fi']}
        rating={8.4}
        voices={1059240}
        year={2018}
      />
    </div>
  );
};

export default Cards;

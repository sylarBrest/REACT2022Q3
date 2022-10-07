import person from 'assets/svg/person.svg';
import { TVoicesProps } from 'data/types';

const Voices = (props: TVoicesProps) => {
  return (
    <>
      <img className="image-voices" src={person} alt="voices" />
      <p className="card-voices">{props.voices}</p>
    </>
  );
};

export default Voices;

import person from 'assets/svg/person.svg';
import { VoicesPropsType } from 'data/types';

const Voices = (props: VoicesPropsType) => {
  return (
    <>
      <img className="image-voices" src={person} alt="voices" />
      <p className="card-voices">{props.voices}</p>
    </>
  );
};

export default Voices;

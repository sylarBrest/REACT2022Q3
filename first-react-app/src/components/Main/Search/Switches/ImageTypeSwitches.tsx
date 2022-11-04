import { IMAGE_TYPES } from 'data/constants';
import { ImageTypeSwitch } from './ImageTypeSwitch';

export const ImageTypeSwitches = () => {
  return (
    <fieldset className="image-type-switches" data-testid="image-type-switches">
      <legend className="legend image-type-legend">Choose image type</legend>
      {IMAGE_TYPES.map((value: string) => (
        <ImageTypeSwitch value={value} key={value} />
      ))}
    </fieldset>
  );
};

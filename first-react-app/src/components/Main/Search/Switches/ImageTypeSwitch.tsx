import { ImageTypeSwitchPropsType } from 'data/types';
import { changeImageType } from 'redux/searchSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export const ImageTypeSwitch = ({ value }: ImageTypeSwitchPropsType) => {
  const dispatch = useAppDispatch();

  const imageType = useAppSelector((state) => state.search.imageType);

  const checked = imageType === value;

  const valueF = value[0].toUpperCase() + value.slice(1);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeImageType(event.target.value));
  };

  return (
    <>
      <input
        className="image-type-switch"
        type="radio"
        name="image-type-switch"
        id={value}
        value={value}
        onChange={handleChange}
        checked={checked}
      />
      <label htmlFor={value}>{valueF}</label>
    </>
  );
};

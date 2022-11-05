import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';
import { ImageTypeSwitchPropsType } from 'data/types';

export const ImageTypeSwitch = (props: ImageTypeSwitchPropsType) => {
  const { value } = props;
  const valueF = value[0].toUpperCase() + value.slice(1);
  const { state, dispatch } = useGlobalContext();
  const {
    query,
    pagination: { perPage },
  } = state.search;
  const checked = state.search.imageType === value;

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ACTION_TYPE.changeImageType,
      payload: { imageType: event.target.value, page: 1, perPage, query },
    });
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

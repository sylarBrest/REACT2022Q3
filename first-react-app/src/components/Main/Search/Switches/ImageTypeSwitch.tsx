import { useGlobalContext } from 'context/globalContext';
import { ACTION_TYPE } from 'data/constants';
import { ImageTypeSwitchPropsType, SearchData } from 'data/types';
import { basicGetMethod } from 'services/basicGetMethod';

export const ImageTypeSwitch = (props: ImageTypeSwitchPropsType) => {
  const { value } = props;
  const valueF = value[0].toUpperCase() + value.slice(1);
  const { state, dispatch } = useGlobalContext();
  const {
    query,
    pagination: { perPage },
  } = state.search;
  const checked = state.search.imageType === value;

  const handleChange = async (event: React.ChangeEvent) => {
    const imageTypeRadio = event.target as HTMLInputElement;
    dispatch({
      type: ACTION_TYPE.changeImageType,
      payload: { imageType: imageTypeRadio.value, page: 1, perPage, query },
    });
    const fetchedData: SearchData = await basicGetMethod({
      query,
      imageType: imageTypeRadio.value,
      page: 1,
      perPage,
    });
    dispatch({ type: ACTION_TYPE.saveSearchResults, payload: fetchedData });
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

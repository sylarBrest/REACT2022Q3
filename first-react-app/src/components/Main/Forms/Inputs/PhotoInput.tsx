import { InputPropsType } from 'data/types';
import { MAX_FILE_SIZE } from 'data/constants';
import { convertToMbytes } from 'utils';

import photoIcon from 'assets/svg/photo.svg';
import { ValidationMessage } from '../ValidationMessage';

export const PhotoInput = (props: InputPropsType) => {
  const { label, register, error } = props;
  const nameF = label[0].toUpperCase() + label.slice(1);

  return (
    <div className={`${label}-upload`}>
      <label className="field-label" htmlFor={`${label}-upload`}>
        <img className={`${label}-label`} src={photoIcon} alt={`${nameF} Upload`} />
        Upload your photo
      </label>
      <input
        className={`field ${label}-field`}
        id={`${label}-upload`}
        type="file"
        capture="environment"
        accept="image/*"
        {...register('photo', {
          required: { value: true, message: 'Photo not present' },
          validate: {
            wrongFileType: (file) =>
              (file as unknown as FileList)[0].type.includes('image') ||
              'You must upload an image file',
            tooBigImage: (file) =>
              (file as unknown as FileList)[0].size <= MAX_FILE_SIZE ||
              `Image can be up to ${convertToMbytes(MAX_FILE_SIZE)}Mb`,
          },
        })}
        data-testid={`form-input-${label}`}
      />
      {error && <ValidationMessage message={error} />}
    </div>
  );
};

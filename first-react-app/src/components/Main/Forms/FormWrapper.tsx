import { useState } from 'react';
import { FormDataPropsType } from 'data/types';
import { CardsContainer } from './Cards/CardsContainer';
import Form from './Form';
import './Form.css';

export const FormWrapper = () => {
  const [formData, setFormData] = useState<FormDataPropsType[]>([]);

  const handleChange = (newFormData: FormDataPropsType) => {
    setFormData([...formData, newFormData]);
  };

  return (
    <>
      <Form updateData={handleChange} />
      <CardsContainer formData={formData} />
    </>
  );
};

import React from 'react';
import { FormDataPropsType, FormWrapperStateType } from 'data/types';
import './Form.css';
import CardsContainer from './Cards/CardsContainer';
import Form from './Form';

class FormWrapper extends React.Component<Record<string, never>, FormWrapperStateType> {
  state = {
    formData: [
      {
        photo: new Blob(),
        name: '',
        surname: '',
        birthDate: '',
        gender: '',
        country: '',
        consent: false,
      },
    ],
  };

  handleChange(formData: FormDataPropsType) {
    this.setState({ formData: [...this.state.formData, formData] });
  }

  render() {
    return (
      <>
        <Form updateData={this.handleChange.bind(this)} />
        <CardsContainer formData={this.state.formData} />
      </>
    );
  }
}

export default FormWrapper;

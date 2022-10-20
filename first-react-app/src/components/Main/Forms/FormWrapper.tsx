import React from 'react';
import { FormDataPropsType, FormWrapperStateType } from 'data/types';
import './Form.css';
import FormCardsContainer from './Cards/FormCardsContainer';
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
        <FormCardsContainer formData={this.state.formData} />
      </>
    );
  }
}

export default FormWrapper;

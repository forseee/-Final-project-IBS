import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

type TypeProps = {
  name: string;
  label: string;
};

type configTextFieldType = {
  variant: 'outlined';
  fullWidth: boolean;
  error: boolean;
  helperText?: string;
};

export const VacationField = ({ name, ...otherProps }: TypeProps) => {
  const [field, mata] = useField(name);
  const configTextField: configTextFieldType = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    error: false,
  };
  if (mata && mata.touched && mata.error) {
    configTextField.error = true;
    configTextField.helperText = mata.error;
  }
  return <TextField {...configTextField} />;
};

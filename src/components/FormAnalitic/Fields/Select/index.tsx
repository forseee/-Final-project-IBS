import React from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

type TypeProps = {
  name: string;
  label: string;
  options: Array<string>;
};

type configSelect = {
  variant: 'outlined';
  fullWidth: boolean;
  error?: boolean;
  select: boolean;
  helperText?: string;
};

export const SelectField = ({ name, options, ...otherProps }: TypeProps) => {
  const [field, mata] = useField(name);
  const { setFieldValue } = useFormikContext();
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect: configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
  };

  if (mata && mata.touched && mata.error) {
    configSelect.error = true;
    configSelect.helperText = mata.error;
  }
  return (
    <TextField {...configSelect} onChange={(e) => HandleChange(e)}>
      {options.map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {item}
          </MenuItem>
        );
      })}
    </TextField>
  );
};

import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography, Container } from '@material-ui/core';
import { VacationField } from './Fields/TextFiels';
import { SelectField } from './Fields/Select';
import { makeStyles } from '@material-ui/core/styles';

interface Values {
  vacationName: string;
  cityName: string;
}
const useStyle = makeStyles((theme?: any) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

export const FormAnalitics = () => {
  const classes = useStyle();
  const options = ['Moscow', 'Ulyanovsc', 'Samara'];
  const INITIAL_FORM_STATE = {
    cityName: '',
    vacationName: '',
  };
  const FORM_VALIDATION = Yup.object().shape({
    cityName: Yup.string().required('Required'),
    vacationName: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      validationSchema={FORM_VALIDATION}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {(props: FormikProps<Values>) => (
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>Details</Typography>
                </Grid>
                <Grid item xs={6}>
                  <VacationField name="vacationName" label="Vacation Name" />
                </Grid>
                <Grid item xs={6}>
                  <SelectField name="cityName" label="City" options={options} />
                </Grid>
              </Grid>
            </Form>
          </div>
        </Container>
      )}
    </Formik>
  );
};

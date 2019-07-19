import React from 'react';
import ReactDOM from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function RegisterForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <h1>Register User</h1>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type='text' name='username' placeholder='Username' />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikRegisterForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .min(3, 'Password must be 3 characters or longer')
      .required('Password is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    if (values.username === 'alreadytaken@atb.dev') {
      setErrors({ username: 'That username is already taken' });
    } else {
      axios
        .post('http://localhost:5000/api/register', values)
        .then(res => {
          console.log(res);
          props.setAuthToken(res.data.token);
          props.history.push('/foods');
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err);
          setSubmitting(false);
        });
    }
  }
})(RegisterForm);

export default FormikRegisterForm;

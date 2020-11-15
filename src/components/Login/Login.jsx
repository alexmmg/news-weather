import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../assets/Formik/FormikControl'
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";
import style from "./Login.module.css"
import Button from "@material-ui/core/Button";
import {TextField} from 'formik-material-ui';

const Login = (props) => {

  if (props.isAuth) {
    debugger
    return <Redirect to={"/profile"}/>
  }

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = values => {
    props.login(values.email, values.password);
  };

  return (

      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <h4>Please enter valid email and password to Sign in</h4>

          <Field
              id="email"
              component={TextField}
              variant="outlined"
              label="email"
              name="email"
              type="email"
          />

          <Field
              id="password"
              component={TextField}
              variant="outlined"
              label="password"
              name="password"
              type="password"
          />
          <Button type='submit' variant="contained" color="primary">Sign in</Button>
        </Form>
      </Formik>

  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
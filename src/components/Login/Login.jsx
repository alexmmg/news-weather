import React from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../assets/Formik/FormikControl'
import {Redirect} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import connect from "react-redux/lib/connect/connect";
import style from "./Login.module.css"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Login = (props) => {
  console.log(localStorage.getItem('jwt'));

  const initialValues = {
    email: '',
    password: ''
  };

  const onSubmit = values => {
    props.login(values.email, values.password);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    password: Yup.string().required('Required')
  });

  return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-8">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
              {formik => {
                return (
                    <div className={style.formWrap}>
                      <h4>Please enter valid email and password to Sign in</h4>
                      <Form>
                        <TextField spacing={2} id="outlined-basic" label="email" variant="outlined">
                        <FormikControl
                            classname="input"
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                            className={style.formControl}
                        />
                        </TextField>

                        <FormikControl
                            control='input'
                            type='password'
                            label='Password'
                            name='password'
                            className={style.formControl}
                        /><TextField id="outlined-basic" label="password" variant="outlined">
                        </TextField>
                        <div>
                          <Button type='submit' variant="contained" color="primary" disabled={!formik.isValid}>Sign in</Button>
                        </div>
                      </Form>
                    </div>
                )
              }}
            </Formik>
      //     </div>
      //   </div>
      // </div>
  )
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);
'use client'
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import * as formik from 'formik';
import * as yup from 'yup';
import Navbar from "@/Components/molucules/Navbar";
import { Button } from "@mui/material";
// import '../Styles/login.css';
const Login=()=>{
    const { Formik } = formik;
    const schema = yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      username: yup.string().required(),
      password: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      zip: yup.string().required(),
      terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return(
        <div>
            <div>
                <Navbar />
            </div>

            <div className="loginForm">
            <div className="formmy">
            <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        password:'',
        city: '',
        state: '',
        zip: '',
        terms: false, 
      }}
    >
       {({handleSubmit, handleChange, values, touched, errors }) => (
        <Box noValidate onSubmit={handleSubmit}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        autoComplete="off"
      >
        <div >
          <TextField
         
            required
            id=""
            label="Enter First Name"
            type="text"
            value={values.firstName}
            onChange={handleChange}
            isValid={touched.firstName && !errors.firstName}
          />
          <TextField
            required
            label="Enter Last Name"
            type="text"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
          />
             <TextField
            required
            label="Enter Email"
            // name="username"
            value={values.username}
            onChange={handleChange}
            isInvalid={!!errors.username}
          />
           <TextField
            required
            id="filled-required"
            label="City"
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
            isInvalid={!!errors.city}
          />
          <TextField
            required
            id="filled-required"
            label="State"
            type="text"
            name="state"
            value={values.state}
            onChange={handleChange}
            isInvalid={!!errors.state}
          />
          <TextField
            required
            id="filled-disabled"
            label="Zip"
            type="text"
            name="zip"
            value={values.zip}
            onChange={handleChange}
            isInvalid={!!errors.zip}
          />
        <TextField
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            name="username"
            value={values.password}
            onChange={handleChange}
            isInvalid={!!errors.password}
          />
          <div>
            <span>Agree to terms and conditions</span>
          <Checkbox
            name="terms"
            label="Agree to terms and conditions"
            onChange={handleChange}
            isInvalid={!!errors.terms}
            feedback={errors.terms}
            feedbackType="invalid"
            id="validationFormik0"
          />
          <button>Login</button>
          </div>
        </div>
        
      </Box>
      )}
    </Formik>
    </div>
    </div>
        </div>
    );
}
export default Login;


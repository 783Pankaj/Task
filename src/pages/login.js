import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import * as formik from 'formik';
import * as yup from 'yup';
import Navbar from "@/Components/molucules/Navbar";
import { Avatar, Grid, Paper } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';

const Login=()=>{
  const { Formik } = formik;
  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

    const paperStyle = { padding: 20, height: '73vh', width: 400, margin: "40px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
   

    return(
      <Grid>
            <div>
                <Navbar />
            </div>
              <Paper style={paperStyle}>
                <Avatar style={avatarStyle}><LockIcon /> </Avatar>
                  <h2>Login </h2>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Pankaj',
        lastName: 'Pal',
        username: '',
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
        
          <TextField
            required
            id="filled-required"
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
          /> <div>
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
          <button style={btnstyle}>Login</button>
         
        </div>
      </Box>
      )} 
    </Formik>
    </Paper>
    </Grid>
    );
}
export default Login;

import React, { useState } from 'react';
import Input from './Input'; // Import the dynamic Input component
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';


const SignupForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    country: '',
    age: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: emailRegex.test(formData.email) ? '' : 'Invalid email address',
    }));
  };

  const validatePassword = () => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: formData.password.length >= 8 ? '' : 'Password must be at least 8 characters long',
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate specific field based on name
    if (name === 'email') {
      validateEmail();
    } else if (name === 'password') {
      validatePassword();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any further actions on form submission

    // Reset form fields
    setFormData({
      email: '',
      name: '',
      country: '',
      age: '',
      password: '',
    });
  };

  // Determine form validity based on error messages
  const isFormValid = !errors.email && !errors.password;

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
      <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">Sign up</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <Input
            label="Email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />

          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
          />

          <Input
            label="Country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleInputChange}
          />

          <Input
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
          />
        </Grid>
          

          <Button type="submit" disabled={!isFormValid} fullWidth variant="contained" color="primary" style={{marginTop : '20px'}} className={classes.submit}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>

  );
};

export default SignupForm;

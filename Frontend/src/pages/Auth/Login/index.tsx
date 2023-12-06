import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../utils/API';
import { Box, Card, TextField, Button, Typography } from '@mui/material';
import './style.css';

interface LoginInterface {
  username: string;
  password: string;
}

const initialValues: LoginInterface = {
  username: '',
  password: '',
};

const validationSchema = yup.object({
  username: yup.string().required("Sorry, username can't be blank"),
  password: yup.string().required("Please enter your password here"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginInterface) => {
    const body = {
      username: values.username,
      password: values.password,
    };

    try {
      const response = await fetch(`${API}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error while login');
      }

      const data = await response.json();
      localStorage.setItem('token', data.data);
      navigate('/dashboard');
      alert('Success');
    } catch (error) {
      console.error(error);
      alert('Not Success');
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        style={{ backgroundColor: '#263238' }}
      >
        <Card
          style={{
            padding: '20px',
            maxWidth: '400px',
            backgroundColor: 'white',
            borderRadius: '24px',
          }}
        >
          <Typography
            className="login-head"
            variant="h5"
            component="div"
            style={{ textAlign: 'center', margin: '16px' }}
          >
            Login to Workout Tracker
          </Typography>

          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('username')}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />

          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('password')}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: '16px',
              borderRadius: '24px',
              backgroundColor: '#b71c1c',
            }}
          >
            Login
          </Button>

          <Typography style={{ textAlign: 'center', padding: '20px' }}>
            Don't have an account?
            <a onClick={() => navigate('/register')}>
              <strong className="register-text"> Register</strong>
            </a>
          </Typography>
        </Card>
      </Box>
    </form>
  );
};

export default Login;
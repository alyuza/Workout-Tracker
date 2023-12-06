import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API } from '../../../utils/API';
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './style.css';

interface RegisterInterface {
  fullName: string;
  username: string;
  password: string;
}

const initialValues: RegisterInterface = {
  fullName: '',
  username: '',
  password: '',
};

const validationSchema = yup.object({
  fullName: yup.string().required('Please insert your fullname'),
  username: yup.string().required('Please insert your username'),
  password: yup.string().required('Please enter your password'),
});

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterInterface) => {
    const body = {
      fullname: values.fullName,
      username: values.username,
      password: values.password,
    };

    try {
      const response = await fetch(`${API}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Error while register');
      }

      const data = await response.json();
      console.log('Success register:', data);
      Swal.fire("Register Success!");
    } catch (error) {
      console.error(error);
      Swal.fire("Register Failed!");
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
            maxWidth: '350px',
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
            Create New Account
          </Typography>

          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            {...formik.getFieldProps('fullName')}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
          />

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
            style={{ marginTop: '16px', borderRadius: '24px', backgroundColor: '#b71c1c' }}
          >
            Register
          </Button>

          <Typography style={{ textAlign: 'center', padding: '20px' }}>
            Already Registered?
            <a onClick={() => navigate('/')}>
              <strong className="login-text"> Login</strong>
            </a>
          </Typography>
        </Card>
      </Box>
    </form>
  );
};

export default Register;

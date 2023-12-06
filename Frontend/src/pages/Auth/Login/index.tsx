import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { API } from '../../../utils/API'
import { Box, Card, TextField, Button } from '@mui/material'

interface LoginInterface {
  username: string,
  password: string
}

const initialValues = {
  username: '',
  password: ''
}

const validationSchema = yup.object({
  username: yup
    .string()
    .required(`sorry, username can't be blank`),
  password: yup
    .string()
    .required(`please enter your password here`)
})

const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = async (values: LoginInterface) => {
    const body = {
      username: values.username,
      password: values.password,
    }
    await fetch(API + '/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error while login');
        }
        return response.json();
      }).then((data) => {
        localStorage.setItem('token', data.data); // input data token to local storage
        navigate('/dashboard');
        alert('Success')
      }).catch((error) => {
        console.log(error);
        alert('Not Success')
      });
  }

  const formMik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema
  })

  return (
    <>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card style={{ padding: '20px', maxWidth: '400px' }}>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />

        <TextField
          label="Password"
          variant="outlined"
          type="password"
          value={formMik.values.password}
          onChange={formMik.handleChange('password')}
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log('Login clicked')}
          fullWidth
          style={{ marginTop: '16px' }}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          color="primary"
          onClick={() => console.log('Register clicked')}
          fullWidth
          style={{ marginTop: '8px' }}
        >
          Register
        </Button>
      </Card>
    </Box>
    </>
  );
};

export default Login;
import React from 'react';
import { Button, TextField, Typography, Container, Box, CssBaseline } from '@mui/material';
import { css } from '@emotion/react';

const containerStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0.8;
`;

const LoginPage = ({ onFinish, onFinishFailed }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      username: data.get('username'),
      password: data.get('password'),
    };

    console.log(values)
    if (values.username && values.password) {
      onFinish(values);
    } else {
      onFinishFailed({ errorFields: [{ name: 'username', errors: ['Please input your username!'] }, { name: 'password', errors: ['Please input your password!'] }] });
    }
  };

  return (
    <Box component="main" sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Container component="section" maxWidth="sm" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box css={containerStyles}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Cyethack
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;

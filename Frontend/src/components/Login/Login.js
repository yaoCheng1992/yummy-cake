import * as React from 'react';
import { BrowserRouter, Route, RouterProvider, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../../src/images/p12.jpg';
import Header from '../../Header';
import { Google, Send } from '@mui/icons-material';
import { Switch } from '@mui/material';
import { useState } from 'react';
import Server from '../../Server';
import jwt_decode, { JwtPayload } from 'jwt-decode';
import RoleConst from '../../RoleConst';




function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

let theme = lightTheme;

export default function SignIn() {
  let [checked, setChecked] = useState(false);

const switchHandler = (event) => {
  setChecked(event.target.checked);
  theme = event.target.checked ? darkTheme : lightTheme;
};
const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = new FormData(event.currentTarget);
    let params = {
      username: data.get('email'),
      password: data.get('password'),
    }

    Server.login(params) .then((res) => {
        let token = res.headers.authorization;
        let auth = token !== undefined;
        if (auth) {
          localStorage.setItem('token', token);
          const decoded = jwt_decode(token);
          const role = decoded.authorities[0];
          
          if(role===RoleConst.owner){
            navigate("/owner-dashboard");
          } 
          if(role===RoleConst.customer){
            navigate("/customer-dashboard");
          }
        }
        
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={logo} sx={{ width: 100, height: 100, overflow: 'hidden' }} >
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
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
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <FormControlLabel disabled checked={checked} onClick={switchHandler} control={<Switch  />} label="Dark mode" />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button fullWidth startIcon={<Google />} variant="outlined" disabled >Continue with google</Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

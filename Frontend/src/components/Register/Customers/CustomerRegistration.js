import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pictureCustomers from '../../../../src/images/p25.jpg';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import { ThemeOptions } from '@mui/material';
import Server from '../../../Server'
import {useState,useEffect} from 'react'
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

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


export default function CustomerRegistration() {
  const handleSubmit = (event) => {
    event.preventDefault();
   
    const data = new FormData(event.currentTarget);
    console.log(data)
    let params = {
       firstName:data.get('firstName'),
       lastName:data.get('lastName'),
       email:data.get('email'),
       password:data.get('password')
    }
    console.log(params);
    Server.customerRegister(params).then(res=>alert('ok'))
  }; 
  let [val1,setVal1] = useState({tf:false,tip:''});
  let [val2,setVal2] = useState({tf:false,tip:''});
  let [val3,setVal3] = useState({tf:false,tip:''});
  let [val4,setVal4] = useState({tf:false,tip:''});
  function validateField(params){
    let flag = true
    let regx = /.+/
    let regx1 = /.+@\w+\.\w+/ 
    let regx2 =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    
     if(!regx.test(params.firstName) ){
      setVal1({tf:true,tip:'please enter your first name'})
      flag = false
     }
     if(!regx.test(params.lastName) ){
      setVal2({tf:true,tip:'please enter your last name'})
      flag = false
     } 
     if(!regx.test(params.email) || (!regx1.test(params.email))){
      setVal3({tf:true,tip:!regx.test(params.email)?'please enter your email':'email not valid'})
      flag = false
     }
     if(!regx.test(params.password) || !regx2.test(params.password)){
      setVal4({tf:true,tip:!regx.test(params.password)?'please enter your password':'password should be at least 8 length and contains number,symbol,uppercase letter and lower letter'})
      flag = false
     }
      return flag
  }

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
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <BusinessOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={val1.tf}
                  helperText={val1.tip} 
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={val2.tf}
                  helperText={val2.tip} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={val3.tf}
                  helperText={val3.tip} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={val4.tf}
                  helperText={val4.tip} 
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="secondary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} 
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">

                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import pictureCustomers from '../../../src/images/p25.jpg';
import pictureOwners from '../../../src/images/p32.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import Grid from '@mui/material/Grid';

const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export default function Register() {
  return (
    <ThemeProvider theme={theme}>
    <Grid>
    <CssBaseline />
    <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 h-screen">
       
        <Card sx={{ maxWidth: 500 }} className="sm:justify-self mb-3" >
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={pictureCustomers}
            />
            <CardContent align="center" >
            <Typography gutterBottom variant="h5" component="div">
                Customers Registration
            </Typography>
            <Typography variant="body2" color="text.secondary">
                You Continue Registration process as a <b>Customer</b>
            </Typography>
            </CardContent>
            <CardActions>
            <Button className='w-full' href='/customer-registration' ><p className='text-center'>Continue</p></Button>
            </CardActions>
        </Card>
        
        <Card sx={{ maxWidth: 500 }} className="sm:justify-self" >
            <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={pictureOwners}
            />
            <CardContent align="center" >
            <Typography gutterBottom variant="h5" component="div">
                Owners Registration
            </Typography>
            <Typography variant="body2" color="text.secondary">
            You Continue Registration process as a <b>Owner</b>
            </Typography>
            </CardContent>
            <CardActions>
            <Button className='w-full' href='/owner-registration' ><p className='text-center'>Continue</p></Button>
            </CardActions>
        </Card>
        
    </div>
    </Grid>
    </ThemeProvider>    
  );
}
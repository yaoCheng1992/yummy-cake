import React, { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, Stack } from '@mui/material';
import activationPicture from '../../images/activation.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useParams } from 'react-router-dom';
import Server from '../../Server';

function SuccessRegistration(props) {
  const routeParams = useParams();
 
  useEffect(() => { 
    Server.customerActivation(routeParams.id).then(res=>alert('ok'));
    }, [])
  
    return ( 
      <div className='grid place-items-center h-screen w-full'>
      <Card>
        
      <CardActionArea >
      <div className='text-center'>
      <CheckCircleOutlineIcon color="primary" className="block mx-auto" sx={{ fontSize: 90,  }} />
      </div>
        <CardContent className='text-center'>
          <Typography gutterBottom variant="h5" component="div" >
            <b>Activation succesfuly</b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your accont is account is now activated.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  className='w-full' href='/login' variant="contained" color="primary">
          Continue
        </Button>
      </CardActions>
    </Card>
    </div>
    );
}
  
export default SuccessRegistration;
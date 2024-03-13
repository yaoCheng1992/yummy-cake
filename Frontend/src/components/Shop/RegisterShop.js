import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import StoreIcon from '@mui/icons-material/Store';
import MapIcon from '@mui/icons-material/Map';
import { Button, FormControl, IconButton, MenuItem, Select } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { DropzoneArea } from "mui-file-dropzone";
import PhotoIcon from '@mui/icons-material/Photo';
import Server from "../../Server";

export default function RegisterShop() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("test register shop");
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let params = {
      name:data.get('name'),
      country:data.get('country'),
      city:data.get('city'),
      province:data.get('province'),
      country:data.get('country'),
      address:data.get('address'),
      zip:data.get('zip')
   }

   Server.registerShop(params).then(res=>alert('ok'));
  }; 

  const categories = [
    "Serbia",
    "Macedonia",
    "Grece",
    "Croatia",
    "Bosnia and Hercegovina",
    "Montenegro",
    "Romania",
    "Slovenia"
  ];
  return (
    <React.Fragment>
      <Paper  sx={{ marginRight: "20%", marginLeft: "20%" }}>
        <Box component="form" noValidate sx={{ padding: 5 }} onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }} className="text-center">
            Register shop <StoreIcon color="info" fontSize="large"/>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5,paddingTop: 10 }} className="text-center">
            Address <MapIcon color="info" fontSize="large"/>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="country"
                  value={age}
                  label="Country"
                  onChange={handleChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
            <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip Code"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
          </Grid>
          <Grid container spacing={3} gutterBottom sx={{paddingTop: 2}}>
            <Grid item xs={12} sm={6}>
              <TextField
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                  id="province"
                  name="province"
                  label="Province"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
          </Grid>
          <Grid container spacing={3} gutterBottom sx={{ paddingBottom: 5,paddingTop: 5}}>
            <Grid item xs={12} sm={8}>
              <TextField
                  id="additionalAddress"
                  name="additionalAddress"
                  label="Additional address"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={2}>
          <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }} className="text-center">
             Upload Picture <UploadFileIcon color="info" fontSize="large"/>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} className="text-center" gutterBottom sx={{ paddingBottom: 5}}>
            <DropzoneArea
							Icon={PhotoIcon}
              acceptedFiles={['image/*']}
              filesLimit={10}
              dropzoneText={"Drag and drop an image here or click"}
              onChange={(files) => console.log('Files:', files)}
							showFileNames={true}
							maxFileSize={10000000}
            />
          </Grid>
					<Grid style={{ float: 'right' }}>
						<Button type="submit" variant="contained" color="info">CREATE NEW SHOP</Button>
					</Grid>
					<br/>
					<br/>
        </Box>
      </Paper>
      
    </React.Fragment>
  );
}

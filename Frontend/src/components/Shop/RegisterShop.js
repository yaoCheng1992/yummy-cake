import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import StoreIcon from '@mui/icons-material/Store';
import MapIcon from '@mui/icons-material/Map';
import { FormControl, MenuItem, Select } from "@mui/material";

export default function RegisterShop() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const categories = [
    "science",
    "sports",
    "business",
    "politics",
    "entertainment",
    "technology",
    "world",
    "all"
  ];
  return (
    <React.Fragment>
      <Paper  sx={{ marginRight: "25%", marginLeft: "25%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h5" gutterBottom sx={{ paddingBottom: 5 }} className="text-center">
            Register shop <StoreIcon color="info" fontSize="large"/>
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="nameOfShop"
                name="nameOfShop"
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
                  id="demo-simple-select"
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
                  id="nameOfShop"
                  name="nameOfShop"
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
                  id="nameOfShop"
                  name="nameOfShop"
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
                  id="nameOfShop"
                  name="nameOfShop"
                  label="Address"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                  id="nameOfShop"
                  name="nameOfShop"
                  label="Province"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
          </Grid>
          <Grid container spacing={3} gutterBottom sx={{ paddingBottom: 2,paddingTop: 5}}>
            <Grid item xs={12} sm={8}>
              <TextField
                  id="nameOfShop"
                  name="nameOfShop"
                  label="Additional address"
                  fullWidth
                  size="small"
                  autoComplete="off"
                  variant="outlined"
                />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </React.Fragment>
  );
}

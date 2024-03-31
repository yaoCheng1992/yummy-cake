import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import picture from '../../images/p12.jpg';
import Server from "../../Server";
import {useState,useEffect} from 'react'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];


  const fetchOwnerShops = async () => {
    try {
      
      const response = await Server.getOwnerShops()
      return response.data;
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  };


export default function OwnerShops() {
    return (
        <Paper  sx={{ marginRight: "20%", marginLeft: "20%" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Adress</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Country</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <img src={picture} alt={row.name} style={{ width: '100px', height: '100px' }} />
                  </TableCell>
                  <TableCell >{row.calories}</TableCell>
                  <TableCell >{row.fat}</TableCell>
                  <TableCell >{row.carbs}</TableCell>
                  <TableCell >{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      );
}
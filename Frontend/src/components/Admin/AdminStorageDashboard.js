import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';

import WarehouseIcon from '@mui/icons-material/Warehouse';
import { Calculate, CurrencyExchange } from "@mui/icons-material";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

function AdminStorageDashboard(props){
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
  

    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Storage" icon={<WarehouseIcon />} />
            <BottomNavigationAction label="Calculator" icon={<Calculate />} />
            <BottomNavigationAction label="Prices" icon={<CurrencyExchange />} />
            <BottomNavigationAction label="Generate Excel Report" icon={<ReceiptLongIcon />} />
          </BottomNavigation>
        </Paper>
      </Box>
    );
}

export default AdminStorageDashboard
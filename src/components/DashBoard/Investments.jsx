import React from 'react';
import { Box, Card } from '@mui/material';
import TableDashboard from '../DashBoard/TableDashboard.jsx';
import TableDashboardHeader from './TableDashboardHeader.jsx';

const Investments = () => {
  return (
    <>
      <Card>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: '20px', flexWrap: 'wrap' }}>
          <Box sx={{ width: '100%' }}>
            <TableDashboardHeader />
          </Box>

          <Box sx={{ flex: '0 0 100%', mt: '40px' }}>
            <TableDashboard />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Investments;

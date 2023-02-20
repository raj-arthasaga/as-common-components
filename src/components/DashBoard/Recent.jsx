import React from 'react';
import { Box, Button, Card, Typography } from '@mui/material';

const Recent = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <Box sx={{ p: '20px', pt: '20px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: '20px' }}>
          <Box>
            <Typography variant='h5' sx={{ fontFamily: "'Poppins',sans-serif !important", mb: 5 }}>
              Recent Activity
            </Typography>
          </Box>
          <Box>
            <Button variant='text'>View All</Button>
          </Box>
        </Box>
        <Box sx={{ height: '100%' }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>NO TRANSACTIONS FOUND</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default Recent;

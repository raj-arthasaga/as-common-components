import React from 'react';
import { Box, Card, Typography } from '@mui/material';

const Statistics = () => {
  return (
    <>
      <Card sx={{ p: '20px', height: '100%' }}>
        <Box>
          <Box>
            <Typography variant='h5' sx={{ fontFamily: "'Poppins',sans-serif !important", mb: 1 }}>
              Statistics
            </Typography>
          </Box>
          <Box>
            <Box sx={{ pb: '24px', pt: '10px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px', mb: '16px' }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                    Total Investments
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>$0.00</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px' }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                    Total Interest Received
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>$0.00</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '16px' }}>
                <Box>
                  <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                    Interest Received (2023)
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>$0.00</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Statistics;

import React from 'react';
import { Box, Typography } from '@mui/material';

const Investable = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography variant='h5' sx={{ fontFamily: "'Poppins',sans-serif !important", mb: 5 }}>
            Investable Balance
          </Typography>
        </Box>
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px' }}>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                Cash
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>$0.00</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                Pending Investments
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>$0.00</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                Pending Withdrawals
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>$0.00</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '16px' }}>
            <Box>
              <Typography sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold' }}>
                Investable Balance
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontFamily: "'Poppins',sans-serif !important", fontSize: '20px', fontWeight: 'bold' }}
              >
                $0.00
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Investable;

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import ButtonMain from './Button';

const Notification = () => {
  return (
    <>
      <Box sx={{ bgcolor: '#ffcb80', color: '#341200', p: '10px 60px' }}>
        <Container maxWidth='xl'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex' }}>
                <Box>
                  <ReportProblemIcon />
                </Box>
                <Box>
                  <Typography
                    variant='p'
                    sx={{ fontWeight: 'bold', fontFamily: "'Poppins',sans-serif !important" }}
                  >
                    Profile Incomplete
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ ml: 5 }}>
                <Typography variant='p' sx={{ fontFamily: "'Poppins',sans-serif !important" }}>
                  Please fill out your investor profile
                </Typography>
              </Box>
            </Box>
            <Box>
              <ButtonMain
                sx={{
                  p: '3px 9px',
                  borderRadius: '4px',
                  border: '1px solid #0d113f',
                  fontFamily: "'Poppins',sans-serif !important",
                  fontWeight: '200',
                  color: '#000',
                }}
              >
                Profile
              </ButtonMain>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Notification;

import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Button from './Button';

const Breadcrumb = () => {
  return (
    <>
      <Box sx={{ bgcolor: '#0d113fe6', p: '48px 24px' }}>
        <Container maxWidth='xl'>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ color: '#fff', fontFamily: "'Poppins',sans-serif !important" }}>
              <Typography variant='h4' sx={{ fontFamily: "'Poppins',sans-serif !important" }}>
                Portfolio
              </Typography>
            </Box>
            <Box>
              <Button
                sx={{
                  bgcolor: '#2196f3',
                  color: '#fff',
                  '&:hover': {
                    bgcolor: '#2196f3',
                  },
                }}
              >
                Add/Withdraw Funds
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Breadcrumb;

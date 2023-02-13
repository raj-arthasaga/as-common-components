import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { VictoryPie } from 'victory';
import ButtonMain from '../Button';

ChartJS.register(ArcElement, Tooltip, Legend);

const Composition = () => {
  return (
    <>
      <Box sx={{ p: '0', pb: '20px' }}>
        <Box sx={{ padding: '16px' }}>
          <Typography variant='h5' sx={{ fontFamily: "'Poppins',sans-serif !important", mb: 5 }}>
            Portfolio Composition
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '326px', height: '326px', position: 'relative' }}>
            <Box
              sx={{
                boxSizing: 'border-box',
                MozBoxSizing: 'border-box',
                WebkitBoxSizing: 'border-box',
                width: '326px',
                height: '326px',
                border: '60px solid #eee',
                background: '#fff',
                borderRadius: '100%',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: '12px',
                    color: '#000',
                    fontWeight: 'bold',
                    fontFamily: "'Poppins',sans-serif !important",
                  }}
                >
                  TOTAL PORTFOLIO VALUE
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "'Poppins',sans-serif !important" }}>
                  $ <strong>0.00</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ ml: '50px', textAlign: 'center' }}>
            <Box sx={{ mb: '20px' }}>
              <Typography
                sx={{ fontFamily: "'Poppins',sans-serif !important", width: '100%', maxWidth: '241px' }}
                variant='h6'
              >
                Get started by adding funds to your account
              </Typography>
            </Box>
            <ButtonMain
              variant={'contained'}
              sx={{ fontFamily: "'Poppins',sans-serif !important", fontWeight: 'bold', letterSpacing: 0 }}
            >
              Fund Account
            </ButtonMain>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Composition;

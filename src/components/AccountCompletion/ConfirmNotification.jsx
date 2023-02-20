import React from 'react';
import { Alert, Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const ConfirmNotification = () => {
  return (
    <Box
      sx={{
        '& .MuiAlert-message': {
          pt: 0,
        },
      }}
    >
      <Alert severity='info'>
        <Box>
          <Box>
            <Box>
              <Typography variant='h6' sx={{ fontFamily: 'Poppins', fontWeight: 'bold' }}>
                Please confirm your information
              </Typography>
              <Typography variant='p' sx={{ fontFamily: 'Poppins' }}>
                Please verify your information below to ensure accurate year-end tax forms. Email us at
                support@percent.com if you need to change details not editable below.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Alert>
    </Box>
  );
};

export default ConfirmNotification;

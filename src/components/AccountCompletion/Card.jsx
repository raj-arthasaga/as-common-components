import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import LeftSide from '../AccountCompletion/LeftSide.jsx';
import RightSide from '../AccountCompletion/RightSide.jsx';

const Card = () => {
  return (
    <Box>
      <Container
        sx={{
          mt: -2,
          bgcolor: '#fff',
          backgroundColor: 'rgb(255, 255, 255)',
          color: 'rgba(0, 0, 0, 0.87)',
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          borderRadius: '4px',
          boxShadow:
            'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
          pb: '50px',
        }}
        maxWidth={'xl'}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <LeftSide />
          </Grid>
          <Grid item xs={8}>
            <RightSide />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Card;

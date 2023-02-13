import React from 'react';
import { Container, Grid, Box, Card } from '@mui/material';
import Breadcrumb from '../components/Breadcrumb';
import Composition from '../components/DashBoard/Composition';
import DrawerAppBar from '../components/DashboardHeader';
import Notification from '../components/Notification';
import Investable from '../components/DashBoard/Investable';

const Dashboard = () => {
  return (
    <>
      <Box>
        <DrawerAppBar />
      </Box>
      <Box>
        <Notification />
      </Box>
      <Box>
        <Breadcrumb />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ position: 'absolute', top: '-20px', width: '100%' }}>
          <Container maxWidth='xl'>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card sx={{ p: '20px' }}>
                  <Composition />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Box>
                    <Card sx={{ p: '20px' }}>
                      <Investable />
                    </Card>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;

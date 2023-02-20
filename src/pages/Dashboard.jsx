import React from 'react';
import { Container, Grid, Box, Card, Typography } from '@mui/material';
import Breadcrumb from '../components/Breadcrumb';
import Composition from '../components/DashBoard/Composition';
import DrawerAppBar from '../components/DashboardHeader';
import Notification from '../components/Notification';
import Investable from '../components/DashBoard/Investable';
import Statistics from '../components/DashBoard/Statistics';
import Recent from '../components/DashBoard/Recent';
import Investments from '../components/DashBoard/Investments';
import Footer from '../components/Footer';

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
        <Breadcrumb isBtn name='Portfolio' btnName='Add/Withdraw Funds' />
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Box sx={{ mt: '-40px' }}>
          <Container maxWidth='xl'>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Card sx={{ p: '20px', height: '100%' }}>
                    <Composition />
                  </Card>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Grid sx={{ display: 'flex', justifyContent: 'space-between', flex: ' 0 0 50%' }}>
                    <Grid sx={{ flex: ' 0 0 50%', pr: 1 }}>
                      <Box>
                        <Investable />
                      </Box>
                    </Grid>
                    <Grid sx={{ flex: ' 0 0 50%', pl: 1 }}>
                      <Box>
                        <Statistics />
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid sx={{ flex: ' 0 0 50%' }}>
                    <Box sx={{ height: '100%', mt: '25px' }}>
                      <Recent />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ mt: '60px', mb: '60px' }}>
              <Investments />
            </Box>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;

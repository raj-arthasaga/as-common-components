import React from 'react';
import { Box } from '@mui/material';
import DrawerAppBar from '../components/DashboardHeader';
import Notification from '../components/Notification';
import Breadcrumb from '../components/Breadcrumb';
import Card from '../components/AccountCompletion/Card';

const AccountSetting = () => {
  return (
    <>
      <Box>
        <DrawerAppBar />
      </Box>
      <Box>
        <Notification />
      </Box>
      <Box>
        <Breadcrumb name='Account Settings' />
      </Box>
      <Box>
        <Card />
      </Box>
    </>
  );
};

export default AccountSetting;

import { Box } from '@mui/material';
import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import Layout from '../containers/Layout';

const Home = () => {
  return (
    <Layout>
      <section>
        <Box sx={{ height: 'calc(100vh - 160px)' }}>
          <HeroSection />
        </Box>
      </section>
    </Layout>
  );
};

export default Home;

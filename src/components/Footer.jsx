import React from 'react';
import { Box, Grid, Container, Typography, Fab, Button, Divider } from '@mui/material';
import { FooterData, FooterSocial } from '../services/data';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#0d113f1a', p: '48px 24px' }}>
      <Container maxWidth='xl'>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '100px' }}>
          <Box sx={{ display: 'flex', width: '100%' }}>
            {FooterData.map((item, index) => {
              return (
                <>
                  <Box key={index + 1} sx={{ mr: '40px' }}>
                    <Box>
                      <Typography
                        variant='h4'
                        sx={{ fontSize: '20px', fontFamily: 'Poppins', fontWeight: 'bold', mb: '20px' }}
                      >
                        {item.name}
                      </Typography>
                    </Box>
                    <Box>
                      {item.footerLink.map((item, index) => {
                        return (
                          <>
                            <Box
                              key={index + 1}
                              sx={{
                                mb: '8px',
                                '& a': {
                                  color: '#0d113f',
                                  textDecoration: 'none',
                                  '&:hover': {
                                    textDecoration: 'underline',
                                  },
                                },
                              }}
                            >
                              <Link to={item.path} sx={{ fontSize: '16px' }}>
                                {item.name}
                              </Link>
                            </Box>
                          </>
                        );
                      })}
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box
            sx={{
              '& a': {
                ml: '32px',
                mb: '8px',
                mt: '8px',
              },
              display: 'flex',
            }}
          >
            {FooterSocial?.map((item, index) => {
              return (
                <Link to={item.path} key={index + 1}>
                  <Fab
                    color='primary'
                    aria-label='add'
                    sx={{ bgcolor: '#0d113f', '&:hover': { bgcolor: '#0d113f' } }}
                  >
                    {item.icons}
                  </Fab>
                </Link>
              );
            })}
          </Box>
        </Box>

        <Divider />

        <Box
          sx={{
            mt: '50px',
            '& a': {
              color: '#2196f3',
              mr: '5px',
              ml: '5px',
            },
          }}
        >
          <Typography sx={{ fontSize: '14px', color: '#00000099' }}>
            The information on this website does not constitute an offer to sell securities or a solicitation
            of an offer to buy securities. Further, none of the information contained on this website is a
            recommendation to invest in any securities. By using this website, you accept our
            <Link to={'/'}>Terms of Use</Link>
            and
            <Link to={'/'}>Privacy Policy</Link>. Past performance is no guarantee of future results. Any
            historical returns, expected returns or probability projections may not reflect actual future
            performance. All investments involve risk and may result in loss, including loss of principal.
            Percent does not render investment, financial, legal or accounting advice.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

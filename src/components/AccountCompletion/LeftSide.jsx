import React from 'react';
import { Box, CircularProgress, Typography, List, ListItemButton, Avatar, Tabs, Tab } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LockIcon from '@mui/icons-material/Lock';
import ButtonMain from '../Button';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant='determinate' {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='caption' component='div' color='text.secondary'>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const LeftSide = () => {
  const [progress, setProgress] = React.useState(10);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#2196f3',
          borderRadius: '4px',
          p: '16px 32px 16px 16px',
          justifyContent: 'space-between',
          width: '25%',
        }}
      >
        <Box
          sx={{
            width: '76px',
            height: '76px',
            flex: '0 0 20%',
            mr: '5px',

            '& .MuiCircularProgress-svg ': {
              bgcolor: '#fff',
              borderRadius: '100%',
            },
            '& .MuiTypography-caption': {
              fontSize: '20px',
            },

            '& .MuiBox-root': {
              width: '100%',
              height: '100%',

              '& span': {
                width: '100% !important',
                height: '100% !important',
              },
            },
          }}
        >
          <CircularProgressWithLabel value={progress} />
        </Box>
        <Box sx={{ flex: '0 0 80%', ml: '20px' }}>
          <Box>
            <Typography variant='p' sx={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
              Account Completion
            </Typography>
          </Box>
          <Typography variant='p' sx={{ fontSize: 14, color: '#fff' }}>
            Please complete your account details to begin investing with Percent.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          '& .MuiTabs-vertical': {
            width: '28%',

            '& button': {
              maxWidth: '100%',
              '&>.MuiBox-root': {
                display: 'flex',
                width: '100%',
              },
            },
          },
        }}
      >
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{
            borderRight: 1,
            borderColor: 'divider',

            '& .MuiTabs-root': {
              width: '28%',
            },
            '& .MuiTabs-scroller': {
              '& button': {
                width: '100%',
              },
            },
          }}
        >
          <Tab
            label={
              <>
                <Box>
                  <Box sx={{ flex: '0 0 10%' }}>
                    <Avatar sx={{ bgcolor: '#2196f3' }} variant='square'>
                      <AccountBoxIcon />
                    </Avatar>
                  </Box>
                  <Box
                    sx={{
                      '& *': {
                        fontFamily: "'Poppins',sans-serif !important",
                      },
                      ml: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flex: '0 0 90%',
                    }}
                  >
                    <Box sx={{ textAlign: 'initial' }}>
                      <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>COI</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Complete your profile</Typography>
                    </Box>
                    <Box>
                      <ButtonMain disableRipple={true}>
                        <ChevronRightIcon />
                      </ButtonMain>
                    </Box>
                  </Box>
                </Box>
              </>
            }
            {...a11yProps(0)}
            sx={{ width: '30%' }}
          />
          <Tab
            label={
              <>
                <Box>
                  <Box sx={{ flex: '0 0 10%' }}>
                    <Avatar sx={{ bgcolor: '#2196f3' }} variant='square'>
                      <AccountBoxIcon />
                    </Avatar>
                  </Box>
                  <Box
                    sx={{
                      '& *': {
                        fontFamily: "'Poppins',sans-serif !important",
                      },
                      ml: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flex: '0 0 90%',
                    }}
                  >
                    <Box sx={{ textAlign: 'initial' }}>
                      <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>COI</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Complete your profile</Typography>
                    </Box>
                    <Box>
                      <ButtonMain disableRipple={true}>
                        <ChevronRightIcon />
                      </ButtonMain>
                    </Box>
                  </Box>
                </Box>
              </>
            }
            {...a11yProps(1)}
            sx={{ width: '30%' }}
          />
          <Tab
            label={
              <>
                <Box>
                  <Box sx={{ flex: '0 0 10%' }}>
                    <Avatar sx={{ bgcolor: '#2196f3' }} variant='square'>
                      <AccountBoxIcon />
                    </Avatar>
                  </Box>
                  <Box
                    sx={{
                      '& *': {
                        fontFamily: "'Poppins',sans-serif !important",
                      },
                      ml: '10px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      flex: '0 0 90%',
                    }}
                  >
                    <Box sx={{ textAlign: 'initial' }}>
                      <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>COI</Typography>
                      <Typography sx={{ fontSize: '14px' }}>Complete your profile</Typography>
                    </Box>
                    <Box>
                      <ButtonMain disableRipple={true}>
                        <ChevronRightIcon />
                      </ButtonMain>
                    </Box>
                  </Box>
                </Box>
              </>
            }
            {...a11yProps(2)}
            sx={{ width: '30%' }}
          />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
      {/* <Box sx={{ mt: '10px' }}>
        <List sx={{ width: '100%' }} component='nav' aria-labelledby='nested-list-subheader'>
          <ListItemButton sx={{ bgcolor: 'rgba(33, 150, 243, 0.12)' }}></ListItemButton>
          <ListItemButton disabled={true}></ListItemButton>
          <ListItemButton disabled={true}>
            <Box sx={{ flex: '0 0 10%' }}>
              <Avatar sx={{ bgcolor: '#0000001f' }} variant='square'>
                <LockIcon />
              </Avatar>
            </Box>
            <Box
              sx={{
                '& *': {
                  fontFamily: "'Poppins',sans-serif !important",
                },
                ml: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                flex: '0 0 90%',
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Accreditation</Typography>
                <Typography sx={{ fontSize: '14px' }}>Verify your accreditation status</Typography>
              </Box>
              <Box>
                <ButtonMain disableRipple={true}>
                  <ChevronRightIcon />
                </ButtonMain>
              </Box>
            </Box>
          </ListItemButton>
          <ListItemButton disabled={true}>
            <Box sx={{ flex: '0 0 10%' }}>
              <Avatar sx={{ bgcolor: '#0000001f' }} variant='square'>
                <LockIcon />
              </Avatar>
            </Box>
            <Box
              sx={{
                '& *': {
                  fontFamily: "'Poppins',sans-serif !important",
                },
                ml: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                flex: '0 0 90%',
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>Bank Account</Typography>
                <Typography sx={{ fontSize: '14px' }}>Link your bank account</Typography>
              </Box>
              <Box>
                <ButtonMain disableRipple={true}>
                  <ChevronRightIcon />
                </ButtonMain>
              </Box>
            </Box>
          </ListItemButton>
        </List>
      </Box> */}
    </>
  );
};

export default LeftSide;

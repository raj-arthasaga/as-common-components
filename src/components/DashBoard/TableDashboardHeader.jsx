import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  styled,
  alpha,
  Checkbox,
  FormControl,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  Select,
  Button,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
      '& li': {
        padding: '0',
      },
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

const options = [
  'DEAL NAME',
  'Asset Type',
  'Ticker',
  'Term',
  'Borrower',
  'Apy',
  'Maturity Date',
  'Call Date',
  'Initial Investment',
  'Principal Outstanding',
  'Interest Received',
  'Status',
];

const TableDashboardHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selected, setSelected] = useState([]);
  const [age, setAge] = React.useState('');
  const [value, setValue] = useState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAllSelected = options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (value === 'all') {
      setSelected(selected.length === options.length ? [] : options);
      return;
    }
    // added below code to update selected options
    const list = [...selected];
    const index = list.indexOf(value);
    index === -1 ? list.push(value) : list.splice(index, 1);
    setSelected(list);
  };

  const selecthandleChange = (event) => {
    setAge(event.target.value);
  };

  const listItem = options.map((option) => {
    return (
      <Box key={option} sx={{ p: '8px 16px' }}>
        <Checkbox value={option} onChange={handleChange} checked={selected.includes(option)} />
        <span>{option}</span>
      </Box>
    );
  });

  const onChangeOutline = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const clearValue = () => {
    setValue('');
  };

  return (
    <Box sx={{ flex: '0 0 100%', display: 'flex', justifyContent: 'space-between' }}>
      <Box>
        <Typography sx={{ fontSize: '24px', fontFamily: "'Poppins',sans-serif !important" }}>
          Investments
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: 'flex',
            '& .MuiFormControl-root': {
              mr: '11px',
            },
          }}
        >
          <FormControl sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ position: 'relative' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                  <Typography sx={{ fontSize: '12px' }}>Name</Typography>
                </Box>

                <Box sx={{ visibility: value ? 'visible' : 'hidden' }}>
                  <Button variant='text' sx={{ fontSize: '12px', p: '0' }} onClick={clearValue}>
                    clear
                  </Button>
                </Box>
              </Box>
              <Box>
                <OutlinedInput
                  placeholder='Any'
                  sx={{ height: '40px', p: '0', width: '160px' }}
                  onChange={onChangeOutline}
                  value={value}
                />
                <Box sx={{ position: 'absolute', top: '45%', right: '5px' }}>
                  <SearchIcon sx={{ color: 'rgba(0, 0, 0, 0.26)' }} />
                </Box>
              </Box>
            </Box>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              fieldset: {
                legend: {
                  display: 'none',
                },
              },
              '& .MuiInputBase-root': {
                height: '36px',
                mt: '8px',
                width: '100%',
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Name</Typography>
            </Box>
            <Box sx={{ width: '160px' }}>
              <Select id='demo-simple-select' value={age} label='Age' onChange={selecthandleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              fieldset: {
                legend: {
                  display: 'none',
                },
              },
              '& .MuiInputBase-root': {
                height: '40px',
                mt: '8px',
                width: '100%',
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Term</Typography>
            </Box>
            <Box sx={{ width: '160px' }}>
              <Select id='demo-simple-select2' value={age} label='Age' onChange={selecthandleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </FormControl>
          <FormControl
            fullWidth
            sx={{
              fieldset: {
                legend: {
                  display: 'none',
                },
              },
              '& .MuiInputBase-root': {
                height: '40px',
                mt: '8px',
                width: '100%',
              },
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Status</Typography>
            </Box>
            <Box sx={{ width: '160px' }}>
              <Select id='demo-simple-select1' value={age} label='Age' onChange={selecthandleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </Box>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <IconButton
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          variant='contained'
          disableElevation
          onClick={handleClick}
        >
          <SettingsIcon />
        </IconButton>
        <StyledMenu
          id='demo-customized-menu'
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem disableRipple>
            <Box sx={{ textTransform: 'uppercase' }}>
              <Box sx={{ p: '8px 16px', display: 'flex', alignItems: 'center' }}>
                <Checkbox value='all' onChange={handleChange} checked={isAllSelected} />
                <Box>
                  <span> Select All</span>
                </Box>
              </Box>
              <Box>{listItem}</Box>
            </Box>
          </MenuItem>
        </StyledMenu>
      </Box>
    </Box>
  );
};

export default TableDashboardHeader;

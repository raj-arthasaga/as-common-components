import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Grid,
  Select,
  MenuItem,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
import { ReactComponent as DownChervon } from '../assets/sign-up/down-chervon.svg';
import { useFormik } from 'formik';
import 'yup-phone';
import * as yup from 'yup';
import 'yup-phone';

import Input from './Input';
import Individual from './Individual';
import Institutional from './Institutional';

const InvestorComponent = () => {
  const [radioDual, setRadioDual] = useState(true);

  return (
    <Box>
      <Box
        sx={{
          '& .MuiFormGroup-root': {
            flexDirection: 'row',
            width: '100%',
          },
          '& .MuiFormControl-root': {
            justifyContent: 'center',
            width: '100%',
            mt: '10px',
            '& .MuiFormGroup-root': {
              maxWidth: '549px',
              justifyContent: 'space-between',
              padding: '10px',
              margin: 'auto',
            },

            '& .MuiFormControlLabel-label': {
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '24px',
              fontFamily: 'Poppins',
            },

            '& label': {
              '& span': {
                '& span': {
                  '& svg': {
                    fill: '#000',
                  },
                },
              },
            },
          },
        }}
      >
        <FormControl>
          <RadioGroup
            aria-labelledby='demo-radio-buttons-group-label'
            defaultValue='Individual'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='Individual'
              control={<Radio />}
              label='Individual'
              onClick={() => setRadioDual(true)}
            />
            <FormControlLabel
              value='Institutional'
              control={<Radio />}
              label='Institutional'
              onClick={() => setRadioDual(false)}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box>{radioDual === true ? <Individual /> : <Institutional />}</Box>
    </Box>
  );
};

export default InvestorComponent;

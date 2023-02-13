import React, { useEffect } from 'react';
import Routers from './routers/Routers';
import { ThemeProvider } from '@mui/material';
import { Theme } from './styles/Theme';
import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Routers />
      </ThemeProvider>
    </>
  );
}

export default App;

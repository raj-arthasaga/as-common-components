import React, { useEffect } from 'react';
import Routers from './routers/Routers';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/Global.style';

import './App.css';

function App() {
  return (
    <>
      <GlobalStyle />

      <Routers />
    </>
  );
}

export default App;

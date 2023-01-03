import React from 'react';
import Header from '../components/Header.jsx';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

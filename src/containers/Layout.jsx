import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

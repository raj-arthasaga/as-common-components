import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to='/login'>Login</Link>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
};

export default Header;

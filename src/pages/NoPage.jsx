import React, { useEffect } from 'react';

const NoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>NoPage</div>;
};

export default NoPage;

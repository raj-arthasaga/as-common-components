import { lazy } from 'react';

const Routers = (path) => {
  return lazy(() => {
    return Promise.all([path, new Promise((resolve) => setTimeout(resolve, 600))]).then(
      ([moduleExports]) => moduleExports
    );
  });
};

export default Routers;

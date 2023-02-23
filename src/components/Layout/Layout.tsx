import React from 'react';

import { Header } from '../molecules/Header/Header';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

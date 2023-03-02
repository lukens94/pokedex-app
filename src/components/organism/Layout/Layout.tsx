import React from 'react';

import { Footer } from '../../molecules/Footer/Footer';
import { Header } from '../../molecules/Header/Header';
import style from './Layout.module.scss';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className={style.Layout}>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

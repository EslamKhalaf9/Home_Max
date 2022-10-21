import React from 'react';
import Header from './Header';

const Layout = ({ children }: {children: JSX.Element}) => {
  return (
    <div>
      <Header />
      <main className='container mx-auto'>
        {children}
      </main>
    </div>
  );
};

export default Layout;

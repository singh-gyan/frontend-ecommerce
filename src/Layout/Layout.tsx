import React from 'react';
import Drawer from '../components/molecules/Drawer';
import Navbar from '../components/organisms/Navbar';
import { Container, Pane } from '../components/styled/GeneralStyles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* <Drawer /> */}
      <Navbar />
      <div className='p-10 h-[90vh] overflow-scroll'>{children}</div>
    </>
  );
};

export default Layout;

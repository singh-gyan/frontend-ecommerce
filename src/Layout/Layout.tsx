import React from 'react';
import Navbar from '../components/organisms/Navbar';
import { Container, Pane } from '../components/styled/GeneralStyles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container direction='column'>
      <Pane bgColor='#fff' color='#000' padding='10px' zIndex='1000'>
        <Navbar />
      </Pane>
      <Pane color='#000' overflow='auto' padding='3em'>
        {children}
      </Pane>
    </Container>
  );
};

export default Layout;

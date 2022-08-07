import React from 'react';
import Navbar from '../components/organisms/Navbar';
import { Container, Pane } from '../components/styled/GeneralStyles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container direction='column'>
      <Pane bgColor='#fff' color='#000' padding='10px'>
        <Navbar />
      </Pane>
      <Pane color='#000' overflow='auto' bgColor='#eee' padding='10px'>
        {children}
      </Pane>
    </Container>
  );
};

export default Layout;

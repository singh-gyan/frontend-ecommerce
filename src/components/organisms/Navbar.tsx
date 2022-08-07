import { Badge, Button, IconButton, BadgeProps } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Pane } from '../styled/GeneralStyles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = () => {
  return (
    <Container gap='10px' align='center'>
      <Pane>
        <Link to='/' style={{ fontSize: 20 }}>
          YoKart
        </Link>
      </Pane>
      <Pane style={{ marginLeft: 'auto' }}>
        <Button component={Link} to='/login'>
          Log in
        </Button>
      </Pane>
      <Pane>
        <Button component={Link} to='/signup'>
          Sign up
        </Button>
      </Pane>
      <Pane>
        <IconButton aria-label='cart' component={Link} to='/cart'>
          <StyledBadge badgeContent={4} color='secondary'>
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Pane>
    </Container>
  );
};

export default Navbar;

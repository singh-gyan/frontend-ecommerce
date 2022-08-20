import axios from 'axios';
import { getCatalog } from '../api/paths';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../components/styled/GeneralStyles';
import { Card, CardActionArea, CardMedia, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
  const nav = useNavigate();
  const { data: categories, isLoading } = useQuery(['catalog'], () =>
    axios.get(getCatalog).then(res => res.data)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container justify='center'>
      <div className='grid grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 lg:grid-cols-3'>
        {categories.map(
          (product: { id: number; image?: string; category?: string }) => (
            <Link to={`${product.category}`} className='shadow-lg  '>
              <img
                src={product.image}
                alt={product.category}
                className='w-72 h-64'
              />
              <div className='text-center'>
                {product.category?.toLocaleUpperCase()}
              </div>
            </Link>
          )
        )}
      </div>
    </Container>
  );
};

export default Home;

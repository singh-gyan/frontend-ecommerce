import axios from 'axios';
import { getCatalog } from '../api/paths';
import { useQuery } from '@tanstack/react-query';
import { Container } from '../components/styled/GeneralStyles';
import { Card, CardActionArea, CardMedia, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
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
      <Stack direction={'row'} gap={10}>
        {categories.map(
          (product: { id: number; image?: string; category?: string }) => (
            <Card
              onClick={() => {
                nav(`/${product.category}`);
              }}
              key={product.id}
            >
              <CardActionArea>
                <CardMedia
                  component={'img'}
                  alt={product?.category}
                  height='140'
                  width={'140'}
                  image={product?.image}
                />
              </CardActionArea>
            </Card>
          )
        )}
      </Stack>
    </Container>
  );
};

export default Home;

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { baseUrl } from '../api/paths';

const Product = () => {
  const location = useLocation();
  const nav = useNavigate();
  console.log(location.pathname);
  const { data: brands, isLoading } = useQuery(
    [`${location.pathname.split('/')[1]}`],
    () =>
      axios
        .get(`${baseUrl}${location.pathname.split('/')[1]}`)
        .then(response => response.data)
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Grid container spacing={3}>
        {brands.map((brand: { items?: object[] }) =>
          brand?.items?.map(
            (data: {
              Title?: string;
              Image?: string;
              Price?: string;
              _id?: string;
            }) => (
              <Grid item xs={12} sm={3} md={3} key={data?._id}>
                <Card
                  onClick={() => {
                    nav(`${location.pathname}/${data?._id}`);
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component={'img'}
                      alt={data?.Title}
                      height='140'
                      width='140'
                      image={data?.Image}
                      loading='lazy'
                    />
                  </CardActionArea>
                  <CardContent>
                    <Stack justifyContent={'space-between'}>
                      <Typography component='div'>₹{data?.Price}</Typography>
                      <Typography
                        component='div'
                        sx={{
                          width: '100%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {data?.Title}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            )
          )
        )}
      </Grid>
    </div>
  );
};

export default Product;

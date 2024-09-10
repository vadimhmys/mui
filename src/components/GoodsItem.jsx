import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import React from 'react';

const GoodsItem = (props) => {
  const { name, price, poster, setOrder } = props;

  return (
    <Grid2 size={{ xs: 12, md: 4 }} sx={{ border: '1px solid red' }}>
      <Card sx={{height: '100%'}}>
        <CardMedia image={poster} title={name} alt={name} sx={{ height: 140 }} />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Цена: {price} руб.</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }>
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid2>
  );
};

export default GoodsItem;

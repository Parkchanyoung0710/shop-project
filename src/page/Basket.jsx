import { useContext } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

import CardBox from '../components/CardBox';
import { CartContext } from '../CartProvider';

function Basket() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h2 className='bg-info text-white'>장바구니</h2>
      <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: 13 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cartItems.map((item) => {
            console.log(item);
            return (
              <Grid xs={2} sm={4} md={4} key={item.cardTitle}>
                <CardBox cardTitle={item.cardTitle} imageSrc={`${item.imageSrc}`} cardDetail={item.cardDetail} cardPrice={item.cardPrice} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Basket;

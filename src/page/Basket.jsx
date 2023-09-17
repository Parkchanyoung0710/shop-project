import { useContext } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

import CardBox from '../components/CardBox';
import { CartContext } from '../CartProvider';

function Basket() {
  const { cartItems } = useContext(CartContext);
  let totalPrice = 0;

  const convertCurrencyToNumber = (currencyString) => {
    const numericString = currencyString.replace(/,/g, '').replace('원', '');
    const numericValue = parseFloat(numericString);

    if (isNaN(numericValue)) {
      return 0;
    }

    return numericValue;
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ minHeight: 'calc(100vh - 208px)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h4>장바구니가 비어있습니다</h4>
      </div>
    );
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 208px)', position: 'relative' }}>
      <h2 className='bg-info text-white'>장바구니</h2>
      <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: 13 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cartItems.map((item) => {
            totalPrice += convertCurrencyToNumber(item.cardPrice);
            return (
              <Grid xs={2} sm={4} md={4} key={item.cardTitle}>
                <CardBox cardTitle={item.cardTitle} imageSrc={`${item.imageSrc}`} cardDetail={item.cardDetail} cardPrice={item.cardPrice} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <h2 style={{ fontSize: '23px', position: 'absolute', bottom: 50, right: '20%' }}>총 금액 : {totalPrice.toLocaleString()}원</h2>
    </div>
  );
}

export default Basket;

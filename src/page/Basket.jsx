import { useContext, useEffect, useState } from 'react';

import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import CardBox from '../components/CardBox';
import { CartContext } from '../CartProvider';
import { Link } from 'react-router-dom';

function Basket() {
  const [couponType, setCouponType] = useState('none');
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(0);

  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      console.log(item);
      total += convertCurrencyToNumber(item.cardPrice);
    });

    setTotalPrice(total);
    setCurrentTotal(total);
  }, [cartItems]);

  const handleCouponChange = (event) => {
    setCouponType(event.target.value);
    if (event.target.value === '10percent') setTotalPrice(totalPrice * 0.9);
    else setTotalPrice(currentTotal);
  };

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
      <div style={{ minHeight: 'calc(100vh - 202px)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h4>장바구니가 비어있습니다</h4>
        <Link to='/Best' style={{ color: 'black' }}>
          상품 보러 이동
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: 'calc(100vh - 202px)', position: 'relative' }}>
      <h3 className='bg-info text-white'>장바구니</h3>
      <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: 13 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {cartItems.map((item) => {
            return (
              <Grid xs={2} sm={4} md={4} key={item.cardTitle}>
                <CardBox cardTitle={item.cardTitle} imageSrc={`${item.imageSrc}`} cardDetail={item.cardDetail} cardPrice={item.cardPrice} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <h4 style={{ textAlign: 'left', margin: '0 0 40px 15%', fontWeight: 'bold' }}>결제 금액</h4>
      <div style={{ paddingLeft: '20px', border: '1px solid grey', width: '70%', height: '70px', display: 'flex', justifyContent: 'flex-start', alignContent: 'center', margin: 'auto' }}>
        <RadioGroup name='coupon' value={couponType} onChange={handleCouponChange} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <FormControlLabel value='none' control={<Radio />} label='쿠폰 미적용' />
          <FormControlLabel value='10percent' control={<Radio />} label='10% 할인' />
        </RadioGroup>
      </div>
      <h2 style={{ marginTop: '30px', paddingRight: '15%', textAlign: 'right', fontSize: '18px', color: 'black' }}>총 금액 : {(totalPrice ?? 0).toLocaleString()}원</h2>
    </div>
  );
}

export default Basket;

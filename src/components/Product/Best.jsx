import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

import CardBox from '../CardBox';
import { bestData } from './Product.data';

const Best = () => {
  const [items] = useState(bestData);

  return (
    <div>
      <h1 className='bg-info text-white'>BEST</h1>
      <Box sx={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: 10 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {items.map((item) => (
            <Grid xs={2} sm={4} md={4} key={item.id}>
              <CardBox key={item.id} cardTitle={item.title} imageSrc={`./Product/assets/${item.image}.png`} cardDetail={item.desc} cardPrice={item.price} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Best;
import React, { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

import { PantsData } from './Product.data';
import CardBox from '../CardBox';

const Pants = () => {
  const [items] = useState(PantsData);

  return (
    <div>
      <h3 className='bg-info text-white'>PANTS</h3>
      <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto', marginBottom: 10 }}>
        <Grid container spacing={{ xs: 2, md: 10 }} columns={{ xs: 4, sm: 8, md: 12 }}>
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

export default Pants;

import { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';

import CardBox from '../CardBox';
import { WeatherData } from './Product.data';

function Weather() {
  const [items] = useState(WeatherData);
  const [location, setLocation] = useState('Seoul');
  const [result, setResult] = useState({});
  const API_KEY = '17346cab41a1c33d886b2d4c7f5e4a8a';
  const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  useEffect(() => {
    searchWeather();
  }, [location]);

  const searchWeather = async () => {
    try {
      const data = await axios.get(WEATHER_API_URL);
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateLocation = ({ target }) => {
    setLocation(target.value);
    searchWeather();
  };

  return (
    <AppWrap>
      <div>
        <h3 className='bg-info text-white'>오늘의 코디 추천</h3>
        <div className='appContentWrap'>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select defaultValue='Seoul' onChange={handleUpdateLocation}>
                <MenuItem value='Seoul'>서울</MenuItem>
                <MenuItem value='Incheon'>인천</MenuItem>
                <MenuItem value='Daejeon'>대전</MenuItem>
                <MenuItem value='Daegu'>대구</MenuItem>
                <MenuItem value='Gwangju'>광주</MenuItem>
                <MenuItem value='Busan'>부산</MenuItem>
                <MenuItem value='Bangkok'>방콕</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {Object.keys(result).length !== 0 && (
            <ResultWrap>
              <div className='city'>{result.data.name}</div>
              <div className='temperature'>
                {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
                <div className='sky'>{result.data.weather[0].main}</div>
              </div>

              {/* 기온에 따라 옷 코디 바꾸기 */}

              {/* <CardBox /> */}

              <Box sx={{ width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto' }}>
                <Grid container spacing={{ xs: 6, md: 10 }} columns={{ xs: 4, sm: 4, md: 4 }} sx={{ flexWrap: 'nowrap' }}>
                  {items
                    .filter((item) => {
                      const temp = Math.round((result.data.main.temp - 273.15) * 1);
                      if (item.temper <= temp + 5 && temp - 5 <= item.temper) return item;
                    })
                    .slice(0, 2)
                    .map((item) => (
                      <Grid xs={2} sm={4} md={4} key={item.id} className='recommend-cloth'>
                        <CardBox key={item.id} cardTitle={item.title} imageSrc={`./Product/assets/${item.image}.png`} cardDetail={item.desc} cardPrice={item.price} />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </ResultWrap>
          )}
        </div>
      </div>
    </AppWrap>
  );
}

export default Weather;

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  .appContentWrap {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 65px;
  }
  input {
    padding: 25px;
    border: 2px black solid;
    border-radius: 16px;
    width: 250px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 20px;
  border: 1px black solid;
  padding: 30px;
  margin-bottom: 15px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
    display: none;
  }
  border-radius: 8px;
  .city {
    font-size: 30px;
  }
  .temperature {
    font-size: 22px;
    margin-top: 5px;
  }
  .sky {
    font-size: 20px;
    text-align: center;
    margin-top: 5px;
  }

  .recommend-cloth {
    span {
      white-space: nowrap;
      font-size: 20px;
    }
  }
`;

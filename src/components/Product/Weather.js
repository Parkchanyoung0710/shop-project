import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { WeatherData } from './Product.data';
import {Card} from "react-bootstrap";

function Weather() {
  
  const [items] = useState(WeatherData);
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});
  const API_KEY = "17346cab41a1c33d886b2d4c7f5e4a8a"; 
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if(e.key === 'Enter') {
      try {
        const data = await axios({
          method: 'get',
          url: url,
          
          
        })
        setResult(data);
        console.log(data);
      } 
      catch(err) {
        alert(err);
      }
    }
  }
    
  return (
    <AppWrap>
      <div>
        <h1 className="bg-info text-white">오늘의 코디 추천</h1>
      <div className="appContentWrap">
        <input
          placeholder="도시를 영어로 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">
              {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C;
              
            <div className="sky">
              {result.data.weather[0].main}
            </div>
            </div>

          {/* 기온에 따라 옷 코디 바꾸기 */}

          <div>
          {items.map((item) => (
           
            <div key={item.id} className="d-inline-flex"> 
             
              <Card  
               className="shadow p-2 m-2 bg-body rounded"
               style={{ width: '16em' }}
               >   
              <Card.Img
              
              className="p-1"
              style={{ height: '15rem' }}
              variant="top"
                
                src={require(`./assets/${item.image}.png`)}
               
                />
              <Card.Body>
               
                  <Card.Title>{item.title}</Card.Title>
              </Card.Body>
              </Card>
            </div> 
              
          ))}
          </div> 
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
    top: 60%;
    transform: translate(-50%, -50%);
    position: absolute;
    padding: 20px;
    
  }
  input {
    padding: 25px;
    border: 2px black solid;
    border-radius: 16px;
    width:250px
  }
`;

const ResultWrap = styled.div`
  margin-top: 20px;
  border: 1px black solid;
  padding: 20px;
  
  @medua screen and (max-width:1000px){
    flex-direction: column;
    align-items:flex-end;
    display: none;
  }
  border-radius: 8px;
  .city {
    font-size: 30px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 25px;
    text-align: center;
    margin-top: 8px;
  }
`;
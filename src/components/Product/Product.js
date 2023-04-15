import React, {useState} from "react";
import { mainData } from "./Product.data";
import {Card,Button} from "react-bootstrap";


const Product = () => {
    const [items] = useState(mainData);
    
  return (
      <div>
          
          <h1 className="bg-info text-white">WEEKLY BEST</h1>
          {items.map((item) => (
              <div className="d-inline-flex">
              <Card
               className="shadow p-2 m-3 bg-body rounded"
               style={{ width: '15rem' }}
               >   
              <Card.Img
              style={{ height: '16rem' }}
              className="p-1"
               variant="top"
               src={require(`./assets/${item.image}.png`)}
                />
              <Card.Body>
                  
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <h6>가격:{item.price}</h6>
                  <Button variant="outline-success" size="sm">장바구니</Button>{' '}
              </Card.Body>
              </Card>
              </div> 
  
          ))}
          </div> 
  );
};


export default Product;
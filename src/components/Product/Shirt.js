import React, {useState} from "react";
import { shirtData } from "./Product.data";
import {Card,Button} from "react-bootstrap";

const Shirt = () => {
    const [items] = useState(shirtData);
  
  return (
      <div>
          <h1 className="bg-info text-white">SHIRT</h1>
          {items.map((item) => (
              <div key={item.id} className="d-inline-flex">  
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
                  <Button variant="primary">장바구니 담기</Button>
              </Card.Body>
              </Card>
              </div> 
              
  
          ))}
          </div> 
  );
};

export default Shirt;
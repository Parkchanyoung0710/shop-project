import React, {useState} from "react";
import { PantsData } from "./Product.data";
import {Card,Button} from "react-bootstrap";

const Pants = () => {
    const [items] = useState(PantsData);
  
  return (
      <div>
          <h1 className="bg-info text-white">PANTS</h1>
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
                  <Button variant="primary">장바구니 담기</Button>
              </Card.Body>
              </Card>
              </div> 
  
          ))}
          </div> 
  );
};


export default Pants;
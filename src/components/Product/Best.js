import React, {useState} from "react";
import { bestData } from "./Product.data";
import {Card,Button} from "react-bootstrap";

const Best = () => {
    const [items] = useState(bestData);
  
  return (
      <div>
          <h1 className="bg-info text-white">BEST</h1>
          {items.map((item) => (
                  <div key={item.id} className="d-inline-flex">  
              
              <Card
               className="shadow p-2 m-4 bg-body rounded"
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
        //   </div> 
          ))}
          </div> 
  );
};


export default Best;
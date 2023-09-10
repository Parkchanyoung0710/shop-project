import React from "react";

const Cards = ({ item, handleClick }) => {
    const { title, author, price, img } = item;
    const price1 = price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return (
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p>{price1}원</p>
          <button onClick={() => handleClick(item)}>장바구니 담기</button>
        </div>
      </div>
    );
  };

export default Cards;
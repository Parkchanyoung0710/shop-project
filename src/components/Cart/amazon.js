import React from "react";
import list from "./data";
import Cards from "./card";

const Amazon = ({ handleClick }) => {
    return (
      <section>
        {list.map((item) => (
          <Cards key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    );
  };

  export default Amazon;
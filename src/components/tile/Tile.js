import React from "react";

export const Tile = ({object}) => {
  let values = Object.values(object);

  return (
    <div className="tile-container">
      {values.map((element, index) =>{
         return <p className={index === 0 ? 'tile-title' : 'tile'} key={index}>{element}</p>
      })
      }
    </div>
  );
};

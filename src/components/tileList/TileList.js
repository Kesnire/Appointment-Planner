import React from "react";
import {Tile} from "../tile/Tile.js";

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((element, index) =>{
        return <Tile object={element} key={index} />
      })}
    </div>
  );
};

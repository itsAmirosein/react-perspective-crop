import React, { useEffect, useRef, useState } from "react";
import { BulletsProps } from "./bullets.types";
import { Bullet } from "../styled-components/bullets";

function Bullets({
  bulletData,
  bulletSize,
  handleBulletsData,
  icon,
}: BulletsProps) {
  let R = {
    x: 0,
    y: 0,
  };

  const handleDragStart = (e: any, index: any) => {
    var bounds = e.target.getBoundingClientRect();
    R.x = (Math.floor(bounds.left) + Math.floor(bounds.right)) / 2 - e.clientX;
    R.y = (Math.floor(bounds.bottom) + Math.floor(bounds.top)) / 2 - e.clientY;
  };

  const handleDragEnd = (e: any) => {
    handleBulletsData({
      id: bulletData.id,
      x: e.clientX + R.x,
      y: e.clientY + R.y,
    });
  };
  return (
    <Bullet
      $cordinate={{
        left: bulletData.x - bulletSize / 2,
        top: bulletData.y - bulletSize / 2,
      }}
      $bulletSize={bulletSize}
      draggable
      onDragStart={(e: any) => handleDragStart(e, bulletData.id)}
      onDragEnd={(e: any) => handleDragEnd(e)}
    >
      {icon ?? icon}
    </Bullet>
  );
}

export default Bullets;

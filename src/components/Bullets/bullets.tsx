import React, { useEffect, useRef, DragEvent } from "react";
import { BulletsProps } from "./bullets.types";
import { Bullet } from "../styled-components/bullets";

function Bullets({
  bulletData,
  bulletSize,
  icon,
  onDragStart,
  onDrag,
  onDragEnd,
}: BulletsProps) {
  const R = useRef({
    x: 0,
    y: 0,
  });

  const point = useRef({
    x: bulletData.x,
    y: bulletData.y,
  });

  const handleDragStart = (e: any, BulletId: number) => {
    const transparentImg = new Image();

    transparentImg.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

    e.dataTransfer.setDragImage(transparentImg, 0, 0); //remove ghost effect

    const bounds = e.target.getBoundingClientRect();

    R.current.x =
      (Math.floor(bounds.left) + Math.floor(bounds.right)) / 2 - e.clientX;
    R.current.y =
      (Math.floor(bounds.bottom) + Math.floor(bounds.top)) / 2 - e.clientY;

    onDragStart(BulletId);
  };

  const handleDrag = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();

    if (
      (e.clientX !== point.current.x || e.clientY !== point.current.y) &&
      (Math.abs(e.clientX - point.current.x) !== point.current.x ||
        Math.abs(e.clientY - point.current.y) !== point.current.y)
    ) {
      onDrag({
        id: bulletData.id,
        x: e.clientX + R.current.x,
        y: e.clientY + R.current.y,
      });

      point.current.x = e.clientX;
      point.current.y = e.clientY;
    }
  };

  const handleDragEnd = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();

    onDragEnd({
      id: bulletData.id,
      x: e.clientX + R.current.x,
      y: e.clientY + R.current.y,
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
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
    >
      {icon ?? icon}
    </Bullet>
  );
}

export default Bullets;

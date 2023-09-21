import React, { useEffect, useRef, useState } from "react";
import "./bullets.scss";
import { BulletsProps } from "./bullets.types";

function Bullets({ bulletData }: BulletsProps) {
  const dragItemRef = useRef<HTMLInputElement>(null);
  const [cordinates, setCordinates] = useState({
    x: 0,
    y: 0,
  });
  let R = {
    x: 0,
    y: 0,
  };

  useEffect(() => {
    if (dragItemRef.current)
      setCordinates({
        x: dragItemRef.current.offsetLeft + dragItemRef.current.offsetWidth / 2,
        y: dragItemRef.current.offsetTop + dragItemRef.current.offsetHeight / 2,
      });
  }, []);

  const handleDragStart = (e: any, index: any) => {
    var bounds = e.target.getBoundingClientRect();
    R.x = (Math.floor(bounds.left) + Math.floor(bounds.right)) / 2 - e.clientX;
    R.y = (Math.floor(bounds.bottom) + Math.floor(bounds.top)) / 2 - e.clientY;
  };

  const handleDragEnd = (e: any) => {
    setCordinates({
      x: e.clientX + R.x,
      y: e.clientY + R.y,
    });
  };

  return (
    <div
      ref={dragItemRef}
      className={`bullet-container_${bulletData.id}`}
      draggable
      onDragStart={(e) => handleDragStart(e, bulletData.id)}
      onDragEnd={(e) => handleDragEnd(e)}
    >
      Bullet{bulletData.id}
    </div>
  );
}

export default Bullets;

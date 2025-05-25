import React, { MouseEvent, useRef, useState } from "react";
import Bullet from "./components/Bullets/bullets";
import {
  BulletContainer,
  MainImage,
  SelectedImage,
  OutputImage,
  OutputBox,
} from "./components/styled-components/root";

import type { bulletDataType } from "./App.types";

import snap4 from "./assets/snap4.png";

function App() {
  const container = useRef<any>(null);
  const invisibleItem = useRef<any>(null);

  const [bulletsData, setBulletsData] = useState<bulletDataType[]>([
    { id: 0, x: 0, y: 70 },
    { id: 1, x: 200, y: 90 },
    { id: 2, x: 400, y: 20 },
    { id: 3, x: 254, y: 349 },
  ]);
  const [activeBulletId, setActiveBulletId] = useState<number>();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDragStart = (activeBulletId: number) => {
    setActiveBulletId(activeBulletId);
    setIsDragging(true);
  };

  const handleBulletsData = (value: bulletDataType) => {
    if (isDragging && activeBulletId !== undefined) {
      const localX = value.x - container?.current?.offsetLeft;
      const localY = value.y - container?.current?.offsetTop;

      if (
        localX > 0 &&
        localX < container.current.offsetWidth &&
        localY < container.current.offsetHeight &&
        localY > 0
      ) {
        const copyBulletsData = [...bulletsData];

        copyBulletsData[activeBulletId] = {
          ...value,
          x: localX,
          y: localY,
        };

        setBulletsData(copyBulletsData);
      }
    }
  };

  const handleOnDragEnd = (value: bulletDataType) => {
    if (value.x === 0 && value.y === 0) {
      handleBulletsData(value);
    }

    setIsDragging(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "100vh",
      }}
    >
      <BulletContainer ref={container}>
        {bulletsData.map((bullet) => {
          return (
            <Bullet
              ref={invisibleItem}
              key={`${bullet.id}`}
              bulletData={bullet}
              bulletSize={20}
              onDragStart={handleDragStart}
              onDrag={handleBulletsData}
              onDragEnd={handleOnDragEnd}
              icon={`${bullet.id}`}
            />
          );
        })}
        <MainImage src={snap4} />
        <SelectedImage src={snap4} $cordinates={bulletsData} />
      </BulletContainer>

      <OutputBox>
        <OutputImage src={snap4} $cordinates={bulletsData} />
      </OutputBox>

      <div
        ref={invisibleItem}
        id="invisible-drag-image"
        style={{
          width: "1px",
          height: "1px",
          opacity: "0",
          position: "absolute",
          top: "-1000px",
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
}

export default App;

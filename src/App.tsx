import React, { useState } from "react";
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
  const [bulletsData, setBulletsData] = useState<bulletDataType[]>([
    { id: 0, x: 100, y: 70 },
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
      const copyBulletsData = [...bulletsData];

      copyBulletsData[activeBulletId] = value;

      setBulletsData(copyBulletsData);
    }
  };

  const handleOnDragEnd = (value: bulletDataType) => {
    handleBulletsData(value);

    setIsDragging(false);
  };

  return (
    <>
      <BulletContainer>
        {bulletsData.map((bullet) => {
          return (
            <Bullet
              key={bullet.id}
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
    </>
  );
}

export default App;

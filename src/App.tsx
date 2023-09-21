import React, { useState } from "react";
import Bullet from "./components/Bullets/bullets";
import plus from "./assets/icons/plus-24.png";
import { bulletDataType } from "./App.types";
import { BulletContainer } from "./components/styled-components/bullets";

function App() {
  const [bulletsData, setBulletsData] = useState<bulletDataType[]>([
    { id: 1, x: 100, y: 70 },
    { id: 2, x: 200, y: 90 },
    { id: 3, x: 400, y: 20 },
    { id: 4, x: 254, y: 349 },
  ]);

  const handleBulletsData = (value: bulletDataType) => {
    const findBulletIndex = bulletsData.findIndex(
      (item) => item.id === value.id
    );
    const copyBulletsData = [...bulletsData];
    copyBulletsData[findBulletIndex] = value;
    setBulletsData(copyBulletsData);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <BulletContainer>
        {bulletsData.map((bullet) => {
          return (
            <Bullet
              key={bullet.id}
              bulletData={bullet}
              bulletSize={20}
              handleBulletsData={handleBulletsData}
              icon={<img src={plus} width={10} height={10} />}
            />
          );
        })}
      </BulletContainer>
    </div>
  );
}

export default App;

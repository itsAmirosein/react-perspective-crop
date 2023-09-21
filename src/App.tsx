import React, { useEffect, useRef, useState } from "react";
import Bullet from "./components/Bullets/bullets";
import plus from "./assets/icons/plus-24.png";
import { bulletDataType } from "./App.types";
import { BulletContainer } from "./components/styled-components/bullets";
import { Canvas } from "./components/styled-components/canvas";

function App() {
  const [bulletsData, setBulletsData] = useState<bulletDataType[]>([
    { id: 1, x: 100, y: 70 },
    { id: 2, x: 200, y: 90 },
    { id: 3, x: 400, y: 20 },
    { id: 4, x: 254, y: 349 },
  ]);
  const canvasRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(bulletsData[0].x, bulletsData[0].y);
    ctx.lineTo(bulletsData[1].x, bulletsData[1].y);
    ctx.lineTo(bulletsData[3].x, bulletsData[3].y);
    ctx.lineTo(bulletsData[2].x, bulletsData[2].y);
    ctx.lineTo(bulletsData[0].x, bulletsData[0].y);
    ctx.stroke();
  }, [bulletsData]);

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
              icon={`${bullet.id}`}
            />
          );
        })}
        <Canvas ref={canvasRef} />
      </BulletContainer>
    </div>
  );
}

export default App;

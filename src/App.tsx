import React, { useState } from "react";
import Bullet from "./components/Bullets/bullets";
import { bulletDataType } from "./App.types";
import {
  BulletContainer,
  MainImage,
  SelectedImage,
} from "./components/styled-components/root";
import snap4 from "./assets/snap4.png";

function App() {
  const [bulletsData, setBulletsData] = useState<bulletDataType[]>([
    { id: 1, x: 100, y: 70 },
    { id: 2, x: 200, y: 90 },
    { id: 3, x: 400, y: 20 },
    { id: 4, x: 254, y: 349 },
  ]);
  // const canvasRef = useRef<any>(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   canvas.width = canvas.clientWidth;
  //   canvas.height = canvas.clientHeight;
  //   const ctx = canvas.getContext("2d");
  //   const img = new Image();
  //   img.src = snap4;
  //   ctx.beginPath();
  //   ctx.moveTo(bulletsData[0].x, bulletsData[0].y);
  //   ctx.lineTo(bulletsData[1].x, bulletsData[1].y);
  //   ctx.lineTo(bulletsData[2].x, bulletsData[2].y);
  //   ctx.lineTo(bulletsData[3].x, bulletsData[3].y);
  //   ctx.lineTo(bulletsData[0].x, bulletsData[0].y);
  //   ctx.strokeStyle = "blue";
  //   ctx.stroke();
  // }, [bulletsData]);

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
        <SelectedImage src={snap4} $cordinates={bulletsData} />
        <MainImage src={snap4} />
      </BulletContainer>
    </div>
  );
}

export default App;

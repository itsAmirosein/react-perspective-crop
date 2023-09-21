import React from "react";
import Bullet from "./components/Bullets/bullets";
import "./App.scss";

const bulletsData = [
  {
    id: 1,
    x1: 0,
    y1: 0,
  },
  { id: 2, x2: 0, y2: 0 },
  { id: 3, x3: 0, y3: 0 },
  { id: 4, x4: 0, y4: 0 },
];

function App() {
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
      <div className="container">
        {bulletsData.map((bullet) => {
          return <Bullet key={bullet.id} bulletData={bullet} />;
        })}
      </div>
    </div>
  );
}

export default App;

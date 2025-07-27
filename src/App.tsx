import React, { useEffect, useRef, useState } from "react";

import Bullet from "./components/Bullets";
import { BulletContainer, MainImage, SelectedImage } from "./styled-components";
import type { IBulletData, IAppProps } from "./App.types";
import { imageProcessor, downloadImage } from "./utils";

function App(
  props: IAppProps = {
    bulletsDefaultCordinates: [],
    imageSrc: "",
    onChange: () => {},
    downloadCroppedImg: () => {},
  }
) {
  const container = useRef<any>(null);
  const invisibleItem = useRef<any>(null);

  const [bulletsData, setBulletsData] = useState<IBulletData[]>(
    props.bulletsDefaultCordinates
  );
  const [activeBulletIndex, setActiveBulletIndex] = useState<number>();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  useEffect(() => {
    if (isDragging) {
      props.onChange(bulletsData);
    }

    if (props.downloadCroppedImg) {
      props.downloadCroppedImg(download);
    }
  }, [bulletsData]);

  const handleDragStart = (activeBulletId: number) => {
    const activeIndex = bulletsData.findIndex(
      (item) => item.id === activeBulletId
    );

    if (activeIndex !== -1) {
      setActiveBulletIndex(activeIndex);
      setIsDragging(true);
    }
  };

  const download = async () => {
    const blob = await imageProcessor(props.imageSrc, bulletsData, 500, 500);

    downloadImage(blob);
  };

  const handleBulletsData = (value: IBulletData) => {
    if (isDragging && activeBulletIndex !== undefined) {
      const localX = value.x - container?.current?.offsetLeft;
      const localY = value.y - container?.current?.offsetTop;

      if (
        localX > 0 &&
        localX < container.current.offsetWidth &&
        localY < container.current.offsetHeight &&
        localY > 0
      ) {
        const copyBulletsData = [...bulletsData];

        copyBulletsData[activeBulletIndex] = {
          ...value,
          x: localX,
          y: localY,
        };

        setBulletsData(copyBulletsData);
      }
    }
  };

  const handleOnDragEnd = (value: IBulletData) => {
    if (value.x === 0 && value.y === 0) {
      handleBulletsData(value);
    }

    setIsDragging(false);
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <BulletContainer
        ref={container}
        $width={props.width}
        $height={props.height}
      >
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
        <MainImage src={props.imageSrc} />
        <SelectedImage src={props.imageSrc} $cordinates={bulletsData} />
      </BulletContainer>

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
      />
    </div>
  );
}

export default App;

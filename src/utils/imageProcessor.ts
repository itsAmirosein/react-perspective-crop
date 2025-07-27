import { IBulletData } from "../App.types";

// imageProcessor.ts
const imageProcessor = async (
  imageSrc: string,
  bulletsData: IBulletData[],
  width: number = 500,
  height: number = 500
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = width;
      canvas.height = height;

      if (!ctx) {
        return reject("Canvas context not available");
      }

      const path = new Path2D();
      const coordinates = bulletsData.map(
        (item) => [item.x, item.y] as [number, number]
      );

      if (coordinates.length > 0) {
        path.moveTo(coordinates[0][0], coordinates[0][1]);

        for (let i = 1; i < coordinates.length; i++) {
          path.lineTo(coordinates[i][0], coordinates[i][1]);
        }

        path.closePath();
      }

      ctx.save();
      ctx.clip(path);
      ctx.drawImage(img, 0, 0, width, height);
      ctx.restore();

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject("Failed to create blob");
        }
      }, "image/jpeg");
    };

    img.onerror = () => reject("Failed to load image");
    img.src = imageSrc;
  });
};

export default imageProcessor;

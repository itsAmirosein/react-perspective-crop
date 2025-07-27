export interface IBulletData {
  id: number;
  x: number;
  y: number;
}

export interface IAppProps {
  bulletsDefaultCordinates: IBulletData[];
  imageSrc: string;
  onChange: (value: IBulletData[]) => void;
  width?: number | string;
  height?: number | string;
  downloadCroppedImg?: (fn: Function) => void;
}

import { ReactElement } from "react";
import type { IBulletData } from "../../App.types";

export interface BulletsProps {
  bulletData: IBulletData;
  bulletSize: number;
  onDragStart: (value: number) => void;
  onDrag: (value: IBulletData) => void;
  onDragEnd: (value: IBulletData) => void;
  icon: ReactElement | string;
}

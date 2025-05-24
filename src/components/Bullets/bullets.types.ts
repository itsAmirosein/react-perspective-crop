import { ReactElement } from "react";
import { bulletDataType } from "../../App.types";

export interface BulletsProps {
  bulletData: bulletDataType;
  bulletSize: number;
  onDragStart: (value: number) => void;
  onDrag: (value: bulletDataType) => void;
  onDragEnd: (value: bulletDataType) => void;
  icon: ReactElement | string;
}

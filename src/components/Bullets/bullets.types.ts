import { ReactElement } from "react";
import { bulletDataType } from "../../App.types";

export interface BulletsProps {
  bulletData: bulletDataType;
  bulletSize: number;
  handleBulletsData: (value: bulletDataType) => void;
  icon: ReactElement | string;
}

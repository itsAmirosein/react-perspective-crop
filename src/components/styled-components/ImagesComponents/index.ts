import styled from "styled-components";
import snap from "../../../assets/snap4.png";
import { bulletDataType } from "../../../App.types";

export const SelectedImage = styled.img<{ $cordinates: bulletDataType[] }>`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  background-image: url(${snap});
  clip-path: ${({ $cordinates }) =>
    `polygon(${$cordinates[0].x}px ${$cordinates[0].y}px,${$cordinates[1].x}px ${$cordinates[1].y}px,${$cordinates[2].x}px ${$cordinates[2].y}px,${$cordinates[3].x}px ${$cordinates[3].y}px)`};
  z-index: 100;
  position: absolute;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

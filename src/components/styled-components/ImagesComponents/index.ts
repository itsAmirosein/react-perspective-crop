import styled from "styled-components";

import type { bulletDataType } from "../../../App.types";

export const SelectedImage = styled.img<{
  $cordinates: bulletDataType[];
}>`
  width: 100%;
  height: 100%;
  clip-path: ${({ $cordinates }) =>
    `polygon(${$cordinates[0].x}px ${$cordinates[0].y}px,${$cordinates[1].x}px ${$cordinates[1].y}px,${$cordinates[2].x}px ${$cordinates[2].y}px,${$cordinates[3].x}px ${$cordinates[3].y}px)`};
  z-index: 100;
  position: absolute;
  user-select: none;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  user-select: none;
`;

export const OutputBox = styled.div`
  width: 500px;
  height: 500px;
`;

export const OutputImage = styled.img<{ $cordinates: bulletDataType[] }>`
  width: 100%;
  height: 100%;
  clip-path: ${({ $cordinates }) =>
    `polygon(${$cordinates[0].x}px ${$cordinates[0].y}px,${$cordinates[1].x}px ${$cordinates[1].y}px,${$cordinates[2].x}px ${$cordinates[2].y}px,${$cordinates[3].x}px ${$cordinates[3].y}px)`};
`;

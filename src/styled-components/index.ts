import styled from "styled-components";

import type { IBulletData } from "../App.types";

export const BulletContainer = styled.div<{
  $width?: number | string;
  $height?: number | string;
}>`
  border: 1px solid black;
  width: ${({ $width }) =>
    !!$width ? (typeof $width === "string" ? $width : `${$width}px`) : `100%`};
  height: ${({ $height }) =>
    !!$height
      ? typeof $height === "string"
        ? $height
        : `${$height}px`
      : `100%`};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  & > * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const Bullet = styled.div<{
  $cordinate?: { left: number; top: number };
  $bulletSize?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 1px solid red;
  border-radius: 50%;
  width: ${(props) => props.$bulletSize}px;
  height: ${(props) => props.$bulletSize}px;
  box-sizing: border-box;
  left: ${(props) => props.$cordinate?.left}px;
  top: ${(props) => props.$cordinate?.top}px;
  cursor: pointer;
  z-index: 100;
`;

export const SelectedImage = styled.img<{
  $cordinates: IBulletData[];
}>`
  width: 100%;
  height: 100%;
  clip-path: ${({ $cordinates }) =>
    `polygon(${$cordinates.map(
      (cordinate) => `${cordinate.x}px ${cordinate.y}px`
    )})`};
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

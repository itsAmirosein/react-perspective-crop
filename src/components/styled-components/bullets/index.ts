import styled from "styled-components";
import snap from "../../../assets/snap4.png";

export const BulletContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
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

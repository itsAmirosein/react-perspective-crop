import styled from "styled-components";

export const BulletContainer = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  position: relative;
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
`;

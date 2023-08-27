import { Image, Space } from "antd";
import { styled } from "styled-components";

export const FirstWrapper = styled(Space)`
  width: 100%;
  color: rgb(255, 255, 255);
  justify-content: space-around;
  align-items: end;
`;

export const HeaderRight = styled(Image)`
  max-width: 500px;
  min-width: 250px;
  height: auto;
`;

export const SecondWrapper = styled(Space)`
  position: absolute;
  top: 475px;
`;

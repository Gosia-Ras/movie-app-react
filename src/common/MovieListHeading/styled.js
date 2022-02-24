import styled from "styled-components";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import { CameraReels } from "@styled-icons/bootstrap/CameraReels";

export const ListHeader = styled.h1`
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
`;

export const Star = styled(StarFill)`
  width: 30px;
`;

export const Camera = styled(CameraReels)`
  width: 30px;
`;

import styled from "styled-components";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { CameraReels } from "@styled-icons/bootstrap/CameraReels";

export const ListHeader = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  background-color: #273c75;
  border-radius: 5px;
  padding: 20px;
  margin: 10px 35px;
  box-shadow: 0px 0px 6px 0px #273c75;

  @media (max-width: 768px) {
    margin: 0;
    justify-content: center;
    padding: 5px;
  }
`;


export const Star = styled(HeartFill)`
  width: 30px;
  color: #fbc531;
`;

export const Camera = styled(CameraReels)`
  width: 30px;
  color: #7f8fa6;
`;

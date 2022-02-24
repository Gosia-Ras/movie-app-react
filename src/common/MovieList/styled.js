import styled from "styled-components";
import { StarFill } from "@styled-icons/bootstrap/StarFill";

export const MoviesContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-wrap: nowrap;
  margin: 0 50px;
  height: 750px;
  border: 1px solid white;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  margin: 10px;
  padding: 10px;
  width: 100%;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 80%;
  transition: 0.5s ease;
  font-size: 20px;
  padding: 20px;
  text-align: center;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;

  &:hover {
    opacity: 1;
  }
`;

export const FavIcon = styled(StarFill)`
  color: #fbc531;
  width: 20px;
`;

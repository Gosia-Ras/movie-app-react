import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  height: 600px;
  margin: 50px;
  border: 1px solid white;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  margin: 10px;
  padding: 10px;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  transition: 0.5s ease;
  bottom: 0;
  font-size: 20px;
  padding: 20px;
`;

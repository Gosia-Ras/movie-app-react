import styled from "styled-components";

export const MoviesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  flex-wrap: nowrap;
  height: 600px;
  margin: 50px;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 0;
  font-size: 20px;
  padding: 20px;
  text-align: center;
`;

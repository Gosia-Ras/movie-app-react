import styled from "styled-components";
export const MoviesContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-wrap: nowrap;
  margin: 0 50px;
  height: 660px;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  margin: 10px;
  padding: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
  max-height: 400px;
  margin-top: 30px;
`;

export const Overlay = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  width: 78%;
  transition: 0.5s ease;
  opacity: 0;
  bottom: 183px;
  font-size: 20px;
  padding: 188px 21px;
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;
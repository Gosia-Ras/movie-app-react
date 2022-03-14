import styled from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";

export const MoviesContainer = styled.div`
  display: flex;
  overflow-y: hidden;
  flex-wrap: nowrap;
  margin: 0 50px;
  height: 660px;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #40739e;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #487eb0;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px inset 0px 0px 6px 0px #487eb0;
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const SearchIcon = styled(Search)`
  width: 50px;
  color: #fbc531;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  transition: transform 0.2s;
  margin: 10px;
  padding: 10px;
  width: 300px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
  max-width: 300px;
  margin-top: 30px;
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  transition: 0.5s ease;
  opacity: 0;
  padding-top: 200px;
  &:hover {
    opacity: 1;
  }
`;

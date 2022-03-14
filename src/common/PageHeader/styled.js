import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 25px;
  justify-content: space-between;
  margin: 5px 35px;
  background-color: #273c75;
  border-radius: 5px;
  box-shadow: 0px 0px 6px 0px #273c75;
  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    border-radius: 0;
    justify-content: space-evenly;
    padding: 10px;
  }
`;

export const AppTitle = styled.h1`
  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  padding: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const NavItem = styled.li`
  font-size: 20px;
  &:hover {
    color: #dcdde1;
    cursor: pointer;
    transition: 2s;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #f5f6fa;

  &:hover {
    text-decoration: underline;
  }

  &:visited {
    color: #f5f6fa;
  }
`;

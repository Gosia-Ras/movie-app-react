import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  margin: 5px 35px;
`;



export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const NavItem = styled.li`
font-size: 20px;
  &:hover {
    color: #dcdde1;
    cursor: pointer;
    transition: 2s;
  }
`;

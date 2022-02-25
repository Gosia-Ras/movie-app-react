import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  margin: 5px 35px;
  background-color: #273c75;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 15px;
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

  &:hover{
    text-decoration: underline;
  }

  &:visited {
    color: #f5f6fa;
  }
`;

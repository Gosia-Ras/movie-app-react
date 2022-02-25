import { Header, NavItem, NavLink, NavList } from "./styled";

export const PageHeader = () => {
  return (
    <Header>
      <h1>Movies Browser</h1>
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#browser">Browser</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#watch">Favourites</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </Header>
  );
};

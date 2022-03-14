import { AppTitle, Header, NavItem, NavLink, NavList } from "./styled";

export const PageHeader = () => {
  return (
    <Header>
      <AppTitle>Movies Browser</AppTitle>
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

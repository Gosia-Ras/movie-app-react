import { Header, NavItem, NavList } from "./styled";

export const PageHeader = () => {
  return (
    <Header>
      <h1>Movies Browser</h1>
      <nav>
        <NavList>
          <NavItem>Browser</NavItem>
          <NavItem>Favourites</NavItem>
        </NavList>
      </nav>
    </Header>
  );
};

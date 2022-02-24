import { SearchContainer, SearchInput } from "./styled";

export const SearchBox = (props) => {
  return (
    <SearchContainer>
      <SearchInput
        autoFocus
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
    </SearchContainer>
  );
};

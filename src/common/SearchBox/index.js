export const SearchBox = (props) => {
  return (
    <div>
      <input
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
    </div>
  );
};

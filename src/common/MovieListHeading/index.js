import { Camera, ListHeader, Star } from "./styled";

export const MovieListHeading = ({ heading }) => {
  return (
    <div>
      <ListHeader>
        {heading === "Movies Browser" ? (
          <>
            <p>Movies</p>
            <Camera />
          </>
        ) : (
          <>
            <p>Favourites</p>
            <Star />
          </>
        )}
      </ListHeader>
    </div>
  );
};

import { Camera, ListHeader, Star } from "./styled";

export const MovieListHeading = ({ id }) => {
  return (
    <div>
      <ListHeader>
        {
          (id === "browser" ? (
            <>
              <p>Movies</p>
              <Camera />
            </>
          ) : (
            <>
              <p>Watch later</p>
              <Star />
            </>
          ))
        }
      </ListHeader>
    </div>
  );
};

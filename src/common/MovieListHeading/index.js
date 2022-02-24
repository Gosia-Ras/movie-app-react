import { ListHeader } from "./styled";
import { VscStarFull, VscDeviceCameraVideo } from "react-icons/vsc";

export const MovieListHeading = ({ heading }) => {
  return (
    <div>
      <ListHeader>
        {heading === "Movies Browser" ? (
          <>
            <h2>Movies</h2>
            <VscDeviceCameraVideo />
          </>
        ) : (
          <>
            <h2>Favourites</h2>
            <VscStarFull />
          </>
        )}
      </ListHeader>
    </div>
  );
};

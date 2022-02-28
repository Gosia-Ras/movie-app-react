import {
  ImageContainer,
  Poster,
  Overlay,
  MoviesContainer,
  SearchIcon,
} from "./styled";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer id="browser">
      {props.movies.length > 0 ? (
        <Swiper
          slidesPerView={4}
          spaceBetween={60}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          updateOnWindowResize={true}
        >
          {props.movies.map((movie) => {
            return (
              <SwiperSlide>
                <ImageContainer
                  key={nanoid()}
                  onClick={() => props.handleFavouritesClick(movie)}
                >
                  <Poster src={movie.Poster} alt="movie" />
                  <p>{movie.Title}</p>
                  <p>{movie.Year}</p>
                  <Overlay>
                    <FavouriteComponent />
                  </Overlay>
                </ImageContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        <SearchIcon />
      )}
    </MoviesContainer>
  );
};

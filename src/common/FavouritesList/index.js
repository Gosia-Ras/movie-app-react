import {
  ImageContainer,
  Poster,
  Overlay,
  MoviesContainer,
} from "../MovieList/styled";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const FavouritesList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <MoviesContainer id="watch">
      {props.movies.length < 4 ? (
        props.movies.map((movie) => {
          return (
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
          );
        })
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
      )}
    </MoviesContainer>
  );
};

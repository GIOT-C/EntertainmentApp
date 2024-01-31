import mainStyles from "./MainStyles.module.css";
import { useContext } from "react";
import { DataInterface } from "../assets/DataInterface";
import { MyContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faTv,
  faCirclePlay,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import UseBookmarkToggle from "../Components/UseBookmarkToggle";

function Bookmark() {
  const contextForChangeBookmark = useContext(MyContext);
  const bookmarkedMovies = contextForChangeBookmark?.bookmarked.filter(
    (movie) => movie.category === "Movie"
  );
  const bookmarkedTvSeries = contextForChangeBookmark?.bookmarked.filter(
    (series) => series.category === "TV Series"
  );
  const { toggleBookmark } = UseBookmarkToggle();

  return (
    <div className={mainStyles.parent}>
      <h2 className={mainStyles.bookmarkHeader}>Bookmarked Movies</h2>

      <div className={mainStyles.mainContainer}>
        {bookmarkedMovies
          ?.filter(
            (bookmarkedMovies: DataInterface) => bookmarkedMovies.isBookmarked
          )
          .map((movie: DataInterface) => (
            <div key={movie.title} className={mainStyles.movieContainer}>
              <div
                className={mainStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(movie.title);
                }}
              >
                <FontAwesomeIcon
                  icon={solidBookmark}
                  className={mainStyles.bookMarkIcon}
                />
              </div>

              <div className={mainStyles.containerForPlay}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={mainStyles.playIcon}
                />
                <span>Play</span>
              </div>

              <img
                className={mainStyles.image}
                src={movie.thumbnail.regular.medium}
                alt={movie.title}
              />

              <div className={mainStyles.info}>
                <span>{movie.year}</span>
                <div className={mainStyles.smallCircle} />
                <FontAwesomeIcon
                  icon={faFilm}
                  className={mainStyles.moviesIcon}
                />

                <span className={mainStyles.category}>{movie.category}</span>
                <div className={mainStyles.smallCircle} />
                <span>{movie.rating}</span>
              </div>
              <h3 className={mainStyles.title}>{movie.title}</h3>
            </div>
          ))}
      </div>

      <h2 className={`${mainStyles.header} ${mainStyles.seriesHeader}`}>
        Bookmarked Tv Series
      </h2>

      <div className={mainStyles.mainContainer}>
        {bookmarkedTvSeries
          ?.filter(
            (bookmarkedTvSeries: DataInterface) =>
              bookmarkedTvSeries.isBookmarked
          )
          .map((series) => (
            <div key={series.title} className={mainStyles.seriesContainer}>
              <div
                className={mainStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(series.title);
                }}
              >
                <FontAwesomeIcon
                  icon={solidBookmark}
                  className={mainStyles.bookMarkIcon}
                />
              </div>

              <div className={mainStyles.containerForPlay}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={mainStyles.playIcon}
                />
                <span>Play</span>
              </div>

              <img
                className={mainStyles.image}
                src={series.thumbnail.regular.medium}
                alt={series.title}
              />

              <div className={mainStyles.info}>
                <span>{series.year}</span>
                <div className={mainStyles.smallCircle} />
                <FontAwesomeIcon
                  icon={faTv}
                  className={mainStyles.tvSeriesIcon}
                />

                <span className={mainStyles.category}>{series.category}</span>
                <div className={mainStyles.smallCircle} />
                <span>{series.rating}</span>
              </div>
              <h3 className={mainStyles.title}>{series.title}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Bookmark;

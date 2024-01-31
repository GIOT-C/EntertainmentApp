import {
  faFilm,
  faTv,
  faCirclePlay,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import mainStyles from "../Pages/MainStyles.module.css";
import data from "../assets/data.json";
import { DataInterface } from "../assets/DataInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { MyContext } from "../App";
import { useContext } from "react";
import UseBookmarkToggle from "../Components/UseBookmarkToggle";

function RecomendedForHomePage() {
  const moviesData: DataInterface[] = data;
  const recommendedMovies = moviesData.filter((movie) => movie.recomended);
  const contextForChangeBookmark = useContext(MyContext);
  const { toggleBookmark } = UseBookmarkToggle();

  return (
    <div className={mainStyles.parent}>
      <h2 className={mainStyles.header}>Recomended for you</h2>
      <div className={mainStyles.mainContainer}>
        {recommendedMovies.map((recomendedMovie) => (
          <div
            key={recomendedMovie.title}
            className={mainStyles.movieContainer}
          >
            <div>
              <div
                className={mainStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(recomendedMovie.title);
                }}
              >
                {contextForChangeBookmark?.bookmarked.find(
                  (movie) => movie.title === recomendedMovie.title
                )?.isBookmarked ? (
                  <FontAwesomeIcon
                    icon={solidBookmark}
                    className={mainStyles.bookMarkIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={regularBookmark}
                    className={mainStyles.bookMarkIcon}
                  />
                )}
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
                src={recomendedMovie.thumbnail.regular.large}
                alt={recomendedMovie.title}
              />

              <div className={mainStyles.info}>
                <span>{recomendedMovie.year}</span>
                <div className={mainStyles.smallCircle} />

                {recomendedMovie.category === "Movie" ? (
                  <FontAwesomeIcon
                    icon={faFilm}
                    className={mainStyles.moviesIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTv}
                    className={mainStyles.tvSeriesIcon}
                  />
                )}
                <span className={mainStyles.category}>
                  {recomendedMovie.category}
                </span>
                <div className={mainStyles.smallCircle} />
                <span>{recomendedMovie.rating}</span>
              </div>
              <h3 className={mainStyles.title}>{recomendedMovie.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecomendedForHomePage;

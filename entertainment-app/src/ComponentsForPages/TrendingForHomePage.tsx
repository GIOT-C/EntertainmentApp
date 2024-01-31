import {
  faFilm,
  faTv,
  faCirclePlay,
  faBookmark as solidBookmark,
} from "@fortawesome/free-solid-svg-icons";
import trendingStyles from "../ComponentsForPages/Trending.module.css";
import data from "../assets/data.json";
import { DataInterface } from "../assets/DataInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { MyContext } from "../App";
import { useContext } from "react";
import UseBookmarkToggle from "../Components/UseBookmarkToggle";

function TrendingForHomePage() {
  const moviesData: DataInterface[] = data;
  const trending = moviesData.filter((movie) => movie.isTrending);
  const contextForChangeBookmark = useContext(MyContext);
  const { toggleBookmark } = UseBookmarkToggle();

  return (
    <div className={trendingStyles.trendingContainer}>
      <h2 className={trendingStyles.header}>Trending</h2>
      <div className={trendingStyles.mainContainer}>
        {trending.map((trendingMovies) => (
          <div key={trendingMovies.title} className={trendingStyles.trending}>
            <div>
              <div
                className={trendingStyles.bookmarkContainer}
                onClick={() => {
                  toggleBookmark(trendingMovies.title);
                }}
              >
                {contextForChangeBookmark?.bookmarked.find(
                  (movie) => movie.title === trendingMovies.title
                )?.isBookmarked ? (
                  <FontAwesomeIcon
                    icon={solidBookmark}
                    className={trendingStyles.bookMarkIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={regularBookmark}
                    className={trendingStyles.bookMarkIcon}
                  />
                )}
              </div>

              <div className={trendingStyles.containerForPlay}>
                <FontAwesomeIcon
                  icon={faCirclePlay}
                  className={trendingStyles.playIcon}
                />
                <span>Play</span>
              </div>
              <img
                className={trendingStyles.trendingImage}
                src={trendingMovies.thumbnail.regular.large}
                alt={trendingMovies.title}
              />

              <div className={trendingStyles.trendingInfo}>
                <span>{trendingMovies.year}</span>
                <div className={trendingStyles.smallCircle} />

                {trendingMovies.category === "Movie" ? (
                  <FontAwesomeIcon
                    icon={faFilm}
                    className={trendingStyles.moviesIcon}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faTv}
                    className={trendingStyles.tvSeriesIcon}
                  />
                )}
                <span className={trendingStyles.category}>
                  {trendingMovies.category}
                </span>
                <div className={trendingStyles.smallCircle} />
                <span>{trendingMovies.rating}</span>
              </div>
              <h3 className={trendingStyles.trendingTitle}>
                {trendingMovies.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingForHomePage;
